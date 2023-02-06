import img1 from '@/assets/gallery1.png';
import img2 from '@/assets/gallery2.png';
import img3 from '@/assets/gallery3.png';
import img4 from '@/assets/gallery4.png';
import img5 from '@/assets/gallery5.png';
import { Image } from '@/components/ui/image';
import { useTranslation } from 'next-i18next';
import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';

const Gallery = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 bg-white pt-20 lg:flex-row-reverse lg:px-5 xl:pt-[135px]">
          <div className="flex w-full justify-between gap-3 lg:w-1/2">
            <Link
              className={'image contenedor w-[calc(50%-6px)]'}
              href={Routes.product(
                '3250',
                'mastinell-nature-gran-reserva-2010'
              )}
            >
              <Image src={img4} alt={t('gallery.img4')} />
            </Link>
            <Link
              className="image contenedor w-[calc(50%-6px)]"
              href={Routes.products('8', 'bodega')}
            >
              <Image src={img5} alt="" />
            </Link>
          </div>
          <div className="flex flex-wrap justify-between gap-3 lg:w-1/2">
            <Link
              className="image h-50% contenedor relative w-full"
              href={Routes.brand('174', 'Xocolata%20Jolonch')}
            >
              <Image
                className={'h-full'}
                src={img1}
                objectFit={'cover'}
                layout={'responsive'}
                alt={t('gallery.img1')}
              />
            </Link>
            <Link
              className="image contenedor w-[calc(50%-6px)]"
              href={Routes.products('10475', 'bodega')}
            >
              <Image src={img2} layout={'responsive'} alt={t('gallery.img2')} />
            </Link>
            <Link
              className="image contenedor w-[calc(50%-6px)] "
              href={Routes.brand('128', 'Caviarioli')}
            >
              <Image src={img3} layout={'responsive'} alt={t('gallery.img3')} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
