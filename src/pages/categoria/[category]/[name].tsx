import BannerWithoutSlider from '@/components/banners/banner-without-slider';
import { FilterIcon } from '@/components/icons/filter-icon';
import MobileNavigation from '@/components/layouts/mobile-navigation';
import GeneralLayout from '@/components/layouts/_general';
import ProductsGrid from '@/components/products/grid';
import SidebarFilter from '@/components/search-view/sidebar-filter';
import Accordion from '@/components/ui/accordion';
import CategoryBreadcrumb from '@/components/ui/category-breadcrumb-card';
import { faq } from '@/framework/static/faq-category';
import { drawerAtom } from '@/store/drawer-atom';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import StickyBox from 'react-sticky-box';
import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';
import React, { useEffect, useState } from 'react';
import CategoryCard from '@/components/ui/category-card';
import { ArrowNext, ArrowPrev } from '@/components/icons';
import { useLogout } from '@/framework/user';
import ProductLoader from '@/components/ui/loaders/product-loader';
import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';
import Seo from '@/components/seo/seo';
import { categoryPageSeo } from '@/components/seo/seoContent';

export { getServerSideProps } from '@/framework/products.ssr';

export default function SearchPage({
  categories,
  products,
  banner,
  category,
  brands,
  ssrError,
  temp,
}: any) {
  const { query } = useRouter();
  const { t } = useTranslation();
  const router = useRouter();
  const { searchType, ...restQuery }: any = query;
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [childCategory, setChildCategory] = useState('');
  const { logout } = useLogout();
  const [breadcrumbs, setBreadcrumbs] = useState<object[]>([]);
  const [heading, setHeading] = useState<string>('');

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    700: {
      slidesPerView: 3,
    },

    1100: {
      slidesPerView: 4,
      spaceBetween: 24,
    },

    1400: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1700: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  };
  useEffect(() => {
    if (ssrError === 'CT001') {
      logout();
      router.reload();
      return;
    }
  });
  useEffect(() => {
    if (ssrError === 'success' && category?.parentCategories[0]) {
      const { id } = category?.parentCategories[0];
      setChildCategory(category?.category[id]);
    }
  }, [category]);

  useEffect(() => {
    if (category.category[-1]) {
      setBreadcrumbs([
        {
          name: category.category[-1][0].name,
          id: category.category[-1][0].id,
        },
      ]);
    } else if (!category.parentCategories[0].child) {
      const { id, name } = category?.parentCategories[0];
      setBreadcrumbs([
        { name: name, id: id },
        {
          name: category.category[id][0].name,
          id: category.category[id][0].id,
        },
      ]);
    } else if (category.parentCategories[0].child) {
      const { id, name } = category?.parentCategories[0]?.child;
      setBreadcrumbs([
        {
          name: category.parentCategories[0].name,
          id: category.parentCategories[0].id,
        },
        { name: name, id: id },
        {
          name: category.category[id][0].name,
          id: category.category[id][0].id,
        },
      ]);
    }
  }, [category]);

  return (
    <>
      <Seo
        noindex={false}
        nofollow={false}
        title={categoryPageSeo.title}
        description={categoryPageSeo.description}
      />
      {ssrError === 'success' ? (
        <div className="w-full bg-white">
          <BannerWithoutSlider
            layout="modern"
            banners={banner.landscape}
            contain={true}
          />
          <div className="mx-auto w-full max-w-1920 bg-light">
            <div className="mt-8 px-5 xl:px-16">
              <CategoryBreadcrumb breadcrumbs={breadcrumbs} />
            </div>
            <h1 className="text-center text-[45px] font-semibold">
              Comprar {breadcrumbs[breadcrumbs.length - 1]?.name}
            </h1>
            <div className="mx-auto flex min-h-screen w-full max-w-1920 px-5 py-10 rtl:space-x-reverse lg:space-x-10 xl:py-14 xl:px-16">
              <div className="hidden w-80 shrink-0 lg:block">
                <StickyBox offsetTop={120} offsetBottom={30}>
                  <SidebarFilter categories={categories} brands={brands} />
                </StickyBox>
              </div>
              <ProductsGrid />
            </div>
          </div>
          {Array.isArray(categories) ? (
            <div className="mb-[175px]">
              <h2 className="mt-[76px] mb-[60px] text-center text-[45px] font-semibold">
                {t('other-categories')}
              </h2>
              <div className="relative">
                <Swiper
                  id="author-card-menu"
                  className="!px-3"
                  modules={[Navigation]}
                  navigation={{
                    nextEl: '.next',
                    prevEl: '.prev',
                  }}
                  // centeredSlides={true}
                  centerInsufficientSlides={true}
                  // navigation={true}
                  breakpoints={breakpoints}
                  // slidesPerView="auto"
                  // spaceBetween={40}
                >
                  {Array.isArray(categories) &&
                    categories.map((item: any, idx: number) => (
                      <SwiperSlide key={idx} className="carousel-slide py-2">
                        <div
                          onClick={() =>
                            router.push(
                              `/categoria/${item.id}/${item.name
                                .replace(/( )|(%)/g, '-')
                                .toLowerCase()}`
                            )
                          }
                          key={idx}
                        >
                          <CategoryCard item={item} categoryPage={true} />
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
                <div
                  className="prev absolute top-2/4 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-200 border-opacity-70 bg-light text-heading shadow-200 transition-all duration-200 ltr:left-4 rtl:right-4 md:-mt-5 ltr:md:left-5 rtl:md:right-5"
                  role="button"
                >
                  <span className="sr-only">{t('text-previous')}</span>
                  <ArrowPrev width={18} height={18} />
                </div>
                <div
                  className="next absolute top-2/4 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-200 border-opacity-70 bg-light text-heading shadow-200 transition-all duration-200 ltr:right-4 rtl:left-4 md:-mt-5 ltr:md:right-5 rtl:md:left-5"
                  role="button"
                >
                  <span className="sr-only">{t('text-next')}</span>
                  <ArrowNext width={18} height={18} />
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          <div className="mx-auto w-full max-w-screen-lg ">
            <Accordion items={faq} translatorNS="faq" noTitle={false} />
          </div>
        </div>
      ) : (
        <ProductLoader />
      )}
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
                data: {
                  categories: page.props.categories,
                  brands: page.props.brands,
                },
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
