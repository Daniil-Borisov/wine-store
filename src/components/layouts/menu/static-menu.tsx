import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { ACTIVE_NAV_LINK_CLASSES } from '../../../const/classes-const';

const StaticMenu = () => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const headerLinks = [
    {
      href: Routes.products('8', 'bodega'),
      icon: null,
      label: 'nav-menu-cellar',
    },
    {
      href: Routes.products('10421', 'despensa'),
      icon: null,
      label: 'nav-menu-pantry',
    },
    {
      href: Routes.products('10183', 'packs-y-promociones'),
      label: 'nav-menu-packages',
    },
    { href: Routes.products('10411', 'regalos'), label: 'nav-menu-gifts' },
    {
      href: locale === 'es' ? Routes.vinotecaEs : Routes.vinotecaCa,
      label: 'nav-menu-wine-cellar',
      className: ACTIVE_NAV_LINK_CLASSES,
    },
  ];

  return (
    <>
      {headerLinks.map(({ href, label, icon, className }) => (
        <li key={`${href}${label}`}>
          <Link
            href={href}
            className={`flex w-auto items-center px-2 font-normal text-heading no-underline transition duration-200 hover:text-accent  2xl:text-xl ${className} transition-all hover:font-semibold`}
          >
            {icon && <span className="ltr:mr-2 rtl:ml-2">{icon}</span>}
            {t(label)}
          </Link>
        </li>
      ))}
    </>
  );
};

export default StaticMenu;
