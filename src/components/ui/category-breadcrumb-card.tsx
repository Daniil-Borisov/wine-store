import { useRouter } from 'next/router';
import { Image } from '@/components/ui/image';
import CategoryImg from '@/assets/category-img.png';
import ArrowForward from '@/assets/arrow-forward.png';
import BreadcrumbButton from '@/components/ui/breadcrumb-button';
import { useTranslation } from 'next-i18next';
import { Routes } from '@/config/routes';

interface BreadcrumbButtonProps {
  text: string;
  image?: any;
  onClick: () => void;
}

const BreadcrumbWithIndicator: React.FC<BreadcrumbButtonProps> = ({
  text,
  image,
  onClick,
}) => (
  <>
    <span className="relative h-[32px] w-[18px] flex-shrink-0">
      <Image
        className="h-full w-full"
        src={ArrowForward}
        alt=">"
        layout="responsive"
        width={18}
        height={32}
      />
    </span>
    <BreadcrumbButton text={text} image={image} onClick={onClick} />
  </>
);

interface CategoryBreadcrumbProps {
  breadcrumbs: [];
}

const CategoryBreadcrumb: React.FC<CategoryBreadcrumbProps> = ({
  breadcrumbs,
}) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { pathname, query } = router;

  const resetCategoryClick = () => {
    const { category, ...rest } = query;
    router.push(Routes.categories);
  };

  const onCategoryClick = (slug: string) => {
    const { category, ...rest } = query;
    router.push(
      {
        pathname,
        query: { ...rest, category: slug },
      },
      undefined,
      {
        scroll: false,
      }
    );
  };

  return (
    <div className="flex items-center space-x-5 overflow-auto py-4 rtl:space-x-reverse">
      <BreadcrumbButton
        text={t('text-all-categories')}
        onClick={resetCategoryClick}
      />

      {breadcrumbs
        ? breadcrumbs.map((el) => {
            return (
              <BreadcrumbWithIndicator
                key={el?.id}
                text={el?.name}
                onClick={() => onCategoryClick(el?.id)}
              />
            );
          })
        : null}
    </div>
  );
};

export default CategoryBreadcrumb;
