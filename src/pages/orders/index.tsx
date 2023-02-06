import Seo from '@/components/seo/seo';
import { useOrders } from '@/framework/order';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import isEmpty from 'lodash/isEmpty';
import NotFound from '@/components/ui/not-found';
import { getLayout as getSiteLayout } from '@/components/layouts/layout';
import DashboardSidebar from '@/components/dashboard/sidebar';
import OrderView from '@/components/orders/order-view';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useUser } from '@/framework/user';
import { useLogout } from '@/framework/user';
import { useEffect } from 'react';

function NoOrderFound() {
  return (
    <div className="my-auto flex h-[80vh] w-full items-center justify-center rounded bg-light p-5 md:p-8">
      <NotFound text="text-no-order-found" />
    </div>
  );
}
export default function OrdersPage() {
  const { orders, isLoading } = useOrders();
  const { me, error }: any = useUser();
  const { logout } = useLogout();
  if (error === 'CT001') {
    logout();
  }
  useEffect(() => {
    const handler = (event) => {
      if (event.data.error) {
        const data = JSON.parse(event.data);
        console.log('Hello World?', data);
      }
    };

    window.addEventListener('message', handler);

    // clean up
    return () => window.removeEventListener('message', handler);
  }, []); //
  if (isLoading) {
    return (
      <div className="my-auto flex h-[80vh] w-full items-center justify-center rounded bg-light p-5 md:p-8">
        <Spinner simple className="h-10 w-10" />
      </div>
    );
  }

  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <div className="flex w-full flex-col">
        {(orders ?? []).map((order, i) => {
          return <OrderView key={i} order={order} index={i} />;
        })}
      </div>
    </>
  );
}

const getLayout = (page: React.ReactElement) =>
  getSiteLayout(
    <div className="mx-auto flex w-full max-w-1920 flex-col items-start bg-light py-10 px-5 lg:bg-gray-100 xl:flex-row xl:py-14 xl:px-8 2xl:px-14">
      <DashboardSidebar className="hidden shrink-0 ltr:mr-8 rtl:ml-8 xl:block xl:w-80" />
      {page}
    </div>
  );

OrdersPage.authenticationRequired = true;

OrdersPage.getLayout = getLayout;

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
