import { verifiedResponseAtom } from '@/store/checkout';
import { useAtom } from 'jotai';
import isEmpty from 'lodash/isEmpty';
import dynamic from 'next/dynamic';
const UnverifiedItemList = dynamic(
  () => import('@/components/checkout/item/unverified-item-list')
);

export const RightSideView = ({
  hideTitle = false,
  cart
}: {
  hideTitle?: boolean;
  cart?: object 
}) => {
  return <UnverifiedItemList hideTitle={hideTitle} cart={cart}/>;
};

export default RightSideView;
