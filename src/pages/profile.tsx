import { useTranslation } from 'next-i18next';
import ProfileForm from '@/components/profile/profile-form';
import Seo from '@/components/seo/seo';
import { useLogout, useUser } from '@/framework/user';
import DashboardLayout from '@/layouts/_dashboard';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ProfilePage = () => {
  const { t } = useTranslation('common');
  const { me, error }: any = useUser();
  const { logout } = useLogout();
  if (error === 'CT001') {
    logout();
  }

  if (!me) return null;
  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <div className="w-full overflow-hidden px-1 pb-1">
        <div className="mb-8">
          <ProfileForm user={me} />
        </div>
      </div>
    </>
  );
};

ProfilePage.authenticationRequired = true;

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ProfilePage;
