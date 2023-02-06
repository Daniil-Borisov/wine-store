import type { Category } from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import invariant from 'tiny-invariant';
import { API_ENDPOINTS } from './client/api-endpoints';
import client from './client';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import type { CategoriesPageProps } from '@/types';

export const getStaticProps: GetStaticProps<CategoriesPageProps> = async ({
  params,
  locale,
}) => {
  const queryClient = new QueryClient();
  const categories = await queryClient.fetchQuery(
    [API_ENDPOINTS.CATEGORIES, { language: locale }],
    ({ queryKey }) => client.categories.all(queryKey[1])
  );

  return {
    props: {
      categories: categories.data.categories,
      ...(await serverSideTranslations(locale!, ['common'])),
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
