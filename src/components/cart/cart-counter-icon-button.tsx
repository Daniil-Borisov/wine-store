import { CartOutlinedIcon } from '@/components/icons/cart-outlined';
import { drawerAtom } from '@/store/drawer-atom';
import { useCart } from '@/store/quick-cart/cart.context';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

const CartCounterIconButton = () => {
  const { totalUniqueItems } = useCart();
  const [_, setDisplayCart] = useAtom(drawerAtom);
  function handleCartSidebar() {
    setDisplayCart({ display: true, view: 'cart' });
  }
  const [isMobScreen, setIsMobScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setIsMobScreen(false);
        return;
      } else {
        setIsMobScreen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return window.removeEventListener('resize', handleResize);
  });
  return (
    <>
      {!isMobScreen ? (
        <button
          className="product-cart relative hidden lg:flex"
          onClick={handleCartSidebar}
        >
          <CartOutlinedIcon className="h-5 w-5" />
          {totalUniqueItems > 0 && (
            <span className="absolute -top-1/2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent text-[10px] text-light ltr:-right-1/2 rtl:-left-1/2">
              {totalUniqueItems}
            </span>
          )}
        </button>
      ) : (
        ''
      )}
    </>
  );
};

export default CartCounterIconButton;
