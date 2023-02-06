import { useVinotecaProducts } from '@/framework/product';
import { drawerAtom } from '@/store/drawer-atom';
import { useCart } from '@/store/quick-cart/cart.context';
import { useAtom } from 'jotai';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const WineNoSubscription = () => {
  const { locale } = useRouter();
  const { product } = useVinotecaProducts();
  const { t } = useTranslation();

  const { addItemToCart } = useCart();
  const [_, setDisplayCart] = useAtom(drawerAtom);
  const handleClick = () => {
    product?.welcomeProduct.id &&
      addItemToCart(product.welcomeProduct, 1, true);
    setDisplayCart({ display: true, view: 'cart' });
  };
  return (
    <div className="w-full bg-white px-4 xl:px-12 xl:py-[55px]">
      <h2 className="mb-5 text-center font-bold xl:text-[36px]">
        {t('nosubscription.text1')}
      </h2>
      <p className="mx-auto max-w-[930px] text-center  ">
        {t('nosubscription.text2')}
      </p>
      <div className="mt-[40px] flex justify-center">
        <button
          className="mx-auto h-12 rounded border border-transparent bg-accent px-[86px] py-0 text-light hover:bg-accent-hover"
          onClick={() => handleClick()}
        >
          {t('nosubscription.button')}
        </button>
      </div>
    </div>
  );
};

export default WineNoSubscription;
