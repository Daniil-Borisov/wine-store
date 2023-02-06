import { useRouter } from 'next/router';
import Logo from '@/components/ui/logo';
import Input from '@/components/ui/forms/input';
import PasswordInput from '@/components/ui/forms/password-input';
import Button from '@/components/ui/button';
import { Trans, useTranslation } from 'next-i18next';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { Form } from '@/components/ui/forms/form';
import type { RegisterUserInput } from '@/types';
import * as yup from 'yup';
import { useRegister } from '@/framework/user';
import client from '@/framework/client';
import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import DateSelect from '@/components/ui/date-input';
import Link from 'next/link';
import Checkbox from '../ui/forms/checkbox/checkbox';

let regData = { email: '', password: '' };

const RegisterLoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('error-email-format')
    .required('error-email-required'),
  password: yup
    .string()
    .min(6, 'validation_length_password')
    .max(12, 'validation_length_password')
    .required('error-password-required'),
  passwordConfirmation: yup
    .string()
    .min(6, 'validation_length_password')
    .max(12, 'validation_length_password')
    .oneOf([yup.ref('password'), null], 'password_must_match')
    .required('confirm_password_is_required'),
});

const registerFormSchema = yup.object().shape({
  name: yup.string().required('error-name-required'),
  surname: yup.string().required('error-surname-required'),
  nif: yup.string().required('error-nif-required'),
  birthday: yup.string().required('error-birthday-required'),
  politica: yup.boolean().oneOf([true], 'some text'),
});

const getIp = async () => {
  const { data } = await client.ip.get();
  return data.ip;
};

export function RegisterLoginForm() {
  const { t } = useTranslation('common');
  const { openModal } = useModalAction();
  const { mutate, isLoading, formError } = useRegister();

  function onSubmit(data) {
    regData = { ...regData, ...data };
    openModal('REGISTER');
  }

  return (
    <>
      <Form<RegisterUserInput>
        onSubmit={(data) => onSubmit(data)}
        validationSchema={RegisterLoginFormSchema}
      >
        {({ register, formState: { errors } }) => (
          <>
            <Input
              label={t('text-email')}
              {...register('email')}
              type="email"
              variant="outline"
              className="mb-5"
              error={t(errors.email?.message!)}
            />
            <PasswordInput
              label={t('text-password')}
              {...register('password')}
              error={t(errors.password?.message!)}
              variant="outline"
              className="mb-5"
            />
            <PasswordInput
              label={t('text-confirm-password')}
              {...register('passwordConfirmation')}
              error={t(errors.passwordConfirmation?.message!)}
              variant="outline"
              className="mb-5"
            />
            <p className="-mt-4 text-sm text-body">
              {t('password-qty-characters')}
            </p>
            <div className="mt-8">
              <Button
                className="h-12 w-full"
                // loading={isLoading}
                disabled={false}
              >
                {t('text-register')}
              </Button>
            </div>
          </>
        )}
      </Form>
    </>
  );
}

function RegisterForm() {
  const { t } = useTranslation('common');
  const { openModal } = useModalAction();
  const { mutate, isLoading, formError } = useRegister();
  const [ipAddress, setIpAddress] = useState('');
  const [date, setDate] = useState('');

  const formatDate = (date) => {
    // formats a JS date to 'yyyy-mm-dd'
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  useEffect(() => {
    getIp().then(setIpAddress);
  }, []);

  function onSubmit({
    name,
    surname,
    birthday,
    nif,
    email = regData?.email,
    password = regData?.password,
    client_ip = ipAddress,
    rate_code,
  }: RegisterUserInput) {
    mutate({
      name,
      surname,
      birthday,
      nif,
      email,
      password,
      client_ip,
      rate_code,
    });
  }

  return (
    <>
      <Form<RegisterUserInput>
        onSubmit={onSubmit}
        validationSchema={registerFormSchema}
        serverError={formError}
      >
        {({ register, control, formState: { errors } }) => (
          <>
            <Input
              label={t('text-name') + '*'}
              {...register('name')}
              variant="outline"
              className="mb-5"
              error={t(errors.name?.message!)}
            />
            <Input
              label={t('text-surname') + '*'}
              {...register('surname')}
              variant="outline"
              className="mb-5"
              error={t(errors.surname?.message!)}
            />
            <Input
              label={'DNI-NIF*'}
              {...register('nif')}
              variant="outline"
              className="mb-5"
              error={t(errors.nif?.message!)}
            />
            <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
              {t('title-birthday') + '*'}
            </label>
            <Controller
              control={control}
              name={'birthday'}
              render={({ field }) => <DateSelect setDate={field.onChange} />}
            />
            <Input
              placeholder={t('rate-code')}
              {...register('rate_code')}
              variant="outline"
              className="mb-5 mt-5"
              error={t(errors.nif?.message!)}
            />
            <div className="mt-8">
              <Button
                className="h-12 w-full"
                loading={isLoading}
                disabled={isLoading}
              >
                {t('text-register')}
              </Button>
            </div>
            <Checkbox
              className="register-checkbox"
              label={
                <React.Fragment>
                  <p className="mt-2 text-center text-sm text-body">
                    <Trans
                      t={t}
                      components={{
                        1: (
                          <a
                            className="text-accent underline"
                            href={'/politica-privacidad'}
                          />
                        ),
                        2: (
                          <a
                            className="text-accent underline"
                            href={'/condicions-legals'}
                          />
                        ),
                        span: <span className="font-semibold"></span>,
                      }}
                    >
                      {t('text-below-register-btn')}
                    </Trans>
                  </p>
                </React.Fragment>
              }
              {...register('politica')}
            />
          </>
        )}
      </Form>
      <span className="mt-6 text-center text-sm text-body">
        {t('register-bottom-text')}
      </span>
      {/* End of forgot register form */}

      <div className="relative mt-8 mb-6 flex flex-col items-center justify-center text-sm text-heading sm:mt-11 sm:mb-8">
        <hr className="w-full" />
        <span className="absolute -top-2.5 bg-light px-2 ltr:left-2/4 ltr:-ml-4 rtl:right-2/4 rtl:-mr-4">
          {t('text-or')}
        </span>
      </div>
      <div className="text-center text-sm text-body sm:text-base">
        {t('text-already-account')}{' '}
        <button
          onClick={() => openModal('LOGIN_VIEW')}
          className="font-semibold text-accent underline transition-colors duration-200 hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-none ltr:ml-1 rtl:mr-1"
        >
          {t('text-login')}
        </button>
      </div>
    </>
  );
}
export default function RegisterView() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { closeModal } = useModalAction();
  function handleNavigate(path: string) {
    router.push(`/${path}`);
    closeModal();
  }

  return (
    <div className="flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl">
      <div className="mb-4 flex justify-center">
        <Logo />
      </div>
      {/* <p className="mt-4 mb-7 px-2 text-center text-sm leading-relaxed text-body sm:mt-5 sm:mb-10 sm:px-0 md:text-base">
        <Trans
          t={t}
          components={{
            1: <a href={'/politica-privacidad'} />,
            2: <a href={'/condicions-legals'} />,
            span: <span className="font-semibold"></span>,
          }}
        >
          {t('registration-helper')}
        </Trans> */}
      {/* <span
          onClick={() => handleNavigate('terms')}
          className="mx-1 cursor-pointer text-accent underline hover:no-underline"
        >
          {t('text-terms')}
        </span>
        &
        <span
          onClick={() => handleNavigate('privacy')}
          className="cursor-pointer text-accent underline hover:no-underline ltr:ml-1 rtl:mr-1"
        >
          {t('text-policy')}
        </span> */}
      {/* </p> */}
      <RegisterForm />
    </div>
  );
}
