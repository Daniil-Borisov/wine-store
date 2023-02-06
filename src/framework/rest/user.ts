import { useModalAction } from '@/components/ui/modal/modal.context';
import { useTranslation } from 'next-i18next';
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import { toast } from 'react-toastify';
import client from './client';
import { authorizationAtom } from '@/store/authorization-atom';
import { userData } from '@/store/user-atom';
import { useAtom } from 'jotai';
import { signOut as socialLoginSignOut } from 'next-auth/react';
import { useToken } from '@/lib/hooks/use-token';
import { API_ENDPOINTS } from './client/api-endpoints';
import { useState } from 'react';
import type { RegisterUserInput, OtpLoginInputType } from '@/types';
import { initialOtpState, optAtom } from '@/components/otp/atom';
import { useStateMachine } from 'little-state-machine';
import { updateFormState } from '@/components/auth/forgot-password';
import {
  clearCheckoutAtom,
  shippingAddressAtom,
  threeDSAtom,
  userCardAtom,
} from '@/store/checkout';
import { Router, useRouter } from 'next/router';
import { useCart } from '@/store/quick-cart/cart.context';
import { drawerAtom } from '@/store/drawer-atom';
import Cookies from 'js-cookie';

export function useUser() {
  const [isAuthorized] = useAtom(authorizationAtom);
  const [user] = useAtom(userData);
  const formattedOptions = { token: user.token, client: user.id };

  const { data } = useQuery(
    [API_ENDPOINTS.USERS_ME, formattedOptions],
    ({ queryKey }) => client.users.me(queryKey[1])
  );

  //TODO: do some improvement here
  return { me: data?.data?.client, error: data?.error, isAuthorized };
}

export const useDeleteDeliveryAddress = () => {
  const { t } = useTranslation('errors');
  const { closeModal } = useModalAction();
  const queryClient = useQueryClient();
  return useMutation(client.users.deleteAddress, {
    onSuccess: (data) => {
      if (data.error === 'success') {
        toast.success('successfully-address-deleted');
        closeModal();
        return;
      }
      toast.error(t(data.error));
    },
    onError: (error) => {
      const {
        response: { data },
      }: any = error ?? {};

      toast.error(data?.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.USER_GET_ADDRESS);
    },
  });
};

export const useDeleteBillingAddress = () => {
  const { t } = useTranslation('errors');
  const { closeModal } = useModalAction();
  const queryClient = useQueryClient();
  return useMutation(client.users.deleteBillingAddress, {
    onSuccess: (data) => {
      if (data.error === 'success') {
        toast.success('successfully-address-deleted');
        closeModal();
        return;
      }
      toast.error(t(data.error));
    },
    onError: (error) => {
      const {
        response: { data },
      }: any = error ?? {};

      toast.error(data?.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.USER_GET_ADDRESS);
    },
  });
};

export const useGetProvinces = () => {
  const { locale } = useRouter();
  const { data }: any = useQuery(
    [API_ENDPOINTS.PROVINCES, { language: locale }],
    ({ queryKey }) => client.users.getProvinces(queryKey[1])
  );
  const provinces: any = [];

  data?.data.provinces.map((el: object) => {
    provinces.push({ value: el.id, label: el.name });
  });

  return { provinces };
};

export const useGetCountries = () => {
  const { locale } = useRouter();
  const { data }: any = useQuery(
    [API_ENDPOINTS.COUNTRIES, { language: locale }],
    ({ queryKey }) => client.users.getCountries(queryKey[1])
  );
  const countries: [] = [];

  data?.data.countries.map((el: object) => {
    countries.push({ value: el.id, label: el.name });
  });

  return { countries };
};

export const useUpdateUser = () => {
  const { t } = useTranslation('errors');
  const queryClient = useQueryClient();
  const { closeModal } = useModalAction();
  return useMutation(client.users.update, {
    onSuccess: (data) => {
      if (data.error === 'success') {
        toast.success(t('profile-update-successful'));
        closeModal();
        return;
      }
      toast.error(t(data.error));
    },
    onError: (error) => {
      toast.error(t('error-something-wrong'));
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries(API_ENDPOINTS.USERS_ME);
    // },
  });
};

export const useSetCard = () => {
  const { t } = useTranslation('errors');
  const queryClient = useQueryClient();
  return useMutation(client.users.setCard, {
    onSuccess: (data) => {
      if (data.error === 'success') {
        toast.success(t('profile-update-successful'));
        queryClient.invalidateQueries(API_ENDPOINTS.USER_GET_CARD);
        useCheckout();
        return;
      }
      toast.error(t(data.error));
    },
  });
};

export const useGetCards = () => {
  const { t } = useTranslation('errors');
  const { locale } = useRouter();
  const [user] = useAtom(userData);
  const formattedOptions = { token: user.token, client: user.id };
  const { data, isLoading } = useQuery(
    [API_ENDPOINTS.USER_GET_CARD, formattedOptions],
    ({ queryKey }) => client.users.getCard(queryKey[1])
  );

  const paymentData = useQuery(
    [
      API_ENDPOINTS.GET_PAYMENT_METHOD,
      { ...formattedOptions, language: locale },
    ],
    ({ queryKey }) => client.users.getPaymentMethod(queryKey[1])
  );

  return {
    cards: data?.data.cards,
    payment: paymentData?.data?.data?.paymentMethod,
  };
};

export const useCheckout = () => {
  const { t } = useTranslation('errors');
  const queryClient = useQueryClient();
  const [user] = useAtom(userData);
  const [userCard] = useAtom(userCardAtom);
  const [threeDS, setThreeDS] = useAtom(threeDSAtom);
  const { openModal } = useModalAction();
  const router = useRouter();
  const { resetCart } = useCart();

  return useMutation(client.users.checkout, {
    onSuccess: (data) => {
      if (data.error === 'CHECKOUT_REQUIRE_VALIDATION') {
        setThreeDS({ ...threeDS, ...data?.data });
        openModal('CHECKOUT_MODAL');
        return;
      }
      if (data.error === 'success') {
        openModal('CHECKOUT_MODAL_NO3DS', data);
        resetCart();
        setThreeDS({});
        return;
      }
      openModal('CHECKOUT_MODAL_NO3DS', data);
    },
    onError: (error) => {
      toast.error(t('error-something-wrong'));
    },
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.USERS_ME);
    },
  });
};

export const useAddPromocode = () => {
  const { t } = useTranslation('errors');
  const [threeDS, setThreeDS] = useAtom(threeDSAtom);
  return useMutation(client.users.promocode, {
    onSuccess: (data) => {
      if (data.error === 'success') {
        toast.success(t('promocode-successfull-text'));
        setThreeDS({ ...threeDS, code: data?.data.code_id });
        return;
      }
      toast.error(t(data.error));
    },
    onError: (error) => {
      toast.error(t('error-something-wrong'));
    },
  });
};

export const useAddCode = () => {
  const [threeDS, setThreeDS] = useAtom(threeDSAtom);
  return function addCode(code: string) {
    setThreeDS({ ...threeDS, subscriberCode: code });
  };
};

export function useGetVoucher() {
  const router = useRouter();
  const [user] = useAtom(userData);
  const formattedOptions = {
    token: user.token,
    client: user.id,
    language: router.locale,
  };

  const { data, isLoading } = useQuery(
    [API_ENDPOINTS.GET_VOUCHERS, formattedOptions],
    ({ queryKey }) => client.users.getVouchers(queryKey[1])
  );

  //TODO: do some improvement here
  return { vouchers: data?.data?.vouchers?.available ?? [] };
}

export const useCheckout3ds = (body) => {
  const { t } = useTranslation('errors');
  const [user] = useAtom(userData);
  const router = useRouter();
  const { resetCart } = useCart();
  const [threeDS] = useAtom(threeDSAtom);
  const { closeModal } = useModalAction();
  if (!body) {
    return;
  }
  const formData = body.split('&');
  const sendData = { md: '', response: '' };
  formData.forEach((el) => {
    const data = el.split('=');
    if (data[0] === 'MD') {
      sendData.md = data[1];
    }
    if (data[0] === 'PaRes') {
      sendData.response = data[1];
    }
  });

  const { data, isLoading } = useQuery(
    [API_ENDPOINTS.CHECKOUT_3DS],
    () =>
      client.users.checkout3ds({
        ...sendData,
        client: user.id,
        token: user.token,
        order_id: threeDS.order_id,
        language: router.locale,
      }),
    {
      retry: false,
      retryOnMount: false,
      refetchOnMount: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      onSuccess: (data) => {
        if (data?.error === 'success') {
          // resetCart();
        }
      },
    }
  );
  return { checkout: data, isLoading };
};

export const useGetIp = () => {
  const { t } = useTranslation('errors');
  const { data } = useQuery([API_ENDPOINTS.IP], () => client.ip.get());
  return { ip: data?.data?.ip };
};

export function useGetAddress() {
  const router = useRouter();
  const [isAuthorized] = useAtom(authorizationAtom);
  const [user] = useAtom(userData);
  const formattedOptions = {
    token: user.token,
    client: user.id,
    language: router.locale,
  };

  const { data, isLoading } = useQuery(
    [API_ENDPOINTS.USER_GET_ADDRESS, formattedOptions],
    ({ queryKey }) => client.users.getAddress(queryKey[1])
  );

  //TODO: do some improvement here
  return { addresses: data?.data, isLoading, isAuthorized };
}

export const useShopAddress = () => {
  const { data } = useQuery([API_ENDPOINTS.CLICK_AND_COLLECT], ({ queryKey }) =>
    client.shops.all()
  );
  return { shop: data?.data?.clickAndCollectss };
};

export function useUserCart() {
  const router = useRouter();
  const [isAuthorized] = useAtom(authorizationAtom);
  const [threeDS] = useAtom(threeDSAtom);
  const [user] = useAtom(userData);
  const [shippingAddress] = useAtom(shippingAddressAtom);
  const { shop } = useShopAddress();

  const formattedOptions = {
    language: router.locale,
    session: JSON.parse(localStorage.cart).session,
    token: user.token,
    client: user.id,
    promo_code: threeDS.code ?? '',
    voucher: threeDS.voucher ?? '',
    subscriber_code: threeDS.subscriberCode ?? '',
    click_and_collect:
      shop && shippingAddress?.id === shop[0].id ? shippingAddress?.id : '',
  };

  const { data, isLoading } = useQuery(
    [API_ENDPOINTS.GET_CART, formattedOptions],
    ({ queryKey }) => client.users.getCart(queryKey[1])
  );

  //TODO: do some improvement here
  return {
    cart: data?.data?.cart,
    isLoading,
    isAuthorized,
    error: data?.error,
  };
}

export const useSetDeliveryAddress = () => {
  const { t } = useTranslation('errors');
  const queryClient = useQueryClient();
  const { closeModal } = useModalAction();
  return useMutation(client.users.setDeliveryAddress, {
    onSuccess: (data) => {
      if (data.error !== 'success') {
        toast.error(t(data.error));
        return;
      }
      if (data) {
        toast.success(t('profile-update-successful'));
        closeModal();
      }
    },
    onError: (error) => {
      toast.error(t('error-something-wrong'));
    },
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.USER_GET_ADDRESS);
    },
  });
};

export const useSetBillingAddress = () => {
  const { t } = useTranslation('errors');
  const queryClient = useQueryClient();
  const { closeModal } = useModalAction();
  return useMutation(client.users.setBillingAddress, {
    onSuccess: (data) => {
      if (data.error !== 'success') {
        toast.error(t(data.error));
        return;
      }
      if (data) {
        toast.success(t('profile-update-successful'));
        closeModal();
      }
    },
    onError: (error) => {
      toast.error(t('error-something-wrong'));
    },
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.USER_GET_ADDRESS);
    },
  });
};

export function useLogin(isCheckoutRoute: any) {
  const { t } = useTranslation('errors');
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const [temp, setUserData] = useAtom(userData);
  const { closeModal } = useModalAction();
  const { setToken } = useToken();
  let [serverError, setServerError] = useState<string | null>(null);
  const { isEmpty } = useCart();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [__, closeSidebar] = useAtom(drawerAtom);
  const { initialCartAfterLogin } = useCart();

  const { mutate, isLoading } = useMutation(client.users.login, {
    onSuccess: ({ data, error, message }: any) => {
      if (error !== 'success') {
        // setServerError(t(error));
        setServerError(t(error));
        return;
      }
      if (!data.client.token) {
        setServerError(error);
        return;
      }
      setToken(data.client.token);
      setAuthorized(true);
      setUserData(data.client);
      Cookies.set('token', data.client.token);
      Cookies.set('client', data.client.id);
      closeModal();
      if (isEmpty && data.client.pendingCart.id) {
        initialCartAfterLogin(data.client.pendingCart.id);
      }
      if (isCheckoutRoute) {
        router.push('/checkout');
        closeSidebar({ display: false, view: '' });
      } else {
        router.push('/');
      }
    },
    onError: (error: Error, data) => {
      console.log(error.message);
    },
    onSettled: () => {},
  });

  return { mutate, isLoading, serverError, setServerError };
}

export function useRegister() {
  const { t } = useTranslation('errors');
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const { closeModal } = useModalAction();
  let [formError, setFormError] = useState<Partial<RegisterUserInput> | null>(
    null
  );

  const { mutate, isLoading } = useMutation(client.users.register, {
    onSuccess: (data) => {
      if (data.error === 'success') {
        closeModal();
        return;
      }
      if (!data.data) {
        toast.error(t(data.error));
      }
    },
    onError: (error) => {
      const {
        response: { data },
      }: any = error ?? {};

      setFormError(data);
    },
  });

  return { mutate, isLoading, formError, setFormError };
}

export function useLogout() {
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const [_r, resetCheckout] = useAtom(clearCheckoutAtom);
  const [_u, setUserData] = useAtom(userData);
  const { resetCart } = useCart();
  const [_s, closeSidebar] = useAtom(drawerAtom);

  const logout = () => {
    setToken('');
    setAuthorized(false);
    resetCheckout();
    setUserData('');
    resetCart();
    Cookies.remove('token');
    Cookies.remove('client');
    closeSidebar({ display: false, view: '' });
  };
  return {
    logout,
  };
}

export function useChangePassword() {
  const { t } = useTranslation('errors');
  const { closeModal } = useModalAction();

  return useMutation(client.users.update, {
    onSuccess: (data) => {
      if (data.error === 'success') {
        toast.success(t('profile-update-successful'));
        closeModal();
        return;
      }
      toast.error(t(data.error));
    },
    onError: (error) => {
      toast.error(t('error-something-wrong'));
    },
  });
}

export function useForgotPassword() {
  const { actions } = useStateMachine({ updateFormState });
  let [message, setMessage] = useState<string | null>(null);
  let [formError, setFormError] = useState<any>(null);
  const { t } = useTranslation('errors');

  const { mutate, isLoading } = useMutation(client.users.forgotPassword, {
    onSuccess: (data, variables) => {
      if (data?.error === 'success') {
        toast.success(t('text-forgot-password-email-send'));
      } else {
        toast.error(t(data.error));
      }
    },
  });

  return { mutate, isLoading, message, formError, setFormError, setMessage };
}

export function useResetPassword() {
  const queryClient = useQueryClient();
  const { openModal } = useModalAction();
  const router = useRouter();

  return useMutation(client.users.resetPassword, {
    onSuccess: (data) => {
      if (data?.error === 'success') {
        toast.success('Successfully Reset Password!');
        router.push('/');
        openModal('LOGIN_VIEW');
        return;
      }
    },
    onSettled: () => {
      queryClient.clear();
    },
  });
}

export function useVerifyForgotPasswordToken(args: any) {
  const { data } = useQuery(
    [API_ENDPOINTS.RECOVERY_VALIDATION, args],
    ({ queryKey }) => client.users.verifyForgotPasswordToken(queryKey[1])
  );
  return { recoveryData: data?.data?.client_id };
}

export function useWineSubscription() {
  const { locale } = useRouter();
  const [user] = useAtom(userData);
  const formattedOptions = {
    token: user.token,
    client: user.id,
    language: locale,
  };
  const { data } = useQuery(
    [API_ENDPOINTS.GET_WINE_CELLAR, formattedOptions],
    ({ queryKey }) => client.users.getWineCellar(queryKey[1])
  );
  return { wineCellar: data?.data, error: data?.error };
}

export function useWineReject() {
  const { t } = useTranslation();
  return useMutation(client.users.wineCellarReject, {
    onSuccess: (data) => {
      if (data?.error === 'success') {
        toast.success(t('mountly-shipping-success'));
        return;
      }
    },
  });
}

export function useWineSubscriptionQty() {
  const { t } = useTranslation();
  return useMutation(client.users.wineCellarQty, {
    onSuccess: (data) => {
      if (data?.error === 'success') {
        toast.success(t('reject_success'));
        return;
      }
    },
  });
}

export function useCheckGourmet() {
  const { locale } = useRouter();
  const [user] = useAtom(userData);
  const formattedOptions = {
    token: user.token,
    client: user.id,
    language: locale,
  };
  const { data } = useQuery(
    [API_ENDPOINTS.CHECK_GOURMET_ORO, formattedOptions],
    ({ queryKey }) => client.users.checkGourmet(queryKey[1])
  );
  return {
    gourmetSubscribed:
      data?.error === 'success'
        ? data?.data.gourmetSubscription
        : 'gourmetError',
  };
}
