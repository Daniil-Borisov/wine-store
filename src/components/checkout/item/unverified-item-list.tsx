import { useCart } from '@/store/quick-cart/cart.context';
import { useTranslation } from 'next-i18next';
import ItemCard from './item-card';
import EmptyCartIcon from '@/components/icons/empty-cart';
import { ItemInfoRow } from './item-info-row';
import { CheckAvailabilityAction } from '@/components/checkout/check-availability-action';
import TreeMenu from '@/components/ui/tree-menu';
import { motion, AnimatePresence } from 'framer-motion';
import cn from 'classnames';

const UnverifiedItemList = ({
  hideTitle = false,
  cart,
}: {
  hideTitle?: boolean;
  cart?: object;
}) => {
  const { t } = useTranslation('common');
  const { items, total, isEmpty } = useCart();

  return (
    <div className="w-full xl:mb-10">
      <div className="flex flex-col border-b border-border-200 py-3">
        {isEmpty ? (
          <div className="mb-4 flex h-full flex-col items-center justify-center">
            <EmptyCartIcon width={140} height={176} />
            <h4 className="mt-6 text-base font-semibold">
              {t('text-no-products')}
            </h4>
          </div>
        ) : (
          items?.map((item) => <ItemCard item={item} key={item.id} />)
        )}
      </div>
      <div className="mt-4 space-y-2">
        <ItemInfoRow title={t('text-sub-total')} value={cart?.base || null} />
        <ItemInfoRow
          title={t('text-shipping-charge')}
          value={cart?.shipping_charges || null}
        />
        {cart?.promo_code_discount ? (
          <ItemInfoRow
            title={'Código descuento '}
            value={cart?.promo_code_discount.value || null}
          />
        ) : (
          ''
        )}
        {cart?.discount ? (
          <ItemInfoRow
            title={'Código descuento '}
            value={cart?.discount[10] || null}
          />
        ) : (
          ''
        )}
        {cart?.vat[10] ? (
          <ItemInfoRow title={`IVA (10%)`} value={cart?.vat[10] || null} />
        ) : (
          ''
        )}
        {cart?.vat[21] ? (
          <ItemInfoRow title={`IVA (21%)`} value={cart?.vat[21] || null} />
        ) : (
          ''
        )}
        {cart?.voucher_discount ? (
          <ItemInfoRow
            title={`Cheque regalo`}
            value={cart?.voucher_discount || null}
          />
        ) : (
          ''
        )}
        <ItemInfoRow title={t('total')} value={cart?.total || null} />
      </div>
    </div>
  );
};
export default UnverifiedItemList;
