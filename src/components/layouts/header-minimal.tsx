import Logo from '@/components/ui/logo';
import cn from 'classnames';
import StaticMenu from './menu/static-menu';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { authorizationAtom } from '@/store/authorization-atom';
import SearchWithSuggestion from '@/components/ui/search/search-with-suggestion';
import Link from '@/components/ui/link';
import GroupsDropdownMenu from './menu/groups-menu';
import LanguageSwitcher from '@/components/ui/language-switcher';
import { userData } from '@/store/user-atom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SearchIcon } from '../icons/search-icon';
import CartCounterIconButton from '@/components/cart/cart-counter-icon-button';

const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
  ssr: false,
});
const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const HeaderMinimal = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [displayMobileHeaderSearch, setDisplayMobileHeaderSearch] = useAtom(
    displayMobileHeaderSearchAtom
  );
  const [userAtom] = useAtom(userData);
  const isMultilangEnable =
    process.env.NEXT_PUBLIC_ENABLE_MULTI_LANG === 'true' &&
    !!process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES;
  const layout = 'compact';

  useEffect(() => {
    return setDisplayMobileHeaderSearch(false);
  }, []);

  return (
    <header className={cn('site-header-with-search h-14 md:h-16 lg:h-[70px]')}>
      <div
        className={cn(
          'fixed z-50 flex h-14 w-full items-center justify-between border-b border-border-200 bg-light px-4 py-4  shadow-sm transition-transform duration-300 md:h-16 lg:h-[70px] ltr:lg:pl-12 ltr:lg:pr-8 rtl:lg:pr-12 rtl:lg:pl-8',
          {
            'px-5 lg:!px-12 xl:px-16': layout === 'compact',
          }
        )}
      >
        <div className="flex w-full items-center lg:w-auto">
          <Logo
            className={`${
              !isMultilangEnable ? 'mx-auto lg:mx-0' : 'ltr:ml-0 rtl:mr-0'
            }`}
            headerClassName="2xl:max-w-290px inline-flex lg:w-1/4 lg:max-w-[260px]"
          />

          {isMultilangEnable ? (
            <div className="ltr:ml-auto rtl:mr-auto lg:hidden">
              <LanguageSwitcher />
            </div>
          ) : (
            ''
          )}

          <ul className="hidden shrink-0 items-center space-x-3 ltr:ml-10 ltr:mr-auto rtl:mr-10 rtl:ml-auto rtl:space-x-reverse lg:flex xl:space-x-7 2xl:space-x-10">
            <StaticMenu />
          </ul>
        </div>

        {displayMobileHeaderSearch && (
          <div className="absolute top-0 block h-full w-full bg-light px-5 pt-1.5 ltr:left-0 rtl:right-0 md:pt-2 lg:top-[70px] xl:hidden">
            <SearchWithSuggestion
              label={t('text-search-label')}
              variant="minimal"
              seeMore={true}
            />
          </div>
        )}

        <div className="mx-auto hidden w-full min-w-[180px] pl-4 pr-8 xl:flex  xl:w-6/12 xl:flex-1 xl:pr-4  xl:pl-2 xl:rtl:w-4/12 2xl:rtl:w-5/12">
          <SearchWithSuggestion
            label={t('text-search-label')}
            variant="minimal"
            seeMore={true}
          />
        </div>

        <div className="hidden shrink-0 items-center space-x-5 rtl:space-x-reverse lg:flex xl:space-x-9">
          {/* <GroupsDropdownMenu variant="minimal" /> */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* <Link
              href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/register`}
              variant="button"
              target="_blank"
            >
              {t('text-become-seller')}
            </Link> */}
            {userAtom?.token ? (
              <AuthorizedMenu minimal={true} />
            ) : (
              <JoinButton />
            )}
          </div>
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => setDisplayMobileHeaderSearch((prev) => !prev)}
            className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none xl:hidden"
          >
            <span className="sr-only">{t('text-search')}</span>
            <SearchIcon width="17.05" height="18" />
          </motion.button>
          <CartCounterIconButton />
          {isMultilangEnable ? (
            <div className="ms-auto lg:me-5 xl:me-8 2xl:me-10 flex-shrink-0">
              <LanguageSwitcher />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderMinimal;
