import { useTranslation } from 'next-i18next';
import Seo from '@/components/seo/seo';
import Accordion from '@/components/ui/accordion';
import { faq } from '@/framework/static/faq-vinoteca';
import HomeLayout from '@/components/layouts/_home';
import HomePageVinoteca from '@/components/home-page/vinoteca';
import { Image } from '@/components/ui/image';
import { useState } from 'react';
import classNames from 'classnames';
import razones1 from '@/assets/razones1.svg';
import razones2 from '@/assets/razones2.svg';
import razones3 from '@/assets/razones3.svg';
import razones4 from '@/assets/razones4.svg';
import razones5 from '@/assets/razones5.svg';
import razones6 from '@/assets/razones6.svg';
import vinotecaFaq1 from '@/assets/vinoteca-faq1.svg';
import vinotecaFaq2 from '@/assets/vinoteca-faq2.svg';
import { useUser, useWineSubscription } from '@/framework/user';
import { useLogout } from '@/framework/user';
import { useVinotecaProducts } from '@/framework/product';
import { drawerAtom } from '@/store/drawer-atom';
import { useCart } from '@/store/quick-cart/cart.context';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import xss from 'xss';

const Card = ({ product }: any) => {
  const [tab, setTab] = useState('nota');
  const { me, error }: any = useUser();
  const { logout } = useLogout();
  const { t } = useTranslation();
  if (error === 'CT001') {
    logout();
  }

  const cleanText = (text: string) => {
    const clean = xss(text, {
      stripIgnoreTag: true,
      stripIgnoreTagBody: ['script'],
      whiteList: {
        p: ['style'],
        span: ['style'],
        br: [],
        strong: ['style'],
        div: ['style'],
        h2: ['style'],
        h3: ['style'],
        h4: ['style'],
        h5: ['style'],
        h6: ['style'],
        ul: ['style'],
        li: ['style'],
        ol: ['style'],
      },
    });
    return { __html: clean };
  };

  return (
    <>
      <div className="mb-7 max-w-[315px] rounded bg-white px-5 pt-2 pb-4 shadow-350 xl:mb-0 xl:flex xl:max-w-[554px] xl:justify-between">
        <div className="] mr-4 w-full flex-shrink-0 xl:flex xl:w-[200px] xl:flex-col xl:justify-center">
          <img
            src={product.image}
            className="mb-4 h-full max-h-[250px] object-contain xl:mb-0 xl:max-h-[405px]"
          />
        </div>
        <div>
          <h3 className="mb-1 text-base font-bold">{product.name}</h3>
          <div
            className="whitespace-pre-wrap text-sm"
            dangerouslySetInnerHTML={cleanText(product.short_description)}
          />
          <div className="my-3 flex justify-between">
            <span
              className={classNames(
                'cursor-pointer rounded py-1 px-2 text-xs shadow',
                { 'border-2 border-accent text-accent': tab === 'nota' }
              )}
              onClick={() => setTab('nota')}
            >
              Nota de cata
            </span>
            <span
              className={classNames(
                'cursor-pointer rounded py-1 px-2 text-xs shadow',
                { 'border-2 border-accent text-accent': tab === 'maridaje' }
              )}
              onClick={() => setTab('maridaje')}
            >
              {t('maridaje')}
            </span>
            <span
              className={classNames(
                'cursor-pointer rounded py-1 px-2 text-xs shadow',
                { 'border-2 border-accent text-accent': tab === 'comment' }
              )}
              onClick={() => setTab('comment')}
            >
              {t('comentarios')}
            </span>
          </div>
          <div>
            {tab === 'nota' && (
              <div
                className="whitespace-pre-wrap text-sm"
                dangerouslySetInnerHTML={cleanText(product.wine_testing)}
              />
            )}
            {tab === 'maridaje' && (
              <div
                className="whitespace-pre-wrap text-sm"
                dangerouslySetInnerHTML={cleanText(product.pairing)}
              />
            )}
            {tab === 'comment' && (
              <div
                className="whitespace-pre-wrap text-sm"
                dangerouslySetInnerHTML={cleanText(product.comments)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Vinoteca = ({ vinotecaProduct }: any) => {
  const { t } = useTranslation('common');
  const { welcomeProduct } = vinotecaProduct;
  const { wineCellar, error } = useWineSubscription();
  const { product } = useVinotecaProducts();

  const { addItemToCart } = useCart();
  const [_, setDisplayCart] = useAtom(drawerAtom);
  const router = useRouter();
  const handleClick = () => {
    product?.welcomeProduct.id &&
      addItemToCart(product.welcomeProduct, 1, true);
    setDisplayCart({ display: true, view: 'cart' });
  };

  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <div className="overflow-hidden bg-white pb-20 pt-6 xl:pt-20">
        {welcomeProduct ? (
          <HomePageVinoteca products={vinotecaProduct} homepage={false} />
        ) : (
          ''
        )}
      </div>
      <div className="bg-bg-text-banner  py-[60px]">
        <h2 className="mb-4 px-8 text-center text-[30px] font-bold text-white opacity-80 xl:mb-7 xl:text-[45px]">
          {t('vinoteca-page.products.h2')}
        </h2>
        <p className="mx-auto mb-8 max-w-[830px] px-8 text-center text-sm text-white xl:mb-10 xl:text-xl">
          {t('vinoteca-page.products.p')}
        </p>
        <div className="py-8">
          <div className="mx-auto max-w-[1900px] ">
            <div className="flex flex-wrap justify-center gap-4">
              {welcomeProduct?.product_pack.length &&
                welcomeProduct.product_pack.map((product: any, id: number) => {
                  return <Card product={product} key={id} />;
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-[44px] xl:pt-[85px] ">
        <h2 className="mb-9 text-center text-[30px] font-bold text-heading xl:mb-20 xl:text-[45px]">
          {t('vinoteca-page.razones.h2')}
        </h2>
        <div className="relative mb-[37px] xl:mb-[97px]">
          <div className="z-1 absolute top-1/2 h-3/4 w-screen -translate-y-1/2 bg-bg-text-banner"></div>
          <div className="z-2 relative  mx-auto flex max-w-[1440px] flex-wrap justify-center gap-5 xl:gap-x-[64px] xl:gap-y-8">
            <div className="flex w-5/12 flex-col items-center rounded bg-white px-4 pt-6 pb-7 shadow-350 xl:w-[27%] xl:py-[44px] xl:px-[60px]">
              <Image src={razones1} />
              <p className="mt-3 text-center text-xs xl:text-xl ">
                {t('vinoteca-page.razones.items.1')}
              </p>
            </div>
            <div className="flex w-5/12 flex-col items-center rounded bg-white px-4 pt-6 pb-7 shadow-350 xl:w-[27%] xl:py-[44px] xl:px-[60px]">
              <Image src={razones2} />
              <p className="mt-3 text-center text-xs xl:text-xl ">
                {t('vinoteca-page.razones.items.2')}
              </p>
            </div>
            <div className="flex w-5/12 flex-col items-center rounded bg-white px-4 pt-6 pb-7 shadow-350 xl:w-[27%] xl:py-[44px] xl:px-[60px]">
              <Image src={razones3} />
              <p className="mt-3 text-center text-xs xl:text-xl ">
                {t('vinoteca-page.razones.items.3')}
              </p>
            </div>
            <div className="flex w-5/12 flex-col items-center rounded bg-white px-4 pt-6 pb-7 shadow-350 xl:w-[27%] xl:py-[44px] xl:px-[60px]">
              <Image src={razones4} />
              <p className="mt-3 text-center text-xs xl:text-xl ">
                {t('vinoteca-page.razones.items.4')}
              </p>
            </div>
            <div className="flex w-5/12 flex-col items-center rounded bg-white px-4 pt-6 pb-7 shadow-350 xl:w-[27%] xl:py-[44px] xl:px-[60px]">
              <Image src={razones5} />
              <p className="mt-3 text-center text-xs xl:text-xl ">
                {t('vinoteca-page.razones.items.5')}
              </p>
            </div>
            <div className="flex w-5/12 flex-col items-center rounded bg-white px-4 pt-6 pb-7 shadow-350 xl:w-[27%] xl:py-[44px] xl:px-[60px]">
              <Image src={razones6} />
              <p className="mt-3 text-center text-xs xl:text-xl ">
                {t('vinoteca-page.razones.items.6')}
              </p>
            </div>
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
      <div className="bg-light py-[44px] px-6">
        <div className="mx-auto w-full max-w-screen-lg ">
          <h2 className="text-center text-[30px] font-semibold text-heading xl:text-[45px]">
            {t('vinoteca-page.text')}
          </h2>
          <Accordion items={faq} translatorNS="faq" noTitle={true} />
          <div className="-mt-2 mb-20 flex justify-end gap-4">
            <Image src={vinotecaFaq1} />
            <Image src={vinotecaFaq2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vinoteca;
