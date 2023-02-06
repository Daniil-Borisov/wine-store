import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import client from '@/framework/client';
import { TYPES_PER_PAGE } from '@/framework/client/variables';
import { SettingsQueryOptions, TypeQueryOptions } from '@/types';
import { API_ENDPOINTS } from './client/api-endpoints';
import { useRouter } from 'next/router';
import { userData } from '@/store/user-atom';
import { useAtom } from 'jotai';

export const getStaticProps: GetServerSideProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  const [user] = useAtom(userData);
  const params = {
    language: locale,
    token: user.token,
    client: user.id,
  };

  const orders = await queryClient.fetchQuery(
    [API_ENDPOINTS.GET_ORDERS, { ...params }],
    ({ queryKey }) => client.orders.all(queryKey[1])
  );

  return {
    props: {
      orders: orders.data.orders,
      ...(await serverSideTranslations(locale!, ['common', 'errors'])),
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
