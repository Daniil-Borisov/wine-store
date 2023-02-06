import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import { ThumbsCarousel } from '@/components/ui/thumb-carousel';
import { useTranslation } from 'next-i18next';
import { getVariations } from '@/lib/get-variations';
import React, { useMemo } from 'react';
import Truncate from '@/components/ui/truncate';
import { Element } from 'react-scroll';
import CategoryBadges from './category-badges';
import { useRouter } from 'next/router';
import type { Product } from '@/types';
import { useAtom } from 'jotai';
import { stickyShortDetailsAtom } from '@/store/sticky-short-details-atom';
import classNames from 'classnames';
import Accordion from '@/components/ui/accordion';
import xss from 'xss';

type Props = {
  product: Product;
  backBtn?: boolean;
  isModal?: boolean;
};
const Details: React.FC<Props> = ({
  product,
  backBtn = true,
  isModal = false,
}) => {
  const {
    id,
    name,
    images, //could only had image we need to think it also
    short_description,
    long_description,
    more_information,
    stock,
    unit,
    categories,
    gallery,
    quantity,
    price,
    wine_testing,
  } = product ?? {};

  const { t } = useTranslation('common');
  const [_, setShowStickyShortDetails] = useAtom(stickyShortDetailsAtom);
  const router = useRouter();
  // const textToArray = (text: string) => {
  //   const textArray = text.split('<br />');
  //   if (textArray.length === 1 && textArray[0] === '') {
  //     return;
  //   }
  //   if (textArray.length === 1 && textArray[0] !== '') {
  //     return <p className="whitespace-pre-wrap">{text}</p>;
  //   }
  //   return textArray.map((str, index) => {
  //     return <p key={index}>{str}</p>;
  //   });
  // };
  const cleanText = (text: string) => {
    if (text.length === 0) return;
    const clean = xss(text, {
      stripIgnoreTag: true,
      stripIgnoreTagBody: ['script'],
    });
    return (
      <p
        className="whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: clean }}
      />
    );
  };
  const description = [
    {
      title: `Descripción`,
      content: cleanText(long_description),
    },
    {
      title: 'Información adicional',
      content: cleanText(more_information),
    },
    {
      title: 'Maridaje',
      content: cleanText(wine_testing),
    },
  ];

  const variations = useMemo(
    () => getVariations(product?.variations),
    [product?.variations]
  );
  let selectedVariation: any = {};

  // const previewImages = displayImage(selectedVariation?.image, gallery, image);

  return (
    <article className="rounded-lg bg-light">
      <div className="flex flex-col  md:flex-row">
        <div className="p-6 pt-10 md:w-1/2 lg:p-14 xl:p-16">
          <div className="product-gallery h-full">
            <ThumbsCarousel gallery={images} hideThumbs={images.length <= 1} />
          </div>
        </div>
        <div className="flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16">
          <div className="w-full">
            <div className="flex w-full items-start justify-between space-x-8 rtl:space-x-reverse">
              <h1
                className={classNames(
                  `text-lg font-semibold tracking-tight text-heading md:text-xl xl:text-2xl`,
                  {
                    'cursor-pointer transition-colors hover:text-accent':
                      isModal,
                  }
                )}
              >
                {name}
              </h1>
            </div>
            <div className="mt-2 flex items-center justify-between">
              {/*{unit && !hasVariations && (*/}
              {/*  <span className="block text-sm font-normal text-body">*/}
              {/*    {unit}*/}
              {/*  </span>*/}
              {/*)}*/}
            </div>

            <div className="mt-3 text-sm leading-7 text-body md:mt-4">
              <Truncate character={150} compressText={'common:text-see-more'}>
                {cleanText(short_description)}
              </Truncate>
            </div>

            <div className="mt-6">
              <span className="text-[36px] font-semibold tracking-tighter">
                {price}
              </span>
            </div>

            <div className="mt-6 flex flex-col items-center md:mt-6 lg:flex-row">
              <div className="mb-3 w-full lg:mb-0 lg:max-w-[400px]">
                <AddToCart
                  data={product}
                  variant="big"
                  variation={selectedVariation}
                  // disabled={selectedVariation?.is_disable || !isSelected}
                />
              </div>
              {/* <>
                {Number(stock) > 0 ? (
                  <span className="whitespace-nowrap text-base text-body ltr:lg:ml-7 rtl:lg:mr-7">
                    {stock} {t('text-pieces-available')}
                  </span>
                ) : (
                  <div className="whitespace-nowrap text-base text-red-500 ltr:lg:ml-7 rtl:lg:mr-7">
                    {t('text-out-stock')}
                  </div>
                )}
              </> */}
            </div>
          </div>

          {!!categories?.length && <CategoryBadges categories={categories} />}
        </div>
      </div>

      <Element name="details" className="px-5 py-4 lg:px-0 lg:py-14">
        <Accordion items={description} noTitle={true} />
      </Element>
    </article>
  );
};

export default Details;
