import type { HomePageProps } from '@/types';
import TextBanner from '@/components/text-banner/textBanner';
import BannerShort from '@/components/banners/banner-short';
import FilterCategoryGrid from '@/components/categories/filter-category-grid';
import PromotionCards from '@/components/promotions/promotion-card';
import Accordion from '@/components/ui/accordion';
import { faq } from '@/framework/static/faq';
import { Grid } from '../products/grid';

import Gallery from '../home-page/gallery';
import HomePageVinoteca from '../home-page/vinoteca';
import { Trans, useTranslation } from 'next-i18next';
import { useNewProducts } from '@/framework/product';
import dynamic from 'next/dynamic';
import { useLogout } from '@/framework/user';
import { ACTIVE_NAV_LINK_CLASSES } from '@/const/classes-const';
import { Routes } from '@/config/routes';
import Link from '../ui/link';

const TopManufacturersGrid = dynamic(
  () => import('@/components/manufacturer/top-manufacturers-grid'),
  { ssr: false }
);

export default function ClassicLayout({ variables }: HomePageProps) {
  const { t } = useTranslation('common');
  const { categories, promotionCards } = variables;
  const { newProducts, newProductsError } = useNewProducts();
  const { logout } = useLogout();
  if (newProductsError === 'CT001') {
    logout();
  }

  return (
    <div className="overflow-hidden">
      <div>
        <BannerShort
          layout="modern"
          bannersMob={variables.banner.slider}
          banners={variables.banner.slider}
        />
      </div>
      <TextBanner>
        <div className=" text-center text-light opacity-80">
          <h1>
            <p className="text-center text-xl leading-tight xl:text-[45px]">
              {t('homepage.text-banner.h2')}
            </p>
            <p className="text-center text-xl font-bold leading-tight xl:text-[45px]">
              {t('homepage.text-banner.h2-bold')}
            </p>
          </h1>
          <p className="mx-auto mt-7 max-w-[1085px] text-center tracking-tight xl:text-xl">
            <Trans
              t={t}
              components={{
                b: <b className="text-white" />,
              }}
            >
              {t('homepage.text-banner.p')}
            </Trans>
          </p>
        </div>
      </TextBanner>
      <div className="bg-white">
        <div className="mx-auto max-w-[1440px] pt-[120px]">
          <FilterCategoryGrid
            categories={
              Array.isArray(categories.home_categories)
                ? categories.home_categories.slice(0, 6)
                : []
            }
            notFound={false}
            loading={false}
            variables={undefined}
            categoriesPage={undefined}
          />
        </div>
      </div>
      <Gallery />
      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1140px] bg-white  py-10 px-4 xl:py-[160px]">
          <h2 className="pb-5 text-center text-[45px] font-semibold opacity-80">
            {t('homepage.new-products.h2')}
          </h2>
          <p className="mx-auto max-w-[860px] pb-[60px] text-center text-xl">
            {t('homepage.new-products.p')}
            <Link href={'javascript:void(0)'}>
              <span className="cursor-pointer font-bold">
                {t('homepage.new-products.link')}
              </span>
            </Link>
            .
          </p>
          <Grid
            products={newProducts as any}
            loadMore={false}
            isLoading={false}
            isLoadingMore={false}
            hasMore={false}
            error={false}
            column="four"
          />
          <div className="flex w-full justify-center">
            <Link
              className={`${ACTIVE_NAV_LINK_CLASSES} mx-auto -mt-[30px] inline-block py-2 px-10 text-xl`}
              href={Routes.products('10548', 'novetats')}
            >
              {t('homepage.categories.button')}
            </Link>
          </div>
        </div>
      </div>
      <PromotionCards promotionCards={promotionCards} />
      {variables?.vinotecaProduct.welcomeProduct ? (
        <div className="bg-white pb-20 lg:pt-[120px] lg:pb-[146px]">
          <h2 className="text-center text-[30px] font-bold xl:text-[45px]">
            {t('homepage.vinoteca.h2')}
          </h2>
          <p className=" mb-5 text-center text-sm font-normal">
            {t('homepage.vinoteca.p')}
          </p>
          <HomePageVinoteca
            products={variables?.vinotecaProduct}
            homepage={true}
          />
        </div>
      ) : (
        ''
      )}
      <TopManufacturersGrid
        brands={variables?.brands}
        title={'text-top-manufacturer'}
      />
      <div className="bg-light">
        <div className="mx-auto w-full max-w-screen-lg ">
          <Accordion items={faq} translatorNS="faq" noTitle={false} />
        </div>
      </div>
    </div>
  );
}
