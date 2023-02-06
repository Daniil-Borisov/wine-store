import type { Product } from '@/types';
import dynamic from 'next/dynamic';
const Helium = dynamic(() => import('@/components/products/cards/neon'));

interface ProductCardProps {
  product: Product;
  className?: string;
  cardType?: any;
}
const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
  ...props
}) => {
  const Component = Helium;
  return <Component product={product} {...props} className={className} />;
};
export default ProductCard;
