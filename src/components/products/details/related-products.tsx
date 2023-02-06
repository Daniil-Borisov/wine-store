import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import ProductCard from '../cards/card';
interface Props {
  products: any;
  currentProductId: any;
  gridClassName?: string;
}

const RelatedProducts = ({
  products,
  currentProductId,
  gridClassName,
}: Props) => {
  const { t } = useTranslation('common');

  return (
    <>
      <h2 className="text-lg text-heading tracking-tight font-bold mb-6 lg:mb-16 lg:text-[45px] text-center text-dark opacity-80 ">
        {t('text-related-products')}
      </h2>
      <div
        className={cn(
          'grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-4',
          gridClassName
        )}
      >
        {products?.map((item: any, idx: number) => {
          return (
            <ProductCard product={item} key={idx} cardType={item?.type?.slug} />
          );
        })}
      </div>
    </>
  );
};
// <motion.div key={idx}>
{
  /* {renderProductCard(
    item,
    "!shadow-none border border-border-200 hover:!border-border-200 border-opacity-70"
  )} */
}
// </motion.div>

export default RelatedProducts;
