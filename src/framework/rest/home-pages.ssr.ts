import type { HomePageProps } from '@/types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import invariant from 'tiny-invariant';
import client from './client';
import { API_ENDPOINTS } from './client/api-endpoints';

type ParsedQueryParams = {
  pages: string[];
};

// This function gets called at build time
export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async ({
  locales,
}) => {
  invariant(locales, 'locales is not defined');
  // We'll pre-render only these paths at build time also with the slash route.
  return {
    paths: locales?.map((locale) => ({ params: { pages: [] }, locale })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<
  HomePageProps,
  ParsedQueryParams
> = async ({ locale, params }) => {
  const queryClient = new QueryClient();

  const banner = await queryClient.fetchQuery(
    [
      API_ENDPOINTS.BANNER_IMG,
      { type: 'SLIDER', section: 'HOME', language: locale },
    ],
    ({ queryKey }) => client.banner.all(queryKey[1])
  );

  const bannerMob = await queryClient.fetchQuery(
    [
      API_ENDPOINTS.BANNER_IMG,
      { type: 'PORTRAIT', section: 'HOME', language: locale },
    ],
    ({ queryKey }) => client.banner.all(queryKey[1])
  );

  const categories = await queryClient.fetchQuery(
    [API_ENDPOINTS.CATEGORIES],
    ({ queryKey }) => client.categories.all({ language: locale })
  );

  const brands = await queryClient.fetchQuery(
    [API_ENDPOINTS.BRANDS, { language: locale }],
    ({ queryKey }) => client.brands.all(queryKey[1])
  );

  const products = await queryClient.fetchQuery(
    [
      API_ENDPOINTS.STOREFRONT,
      {
        language: locale,
        category: '10548',
        page_size: 8,
        current_page: 1,
      },
    ],
    ({ queryKey }) => client.products.all(queryKey[1])
  );

  const vinotecaProducts = await queryClient.fetchQuery(
    [API_ENDPOINTS.VINOTECA, { language: locale }],
    ({ queryKey }) => client.products.vinoteca(queryKey[1])
  );

  const promotionCards = await queryClient.fetchQuery(
    [
      API_ENDPOINTS.BANNER_IMG,
      { type: 'PORTRAIT', section: 'HOME', language: locale },
    ],
    ({ queryKey }) => client.banner.all(queryKey[1])
  );

  return {
    props: {
      variables: {
        banner: banner.data.banners,
        bannerMob: bannerMob.data.banners,
        categories: categories.data,
        brands: brands ? brands.data.brands : [],
        products: products.data ? products.data.products : [],
        vinotecaProduct: vinotecaProducts.data,
        promotionCards: promotionCards?.data?.banners?.portrait
          ? promotionCards.data.banners.portrait
          : [],
      },
      layout: 'default',
      ...(await serverSideTranslations(locale!, ['common', 'faq', 'errors'])),
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 120,
  };
};

/* Fix : locales: 14kB,
popularProducts: 30kB,
category: 22kB,
groups: 8kB,
group: 2kB,
settings: 2kB,
perProduct: 4.2 * 30 = 120kB,
total = 14 + 30 + 22 + 8 + 2 + 2 + 120 = 198kB
others: 225 - 198 = 27kB
 */
