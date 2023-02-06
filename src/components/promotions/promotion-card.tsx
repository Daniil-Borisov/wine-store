import { Image } from '@/components/ui/image';
import { useTranslation } from 'next-i18next';

export default function PromotionCards({ promotionCards }) {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col flex-wrap justify-between gap-6 bg-light px-7 md:px-5 md:py-8 lg:flex-row lg:py-12 2xl:py-16">
      {promotionCards &&
        promotionCards.map((el: object, id: number) => {
          return (
            <div
              className="mb-7 flex w-full flex-col items-center justify-between  rounded bg-bg-text-banner py-12 lg:w-[calc(50%-12px)] xl:mb-0 xl:flex-row xl:px-12"
              key={id}
            >
              <div className="w-full px-7 text-center text-light xl:w-[48%] xl:text-left">
                <h3 className="mb-2 text-[36px]">{el.title}</h3>
                <div className="xl:hidden">
                  <img className="mx-auto mb-2" width={383} src={el.image} />
                </div>
                <p className="mb-6 text-center text-sm xl:text-left">
                  {el.description}
                </p>
                <a
                  className="whitespace-nowrap rounded-large bg-light px-14 py-2.5 text-center font-bold text-dark"
                  href={el.link}
                  target={el.target}
                >
                  + Info
                </a>
              </div>
              <div className="hidden xl:block">
                <img width={383} src={el.image} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
