import { SetUserCard } from '@/types';
import Card from '@/components/ui/cards/card';
import Input from '@/components/ui/forms/input';
import { Controller } from 'react-hook-form';
import Select from '@/components/ui/select/select';
import Checkbox from '@/components/ui/forms/checkbox/checkbox';
import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/button';
import { Form } from '@/components/ui/forms/form';
import { useTranslation } from 'next-i18next';

interface AddCardFormProps {
  addCard: boolean;
  validationSchema: any;
  onCheckout: any;
  loading: boolean;
  disabled: boolean;
  hasSaveBtn: boolean;
}

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

const AddCardForm: React.FC<AddCardFormProps> = ({
  addCard = true,
  validationSchema,
  onCheckout,
  loading,
  disabled,
  hasSaveBtn,
}) => {
  const { t } = useTranslation();

  return (
    <Form<SetUserCard>
      onSubmit={onCheckout}
      validationSchema={validationSchema}
    >
      {({ register, control, formState: { errors } }) => (
        <>
          {addCard ? (
            <div className="mb-8 flex">
              <Card className="w-full !pb-0 !shadow-none">
                <div className="mb-6 flex-row">
                  <label className="mb-3 block text-sm font-light leading-none text-body-dark">
                    {t('text-card-number')}
                  </label>
                  <Input
                    className="relative flex-1 rounded border-[1px] border-grey px-4"
                    noBorder={true}
                    {...register('card_number', { valueAsNumber: true })}
                    variant="outline"
                    noPadding={true}
                    textXl={true}
                    type={'number'}
                    absoluteError={true}
                    error={t(errors.card_number?.message!)}
                  />
                  <div className="mt-5 flex w-full flex-wrap justify-between">
                    <div className="flex w-full justify-between">
                      <label className="mb-3 block flex-1 text-sm font-light leading-none text-body-dark">
                        {t('card-date')}
                      </label>
                      <label className="mb-3 block w-[30%] text-sm font-light leading-none text-body-dark">
                        CVC
                      </label>
                    </div>
                    <Controller
                      control={control}
                      name={'exp_month'}
                      render={({ field }) => (
                        <div className="relative h-fit w-[30%]">
                          <Select
                            className="h-fit w-full rounded border-[1px] border-grey"
                            onChange={field.onChange}
                            options={months}
                            placeholder={'Mes'}
                            error={t(errors.exp_month?.message!)}
                          />
                        </div>
                      )}
                    />
                    <Controller
                      control={control}
                      name={'exp_year'}
                      render={({ field }) => (
                        <div className="relative h-fit w-[30%]">
                          <Select
                            className="w-full rounded border-[1px] border-grey"
                            onChange={field.onChange}
                            options={getOptionsYears()}
                            placeholder={'Año'}
                            error={t(errors.exp_year?.message!)}
                          />
                        </div>
                      )}
                    />
                    <Input
                      className="relative flex h-fit w-[30%] rounded border-[1px] border-grey px-4"
                      noBorder={true}
                      {...register('cvc')}
                      variant="outline"
                      placeholder="CVC"
                      maxLength={3}
                      noPadding={true}
                      textXl={true}
                      absoluteError={true}
                      error={t(errors.cvc?.message!)}
                    />
                  </div>
                </div>
                <label className="mb-3 block text-sm font-light leading-none text-body-dark">
                  {t('card-name')}
                </label>
                <Input
                  className="relative mb-6 flex-1 rounded border-[1px] border-grey px-4"
                  noBorder={true}
                  {...register('holder')}
                  variant="outline"
                  noPadding={true}
                  textXl={true}
                  absoluteError={true}
                  error={t(errors.holder?.message!)}
                />
                <Checkbox
                  label={t('checkout.checkbox-stripe')}
                  {...register('save_card')}
                />
                {hasSaveBtn && (
                  <div className="flex">
                    <Button
                      className="ltr:ml-auto rtl:mr-auto"
                      loading={loading}
                      disabled={disabled}
                    >
                      {t('text-save')}
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          ) : (
            ''
          )}
          {!hasSaveBtn && (
            <div className="mb-8 flex">
              <Card className="w-full !pt-0">
                <Checkbox
                  label={
                    <React.Fragment>
                      <span>
                        {t('checkout.text-confirm.text1')}{' '}
                        <Link href="javascript:void(0)">
                          <span className="text-sky-900 underline">
                            {t('checkout.text-confirm.link')}
                          </span>
                        </Link>{' '}
                        {t('checkout.text-confirm.text2')}
                      </span>
                    </React.Fragment>
                  }
                  {...register('politica')}
                  error={t(errors.politica?.message!)}
                />
                <span className="my-4 inline-block text-xs text-body">
                  {t('checkout.text-stripe')}
                </span>
                <div className="flex">
                  <Button
                    className="mt-4 w-full rtl:mr-auto"
                    loading={loading}
                    disabled={disabled}
                  >
                    {t('checkout.button')}
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </>
      )}
    </Form>
  );
};

export default AddCardForm;
