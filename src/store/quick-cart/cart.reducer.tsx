import {
  Item,
  UpdateItemInput,
  addItemWithQuantity,
  removeItemOrQuantity,
  addItem,
  updateItem,
  removeItem,
  calculateUniqueItems,
  calculateItemTotals,
  calculateTotalItems,
  calculateTotal,
} from './cart.utils';

interface Metadata {
  [key: string]: any;
}

type Action =
  | { type: 'ADD_ITEMS_WITH_QUANTITY'; items: Item[] }
  | { type: 'ADD_ITEM_WITH_QUANTITY'; item: Item; quantity: number }
  | { type: 'REMOVE_ITEM_OR_QUANTITY'; id: Item['id']; quantity?: number }
  | { type: 'ADD_ITEM'; id: Item['id']; item: Item }
  | { type: 'UPDATE_ITEM'; id: Item['id']; item: UpdateItemInput }
  | { type: 'REMOVE_ITEM'; id: Item['id'] }
  | { type: 'RESET_CART' }
  | { type: 'UPDATE_CART_LANGUAGE'; language: string }
  | { type: 'ADD_CART_ID'; data: any };

export interface State {
  items: Item[];
  isEmpty: boolean;
  totalItems: number;
  totalUniqueItems: number;
  total: string;
  meta?: Metadata | null;
  language: string;
  session: string;
}

export const initialState: State = {
  items: [],
  isEmpty: true,
  totalItems: 0,
  totalUniqueItems: 0,
  total: '',
  meta: null,
  language: 'es',
  session: '',
};

export function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_ITEMS_WITH_QUANTITY': {
      const items = [...state.items, ...action.items];
      return generateFinalState(state, items);
    }
    case 'ADD_ITEM_WITH_QUANTITY': {
      const items = addItemWithQuantity(
        state.items,
        action.item,
        action.quantity
      );
      return generateFinalState(state, items);
    }
    case 'REMOVE_ITEM_OR_QUANTITY': {
      const items = removeItemOrQuantity(
        state.items,
        action.id,
        action.quantity ?? 1
      );
      return generateFinalState(state, items);
    }
    case 'ADD_ITEM': {
      const items = addItem(state.items, action.item);
      return generateFinalState(state, items);
    }
    case 'REMOVE_ITEM': {
      const items = removeItem(state.items, action.id);
      return generateFinalState(state, items);
    }
    case 'UPDATE_ITEM': {
      const items = updateItem(state.items, action.id, action.item);
      return generateFinalState(state, items);
    }
    case 'UPDATE_CART_LANGUAGE': {
      return {
        ...initialState,
        language: action.language,
      };
    }
    case 'ADD_CART_ID': {
      return {
        ...state,
        session: action?.data?.id,
        items: action.data?.products,
        total: action.data?.total,
        totalUniqueItems: Number(action.data?.number_products),
        isEmpty: false,
      };
    }
    case 'RESET_CART':
      return initialState;
    default:
      return state;
  }
}

const generateFinalState = (state: State, items: Item[]) => {
  const totalUniqueItems = calculateUniqueItems(items);
  return {
    ...state,
    // items: calculateItemTotals(items),
    // totalItems: calculateTotalItems(items),
    totalUniqueItems,
    // total: calculateTotal(items),
    isEmpty: totalUniqueItems === 0,
  };
};
