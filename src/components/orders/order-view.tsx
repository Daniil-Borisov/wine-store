import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Link from '@/components/ui/link';
import usePrice from '@/lib/use-price';
import { formatAddress } from '@/lib/format-address';
import { formatString } from '@/lib/format-string';
import { Routes } from '@/config/routes';
import { useTranslation } from 'next-i18next';
import { useCart } from '@/store/quick-cart/cart.context';
import { CheckMark } from '@/components/icons/checkmark';
import Badge from '@/components/ui/badge';
import { OrderItems } from '@/components/orders/order-items';
import { useAtom } from 'jotai';
import { clearCheckoutAtom } from '@/store/checkout';
import SuborderItems from '@/components/orders/suborder-items';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import isEmpty from 'lodash/isEmpty';
import OrderStatuses from '@/components/orders/statuses';
import { useRouter } from 'next/router';
import { userData } from '@/store/user-atom';
import { useGetOrderDetails } from '@/framework/order';
import arrow from '@/assets/arrow.svg';
import Image from 'next/image';

function OrderView({ order, index }: any) {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const [user] = useAtom(userData);
  const params = {
    language: locale,
    token: user.token,
    client: user.id,
  };
  const { orderDetails, isLoading } = useGetOrderDetails(order, params);
  const [isOpen, setIsOpen] = useState(index === 0 ? true : false);

  if (isLoading) {
    return <Spinner showText={false} />;
  }

  return (
    <div className="px-4 pb-8 sm:px-8 ">
      <div className="mx-auto w-full max-w-screen-lg rounded border bg-light p-6 shadow-sm sm:p-8 lg:p-12">
        <div className="mb-9 flex flex-col items-center justify-between text-base font-bold text-heading sm:mb-12 sm:flex-row">
          <div className="flex w-full items-center justify-between">
            <span className="order-2 flex flex-col ltr:mr-auto rtl:ml-auto sm:order-1 sm:mt-0  md:flex-row">
              <span className="ltr:mr-4 rtl:ml-4">{t('text-status')}:</span>
              <Badge
                text={orderDetails.status}
                className="whitespace-nowrap text-sm font-normal"
              />
            </span>
            <span className="order-2" onClick={() => setIsOpen(!isOpen)}>
              <span className="hidden md:inline">{t('details')}</span>
              <span className="ml-2">
                <Image src={arrow} />
              </span>
            </span>
          </div>
          {/*<Link*/}
          {/*  href={Routes.home}*/}
          {/*  className="order-1 inline-flex items-center text-base font-normal text-accent underline hover:text-accent-hover hover:no-underline sm:order-2"*/}
          {/*>*/}
          {/*  {t('text-back-to-home')}*/}
          {/*</Link>*/}
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 md:mb-12 lg:grid-cols-4">
          <div className="rounded border border-border-200 py-4 px-5 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold text-heading">
              {t('text-order-number')}
            </h3>
            <p className="text-sm text-body-dark">{orderDetails.reference}</p>
          </div>
          <div className="rounded border border-border-200 py-4 px-5 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold text-heading">
              {t('text-date')}
            </h3>
            <p className="text-sm text-body-dark">
              {t(dayjs(orderDetails.created).format('MMMM').toLowerCase())}{' '}
              {dayjs(orderDetails.created).format('D, YYYY')}
            </p>
          </div>
          <div className="rounded border border-border-200 py-4 px-5 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold text-heading">
              {t('text-total')}
            </h3>
            <p className="text-sm text-body-dark">
              {orderDetails.total_amount || ''}
            </p>
          </div>
          <div className="rounded border border-border-200 py-4 px-5 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold text-heading">
              {t('text-payment-method')}
            </h3>
            <p className="text-sm text-body-dark">
              {orderDetails.payment_type ?? 'N/A'}
            </p>
          </div>
        </div>
        {/* end of order received  */}

        {/*start of order Status */}
        {/* <div className="mb-8 flex w-full items-center justify-center md:mb-12">
          <OrderStatuses status={1} language={'es'} />
        </div> */}
        {/*end of order Status */}

        {isOpen && (
          <div className="w-full">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-12 w-full lg:mb-0 lg:w-1/2 ltr:lg:pr-3 rtl:lg:pl-3">
                <h2 className="mb-6 text-xl font-bold text-heading">
                  {t('text-total-amount')}
                </h2>
                <div>
                  <p className="mt-5 flex items-baseline text-body-dark">
                    <strong className="w-5/12 text-left text-sm font-semibold text-heading sm:w-4/12">
                      {t('text-sub-total')}
                    </strong>
                    :
                    <span className="w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12 ">
                      {orderDetails.base_amount}
                    </span>
                  </p>
                  <p className="mt-5 flex items-baseline text-body-dark">
                    <strong className="w-5/12 text-left text-sm font-semibold text-heading sm:w-4/12">
                      {t('text-shipping-charge')}
                    </strong>
                    :
                    <span className="w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12 ">
                      {orderDetails.shipping_charges}
                    </span>
                  </p>
                  <p className="mt-5 flex items-baseline text-body-dark">
                    <strong className="w-5/12 text-left text-sm font-semibold text-heading sm:w-4/12">
                      {t('text-tax')}
                    </strong>
                    :
                    <span className="w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12 ">
                      {orderDetails.vat_amount}
                    </span>
                  </p>
                  <p className="mt-5 flex items-baseline text-body-dark">
                    <strong className="w-5/12 text-left text-sm font-semibold text-heading sm:w-4/12">
                      {t('text-discount')}
                    </strong>
                    :
                    <span className="w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12 ">
                      {orderDetails.discount_amount}
                    </span>
                  </p>
                  <p className="mt-5 flex items-baseline text-body-dark">
                    <strong className="w-5/12 text-left text-sm font-semibold text-heading sm:w-4/12">
                      {t('text-total')}
                    </strong>
                    :
                    <span className="w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12">
                      {orderDetails.total_amount || ''}
                    </span>
                  </p>
                  {orderDetails.payment_type && (
                    <p className="mt-5 flex items-baseline text-body-dark">
                      <strong className="w-5/12 text-left text-sm font-semibold text-heading sm:w-4/12">
                        {t('text-paid-from-wallet')}
                      </strong>
                      :
                      <span className="w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12">
                        {orderDetails.payment_type}
                      </span>
                    </p>
                  )}
                </div>
              </div>
              {/* end of total amount */}

              <div className="w-full lg:w-1/2 ltr:lg:pl-3 rtl:lg:pr-3">
                <h2 className="mb-6 text-xl font-bold text-heading">
                  {t('text-order-details')}
                </h2>
                <div>
                  <p className="mt-5 flex items-baseline text-body-dark">
                    <strong className="w-4/12 text-left text-sm font-semibold text-heading">
                      {t('text-total-item')}
                    </strong>
                    :
                    <span className="w-8/12 text-sm ltr:pl-4 rtl:pr-4 ">
                      {formatString(
                        orderDetails.products?.length,
                        t('text-item')
                      )}
                    </span>
                  </p>
                  {!isEmpty(orderDetails.delivery_time) && (
                    <p className="mt-5 flex items-baseline text-body-dark">
                      <strong className="w-4/12 text-left text-sm font-semibold text-heading">
                        {t('text-deliver-time')}
                      </strong>
                      :
                      <span className="w-8/12 text-sm ltr:pl-4 rtl:pr-4 ">
                        {orderDetails.delivery_time}
                      </span>
                    </p>
                  )}
                  {!isEmpty(orderDetails.delivery_address) && (
                    <p className="mt-5 flex items-baseline text-body-dark">
                      <strong className="w-4/12 text-left text-sm font-semibold text-heading">
                        {t('text-shipping-address')}
                      </strong>
                      :
                      <span className="w-8/12 text-sm ltr:pl-4 rtl:pr-4 ">
                        {orderDetails.delivery_zipcode},{' '}
                        {orderDetails.delivery_address},{' '}
                        {orderDetails.delivery_province}
                      </span>
                    </p>
                  )}
                  {!isEmpty(orderDetails.billing_address) && (
                    <p className="mt-5 flex items-baseline text-body-dark">
                      <strong className="w-4/12 text-left text-sm font-semibold text-heading">
                        {t('text-billing-address')}
                      </strong>
                      :
                      <span className="w-8/12 text-sm ltr:pl-4 rtl:pr-4">
                        {orderDetails.billing_zipcode},{' '}
                        {orderDetails.billing_address},{' '}
                        {orderDetails.billing_province}
                      </span>
                    </p>
                  )}
                </div>
              </div>
              {/* end of order details */}
            </div>
            <div className="mt-12">
              <OrderItems
                products={orderDetails.products}
                orderId={orderDetails.id}
              />
            </div>
          </div>
        )}
        {/*{orderDetails.products?.length > 1 ? (*/}
        {/*  <div>*/}
        {/*    <h2 className="mt-12 mb-6 text-xl font-bold text-heading">*/}
        {/*      {t('text-sub-orders')}*/}
        {/*    </h2>*/}
        {/*    <div>*/}
        {/*      <div className="mb-12 flex items-start rounded border border-gray-700 p-4">*/}
        {/*        <span className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-sm bg-dark px-2 ltr:mr-3 rtl:ml-3">*/}
        {/*          <CheckMark className="h-2 w-2 shrink-0 text-light" />*/}
        {/*        </span>*/}
        {/*        <p className="text-sm text-heading">*/}
        {/*          <span className="font-bold">{t('text-note')}:</span>{' '}*/}
        {/*          {t('message-sub-order')}*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*      {Array.isArray(orderDetails.products) && orderDetails.products.length && (*/}
        {/*        <div className="">*/}
        {/*          <SuborderItems items={orderDetails.products} />*/}
        {/*        </div>*/}
        {/*      )}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*) : null}*/}
      </div>
    </div>
  );
}

export default OrderView;
// {
//   const { query } = useRouter();
//   const { order, isLoading } = useOrder({
//     tracking_number: query.tracking_number!.toString(),
//   });
//   if (isLoading) {
//     return <Spinner showText={false} />;
//   }
//   return <OrderView order={order} language={orderDetails.language} />;
// }
