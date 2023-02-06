import { Image } from '@/components/ui/image';
import cn from 'classnames';
import usePrice from '@/lib/use-price';
import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import { useTranslation } from 'next-i18next';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { productPlaceholder } from '@/lib/placeholders';
import { PlusIcon } from '@/components/icons/plus-icon';
import Link from '@/components/ui/link';
import { useRouter } from 'next/router';
import { Routes } from '@/config/routes';
import Placeholder from '@/assets/general.jpg';

type NeonProps = {
  product: any;
  className?: string;
};

const Neon: React.FC<NeonProps> = ({ product, className }) => {
  const { t } = useTranslation('common');
  const {
    name,
    image,
    stock,
    price,
    id,
    crossed_out_value,
    special_pack_title,
  } = product ?? {};

  const router = useRouter();
  const query = router.query;

  return (
    <article
      className={cn(
        'product-card cart-type-neon h-full transform overflow-hidden rounded border border-border-200 bg-light shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow',
        className
      )}
    >
      <Link href={Routes.product(id, name)}>
        <div className="relative flex h-48 w-auto cursor-pointer items-center justify-center sm:h-64">
          <span className="sr-only">{t('text-product-image')}</span>
          <Image
            src={image || Placeholder}
            alt={name}
            layout="fill"
            objectFit="contain"
            className="product-image"
          />
          {special_pack_title ? (
            <div className="absolute top-3 rounded bg-accent px-1.5 text-xs font-semibold leading-6 text-light ltr:right-3 rtl:left-3 sm:px-2 md:top-4 md:px-2.5 ltr:md:right-4 rtl:md:left-4">
              {special_pack_title}
            </div>
          ) : (
            ''
          )}
        </div>
      </Link>
      {/* End of product image */}

      <header className="p-3 md:p-6">
        <Link href={Routes.product(id, name)}>
          <div className="mb-2 flex items-center">
            <span className="text-sm font-semibold text-heading md:text-base">
              {price}
            </span>
            {crossed_out_value != '0,00 €' && (
              <del className="text-xs text-muted ltr:ml-2 rtl:mr-2 md:text-sm">
                {crossed_out_value}
              </del>
            )}
          </div>

          {/* End of product price */}

          <h3 className="mb-4 cursor-pointer truncate text-xs text-body md:text-sm">
            {name}
          </h3>
        </Link>
        {/* End of product title */}
        <>{Number(stock) > 0 && <AddToCart variant="neon" data={product} />}</>
        {Number(stock) <= 0 && (
          <div className="rounded bg-red-500 px-2 py-1.5 text-center text-xs text-light sm:py-2.5">
            {t('text-out-stock')}
          </div>
        )}
        {/* End of add to cart */}
      </header>
    </article>
  );
};

export default Neon;
