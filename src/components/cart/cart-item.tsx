import { Image } from '@/components/ui/image';
import { motion } from 'framer-motion';
import Counter from '@/components/ui/counter';
import { CloseIcon } from '@/components/icons/close-icon';
import { fadeInOut } from '@/lib/motion/fade-in-out';
import { useTranslation } from 'next-i18next';
import { useCart } from '@/store/quick-cart/cart.context';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { userData } from '@/store/user-atom';

interface CartItemProps {
  item: any;
}

const CartItem = ({ item }: CartItemProps) => {
  const { t } = useTranslation('common');
  const {
    isInStock,
    clearItemFromCart,
    addItemToCart,
    removeItemFromCart,
    updateCartLanguage,
    language,
  } = useCart();

  const { locale } = useRouter();
  const [userAtom] = useAtom(userData);
  const queryClient = useQueryClient();

  // const formattedData = {
  //   language: locale,
  //   product: item.id,
  // }

  // if (userAtom.id) {
  //   formattedData.client = userAtom.id
  //   formattedData.token = userAtom.token
  // }

  // if (localStorage.cart.session) {
  //   formattedData.session = localStorage.cart.session
  // }

  function handleIncrement(e: any) {
    e.stopPropagation();
    // Check language and update
    if (item?.language !== language) {
      updateCartLanguage(item?.language);
    }
    addItemToCart(item, 1);
    // queryClient.fetchQuery(
    //   [API_ENDPOINTS.CART_ADD],
    //   ({queryKey}) => client.products.add2cart({...formattedData, units: '1'}),
    // )
  }
  const handleRemoveClick = (e: any) => {
    e.stopPropagation();
    removeItemFromCart(item.id);

    // queryClient.fetchQuery(
    //   [API_ENDPOINTS.CART_ADD],
    //   ({queryKey}) => client.products.add2cart({...formattedData, units: '-1'}),
    // )
  };
  const outOfStock = !isInStock(item.id);

  return (
    <motion.div
      layout
      initial="from"
      animate="to"
      exit="from"
      variants={fadeInOut(0.25)}
      className="flex items-center border-b border-solid border-border-200 border-opacity-75 py-4 px-4 text-sm sm:px-6"
    >
      <div className="flex-shrink-0">
        <Counter
          value={+item.quantity}
          onDecrement={handleRemoveClick}
          onIncrement={handleIncrement}
          variant="pillVertical"
          disabled={outOfStock}
        />
      </div>

      <div className="relative mx-4 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden sm:h-16 sm:w-16">
        <Image
          src={item?.image}
          alt={item.name}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div>
        {/* <h3 className="font-bold text-heading">{item.name}</h3> */}
        <h3 className="font-bold text-heading">{item.name} </h3>
        <p className="my-2.5 font-semibold text-accent">{item.unit_price}</p>
      </div>
      <span className="whitespace-nowrap font-bold text-heading ltr:ml-auto rtl:mr-auto">
        {item.price}
      </span>
      <button
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted transition-all duration-200 hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600 focus:outline-none ltr:ml-3 ltr:-mr-2 rtl:mr-3 rtl:-ml-2"
        onClick={() => clearItemFromCart(item.id, item.quantity)}
      >
        <span className="sr-only">{t('text-close')}</span>
        <CloseIcon className="h-3 w-3" />
      </button>
    </motion.div>
  );
};

export default CartItem;
