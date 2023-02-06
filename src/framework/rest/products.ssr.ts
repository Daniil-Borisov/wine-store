import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import client from '@/framework/client';
import { PRODUCTS_PER_PAGE } from '@/framework/client/variables';
import { ProductQueryOptions } from '@/types';
import { API_ENDPOINTS } from './client/api-endpoints';
import { getCookie } from 'cookies-next';

export const getServerSideProps: GetServerSideProps = async ({
  query,
  locale,
  req,
  res,
}) => {
  const queryClient = new QueryClient();
  if (!query.order) {
    query.order = '';
  }

  const formData =
    getCookie('client', { req, res }) && getCookie('token', { req, res })
      ? {
          language: locale,
          ...query,
          page_size: PRODUCTS_PER_PAGE,
          current_page: 1,
          token: getCookie('token', { req, res }),
          client: getCookie('client', { req, res }),
        }
      : {
          language: locale,
          ...query,
          page_size: PRODUCTS_PER_PAGE,
          current_page: 1,
        };

  const products = await queryClient.fetchQuery(
    [API_ENDPOINTS.STOREFRONT, formData],
    ({ queryKey }) =>
      client.products.all(queryKey[1] as Partial<ProductQueryOptions>)
  );

  const banner = await queryClient.fetchQuery(
    [
      API_ENDPOINTS.BANNER_IMG,
      {
        type: 'LANDSCAPE',
        section: 'CATEGORY',
        category: query.category,
        language: locale,
      },
    ],
    ({ queryKey }) => client.banner.all(queryKey[1])
  );

  const brands = await queryClient.fetchQuery(
    [API_ENDPOINTS.BRANDS, { language: locale }],
    ({ queryKey }) => client.brands.all(queryKey[1])
  );

  return {
    props: {
      products: products?.data?.products ?? [],
      temp: products?.data,
      categories: products.data?.childCategories?.length
        ? products?.data?.childCategories
        : products?.data?.levelCategories
        ? products?.data?.levelCategories
        : [],
      banner: banner?.data?.banners ?? [],
      category: products?.data,
      brands: brands.data.brands,
      ssrError: products?.error,
      ...(await serverSideTranslations(locale!, ['common', 'errors', 'faq'])),
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
