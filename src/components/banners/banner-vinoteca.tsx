import { Image } from '@/components/ui/image';
import type { Banner } from '@/types';

interface BannerProps {
  banners: Banner[] | undefined;
}

const BannerVinoteca: React.FC<BannerProps> = ({ banners }) => {
  return (
    <div className='relative lg:block'>
      <div className="xl:w-1/2 xl:ml-auto ">
        <h1 className="w-full text-2xl py-4 text-black font-bold opacity-80 max-w-[719px]  xl:text-[45px] xl:leading-snug ">{banners[0].title}</h1>
        <p className='max-w-[580px]'>{banners[0].description}</p>
      </div>

      <Image
        className="h-full min-h-140 w-full"
        src={banners![0]?.image}
        alt={banners![0]?.title ?? ''}
        layout="fill"
        objectFit="cover"
      />
        
    </div>
  );
};

export default BannerVinoteca;
