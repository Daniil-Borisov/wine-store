import Accordion from '@/components/ui/accordion';
import { faq } from '@/framework/static/faq';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { getLayout } from '@/components/layouts/layout';
import Seo from '@/components/seo/seo';
import Details from '@/components/products/details/details';
import dynamic from 'next/dynamic';
import client from '@/framework/client';
import { useUser } from '@/framework/user';
import { useLogout } from '@/framework/user';
import HomeLayout from '@/components/layouts/_home';
import { getCookie } from 'cookies-next';
import { API_ENDPOINTS } from '@/framework/client/api-endpoints';
import { QueryClient } from 'react-query';
import { productsPageSeo } from '@/components/seo/seoContent';

const RelatedProducts = dynamic(
  () => import('@/components/products/details/related-products')
);

const ProductPage = ({ product }: any) => {
  const { t } = useTranslation('common');
  const { me, error }: any = useUser();
  const { logout } = useLogout();
  if (error === 'CT001') {
    logout();
  }

  return (
    <>
      <Seo
        noindex={false}
        nofollow={false}
        title={productsPageSeo.title}
        description={productsPageSeo.description}
      />
      <section className="bg-light py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 xl:pb-40 2xl:px-20">
        <>
          <article className="w-full bg-light md:rounded-xl">
            <Details product={product} backBtn={false} isModal={false} />

            {product.related_products?.length! > 1 && (
              <div>
                <RelatedProducts
                  products={product.related_products}
                  currentProductId={product.related_products.id}
                />
              </div>
            )}
          </article>
        </>
      </section>
    </>
  );
};

ProductPage.getLayout = function getLayout(page) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
  locale,
  req,
  res,
}) => {
  const queryClient = new QueryClient();
  const formData =
    getCookie('client', { req, res }) && getCookie('token', { req, res })
      ? {
          language: locale,
          product: query.slug[0],
          token: getCookie('token', { req, res }),
          client: getCookie('client', { req, res }),
        }
      : {
          language: locale,
          product: query.slug[0],
        };
  const product = await queryClient.fetchQuery(
    [API_ENDPOINTS.PRODUCT, formData],
    ({ queryKey }) => client.products.get(queryKey[1])
  );

  return {
    props: {
      product: product?.data?.product,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default ProductPage;
