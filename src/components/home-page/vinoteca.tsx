import { Image } from '@/components/ui/image';
import VinotecaImage from '@/assets/vinotecaBanner.png';
import VinotecaIcon1 from '@/assets/vinoteca-icon1.svg';
import VinotecaIcon2 from '@/assets/vinoteca-icon2.svg';
import VinotecaIcon3 from '@/assets/vinoteca-icon3.svg';
import VinotecaIcon4 from '@/assets/vinoteca-icon4.svg';
import { useCart } from '@/store/quick-cart/cart.context';
import { useTranslation } from 'next-i18next';
import { drawerAtom } from '@/store/drawer-atom';
import { useAtom } from 'jotai';
import { useWineSubscription } from '@/framework/user';
import { Router, useRouter } from 'next/router';

const HomePageVinoteca = ({ products, homepage }: any) => {
  const { t } = useTranslation('common');
  const { addItemToCart } = useCart();
  const { welcomeProduct } = products;
  const router = useRouter();
  const [_, setDisplayCart] = useAtom(drawerAtom);
  const handleClick = () => {
    products.welcomeProduct.id &&
      addItemToCart(products.welcomeProduct, 1, true);
    setDisplayCart({ display: true, view: 'cart' });
  };
  const { wineCellar, error } = useWineSubscription();

  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="relative xl:mt-[70px] xl:mb-[140px] ">
        {!homepage ? (
          <>
            <h1 className="px-8 text-xs font-light text-vinoteca-heading">
              {t('vinoteca-page.homepage-vinoteca.h1')}
            </h1>
            <h3 className="px-8 pb-2.5 text-[30px] text-xl font-semibold text-accent lg:w-[48%] lg:max-w-[48%] lg:text-[40px] lg:leading-tight xl:whitespace-nowrap xl:text-[48px] 2xl:text-[55px]">
              {t('vinoteca-page.homepage-vinoteca.h2')}
            </h3>
          </>
        ) : (
          ''
        )}
        <div className="relative w-full px-8 pt-8 pb-[135px] text-white lg:pb-12">
          <div className="absolute top-1/2 -right-1/2 -z--1 h-full w-[150vw] -translate-y-1/2 bg-bg-text-banner"></div>
          <div className="relative z-10 max-w-[727px] text-base font-light tracking-tight lg:w-1/2 lg:text-xl">
            {homepage ? (
              <h3 className="max-w-[214px] pb-2.5 text-xl font-light lg:max-w-full lg:text-[40px] lg:leading-tight xl:whitespace-nowrap xl:text-[48px] 2xl:text-[55px]">
                {t('vinoteca-page.homepage-vinoteca.h2')}
              </h3>
            ) : (
              ''
            )}
            {t('vinoteca-page.homepage-vinoteca.p')}
          </div>
        </div>
        <div className="relative z-10 -mt-[200px] px-8  lg:absolute lg:-right-10 lg:top-1/2 lg:mt-0 lg:w-[620px] lg:-translate-y-1/2 xl:w-[663px]">
          <Image
            src={welcomeProduct.images[0]}
            layout={'responsive'}
            width={100}
            height={100}
            objectFit="contain"
          />
          <span className=" absolute right-16 bottom-12 lg:bottom-20 xl:right-20 xl:bottom-28 ">
            {welcomeProduct.name}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-between px-8 py-14">
        <div className="mb-4 flex items-center rounded px-4 pt-5 pb-4 shadow-300 md:w-[49%] xl:w-[24%] xl:max-w-[366px]">
          <div className="flex w-[49px] flex-shrink-0 items-center justify-center">
            <Image src={VinotecaIcon1} />
          </div>
          <p className="ml-5 text-sm tracking-tight">
            {t('vinoteca-page.homepage-vinoteca.items.1')}
          </p>
        </div>
        <div className="mb-4 flex items-center rounded px-4 pt-5 pb-4 shadow-300 md:w-[49%] xl:w-[24%] xl:max-w-[366px]">
          <div className="flex w-[49px] flex-shrink-0 items-center justify-center">
            <Image src={VinotecaIcon2} />
          </div>
          <p className="ml-5 text-sm tracking-tight">
            {t('vinoteca-page.homepage-vinoteca.items.2')}
          </p>
        </div>
        <div className="mb-4 flex items-center rounded px-4 pt-5 pb-4 shadow-300 md:w-[49%] xl:w-[24%] xl:max-w-[366px]">
          <div className="flex w-[49px] flex-shrink-0 items-center justify-center">
            <Image src={VinotecaIcon3} />
          </div>
          <p className="ml-5 text-sm tracking-tight">
            {t('vinoteca-page.homepage-vinoteca.items.3')}
          </p>
        </div>
        <div className="mb-4 flex items-center rounded px-4 pt-5 pb-4 shadow-300 md:w-[49%] xl:w-[24%] xl:max-w-[366px]">
          <div className="flex w-[49px] flex-shrink-0 items-center justify-center">
            <Image src={VinotecaIcon4} />
          </div>
          <p className="ml-5 text-sm tracking-tight">
            {t('vinoteca-page.homepage-vinoteca.items.4')}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        {error === 'success' && wineCellar ? (
          <button
            onClick={() => router.push('/profile-wine-subscription')}
            className="mx-auto w-[265px] cursor-pointer rounded bg-bg-button py-2.5 text-center text-sm text-white xl:w-[537px] xl:py-3 xl:text-xl"
          >
            <p className="text-center">{t('compar-button2')}</p>
          </button>
        ) : (
          <button
            onClick={() => handleClick()}
            className="mx-auto w-[265px] cursor-pointer rounded bg-bg-button py-2.5 text-center text-sm text-white xl:w-[537px] xl:py-3 xl:text-xl"
          >
            <p className="text-center">{t('compar-button')}</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePageVinoteca;
