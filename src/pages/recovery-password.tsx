import { useModalAction } from '@/components/ui/modal/modal.context';
import { useTranslation } from 'next-i18next';
import Logo from '@/components/ui/logo';
import Alert from '@/components/ui/alert';
import { ArrowPrevIcon } from '@/components/icons/arrow-prev';
import { ArrowNextIcon } from '@/components/icons/arrow-next';
import { locale } from 'dayjs';
import { useRouter } from 'next/router';
import ChangePasswordForm from '@/components/auth/change-password-form';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useQuery } from 'react-query';
import client from '@/framework/client';
import { API_ENDPOINTS } from '@/framework/client/api-endpoints';
import Button from '@/components/ui/button';
import PasswordInput from '@/components/ui/forms/password-input';
import type { ChangePasswordUserInput } from '@/types';
import { Form } from '@/components/ui/forms/form';
import { useChangePassword, useResetPassword, useUser, useVerifyForgotPasswordToken } from '@/framework/user';
import * as yup from 'yup';
import { useAtom } from 'jotai';
import { userData } from '@/store/user-atom';

export const changePasswordSchema = yup.object().shape({
  newPassword: yup.string().required('error-new-password-required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'error-match-passwords')
    .required('error-confirm-password'),
});


function RecoveryUserPassword() {
  const { t } = useTranslation('common');
  const {
    mutate: changePassword,
    isLoading: loading,
    // formError,
  } = useResetPassword();
  const router = useRouter()
  const {recoveryData}  = useVerifyForgotPasswordToken({language: router.locale, ...router.query})  
  
  function onSubmit({ newPassword }: ChangePasswordUserInput) {
    changePassword({
      password: newPassword,
      client: recoveryData,
      hash: router.query.hash
    });
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl">
        <div className="flex justify-center">
          <Logo />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-center mb-7 text-body sm:mt-5 sm:mb-10 md:text-base">
          {t('forgot-password-helper')}
        </p>
        <Form<ChangePasswordUserInput & { passwordConfirmation: string }>
          onSubmit={onSubmit}
          validationSchema={changePasswordSchema}
          className="flex flex-col"
          // serverError={formError}
        >
          {({ register, formState: { errors } }) => (
            <>
              <PasswordInput
                label={t('text-new-password')}
                {...register('newPassword')}
                error={t(errors.newPassword?.message!)}
                className="mb-5"
                variant="outline"
              />
              <PasswordInput
                label={t('text-confirm-password')}
                {...register('passwordConfirmation')}
                error={t(errors.passwordConfirmation?.message!)}
                className="mb-5"
                variant="outline"
              />
              <Button
                loading={loading}
                disabled={loading}
                className="ltr:mx-auto rtl:mr-auto"
              >
                {t('text-submit')}
              </Button>
            </>
          )}
        </Form>

        <div className="relative flex flex-col items-center justify-center text-sm mt-9 mb-7 text-heading sm:mt-11 sm:mb-8">
          <hr className="w-full" />
          <span className="start-2/4 -ms-4 absolute -top-2.5 bg-light px-2">
            {t('text-or')}
          </span>
        </div>
        <div className="text-sm text-center text-body sm:text-base">
          {t('text-back-to')}{' '}
          <button
            onClick={() => openModal('LOGIN_VIEW')}
            className="font-semibold underline transition-colors duration-200 ms-1 text-accent hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-none"
          >
            {t('text-login')}
          </button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
      ...(await serverSideTranslations(locale, ['common']))
  }
});

export default RecoveryUserPassword
