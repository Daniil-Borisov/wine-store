import type { Product } from '@/types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import invariant from 'tiny-invariant';
import client from './client';
import { dehydrate } from 'react-query/hydration';
import { API_ENDPOINTS } from '@/framework/client/api-endpoints';
import { QueryClient } from 'react-query';
import { SettingsQueryOptions } from '@/types';

// This function gets called at build time
type ParsedQueryParams = {
  slug: string;
};
export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async ({
  locales,
}) => {
  invariant(locales, 'locales is not defined');
  const { data } = await client.products.all({ limit: 100 });
  const paths = data?.flatMap((product) =>
    locales?.map((locale) => ({ params: { slug: product.slug }, locale }))
  );
  return {
    paths,
    fallback: 'blocking',
  };
};
type PageProps = {
  product: Product;
};
export const getStaticProps: ({
  params,
  locale,
}: {
  params: any;
  locale: any;
}) => Promise<
  | {
      revalidate: number;
      props: {
        product: T;
        _nextI18Next: {
          initialI18nStore: any;
          initialLocale: string;
          userConfig: UserConfig | null;
        };
        dehydratedState: any;
      };
    }
  | { notFound: boolean }
> = async ({ params, locale }) => {
  const { slug } = params!; //* we know it's required because of getStaticPaths

  const queryClient = new QueryClient();

  try {
    const product = await client.products.get({
      product: 3212,
      language: locale,
    });
    return {
      props: {
        product: product.data.product,
        ...(await serverSideTranslations(locale!, ['common', 'errors'])),
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
