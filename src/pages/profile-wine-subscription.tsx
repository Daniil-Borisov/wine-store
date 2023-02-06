import WineNoSubscription from '@/components/profile/profile-wine-nosubscription';
import WineSubscription from '@/components/profile/profile-wine-subscription';
import { useLogout, useUser, useWineSubscription } from '@/framework/user';
import DashboardLayout from '@/layouts/_dashboard';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const WineSubscriptionPage = () => {
  const { me, error } = useUser();
  const { wineCellar } = useWineSubscription();
  const { logout } = useLogout();
  if (error === 'CT001') {
    logout();
  }

  if (!me) return null;

  return (
    <>
      {wineCellar ? (
        <WineSubscription data={wineCellar} />
      ) : (
        <WineNoSubscription />
      )}
    </>
  );
};

WineSubscriptionPage.authenticationRequired = true;

WineSubscriptionPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default WineSubscriptionPage;
