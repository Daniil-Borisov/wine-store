import { useTranslation } from 'next-i18next';
import Logo from '../ui/logo';
import { useModalAction } from '../ui/modal/modal.context';
import { ACTIVE_NAV_LINK_CLASSES } from '@/const/classes-const';

const CheckoutModalNo3ds = ({ data }) => {
  const { t } = useTranslation();
  const { closeModal } = useModalAction();

  return (
    <div className="flex w-full flex-col items-center bg-white p-4 md:h-[500px] md:w-[400px]">
      <Logo className="mb-20 mt-10" />
      {data.error === 'success' ? (
        <>
          <h2 className="text-center text-[24px]">
            {' '}
            Tu pedido {data.data.order_id} se ha completado.{' '}
          </h2>
          <a
            className={`${ACTIVE_NAV_LINK_CLASSES} mx-auto my-20 block px-4 py-2 text-xl`}
            href="/orders"
            onClick={closeModal}
          >
            {t('to-orders')}
          </a>
        </>
      ) : (
        <>
          <div className="flex  flex-col items-center justify-center">
            <h2 className="max-w-full px-4 text-center text-[28px]">
              {t('error-something-wrong')}
            </h2>
            <p className="max-w-full p-4 text-center text-[24px]">
              {t(`errors:${data?.error}`)}
            </p>
            <span
              className={`${ACTIVE_NAV_LINK_CLASSES} mx-auto my-20 block px-4 py-2 text-xl`}
              onClick={closeModal}
            >
              {t('close-modal')}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutModalNo3ds;
