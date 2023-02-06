import cn from 'classnames';
import NotFound from '@/components/ui/not-found';
import CategoriesLoader from '@/components/ui/loaders/categories-loader';
import CategoryCard from '@/components/ui/category-card';
import { useRouter } from 'next/router';
import CategoryBreadcrumb from '@/components/ui/category-breadcrumb-card';
import Scrollbar from '@/components/ui/scrollbar';
import isEmpty from 'lodash/isEmpty';
import { useTranslation } from 'next-i18next';
import findNestedData from '@/lib/find-nested-data';
import type { Category } from '@/types';
import ProductGridHome from '@/components/products/grids/home';
import Link from '@/components/ui/link';
import { ACTIVE_NAV_LINK_CLASSES } from '@/const/classes-const';
import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';
import { ArrowPrevIcon } from '@/components/icons/arrow-prev';
import { ArrowNextIcon } from '@/components/icons/arrow-next';
import { useEffect, useState } from 'react';
import { Routes } from '@/config/routes';

function findParentCategories(
  treeItems: any[],
  parentId: number | null = null,
  link = 'id'
): any[] {
  let itemList: any[] = [];
  if (parentId) {
    const parentItem = treeItems?.find((item) => item[link] === parentId);
    itemList = parentItem?.parent_id
      ? [
          ...findParentCategories(treeItems, parentItem.parent_id),
          parentItem,
          ...itemList,
        ]
      : [parentItem, ...itemList];
  }
  return itemList;
}

interface FilterCategoryGridProps {
  notFound: boolean;
  loading: boolean;
  categories: any;
  className?: string;
  variables: any;
  categoriesPage: any;
}
const FilterCategoryGrid: React.FC<FilterCategoryGridProps> = ({
  notFound,
  categories,
  loading,
  variables,
  categoriesPage,
}) => {
  const { t } = useTranslation('common');
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [isMob, setIsMob] = useState(true);
  const router = useRouter();
  const { pathname, query } = router;
  const selectedCategory =
    Boolean(query.category) &&
    findNestedData(categories, query.category, 'children');
  const renderCategories = Boolean(selectedCategory)
    ? selectedCategory?.children
    : Array.isArray(categories)
    ? categories?.filter((category) => !category?.parent_id)
    : [];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMob(false);
      } else {
        setIsMob(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return window.removeEventListener('resize', handleResize);
  });

  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    540: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    820: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
    },

    1280: {
      slidesPerView: 7,
      spaceBetween: 24,
    },
    1800: {
      slidesPerView: 8,
      spaceBetween: 30,
    },
    2600: {
      slidesPerView: 9,
      spaceBetween: 40,
    },
  };

  if (loading) {
    return (
      <div className="hidden xl:block">
        <div className="mt-8 w-72 px-2">
          <CategoriesLoader />
        </div>
      </div>
    );
  }
  if (notFound) {
    return (
      <div className="bg-light">
        <div className="min-h-full p-5 md:p-8 lg:p-12 2xl:p-16">
          <NotFound text="text-no-category" className="h-96" />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-light ">
      <div className="px-3 py-3 pt-3 md:px-6 md:pt-6 lg:px-10 lg:pt-10 lg:pb-10 2xl:px-14  2xl:pt-14">
        <h3 className="mb-8 px-2 pt-2 text-center text-2xl text-[45px] font-semibold leading-none opacity-80">
          {t('homepage.categories.h2')}
        </h3>
        <p className="mx-auto max-w-[832px] text-center text-xl tracking-tight">
          {t('homepage.categories.p')}
        </p>
      </div>

      <div className="p-5 !pt-0 md:px-5 md:py-8 lg:mt-5 lg:py-12 2xl:py-16">
        {categoriesPage ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6">
            {Array.isArray(renderCategories) &&
              renderCategories?.map((item: any, idx: number) => (
                <CategoryCard
                  item={item}
                  link={Routes.products(item.id, item.name)}
                  key={idx}
                />
              ))}
          </div>
        ) : (
          <div>
            {isMob ? (
              <div className="relative">
                <Swiper
                  id="category-card-menu"
                  modules={[Navigation]}
                  navigation={{
                    prevEl,
                    nextEl,
                    disabledClass: 'swiper-button-disabled',
                    hiddenClass: 'swiper-button-hidden',
                  }}
                  breakpoints={breakpoints}
                  slidesPerView={2}
                >
                  {Array.isArray(renderCategories) &&
                    renderCategories?.map((item: any, idx: number) => (
                      <SwiperSlide key={idx}>
                        <div className="w-full ">
                          <CategoryCard
                            item={item}
                            link={Routes.products(item.id, item.name)}
                            key={idx}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
                <div
                  ref={(node) => setPrevEl(node)}
                  className="banner-slider-prev absolute top-1/2 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-light text-heading shadow-300 outline-none transition-colors hover:text-orange-500 focus:outline-none ltr:-left-4 rtl:-right-4"
                >
                  <span className="sr-only">{t('text-previous')}</span>
                  <ArrowPrevIcon />
                </div>
                <div
                  ref={(node) => setNextEl(node)}
                  className="banner-slider-next absolute top-1/2 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-light text-heading shadow-300 outline-none transition-colors hover:text-orange-500 focus:outline-none ltr:-right-4 rtl:-left-4"
                >
                  <span className="sr-only">{t('text-next')}</span>
                  <ArrowNextIcon />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3">
                {Array.isArray(renderCategories) &&
                  renderCategories
                    ?.slice(0, 6)
                    .map((item: any, idx: number) => (
                      <CategoryCard
                        item={item}
                        link={Routes.products(item.id, item.name)}
                        key={idx}
                      />
                    ))}
              </div>
            )}
            <div className="flex w-full justify-center">
              <Link
                className={`${ACTIVE_NAV_LINK_CLASSES} mx-auto mt-[60px] inline-block py-2 px-10 text-xl`}
                href={Routes.categories}
              >
                {t('homepage.categories.button')}
              </Link>
            </div>
          </div>
        )}

        {isEmpty(renderCategories) && (
          <ProductGridHome
            gridClassName="!grid-cols-[repeat(auto-fill,minmax(290px,1fr))]"
            variables={variables}
          />
        )}
      </div>
    </div>
  );
};

export default FilterCategoryGrid;
