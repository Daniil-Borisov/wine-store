import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import client from '@/framework/client';
import { API_ENDPOINTS } from './client/api-endpoints';

export const getServerSideProps: GetServerSideProps = async ({
  query,
  locale,
}) => {
  const queryClient = new QueryClient();

  const products = await queryClient.fetchQuery(
    [API_ENDPOINTS.VINOTECA, { language: locale }],
    ({ queryKey }) => client.products.vinoteca(queryKey[1])
  );

  return {
    props: {
      vinotecaProduct: products?.data,
      ...(await serverSideTranslations(locale!, ['common', 'faq', 'errors'])),
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
