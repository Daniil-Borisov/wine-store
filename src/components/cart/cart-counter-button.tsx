import { drawerAtom } from '@/store/drawer-atom';
import { useCart } from '@/store/quick-cart/cart.context';
import { useAtom } from 'jotai';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import FixedImage from '@/assets/fixed-logo.png';
import { useRouter } from 'next/router';

const CartCounterButton = () => {
  const { t } = useTranslation();
  const { totalUniqueItems, total } = useCart();
  const router = useRouter();
  const [_, setDisplayCart] = useAtom(drawerAtom);

  function handleCartSidebar() {
    setDisplayCart({ display: true, view: 'cart' });
  }
  return (
    <div className="product-cart fixed top-1/2 z-40 -mt-12 hidden cursor-pointer flex-col items-center justify-center rounded bg-white p-3 pt-3.5 text-sm font-semibold text-light shadow-900 transition-colors duration-200 focus:outline-none ltr:right-0 ltr:rounded-tr-none ltr:rounded-br-none rtl:left-0 rtl:rounded-tl-none rtl:rounded-bl-none lg:flex">
      <div onClick={() => router.push('/marca/24/Cudié')}>
        <Image src={FixedImage} />
      </div>
    </div>
  );
};

export default CartCounterButton;
