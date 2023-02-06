import {
  Swiper,
  SwiperSlide,
  Navigation,
  Autoplay,
  EffectFade,
} from '@/components/ui/slider';
import { Image } from '@/components/ui/image';
import { productPlaceholder } from '@/lib/placeholders';
import { useIsRTL } from '@/lib/locals';
import { ArrowNext, ArrowPrev } from '@/components/icons';
import { useTranslation } from 'next-i18next';
import type { Banner } from '@/types';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface BannerProps {
  banners: Banner[] | undefined;
  bannersMob: Banner[] | undefined;
  layout?: string;
}

const BannerShort: React.FC<BannerProps> = ({ banners, bannersMob }) => {
  const { t } = useTranslation('common');
  const { isRTL } = useIsRTL();
  const [isMobScreen, setIsMobScreen] = useState(false);
  const [slides, setSlides] = useState(banners);

  useEffect(() => {
    const handleResize = () => {
      if (!bannersMob) return;
      if (window.innerWidth < 480) {
        setIsMobScreen(true);
      } else {
        setIsMobScreen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return window.removeEventListener('resize', handleResize);
  });

  return (
    <div className="relative">
      <div className="-z-1 overflow-hidden">
        <div className="relative">
          <Swiper
            id="banner"
            loop={true}
            modules={[Navigation, Autoplay, EffectFade]}
            resizeObserver={true}
            allowTouchMove={false}
            slidesPerView={1}
            effect="fade"
            autoHeight={true}
            navigation={{
              nextEl: '.next',
              prevEl: '.prev',
            }}
            autoplay={{
              delay: 5000,
            }}
          >
            {slides?.map((banner, idx) => (
              <SwiperSlide key={idx}>
                <a href={banner.link} target={banner.target}>
                  <div className="relative ">
                    <img
                      src={isMobScreen ? banner.image_responsive : banner.image}
                      className="h-full min-h-[538px] w-full object-cover md:min-h-fit md:object-contain"
                      alt=""
                    />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="prev absolute top-2/4 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-200 border-opacity-70 bg-light text-heading shadow-200 transition-all duration-200 ltr:left-4 rtl:right-4 md:-mt-5 ltr:md:left-5 rtl:md:right-5"
            role="button"
          >
            <span className="sr-only">{t('text-previous')}</span>

            {isRTL ? (
              <ArrowNext width={18} height={18} />
            ) : (
              <ArrowPrev width={18} height={18} />
            )}
          </div>
          <div
            className="next absolute top-2/4 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-200 border-opacity-70 bg-light text-heading shadow-200 transition-all duration-200 ltr:right-4 rtl:left-4 md:-mt-5 ltr:md:right-5 rtl:md:left-5"
            role="button"
          >
            <span className="sr-only">{t('text-next')}</span>
            {isRTL ? (
              <ArrowPrev width={18} height={18} />
            ) : (
              <ArrowNext width={18} height={18} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerShort;
