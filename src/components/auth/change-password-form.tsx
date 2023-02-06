import Button from '@/components/ui/button';
import PasswordInput from '@/components/ui/forms/password-input';
import type { ChangePasswordUserInput } from '@/types';
import { useTranslation } from 'next-i18next';
import { Form } from '@/components/ui/forms/form';
import { useChangePassword, useUser } from '@/framework/user';
import * as yup from 'yup';
import { useAtom } from 'jotai';
import { userData } from '@/store/user-atom';

export const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required('error-old-password-required'),
  newPassword: yup.string().required('error-new-password-required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'error-match-passwords')
    .required('error-confirm-password'),
});

export default function ChangePasswordForm({ oldPasswordInput = true }) {
  const { t } = useTranslation('common');
  const { me }: any = useUser();
  const [userAtom] = useAtom(userData);

  const {
    mutate: changePassword,
    isLoading: loading,
    // formError,
  } = useChangePassword();

  function onSubmit({ newPassword }: ChangePasswordUserInput) {
    changePassword({
      password: newPassword,
      name: me.name,
      surname: me.surname,
      email: me.email,
      token: userAtom.token,
      client: userAtom.id,
    });
  }

  return (
    <Form<ChangePasswordUserInput & { passwordConfirmation: string }>
      onSubmit={onSubmit}
      validationSchema={changePasswordSchema}
      className="flex flex-col"
      // serverError={formError}
    >
      {({ register, formState: { errors } }) => (
        <>
          {oldPasswordInput ? (
            <PasswordInput
              label={t('text-old-password')}
              {...register('oldPassword')}
              error={t(errors.oldPassword?.message!)}
              className="mb-5"
              variant="outline"
            />
          ) : (
            ''
          )}
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
            className="ltr:ml-auto rtl:mr-auto"
          >
            {t('text-submit-password')}
          </Button>
        </>
      )}
    </Form>
  );
}
