import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import Link from '@/components/ui/link';

type SectionProps = {
  className?: any;
  title?: string;
  href?: string;
};

/**
 * UI component for a section block
 * @param {string} title - The title of the section
 * @param {string} description - The description of the section
 * @param {string} href - The href of the external page for this section
 */

const SectionBlock: React.FC<SectionProps> = ({
  className,
  title,
  href,
  children,
}) => {
  const { t } = useTranslation('common');
  return (
    <div
      className={cn(
        'w-full bg-light flex pb-[40px] xl:py-[54px] 3xl:py-[80px] px-7 xl:px-16 flex-col',
        className
      )}
    >
      {title && (
        <div className="flex items-center justify-center mb-7 lg:mb-[80px]">
          {title && (
            <h3 className="text-2xl text-center opacity-80 lg:text-[45px] 3xl:text-3xl font-semibold">
              {t(title)}
            </h3>
          )}
        </div>
      )}

      {children}
    </div>
  );
};

export default SectionBlock;
