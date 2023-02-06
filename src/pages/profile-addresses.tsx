import ProfileAddressGrid from '@/components/profile/profile-address';
import Card from '@/components/ui/cards/card';
import { useTranslation } from 'next-i18next';
import DashboardLayout from '@/layouts/_dashboard';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProfilePage from '@/pages/profile';
import { useGetAddress, useLogout, useUser } from '@/framework/user';

const ProfileAddresses = () => {
  const { t } = useTranslation('common');
  const { addresses, isLoading } = useGetAddress();
  const { me, error }: any = useUser();
  const { logout } = useLogout();
  if (error === 'CT001') {
    logout();
  }

  if (!me) return null;

  return (
    <div className="flex w-full flex-wrap">
      {!isLoading && (
        <Card className="mb-6 w-full" title="Dirección de envío">
          <ProfileAddressGrid
            userId={me}
            addresses={addresses.delivery_addresses}
            label={t('text-delivery-address')}
            type={'delivery'}
          />
        </Card>
      )}

      {!isLoading && (
        <Card className="w-full" title="Dirección de facturación">
          <ProfileAddressGrid
            userId={me}
            type={'billing'}
            addresses={addresses.billing_information}
            label={t('text-billing-address')}
          />
        </Card>
      )}
    </div>
  );
};
ProfileAddresses.authenticationRequired = true;

ProfileAddresses.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ProfileAddresses;
