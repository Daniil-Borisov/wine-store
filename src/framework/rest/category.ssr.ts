import type { Category } from '@/types';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import invariant from 'tiny-invariant';
import { API_ENDPOINTS } from './client/api-endpoints';
import client from './client';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import type { CategoriesPageProps } from '@/types';
import { getCookie } from 'cookies-next';

type ParsedQueryParams = {
  params: any;
};

export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async ({
  locales,
}) => {
  invariant(locales, 'locales is not defined');
  const { data } = await client.categories.all({ language: locales });
  const paths = data?.categories?.flatMap((cat) =>
    locales?.map((locale) => ({ params: { category: cat.id }, locale }))
  );

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getServerSideProps: GetServerSideProps<
  CategoriesPageProps
> = async ({ query, locale, req, res }) => {
  const queryClient = new QueryClient();

  const formData =
    getCookie('client', { req, res }) && getCookie('token', { req, res })
      ? {
          language: locale,
          category: query?.category[0],
          token: getCookie('token', { req, res }),
          client: getCookie('client', { req, res }),
        }
      : {
          language: locale,
          category: query?.category[0],
        };

  const categories = await queryClient.fetchQuery(
    [API_ENDPOINTS.STOREFRONT, formData],
    ({ queryKey }) => client.categories.category(queryKey[1])
  );

  return {
    props: {
      categories: categories?.data?.childCategories ?? [],
      category: categories?.data?.category ?? [],
      ssrError: categories?.error,
      ...(await serverSideTranslations(locale!, ['common', 'faq', 'errors'])),
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
