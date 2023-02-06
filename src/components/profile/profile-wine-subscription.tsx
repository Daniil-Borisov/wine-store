import arrow from '@/assets/arrow.svg';
import cn from 'classnames';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import wineCellar from '@/assets/wineCellar.svg';
import wineCellarDisable from '@/assets/wineCellarDisable.svg';
import {
  useGetCards,
  useGetIp,
  useGetVoucher,
  useSetCard,
  useWineReject,
  useWineSubscriptionQty,
} from '@/framework/user';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import { useAtom } from 'jotai';
import { threeDSAtom, userCardAtom } from '@/store/checkout';
import { userData } from '@/store/user-atom';
import * as yup from 'yup';
import { useTranslation } from 'next-i18next';
import checkIcon from '@/assets/check.svg';
import AddCardForm from '../checkout/payment/payment-form';
import { ArrowDownIcon } from '../icons/arrow-down';

const cardSchema = yup.object().shape({
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
});

const WineSubscription = ({ data }) => {
  const { t } = useTranslation('common');
  const { current_wine_cellar } = data;
  const { status, type, wine_cellar_fk } = current_wine_cellar;
  const [counter, setCounter] = useState(
    Number(current_wine_cellar.default_quantity ?? 1)
  );
  const [openModificar, setOpenModificar] = useState(true);
  const [openResumen, setOpenResumen] = useState(true);
  const [defaultQty, setDefaultQty] = useState(
    Number(current_wine_cellar.default_quantity ?? 1)
  );
  const { cards, payment } = useGetCards();
  const [userCard, SetUserCard] = useAtom(userCardAtom);
  const { mutate: setCard, isLoading } = useSetCard();
  const { vouchers } = useGetVoucher();
  const [openVouchers, setOpenVouchers] = useState(false);
  const [userAtom] = useAtom(userData);
  const [threeDS, setThreeDS] = useAtom(threeDSAtom);
  const { ip } = useGetIp();
  const { mutate: defaultQuantity } = useWineSubscriptionQty();
  const { mutate: reject } = useWineReject();
  function onSubmit(values: SetUserCard) {
    setCard({
      holder: userAtom.name,
      number: values.number,
      exp_month: values.exp_month?.value ?? '',
      exp_year: values.exp_year?.value
        ? String('20' + values.exp_year?.value)
        : '',
      cvc: values.cvc,
      ip: ip,
      wine_cellar: '1',
      token: userAtom.token,
      client: userAtom.id,
    });
  }
  useEffect(() => {
    cards?.map((el) => {
      if (el.winecellar) {
        SetUserCard(el);
      }
    });
  }, [cards]);

  const handleChangeDefaultQty = () => {
    defaultQuantity({
      token: userAtom.token,
      client: userAtom.id,
      quantity: counter,
    });
    setDefaultQty(counter);
  };

  const handleReject = () => {
    reject({
      token: userAtom.token,
      client: userAtom.id,
      wine_cellar: wine_cellar_fk,
    });
  };

  const handleSetVoucher = (value) => {
    setThreeDS({ ...threeDS, voucher: value });
  };

  const cellar = Array(6).fill(null);

  return (
    <div className="w-full bg-white py-5 px-4 xl:px-12 xl:py-[55px]">
      <h3 className="text-grey-900 mx-auto text-center xl:mb-7">
        {t('subscription.text1')}
      </h3>
      <h2 className="mb-5 text-center text-2xl font-semibold xl:text-[45px]">
        {t('subscription.text2')}
      </h2>
      {/* <p className="mx-auto max-w-[930px] text-center xl:text-xl ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p> */}
      <div className="mt-10 mb-5 px-4 py-8 shadow-350 lg:px-[67px] ">
        <h3 className="text-grey-900 mb-4 text-center text-2xl font-semibold lg:text-left">
          {t('subscription.text3')}
        </h3>
        <div>
          <div className="flex justify-between text-xl">
            <span>
              {defaultQty} {t('subscription.text4')}
            </span>
            <span onClick={() => setOpenModificar(!openModificar)}>
              <span className="hidden xl:inline-block ">
                {t('subscription.text5')}
              </span>
              <span className="ml-2">
                <Image src={arrow} />
              </span>
            </span>
          </div>
          {openModificar ? (
            <div>
              <div className="my-6 w-fit rounded bg-count-bg">
                <button
                  className="rounded-l bg-count-btn-bg py-4 px-5"
                  onClick={() => setCounter(counter - 1 >= 0 ? counter - 1 : 0)}
                >
                  -
                </button>
                <span className="px-6">{counter}</span>
                <button
                  className="rounded-r bg-count-btn-bg py-4 px-5"
                  onClick={() => setCounter(counter + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="rounded border-[1px] border-accent px-6 py-2.5 text-sm text-accent"
                onClick={() => handleChangeDefaultQty()}
              >
                {t('subscription.submit')}
              </button>
              {status && (
                <div className="pt-8">
                  {((status === 'START' && type === 'REJECT') ||
                    status === 'REJECT') && (
                    <>
                      <h3 className="text-grey-900 mb-4 text-center text-xl font-semibold lg:text-left">
                        {t('subscription.text-type-reject')}
                      </h3>
                    </>
                  )}
                  {status === 'START' && type !== 'REJECT' && (
                    <>
                      <button
                        className="rounded border-[1px] border-accent px-6 py-2.5 text-sm text-accent"
                        onClick={() => handleReject()}
                      >
                        {t('subscription.text-button-reject')}
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-10 mb-5 px-4 py-8 shadow-350 lg:px-[67px] ">
        <h3 className="text-grey-900 mb-4 text-center text-2xl font-semibold lg:text-left">
          {t('subscription.text6')}
        </h3>
        <span className="text-xl">{t('subscription.text7')}</span>
        <div>
          <div className="mt-5 flex gap-2 pb-4 lg:gap-5">
            {cellar.map((el, index) => {
              return data?.having_wine_cellar.current_count > index ? (
                <Image src={wineCellar} width={64} height={64} />
              ) : (
                <Image src={wineCellarDisable} width={64} height={64} />
              );
            })}
          </div>
          <span>
            {t('subscription.text8', {
              count: 6 - data?.having_wine_cellar.current_count,
            })}
          </span>
        </div>
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
        <div>
          <div className="mt-8 flex justify-end">
            <span onClick={() => setOpenResumen(!openResumen)}>
              {t('subscription.text9')}
              <span className="ml-2">
                <Image src={arrow} />
              </span>
            </span>
          </div>
          {openResumen ? (
            <div className="mt-5  overflow-auto">
              <div className="flex min-w-[800px] items-center justify-between gap-5  rounded py-4 px-8 text-xl font-semibold shadow-350">
                <span className="w-[90px]">
                  {t('subscription.productTable.col1')}
                </span>
                <span className="flex-1">
                  {t('subscription.productTable.col2')}
                </span>
                <span className="w-[78px]">
                  {t('subscription.productTable.col3')}
                </span>
                <span className="w-[110px]">
                  {t('subscription.productTable.col4')}
                </span>
              </div>
              <div>
                {data?.wine_cellar_orders.map((order, i) => {
                  return (
                    <div
                      className="flex min-w-[800px] items-center justify-between gap-5 py-4 px-8"
                      key={i}
                    >
                      <div className="w-[90px]">
                        <img
                          src={order.product_image}
                          width={58}
                          height={58}
                          alt=""
                        />
                      </div>
                      <span className="flex-1">{order.order_reference}</span>
                      <span className="w-[78px]">{order.total_amount}</span>
                      <span className="w-[110px]">{order.product_name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-10 mb-5 px-4 py-8 shadow-350 lg:px-[67px] ">
        <h3 className="text-grey-900 mb-4 text-2xl">
          {t('subscription.text10')}
        </h3>
        <span className="text-xl">{t('subscription.text11')}</span>
        <div className="users-card">
          <RadioGroup as="div" value={userCard} onChange={SetUserCard}>
            <div className="flex flex-col flex-wrap py-4  lg:px-8">
              {cards?.map((card: any, idx: any) => {
                return (
                  <RadioGroup.Option
                    value={card}
                    key={idx}
                    onClick={() => {
                      userCard === card ? SetUserCard({}) : null;
                    }}
                  >
                    {({ checked }) => (
                      <div
                        className={classNames(' flex items-center gap-4  py-2')}
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
        <div className="max-w-[540px]">
          <AddCardForm
            validationSchema={cardSchema}
            onCheckout={onSubmit}
            loading={isLoading}
            disabled={isLoading}
            hasSaveBtn={true}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default WineSubscription;
