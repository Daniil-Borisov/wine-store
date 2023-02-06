import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import { getLayout } from '@/components/layouts/layout';
import { AddressType } from '@/framework/utils/constants';
import Seo from '@/components/seo/seo';
import {
  useGetAddress,
  useLogout,
  useShopAddress,
  useUser,
  useUserCart,
} from '@/framework/user';
import {
  billingAddressAtom,
  shippingAddressAtom,
  threeDSAtom,
} from '@/store/checkout';
import StripeForm from '@/components/checkout/payment/stripe';
import Router from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { useAtom } from 'jotai';
import { useCart } from '@/store/quick-cart/cart.context';
import { useModalAction } from '@/components/ui/modal/modal.context';

const ScheduleGrid = dynamic(
  () => import('@/components/checkout/schedule/schedule-grid')
);
const AddressGrid = dynamic(
  () => import('@/components/checkout/address-grid'),
  { ssr: false }
);
const ContactGrid = dynamic(
  () => import('@/components/checkout/contact/contact-grid')
);
const RightSideView = dynamic(
  () => import('@/components/checkout/right-side-view'),
  { ssr: false }
);

function CheckoutPage() {
  const { t } = useTranslation();
  const { me } = useUser();
  const { cart, error } = useUserCart();
  const { resetCart } = useCart();
  const { id, address, profile } = me ?? {};
  const { addresses, isLoading } = useGetAddress();
  const { shop } = useShopAddress();
  const [typeOfDelivery, setTypeOfDelivery] = useState('address');
  const [showBillingAddress, setShowBillingAddress] = useState(false);
  const emptyStorageCart = JSON.parse(localStorage.cart).isEmpty;
  const [shippingAddress, setShippingAddress] = useAtom(shippingAddressAtom);
  const { logout } = useLogout();
  const { closeModal } = useModalAction();
  const [threeDS, setThreeDS] = useAtom(threeDSAtom);

  useEffect(() => {
    typeOfDelivery === 'shop'
      ? setShippingAddress({ ...shop[0] })
      : setShippingAddress({ id: '' });
  }, [typeOfDelivery]);

  useEffect(() => {
    const handler = (event) => {
      if (event.data.successModal) {
        console.log('error');

        const data = event.data;
        if (data.closeModal) {
          closeModal();
        }
        if (!data.error) {
          resetCart();
        }
      }
    };
    window.addEventListener('message', handler);

    return () => window.removeEventListener('message', handler);
  }, []);

  if (emptyStorageCart) {
    Router.push('/orders');
    resetCart();
  }

  if (error === 'CT001') {
    logout();
  }

  useEffect(() => {
    return setThreeDS({});
  }, []);

  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <div className="w-full bg-gray-100 px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <div className=" mx-auto flex w-full max-w-[1520px] flex-col items-center rtl:space-x-reverse lg:flex-row lg:items-start lg:space-x-8">
          <div className="w-full space-y-6 lg:max-w-5xl">
            <div className="bg-light p-5 shadow-700 md:p-8">
              <div className="-mt-8 flex justify-center">
                <RadioGroup value={typeOfDelivery} onChange={setTypeOfDelivery}>
                  <div className="flex gap-10">
                    <RadioGroup.Option value={'address'} key={'address'}>
                      {({ checked }: { checked: boolean }) => (
                        <button
                          className={classNames('py-5 text-xl text-accent ', {
                            'box-border border-t-[3px] border-accent pt-[17px]':
                              checked,
                          })}
                        >
                          <span
                            className={classNames({
                              'inline-block rounded bg-accent px-2 text-light transition-all':
                                checked,
                            })}
                          >
                            {t('checkout.tab1')}
                          </span>
                        </button>
                      )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value={'shop'} key={'shop'}>
                      {({ checked }: { checked: boolean }) => (
                        <button
                          className={classNames('py-5 text-xl text-accent ', {
                            'box-border border-t-[3px] border-accent pt-[17px]':
                              checked,
                          })}
                        >
                          <span
                            className={classNames({
                              'inline-block rounded bg-accent px-2 text-light transition-all':
                                checked,
                            })}
                          >
                            {t('checkout.tab2')}
                          </span>
                        </button>
                      )}
                    </RadioGroup.Option>
                  </div>
                </RadioGroup>
              </div>
              {typeOfDelivery === 'address' ? (
                <AddressGrid
                  userId={id!}
                  className=""
                  label={t('text-shipping-address')}
                  //@ts-ignore
                  addresses={addresses?.delivery_addresses}
                  atom={shippingAddressAtom}
                  type={'delivery'}
                />
              ) : (
                <div className="border-t-[1px] border-t-border-light">
                  <h2 className="mb-9 text-[36px] text-heading">
                    {t('checkout.tab2')}
                  </h2>
                  <p className=" font-tight mb-2 text-base">
                    {shop[0].address}
                  </p>
                  <p className=" font-tight mb-2 text-base">
                    {shop[0].zip_code}
                  </p>
                  <p className=" font-tight mb-2 text-base">{shop[0].city}</p>
                </div>
              )}
            </div>
            <div className="bg-light p-5 shadow-700 md:p-8">
              <div className="mb-10 flex items-center justify-between border-b-[1px] border-t-border-light pb-5">
                <h3>{t('check-billing-address')}</h3>
                <input
                  className="h-5 w-5"
                  type="checkbox"
                  name="billing_address"
                  id=""
                  value={showBillingAddress}
                  onChange={(e) => setShowBillingAddress(e.target.checked)}
                />
              </div>
              {showBillingAddress ? (
                <AddressGrid
                  userId={me?.id!}
                  className=""
                  label={t('text-billing-address')}
                  //@ts-ignore
                  addresses={addresses?.billing_information}
                  atom={billingAddressAtom}
                  type={'billing'}
                />
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="mt-10 mb-10 w-full sm:mb-12 lg:mb-0 lg:mt-0 lg:max-w-[500px]">
            <RightSideView cart={cart} />
            <StripeForm cart={cart} />
          </div>
        </div>
      </div>
    </>
  );
}
CheckoutPage.authenticationRequired = true;
CheckoutPage.getLayout = getLayout;

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'errors'])),
    },
  };
};

export default CheckoutPage;
