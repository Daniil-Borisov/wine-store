import Logo from '@/components/ui/logo';
import Alert from '@/components/ui/alert';
import Input from '@/components/ui/forms/input';
import PasswordInput from '@/components/ui/forms/password-input';
import Button from '@/components/ui/button';
import { useTranslation } from 'next-i18next';
import * as yup from 'yup';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { MobileIcon } from '@/components/icons/mobile-icon';
import { Form } from '@/components/ui/forms/form';
import { useLogin } from '@/framework/user';
import type { LoginUserInput } from '@/types';
import { AnonymousIcon } from '@/components/icons/anonymous-icon';
import { useRouter } from 'next/router';
import { RegisterLoginForm } from '@/components/auth/register-form';

const loginFormSchema = yup.object().shape({
  loginEmail: yup
    .string()
    .email('error-email-format')
    .required('error-email-required'),
  loginPassword: yup.string().required('error-password-required'),
});
function LoginForm({ isCheckoutPage }: any) {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { openModal } = useModalAction();
  const isCheckout = router.pathname.includes('checkout');
  const {
    mutate: login,
    isLoading,
    serverError,
    setServerError,
  } = useLogin(isCheckoutPage.data);

  function onSubmit({
    loginEmail,
    loginPassword,
    language = 'es',
  }: LoginUserInput) {
    login({
      email: loginEmail,
      password: loginPassword,
      language,
    });
  }

  return (
    <>
      <Alert
        variant="error"
        message={serverError && t(serverError)}
        className="mb-6"
        closeable={true}
        onClose={() => setServerError(null)}
      />
      <Form<LoginUserInput>
        onSubmit={onSubmit}
        validationSchema={loginFormSchema}
      >
        {({ register, formState: { errors } }) => (
          <>
            <Input
              label={t('text-email')}
              {...register('loginEmail')}
              type="email"
              variant="outline"
              className="mb-5"
              error={t(errors.loginEmail?.message!)}
            />
            <PasswordInput
              label={t('text-password')}
              {...register('loginPassword')}
              error={t(errors.loginPassword?.message!)}
              variant="outline"
              className="mb-5"
              forgotPageRouteOnClick={() => openModal('FORGOT_VIEW')}
            />
            <div className="mt-8">
              <Button
                className="h-11 w-full sm:h-12"
                loading={isLoading}
                disabled={isLoading}
              >
                {t('text-login')}
              </Button>
            </div>
          </>
        )}
      </Form>
      {/* //===============// */}
    </>
  );
}

export default function LoginView(data) {
  const { t } = useTranslation('common');
  return (
    <div className="flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="my-6 xl:mt-11 xl:mb-16">
        <h2 className="text-center text-xl font-bold">{t('login-title')}</h2>
        <p className="mt-2 mb-4 text-center xl:mb-7">{t('login-text')}</p>
        <LoginForm isCheckoutPage={data} />
      </div>
      <div>
        <h2 className="text-center text-xl font-bold">{t('register-title')}</h2>
        <p className="mt-2 mb-4 text-center xl:mb-7">{t('register-text')}</p>
        <RegisterLoginForm />
      </div>
    </div>
  );
}
