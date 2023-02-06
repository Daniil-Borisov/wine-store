import React, { useCallback, useEffect, useState } from 'react';
import { cartReducer, State, initialState } from './cart.reducer';
import { Item, getItem, inStock } from './cart.utils';
import { useLocalStorage } from '@/lib/use-local-storage';
import { CART_KEY } from '@/lib/constants';
import { useAtom } from 'jotai';
import { API_ENDPOINTS } from '@/framework/client/api-endpoints';
import client from '@/framework/client';
import { useRouter } from 'next/router';
import { useQuery, useQueryClient } from 'react-query';
import { string } from 'yup';
import { userData } from '../user-atom';
import { useLogout } from '@/framework/user';
import { useToken } from '@/lib/hooks/use-token';
import { authorizationAtom } from '../authorization-atom';
import { clearCheckoutAtom } from '../checkout';
import Cookies from 'js-cookie';

interface CartProviderState extends State {
  addItemsToCart: (items: Item[]) => void;
  addItemToCart: (item: Item, quantity: number, wine_cellar: boolean) => void;
  removeItemFromCart: (id: Item['id']) => void;
  clearItemFromCart: (id: Item['id']) => void;
  getItemFromCart: (id: Item['id']) => any | undefined;
  isInCart: (id: Item['id']) => boolean;
  isInStock: (id: Item['id']) => boolean;
  resetCart: () => void;
  updateCartLanguage: (language: string) => void;
  initialCartAfterLogin: (sessionId: string) => void;
}
export const cartContext = React.createContext<CartProviderState | undefined>(
  undefined
);

cartContext.displayName = 'CartContext';

export const useCart = () => {
  const context = React.useContext(cartContext);
  if (context === undefined) {
    throw new Error(`useCart must be used within a CartProvider`);
  }
  return React.useMemo(() => context, [context]);
};

export const CartProvider: React.FC = (props) => {
  const [savedCart, saveCart] = useLocalStorage(CART_KEY, initialState);
  const [state, dispatch] = React.useReducer(
    cartReducer,
    savedCart ? savedCart : initialState
  );

  React.useEffect(() => {
    saveCart(state);
  }, [state, saveCart]);

  const { locale } = useRouter();
  const [userAtom] = useAtom(userData);
  const queryClient = useQueryClient();
  const [cartData, setCartData] = useState({});
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const [_r, resetCheckout] = useAtom(clearCheckoutAtom);
  const [_u, setUserData] = useAtom(userData);

  useEffect(() => {
    if (cartData.data) {
      dispatch({ type: 'ADD_CART_ID', data: cartData.data.cart });
    }
  }, [cartData]);

  const formattedData = {
    language: locale,
  };

  if (userAtom.id) {
    formattedData.client = userAtom.id;
    formattedData.token = userAtom.token;
  }

  if (state.session) {
    formattedData.session = state.session;
  }

  const addItemsToCart = async (items: Item[]) =>
    dispatch({ type: 'ADD_ITEMS_WITH_QUANTITY', items });

  const addItemToCart = async (
    item: Item,
    quantity: number,
    wine_cellar: boolean
  ) => {
    dispatch({ type: 'ADD_ITEM_WITH_QUANTITY', item, quantity });

    const cart = async () => {
      const data = await queryClient.fetchQuery(
        [API_ENDPOINTS.CART_ADD],
        ({ queryKey }) =>
          client.products.add2cart({
            ...formattedData,
            product: item.id,
            units: String(quantity),
            wine_cellar: wine_cellar ? '1' : '0',
          })
      );

      if (data?.error === 'CT001') {
        setToken('');
        setAuthorized(false);
        resetCheckout();
        setUserData('');
        resetCart();
        Cookies.remove('token');
        Cookies.remove('client');
        return {};
      }
      return { ...data };
    };

    cart().then(setCartData);
  };

  const initialCartAfterLogin = (sessionId: string) => {
    const cart = async () => {
      const data = await queryClient.fetchQuery(
        [API_ENDPOINTS.GET_CART],
        ({ queryKey }) =>
          client.users.getCart({
            ...formattedData,
            session: sessionId,
          })
      );
      return { ...data };
    };
    cart().then(setCartData);
  };
  const removeItemFromCart = (id: Item['id']) => {
    dispatch({ type: 'REMOVE_ITEM_OR_QUANTITY', id });
    const cart = async () => {
      const data = await queryClient.fetchQuery(
        [API_ENDPOINTS.CART_ADD],
        ({ queryKey }) =>
          client.products.add2cart({
            ...formattedData,
            product: id,
            units: String(-1),
          })
      );
      return { ...data };
    };
    cart().then(setCartData);
  };

  const clearItemFromCart = (id: Item['id'], quantity: string) => {
    dispatch({ type: 'REMOVE_ITEM', id });
    const cart = async () => {
      const data = await queryClient.fetchQuery(
        [API_ENDPOINTS.CART_ADD],
        ({ queryKey }) =>
          client.products.add2cart({
            ...formattedData,
            product: id,
            units: -quantity,
          })
      );
      return { ...data };
    };
    cart().then(setCartData);
  };
  const isInCart = useCallback(
    (id: Item['id']) => !!getItem(state.items, id),
    [state.items]
  );
  const getItemFromCart = useCallback(
    (id: Item['id']) => getItem(state.items, id),
    [state.items]
  );
  const isInStock = useCallback(
    (id: Item['id']) => inStock(state.items, id),
    [state.items]
  );
  const updateCartLanguage = (language: string) =>
    dispatch({ type: 'UPDATE_CART_LANGUAGE', language });
  const resetCart = () => dispatch({ type: 'RESET_CART' });

  const value = React.useMemo(
    () => ({
      ...state,
      addItemsToCart,
      addItemToCart,
      removeItemFromCart,
      clearItemFromCart,
      getItemFromCart,
      isInCart,
      isInStock,
      resetCart,
      updateCartLanguage,
      initialCartAfterLogin,
    }),
    [getItemFromCart, isInCart, isInStock, state]
  );
  return <cartContext.Provider value={value} {...props} />;
};
