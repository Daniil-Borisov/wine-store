import Button from '@/components/ui/button';
import cn from 'classnames';
import {
  billingAddressAtom,
  shippingAddressAtom,
  threeDSAtom,
  userCardAtom,
} from '@/store/checkout';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useAtom } from 'jotai';
import { userData } from '@/store/user-atom';
import {
  useAddCode,
  useAddPromocode,
  useCheckout,
  useGetCards,
  useGetIp,
  useGetVoucher,
  useShopAddress,
} from '@/framework/user';
import { AddPromocode, AddSubscriptionCode, SetUserCard, User } from '@/types';
import Card from '@/components/ui/cards/card';
import { Form } from '@/components/ui/forms/form';
import Input from '@/components/ui/forms/input';
import Checkbox from '@/components/ui/forms/checkbox/checkbox';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { browserName } from 'react-device-detect';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import { ArrowDownIcon } from '@/components/icons/arrow-down';
import checkIcon from '@/assets/check.svg';
import Select from '@/components/ui/select/select';
import { Controller } from 'react-hook-form';
import CheckboxGroup from '@/components/search-view/checkbox-group';
import AddCardForm from './payment-form';

const months = [
  {
    id: 1,
    label: '01',
    value: '01',
  },
  {
    id: 2,
    label: '02',
    value: '02',
  },
  {
    id: 3,
    label: '03',
    value: '03',
  },
  {
    id: 4,
    label: '04',
    value: '04',
  },
  {
    id: 5,
    label: '05',
    value: '05',
  },
  {
    id: 6,
    label: '06',
    value: '06',
  },
  {
    id: 7,
    label: '07',
    value: '07',
  },
  {
    id: 8,
    label: '08',
    value: '08',
  },
  {
    id: 9,
    label: '09',
    value: '09',
  },
  {
    id: 10,
    label: '10',
    value: '10',
  },
  {
    id: 11,
    label: '11',
    value: '11',
  },
  {
    id: 12,
    label: '12',
    value: '12',
  },
];

const getOptionsYears = () => {
  const years = [];
  for (let i = 22; i < 41; i++) {
    years.push({
      id: i,
      label: String(i),
      value: String(i),
    });
  }
  return years;
};

const PaymentForm = ({ cart }: object) => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const { mutate: checkout, data, isLoading } = useCheckout();
  const { mutate: promocode } = useAddPromocode();
  const addCode = useAddCode();
  const { vouchers } = useGetVoucher();
  const { ip } = useGetIp();
  const { cards, payment } = useGetCards();
  const [userAtom] = useAtom(userData);
  const [shippingAddress] = useAtom(shippingAddressAtom);
  const [billingAddress] = useAtom(billingAddressAtom);
  const [userCard, setUserCard] = useAtom(userCardAtom);
  const [openPromocode, setOpenPromocode] = useState(false);
  const [openSubscription, setOpenSubscription] = useState(false);
  const [addCard, setAddCard] = useState(false);
  const [threeDS, setThreeDS] = useAtom(threeDSAtom);
  const [openVouchers, setOpenVouchers] = useState(false);
  const { shop } = useShopAddress();
  const policeSchema = yup.object().shape(
    addCard
      ? {
          card_number: yup
            .string()
            .min(16, 'error-format-card')
            .max(16, 'error-format-card')
            .required('error-format-card'),
          exp_month: yup.object().required('error-month-required'),
          exp_year: yup.object().required('error-year-required'),
          cvc: yup.string().required('error-cvc-required'),
          holder: yup.string().required('error-format-name'),
          politica: yup.boolean().oneOf([true], 'error-politica'),
        }
      : { politica: yup.boolean().oneOf([true], 'error-politica') }
  );

  const onSubmitSubscribe = (value) => {
    addCode(value.subscribe);
  };

  useEffect(() => {
    return setUserCard({});
  }, []);

  function onCheckout(values: SetUserCard) {
    checkout({
      token: userAtom.token,
      client: userAtom.id,
      language: locale,
      cart: JSON.parse(localStorage.cart).session,
      delivery_address:
        Number(shippingAddress?.id) !== Number(shop[0].id)
          ? Number(shippingAddress?.id)
          : '',
      billing_address: billingAddress?.id ? Number(billingAddress?.id) : '',
      client_ip: ip,
      adyen_reference: userCard.reference ?? '',
      payment: payment[0].payment_type_fk,
      browser: browserName,
      subscriber_code: threeDS.subscribeCode ?? '',
      card_holder: values?.holder ?? '',
      card_number: values?.card_number ?? '',
      card_exp_month: values.exp_month?.value ?? '',
      card_exp_year: values.exp_year?.value
        ? String('20' + values.exp_year?.value)
        : '',
      card_cvc: values.cvc ?? '',
      ip: ip,
      save_card: '1',
      wine_cellar: values.save_card ? '1' : '0',
      promo_code: threeDS.code ?? '',
      voucher: threeDS.voucher ?? '',
      click_and_collect:
        Number(shippingAddress?.id) === Number(shop[0].id)
          ? Number(shippingAddress?.id)
          : 0,
    });
  }

  function onSubmitPromocode(values: AddPromocode) {
    promocode({
      cart: JSON.parse(localStorage.cart).session,
      token: userAtom.token,
      client: userAtom.id,
      language: locale,
      code: values.code,
    });
  }

  const handleSetVoucher = (value: string) => {
    setThreeDS({ ...threeDS, voucher: value });
  };

  return (
    <>
      <div className="mt-4 border-b-[1px] border-border-light pb-4">
        <button
          className="flex w-full items-center justify-between "
          onClick={() => setOpenPromocode(!openPromocode)}
        >
          <h3 className="text-grey-800 text-xl">{t('checkout.promocode')}</h3>
          <ArrowDownIcon
            className={cn('h-3 w-3', {
              'rotate-180 transform': openPromocode,
            })}
          />
        </button>
        {openPromocode && (
          <div>
            <Form<AddPromocode>
              onSubmit={onSubmitPromocode}
              className="mb-4 mt-4 flex gap-4"
            >
              {({ register }) => (
                <>
                  <div className="flex w-full flex-col items-center gap-4 xl:flex-row">
                    <Input
                      className="w-full flex-1 border-none xl:w-auto"
                      noBorder={true}
                      {...register('code')}
                      variant="outline"
                      placeholder={t('checkout.enter-promocode')}
                      textXl={true}
                    />
                    <button className="inline-flex h-10 w-full shrink-0 items-center justify-center rounded border border-transparent bg-accent px-3 py-0 text-sm font-semibold leading-none text-light outline-none transition duration-300 ease-in-out hover:bg-accent-hover focus:shadow focus:outline-none focus:ring-1 focus:ring-accent-700 sm:w-40 lg:w-auto">
                      {t('text-apply')}
                    </button>
                  </div>
                </>
              )}
            </Form>
          </div>
        )}
      </div>
      {!cart?.is_subscriber ? (
        <div className="text-grey-800 justify-between   text-lg">
          <button
            className="flex w-full items-center justify-between py-4"
            onClick={() => {
              setOpenSubscription(!openSubscription);
            }}
          >
            <h3 className="text-grey-800 text-xl">
              {t('checkout.suscriptor')}
            </h3>
            <ArrowDownIcon
              className={cn('h-3 w-3', {
                'rotate-180 transform': openSubscription,
              })}
            />
          </button>
          <div>
            {openSubscription ? (
              <Form<AddSubscriptionCode>
                onSubmit={onSubmitSubscribe}
                className="mb-4 mt-4 flex gap-4"
              >
                {({ register }) => (
                  <>
                    <div className="flex w-full flex-col items-center gap-4 xl:flex-row">
                      <Input
                        className="w-full flex-1 border-none xl:w-auto"
                        noBorder={true}
                        {...register('subscribe')}
                        variant="outline"
                        placeholder={t('checkout.enter-suscriptor-code')}
                        textXl={true}
                      />
                      <button className="inline-flex h-10 w-full shrink-0 items-center justify-center rounded border border-transparent bg-accent px-3 py-0 text-sm font-semibold leading-none text-light outline-none transition duration-300 ease-in-out hover:bg-accent-hover focus:shadow focus:outline-none focus:ring-1 focus:ring-accent-700 sm:w-40 lg:w-auto">
                        {t('text-apply')}
                      </button>
                    </div>
                  </>
                )}
              </Form>
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        ''
      )}
      {vouchers.length ? (
        <div className="border-t-[1px] border-border-light py-4">
          <button
            className="mb-2 flex w-full items-center justify-between"
            onClick={() => setOpenVouchers(!openVouchers)}
          >
            <h3 className="text-grey-800 text-xl">{t('checkout.voucher')}</h3>
            <ArrowDownIcon
              className={cn('h-3 w-3', {
                'rotate-180 transform': openVouchers,
              })}
            />
          </button>

          {openVouchers ? (
            <RadioGroup value={threeDS.voucher} onChange={handleSetVoucher}>
              {vouchers
                ? vouchers.map((el) => {
                    return (
                      <RadioGroup.Option
                        value={el.id}
                        onClick={() => {
                          threeDS.voucher === el.id
                            ? handleSetVoucher('')
                            : null;
                        }}
                      >
                        {({ checked }) => (
                          <React.Fragment>
                            <div className="flex items-center">
                              <div
                                className="mr-6 flex h-6 w-6 cursor-pointer items-center justify-center rounded bg-white"
                                onClick={() =>
                                  checked ? (checked = !checked) : ''
                                }
                              >
                                {checked ? <img src={checkIcon.src} /> : ''}
                              </div>
                              <div className="flex">
                                <p className="mr-4">{el.value}</p>
                                <p>Exp to {el.expiration_date}</p>
                              </div>
                            </div>
                          </React.Fragment>
                        )}
                      </RadioGroup.Option>
                    );
                  })
                : ''}
            </RadioGroup>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}

      <div className=" bg-white pt-10">
        <h3 className="text-center text-[36px]">{t('checkout.h2')}</h3>
        <div className="users-card">
          <div className="flex justify-between px-8 pt-10 text-xl">
            <h3 className=" font-semibold text-bolder">
              {t('checkout.add-card-heading')}
            </h3>
            <button
              onClick={() => setAddCard(!addCard)}
              className="font-light text-accent"
            >
              + {t('checkout.add-card')}
            </button>
          </div>
          <RadioGroup as="div" value={userCard} onChange={setUserCard}>
            <div className="flex flex-col flex-wrap px-4 py-4">
              {cards?.map((card: any, idx: any) => {
                return (
                  <RadioGroup.Option
                    value={card}
                    key={idx}
                    onClick={() => {
                      userCard === card ? setUserCard({}) : null;
                    }}
                  >
                    {({ checked }) => (
                      <div
                        className={classNames(
                          'mr-4 flex items-center gap-4 px-4 py-2'
                        )}
                      >
                        <div
                          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-count-bg"
                          onClick={() => (checked ? (checked = !checked) : '')}
                        >
                          {checked ? <img src={checkIcon.src} /> : ''}
                        </div>
                        <span className="text-xl text-grey">
                          XXXX XXXX XXXX {card.number}
                        </span>
                      </div>
                    )}
                  </RadioGroup.Option>
                );
              })}
            </div>
          </RadioGroup>
        </div>
        <AddCardForm
          validationSchema={policeSchema}
          addCard={addCard}
          onCheckout={onCheckout}
          loading={isLoading}
          disabled={isLoading}
          hasSaveBtn={false}
        />
      </div>
    </>
  );
};

export default PaymentForm;
