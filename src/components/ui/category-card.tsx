import cn from 'classnames';
import Placeholder from '@/assets/general.jpg';
import Link from 'next/link';

interface CategoryItemProps {
  item: any;
  categoryPage: boolean;
  link?: string;
}
const CategoryCard: React.FC<CategoryItemProps> = ({
  item,
  categoryPage = false,
  link,
}) => {
  return (
    <Link href={link ?? ''}>
      <div
        className={cn(
          'group relative m-0.5 flex h-[200px] w-[98%] flex-col justify-between rounded-lg bg-light pt-8 pl-8 pr-2 pb-2 shadow-downfall-sm transition-shadow hover:shadow-downfall-lg md:h-[250px] xl:h-80 xl:flex-row',
          { 'flex !h-[238px] flex-wrap content-end': categoryPage }
        )}
        role="button"
      >
        <div
          className={cn('absolute top-4 left-4 z-10 flex flex-col', {
            'absolute top-4 left-4': categoryPage,
          })}
        >
          <h3 className="mb-1 text-lg font-semibold text-heading">
            {item.name}
          </h3>
        </div>

        <img
          className="ml-auto mt-auto max-h-[90%] w-full object-cover"
          src={item.image || Placeholder}
          alt=""
        />
      </div>
    </Link>
  );
};

export default CategoryCard;
