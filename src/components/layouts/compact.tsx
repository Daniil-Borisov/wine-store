import SectionBlock from '@/components/ui/section-block';
import FilterBar from './filter-bar';
import Categories from '@/components/categories/categories';
import CallToAction from '@/components/cta/call-to-action';
import GroupProducts from '@/components/products/group-products';
import PopularProductsGrid from '@/components/products/popular-products';
import TopAuthorsGrid from '@/components/author/top-authors-grid';
import Banner from '@/components/banners/banner';
import TopManufacturersGrid from '@/components/manufacturer/top-manufacturers-grid';
import { useTranslation } from 'next-i18next';
import type { HomePageProps } from '@/types';
import ProductGridHome from '@/components/products/grids/home';
import Accordion from '@/components/ui/accordion';
import { faq } from '@/framework/static/faq';

export default function CompactLayout({ variables }: HomePageProps) {
  const { t } = useTranslation('common');
  return (
    <div className="flex flex-1 flex-col bg-white">
      <FilterBar className="lg:hidden" variables={variables.categories} />
      <main className="mt-6 block w-full xl:overflow-hidden">
        <SectionBlock>
          <Banner layout="modern" variables={variables.types} />
        </SectionBlock>
        {/*<PopularProductsGrid variables={variables.popularProducts} />*/}
        <Categories layout="compact" variables={variables.categories} />
        {/*<GroupProducts />*/}
        {/*<SectionBlock title={t('text-new-arrival')}>*/}
        {/*  <ProductGridHome*/}
        {/*    column="five"*/}
        {/*    variables={{*/}
        {/*      ...variables.products,*/}
        {/*      sortedBy: 'DESC',*/}
        {/*      orderBy: 'created_at',*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</SectionBlock>*/}
        <TopManufacturersGrid />
        <div className="mx-auto w-full max-w-screen-lg">
          <section className="py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
            <header className="mb-8 text-center">
              <h1 className="text-xl font-bold md:text-2xl xl:text-3xl">
                {t('nav-menu-faq')}
              </h1>
            </header>
            <div className="mx-auto w-full max-w-screen-lg">
              <Accordion items={faq} translatorNS="faq" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
