import { Image } from '@/components/ui/image';
import cn from 'classnames';
import usePrice from '@/lib/use-price';
import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import { useTranslation } from 'next-i18next';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { productPlaceholder } from '@/lib/placeholders';
import CartIcon from '@/components/icons/cart';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Routes } from '@/config/routes';

type HeliumProps = {
  product: any;
  className?: string;
};

const Helium: React.FC<HeliumProps> = ({ product, className }) => {
  const { t } = useTranslation('common');
  const { name, image, stock, price, id } = product ?? {};

  const router = useRouter();
  const query = router.query;

  return (
    <Link href={Routes.products(String(query.category), id)}>
      <article
        className={cn(
          'product-card cart-type-helium h-full overflow-hidden rounded border border-border-200 bg-light transition-shadow duration-200 hover:shadow-sm',
          className
        )}
      >
        <div
          className="relative flex h-48 w-auto items-center justify-center sm:h-64"
          role="button"
        >
          <span className="sr-only">{t('text-product-image')}</span>
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="contain"
            className="product-image"
          />
        </div>
        {/* End of product image */}

        <header className="relative p-3 md:p-5 md:py-6">
          <h3
            role="button"
            className="mb-2 truncate text-sm font-semibold text-heading"
          >
            {name}
          </h3>
          {/* End of product info */}

          <div className="relative mt-7 flex min-h-6 items-center justify-between md:mt-8">
            <div className="relative">
              <span className="text-sm font-semibold text-accent md:text-base">
                {price}
              </span>
            </div>

            {Number(stock) > 0 && <AddToCart data={product} variant="single" />}

            {Number(stock) <= 0 && (
              <div className="rounded bg-red-500 px-2 py-1 text-xs text-light">
                {t('text-out-stock')}
              </div>
            )}
            {/* End of product price */}
          </div>
        </header>
      </article>
    </Link>
  );
};

export default Helium;
