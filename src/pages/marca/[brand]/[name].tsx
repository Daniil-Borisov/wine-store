import BannerWithoutSlider from '@/components/banners/banner-without-slider';
import { FilterIcon } from '@/components/icons/filter-icon';
import MobileNavigation from '@/components/layouts/mobile-navigation';
import GeneralLayout from '@/components/layouts/_general';
import TopManufacturersGrid from '@/components/manufacturer/top-manufacturers-grid';
import ProductsGrid, { Grid } from '@/components/products/grid';
import SearchCount from '@/components/search-view/search-count';
import SidebarFilter from '@/components/search-view/sidebar-filter';
import Sorting from '@/components/search-view/sorting';
import Accordion from '@/components/ui/accordion';
import CategoryBreadcrumb from '@/components/ui/category-breadcrumb-card';
import ErrorMessage from '@/components/ui/error-message';
import { PRODUCTS_PER_PAGE } from '@/framework/client/variables';
import { useProducts } from '@/framework/product';
import { drawerAtom } from '@/store/drawer-atom';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import StickyBox from 'react-sticky-box';
import { faq } from '@/framework/static/faq-brands';
import { useLogout, useUser } from '@/framework/user';
import Seo from '@/components/seo/seo';
import { brandsPageSeo } from '@/components/seo/seoContent';

export { getServerSideProps } from '@/framework/brands.ssr';

export default function SearchPage({
  products,
  brands,
  brand,
  categories,
}: any) {
  const { error }: any = useUser();
  const { logout } = useLogout();
  if (error === 'CT001') {
    logout();
  }

  return (
    <>
      <Seo
        noindex={false}
        nofollow={false}
        title={brandsPageSeo.title}
        description={brandsPageSeo.description}
      />
      <div className="w-full bg-white">
        <h1 className="mt-20 text-center text-[45px] font-semibold">
          {brand[0]?.name ?? ''}
        </h1>
        <div className="mx-auto w-full max-w-1920 bg-light">
          <div className="mx-auto flex min-h-screen w-full max-w-1920 px-5 py-10 rtl:space-x-reverse lg:space-x-10 xl:py-14 xl:px-16">
            <div className="hidden w-80 shrink-0 lg:block">
              <StickyBox offsetTop={120} offsetBottom={30}>
                <SidebarFilter />
              </StickyBox>
            </div>
            {/* <Grid
            products={products as any}
            loadMore={false}
            isLoading={false}
            isLoadingMore={false}
            hasMore={false}
            error={false}
            column="five"
          /> */}
            <ProductsGrid />
          </div>
        </div>
        <TopManufacturersGrid brands={brands} title={'Otras marcas gourmet'} />
        <div className="bg-light">
          <div className="mx-auto w-full max-w-screen-lg ">
            <Accordion items={faq} translatorNS="faq" />
          </div>
        </div>
      </div>
    </>
  );
}

const GetLayout = (page: React.ReactElement) => {
  const { t } = useTranslation('common');
  const [_, setDrawerView] = useAtom(drawerAtom);
  return (
    <GeneralLayout>
      <>
        {page}
        <MobileNavigation>
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() =>
              setDrawerView({
                display: true,
                view: 'SEARCH_FILTER',
              })
            }
            className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none"
          >
            <span className="sr-only">{t('text-filter')}</span>
            <FilterIcon width="17.05" height="18" />
          </motion.button>
        </MobileNavigation>
      </>
    </GeneralLayout>
  );
};

SearchPage.getLayout = GetLayout;
