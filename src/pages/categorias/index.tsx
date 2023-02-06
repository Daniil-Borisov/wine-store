import { useTranslation } from 'next-i18next';
import Seo from '@/components/seo/seo';
import CategoryCard from '@/components/ui/category-card';
import HomeLayout from '@/components/layouts/_home';
import type { CategoriesPageProps } from '@/types';
import { getStaticProps } from '@/framework/categories-page.ssr';
import Banner from '@/assets/categories-banner.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Routes } from '@/config/routes';
import Link from 'next/link';
import { categoriesPageSeo } from '@/components/seo/seoContent';

export { getStaticProps };

const CategoriesPage = ({ categories }: CategoriesPageProps) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const onCategoryClick = (link: string) => {
    router.push(link);
  };

  return (
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
      <h1 className="mt-20  text-center text-[36px] font-semibold">
        {t('categories')}
      </h1>
      <div className="p-5 px-16 md:p-8 lg:p-12 2xl:py-[60px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6">
          {Array.isArray(categories) &&
            categories.map((item: any, idx: number) => (
              <CategoryCard
                item={item}
                categoryPage={true}
                link={
                  item.children.length
                    ? Routes.category(item.id, item.name)
                    : Routes.products(item.id, item.name)
                }
                key={idx}
              />
            ))}
        </div>
        {/* <div className="bg-light">
          <div className="mx-auto w-full max-w-screen-lg ">
            <Accordion items={faq} translatorNS="faq" />
          </div>
        </div> */}
      </div>
    </>
  );
};

CategoriesPage.getLayout = function getLayout(page: any) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};

export default CategoriesPage;
