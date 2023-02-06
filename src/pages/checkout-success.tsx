import Logo from '@/components/ui/logo';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { ACTIVE_NAV_LINK_CLASSES } from '@/const/classes-const';
import { useCheckout3ds } from '@/framework/user';
import { useCart } from '@/store/quick-cart/cart.context';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import Spinner from '@/components/ui/loaders/spinner/spinner';

const CheckoutSuccess = ({ body }) => {
  const { checkout, isLoading } = useCheckout3ds(body);
  const { t } = useTranslation(['common', 'errors']);
  const { resetCart } = useCart();
  const { closeModal } = useModalAction();

  useEffect(() => {
    if (checkout?.error === 'success') {
      resetCart();
      closeModal();
    }
  }, [checkout]);

  const handleClick = (error) => {
    window.top.postMessage(
      {
        error: error,
        closeModal: true,
        successModal: true,
      },
      '*'
    );
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-white p-4">
      <Logo className="mb-20 mt-10" />
      {isLoading ? <Spinner className="absolute top-0" showText={false} /> : ''}

      {checkout?.error === 'success' ? (
        <>
          <h2 className="text-center text-[24px]">
            {' '}
            Tu pedido {checkout.data.order_reference} se ha completado.{' '}
          </h2>
          <a
            className={`${ACTIVE_NAV_LINK_CLASSES} mx-auto my-20 block px-4 py-2 text-xl`}
            onClick={() => handleClick(false)}
          >
            {t('to-orders')}
          </a>
        </>
      ) : (
        <>
          {checkout?.message ? (
            <div className="flex h-screen w-screen flex-col items-center justify-center">
              <h2 className="text-center text-[28px]">
                {t('error-something-wrong')}
              </h2>
              <p className="text-center text-[24px]">{checkout?.error}</p>
              <a
                className={`${ACTIVE_NAV_LINK_CLASSES} mx-auto my-20 block px-4 py-2 text-xl`}
                onClick={() => handleClick(true)}
              >
                {t('close-modal')}
              </a>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export const getServerSideProps = async ({ locale, req }) => {
  const promise = new Promise((res, rej) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      console.log(`Received ${chunk.length} bytes of data.`);
    });

    req.on('end', () => {
      res(body);
    });
    req.on('error', (error) => {
      rej(error);
    });
  });

  const body = await promise;

  return {
    props: {
      body,
      ...(await serverSideTranslations(locale, ['common', 'errors'])),
    },
  };
};

export default CheckoutSuccess;
