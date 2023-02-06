import { useRouter } from 'next/router';
import Image from 'next/image';
import cn from 'classnames';
import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import usePrice from '@/lib/use-price';
import { getVariations } from '@/lib/get-variations';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import VariationPrice from './variation-price';
import { useTranslation } from 'next-i18next';
import { Routes } from '@/config/routes';
import { useModalAction } from '@/components/ui/modal/modal.context';
import VariationGroups from './variation-groups';
import type { Product } from '@/types';
import { isVariationSelected } from '@/lib/is-variation-selected';
import { useMemo } from 'react';
import { useAttributes } from './attributes.context';

interface ShortDetailsProps {
  product: Product;
  isSticky: boolean;
}
const ShortDetails: React.FC<ShortDetailsProps> = ({ product, isSticky }) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const { name, price, images, stock } =
    product ?? {};

  const variations = useMemo(
    () => getVariations(product?.variations),
    [product?.variations]
  );

  let selectedVariation: any = {};

  const hasVariations = !isEmpty(variations);
  return (
    <div>
      <div className="flex items-center">
        <div
          className={cn(
            'relative flex shrink-0 items-center justify-center overflow-hidden rounded border border-border-200 border-opacity-70',
            {
              'h-28 w-28': !hasVariations,
              'h-40 w-40 lg:h-52 lg:w-52': hasVariations,
            }
          )}
        >
          <Image
            src={images[0]}
            alt={name}
            layout="fill"
            objectFit="contain"
            className="product-image"
          />
        </div>

        <div className="flex flex-col justify-center overflow-hidden px-8 ltr:mr-auto rtl:ml-auto">
          <h3
            className="cursor-pointer truncate text-lg font-semibold tracking-tight text-heading transition-colors hover:text-accent lg:text-xl"
            title={name}
          >
            {name}
          </h3>

          {/*{unit && !hasVariations ? (*/}
          {/*  <span className="mt-2 block text-sm font-normal text-body">*/}
          {/*    {unit}*/}
          {/*  </span>*/}
          {/*) : (*/}
          {/*  <span className="mt-2 flex items-center">*/}
          {/*    {hasVariations && (*/}
          {/*      <VariationPrice*/}
          {/*        selectedVariation={selectedVariation}*/}
          {/*        minPrice={min_price}*/}
          {/*        maxPrice={max_price}*/}
          {/*      />*/}
          {/*    )}*/}
          {/*  </span>*/}
          {/*)}*/}
        </div>

        <div
          className={cn('flex w-full shrink-0', {
            'max-w-max': !hasVariations,
            'max-w-[40%]': hasVariations,
          })}
        >

          <div className="w-full">
            <div
              className={cn('flex flex-col justify-center overflow-y-auto', {
                'h-[140px]': hasVariations,
              })}
            >
              <VariationGroups variations={variations} />
            </div>

            <div className={cn({ 'mt-4': hasVariations })}>
              {stock! > 0 ? (
                <AddToCart
                  data={product}
                  variant="big"
                  variation={selectedVariation}
                  // disabled={selectedVariation?.is_disable || !isSelected}
                />
              ) : (
                <div className="rounded bg-red-500 px-3 py-2 text-sm text-light">
                  {t('text-out-stock')}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortDetails;
