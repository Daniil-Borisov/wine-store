import { useRouter } from 'next/router';
import { Routes } from '@/config/routes';
import { useTranslation } from 'next-i18next';
import DrawerWrapper from '@/components/ui/drawer/drawer-wrapper';
import { useAtom } from 'jotai';
import { drawerAtom } from '@/store/drawer-atom';
import { ACTIVE_NAV_LINK_CLASSES } from '@/const/classes-const';

export default function MobileMainMenu() {
  const { t } = useTranslation('common');
  const router = useRouter();
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
      href: router.locale === 'es' ? Routes.vinotecaEs : Routes.vinotecaCa,
      label: 'nav-menu-wine-cellar',
    },
  ];
  const [_, closeSidebar] = useAtom(drawerAtom);

  function handleClick(path: string) {
    router.push(path);
    closeSidebar({ display: false, view: '' });
  }

  return (
    <DrawerWrapper>
      <ul className="flex-grow">
        {headerLinks.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <button
              onClick={() => handleClick(href)}
              className="flex cursor-pointer items-center py-3 px-5 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent md:px-8"
            >
              {t(label)}
            </button>
          </li>
        ))}
      </ul>
    </DrawerWrapper>
  );
}
