import Card from '@/components/ui/cards/card';
import { useTranslation } from 'next-i18next';
import Seo from '@/components/seo/seo';
import ChangePasswordForm from '@/components/auth/change-password-form';
import DashboardLayout from '@/layouts/_dashboard';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useUser } from '@/framework/user';
import { useLogout } from '@/framework/user';

const ChangePasswordPage = () => {
  const { t } = useTranslation('common');
  const { me, error }: any = useUser();
  const { logout } = useLogout();
  if (error === 'CT001') {
    logout();
  }

  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <Card className="w-full">
        <h1 className="mb-5 text-lg font-semibold text-heading sm:mb-8 sm:text-xl xl:text-[36px]">
          {t('change-password')}
        </h1>
        <ChangePasswordForm />
      </Card>
    </>
  );
};
ChangePasswordPage.authenticationRequired = true;

ChangePasswordPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ChangePasswordPage;
