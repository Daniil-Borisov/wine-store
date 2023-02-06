import NotFound from '@/components/ui/not-found';
import Carousel from '@/components/ui/carousel';
import ManufacturerCard from '@/components/manufacturer/card';
import SectionBlock from '@/components/ui/section-block';
import { Routes } from '@/config/routes';

const breakpoints = {
  320: {
    slidesPerView: 1,
  },

  600: {
    slidesPerView: 2,
  },

  960: {
    slidesPerView: 3,
  },

  1280: {
    slidesPerView: 4,
  },

  1600: {
    slidesPerView: 5,
  },
  2600: {
    slidesPerView: 7,
  },
};

const TopManufacturersGrid: ({
  brands,
  title,
}: {
  brands: any;
  title: string;
}) => JSX.Element = ({ brands, title }) => {
  return (
    <SectionBlock title={title}>
      {!brands.length ? (
        <div className="min-h-full px-9 pt-6 pb-8 lg:p-8">
          <NotFound text="text-no-category" className="h-96" />
        </div>
      ) : (
        <div>
          <Carousel
            items={brands}
            breakpoints={breakpoints}
            spaceBetween={30}
            navigation={false}
          >
            {(item) => <ManufacturerCard item={item} />}
          </Carousel>
        </div>
      )}
    </SectionBlock>
  );
};

export default TopManufacturersGrid;
