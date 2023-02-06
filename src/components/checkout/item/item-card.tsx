import usePrice from '@/lib/use-price';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
interface Props {
  item: any;
  notAvailable?: boolean;
}

const ItemCard = ({ item, notAvailable }: Props) => {
  const { t } = useTranslation('common');
  const { price } = usePrice({
    amount: item.itemTotal,
  });
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center justify-between text-base">
        <span
          className={cn('text-sm', notAvailable ? 'text-red-500' : 'text-body')}
        >
          <span
            className={cn(
              'text-lg font-bold',
              notAvailable ? 'text-red-500' : 'text-heading'
            )}
          >
            {item.quantity}
          </span>
          <span className="mx-2 text-lg">x</span>
          <span className=" text-lg">{item.name}</span>
        </span>
      </div>
      <span
        className={cn(
          ' whitespace-nowrap text-lg',
          notAvailable ? 'text-red-500' : 'text-body'
        )}
      >
        {item.price}
      </span>
    </div>
  );
};

export default ItemCard;
