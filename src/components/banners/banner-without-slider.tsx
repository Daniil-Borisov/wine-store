import cn from 'classnames';
import { Image } from '@/components/ui/image';
import { productPlaceholder } from '@/lib/placeholders';
import SearchWithSuggestion from '@/components/ui/search/search-with-suggestion';
import type { Banner } from '@/types';

interface BannerProps {
  banners: Banner[] | undefined;
  layout?: string;
  contain?: boolean;
}

const BannerWithoutSlider: React.FC<BannerProps> = ({
  banners,
  layout,
  contain,
}) => {
  return (
    <>
      {banners?.length ? (
        <div className={cn('relative block')}>
          <div
            className={cn(
              'relative max-h-[17vh] w-full overflow-hidden md:max-h-fit'
            )}
          >
            <img
              className={cn(
                'h-fit min-h-[240px] w-full object-contain  object-top',
                { '!min-h-fit !object-contain': contain }
              )}
              src={banners![0]?.image ?? ''}
              alt={banners![0]?.title ?? ''}
              // layout="fill"
              // objectFit={contain ? 'contain' : 'cover'}
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default BannerWithoutSlider;
