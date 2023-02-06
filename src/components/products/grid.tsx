import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import Button from '@/components/ui/button';
import ProductLoader from '@/components/ui/loaders/product-loader';
import NotFound from '@/components/ui/not-found';
import rangeMap from '@/lib/range-map';
import ProductCard from '@/components/products/cards/card';
import ErrorMessage from '@/components/ui/error-message';
import { useProducts } from '@/framework/product';
import { CATEGORIES_PER_PAGE } from '@/framework/client/variables';
import type { Product } from '@/types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
  limit?: number;
  sortedBy?: string;
  orderBy?: string;
  column?: 'five' | 'auto' | 'three' | 'four';
  shopId?: string;
  gridClassName?: string;
  products: Product[] | undefined;
  isLoading?: boolean;
  error?: any;
  loadMore?: any;
  isLoadingMore?: boolean;
  hasMore?: boolean;
  className?: string;
}

export function Grid({
  className,
  gridClassName,
  products,
  isLoading,
  error,
  loadMore,
  isLoadingMore,
  hasMore,
  limit = CATEGORIES_PER_PAGE,
  column = 'auto',
}: Props) {
  const { t } = useTranslation('common');

  if (error) return <ErrorMessage message={error.message} />;

  if (!products?.length && !isLoading) {
    return (
      <div className="min-h-full w-full px-4 pt-6 pb-8 lg:p-8">
        <NotFound text="text-not-found" className="mx-auto w-7/12" />
      </div>
    );
  }

  return (
    <div className={cn('w-full', className)}>
      <div
        className={cn(
          {
            'grid-cols-[repeat(auto-fill,minmax(250px, 290px))] grid justify-center gap-3':
              column === 'auto',
            'grid grid-cols-[repeat(auto-fill,minmax(260px,290px))] gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,290px))] xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-11 2xl:grid-cols-5 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]':
              column === 'three',
            'grid grid-cols-[repeat(auto-fill,minmax(260px,290px))] justify-center gap-6 gap-y-10 lg:grid-cols-[repeat(4,minmax(200px,290px))] xl:grid-cols-[repeat(4,minmax(220px,260px))] xl:justify-center xl:gap-5  ':
              column === 'four',
            'grid grid-cols-[repeat(auto-fill,minmax(260px,290px))] justify-center gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,250px))] xl:grid-cols-[repeat(auto-fill,minmax(200px,220px))] xl:justify-center xl:gap-5  2xl:grid-cols-[repeat(5,minmax(220px,260px))]':
              column === 'five',
          },
          gridClassName
        )}
      >
        {isLoading && !products?.length
          ? rangeMap(limit, (i) => (
              <ProductLoader key={i} uniqueKey={`product-${i}`} />
            ))
          : products?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
      </div>
      <div className="mt-8 flex h-12 justify-center lg:mt-12">
        {hasMore && (
          <Button
            // loading={isLoadingMore}
            onClick={loadMore}
            className="h-11 text-sm font-semibold md:text-base"
          >
            {t('text-load-more')}
          </Button>
        )}
      </div>
    </div>
  );
}
interface ProductsGridProps {
  className?: string;
  gridClassName?: string;
  variables?: any;
  column?: 'five' | 'auto';
}
export default function ProductsGrid({
  className,
  gridClassName,
  variables,
  column = 'five',
}: ProductsGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const { products, isLoading, error, has_more } = useProducts(currentPage);
  const { query } = useRouter();
  const [productItems, setProductItems] = useState(products);
  useEffect(() => {
    setProductItems([]);
    setCurrentPage(1);
  }, [query]);

  useEffect(() => {
    !isLoading && setProductItems((prev) => [...prev, ...products]);
  }, [products]);

  return (
    <Grid
      products={productItems}
      loadMore={() => setCurrentPage(currentPage + 1)}
      isLoading={isLoading}
      hasMore={has_more}
      error={error}
      className={className}
      gridClassName={gridClassName}
      column={column}
    />
  );
}
