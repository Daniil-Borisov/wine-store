import WineNoSubscription from '@/components/profile/profile-wine-nosubscription';
import WineSubscription from '@/components/profile/profile-wine-subscription';
import { useGetGourmetProduct } from '@/framework/product';
import {
  useCheckGourmet,
  useLogout,
  useUser,
  useWineSubscription,
} from '@/framework/user';
import DashboardLayout from '@/layouts/_dashboard';
import { drawerAtom } from '@/store/drawer-atom';
import { useCart } from '@/store/quick-cart/cart.context';
import { useAtom } from 'jotai';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const GourmetOroPage = () => {
  const { me, error } = useUser();
  const { wineCellar } = useWineSubscription();
  const { t } = useTranslation();
  const { logout } = useLogout();
  const { gourmetSubscribed } = useCheckGourmet();
  const { gourmetProduct } = useGetGourmetProduct();
  const { addItemToCart } = useCart();
  const [_, setDisplayCart] = useAtom(drawerAtom);
  const handleClick = () => {
    gourmetProduct.id && addItemToCart(gourmetProduct, 1, true);
    setDisplayCart({ display: true, view: 'cart' });
  };

  if (error === 'CT001') {
    logout();
  }

  if (!me) return null;

  return (
    <div className="w-full bg-white py-5 px-4 xl:px-12 xl:py-[55px]">
      <h1 className="mb-12 text-center text-2xl font-bold text-bg-button xl:text-[45px]">
        {t('gourmet-oro.heading')}
      </h1>
      {gourmetSubscribed !== 'gourmetError' && !gourmetSubscribed ? (
        <>
          <p className="mb-7 text-center font-bold">{t('gourmet-oro.text1')}</p>
          <p className="mb-12 text-center font-bold">
            {t('gourmet-oro.text2')}
          </p>
          <p className="text-center font-bold ">{t('gourmet-oro.text3')}</p>
          <div className="mt-8 flex w-full items-center">
            <button
              onClick={() => handleClick()}
              className="mx-auto w-[265px] cursor-pointer rounded bg-bg-button py-2.5 text-center text-sm text-white xl:w-[537px] xl:py-3 xl:text-xl"
            >
              {t('gourmet-oro.button')}
            </button>
          </div>
        </>
      ) : (
        <p className="mb-7 text-center font-bold">
          {t('gourmet-oro.user-text')}
        </p>
      )}
    </div>
  );
};

GourmetOroPage.authenticationRequired = true;

GourmetOroPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default GourmetOroPage;
