import { useTranslation } from 'next-i18next';
import Seo from '@/components/seo/seo';
import CategoryCard from '@/components/ui/category-card';
import HomeLayout from '@/components/layouts/_home';
import type { CategoriesPageProps } from '@/types';
import { getServerSideProps } from '@/framework/category.ssr';
import Link from 'next/link';
import Accordion from '@/components/ui/accordion';
import { faq } from '@/framework/static/faq-categories';
import Banner from '@/assets/categories-banner.png';
import Image from 'next/image';
import CategoryBreadcrumb from '@/components/ui/category-breadcrumb-card';
import { useUser } from '@/framework/user';
import { useLogout } from '@/framework/user';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ProductLoader from '@/components/ui/loaders/product-loader';
import { Routes } from '@/config/routes';
import { categoriesPageSeo } from '@/components/seo/seoContent';

export { getServerSideProps };

const CategoriesPage = ({
  categories,
  category,
  ssrError,
}: CategoriesPageProps) => {
  const { t } = useTranslation('common');
  const { me, error }: any = useUser();
  const { logout } = useLogout();
  const router = useRouter();
  useEffect(() => {
    if (ssrError === 'CT001') {
      logout();
      router.reload();
      return;
    }
  });
  const cat = ssrError === 'success' && category[-1];

  return (
    <>
      {ssrError === 'success' ? (
        <>
          <Seo
            noindex={false}
            nofollow={false}
            title={categoriesPageSeo.title}
            description={categoriesPageSeo.description}
          />
          <div className="w-full">
            <Image
              src={Banner}
              alt=""
              className="w-full"
              objectFit="cover"
              layout="responsive"
            />
          </div>
          <div className="mt-8 px-5 xl:px-16">
            <CategoryBreadcrumb breadcrumbs={cat} />
          </div>
          <h1 className="  text-center text-[36px] font-semibold">
            Comprar {cat[0].name}
          </h1>
          <div className="p-5 px-16 md:p-8 lg:p-12 2xl:py-[60px]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6">
              {Array.isArray(categories) &&
                categories.map((item: any, idx: number) => (
                  <CategoryCard
                    item={item}
                    categoryPage={true}
                    key={idx}
                    link={Routes.products(item.id, item.name)}
                  />
                ))}
            </div>
          </div>
        </>
      ) : (
        <ProductLoader />
      )}
      <div className="mx-auto w-full max-w-screen-lg ">
        <Accordion items={faq} translatorNS="faq" noTitle={false} />
      </div>
    </>
  );
};

CategoriesPage.getLayout = function getLayout(page) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};

export default CategoriesPage;
