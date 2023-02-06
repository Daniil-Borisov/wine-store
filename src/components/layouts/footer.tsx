import { Image } from '@/components/ui/image';
import { useTranslation } from 'next-i18next';
import { siteSettings } from '@/config/site';
import Link from '@/components/ui/link';
import Logo from '@/components/ui/logo';
import SubscriptionWidget from '@/components/settings/subscribe-to-newsletter';
import ConfianzaLogo from '../../assets/logo_confianza_footer.svg';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import LogoIcon from '@/assets/whatsapp-logo.jpg';
import CookieConsent from 'react-cookie-consent';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="34931185248"
        accountName="Gourmet La Vanguardia"
        chatMessage="Hola, ¿en qué podemos ayudarte?"
        statusMessage="Respondemos en menos de 1 hora"
        placeholder="Escribe tu mensaje"
        allowEsc
        allowClickAway
        notification
        notificationSound
        avatar={LogoIcon.src}
      />
      <CookieConsent
        location="bottom"
        buttonText={t('accept')}
        cookieName="polcookies"
        style={{
          background: 'rgba(var(--color-bg-text-banner)',
          zIndex: '9999',
          display: 'flex',
          alignItems: 'center',
          height: 'fit-content',
          minHeight: '110px',
        }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
        overlay
        overlayStyle={{
          zIndex: '9999',
        }}
        buttonWrapperClasses={'w-full flex justify-center lg:w-fit'}
      >
        {t('poolcookie')}
        <Link href={'/politica-de-cookies'} className={'text-[#d3a900]'}>
          {t('information')}
        </Link>
      </CookieConsent>
      <div
        className="relative flex w-full flex-col overflow-hidden border-gray-800 bg-white px-5 text-center text-light md:px-10 lg:border-b-8 lg:px-[50px] xl:px-16"
        style={{ background: '#000000' }}
      >
        <img
          src={siteSettings.footer.footerImage.img}
          className="absolute right-0 z-0 hidden h-full xl:block"
        />
        {/* Top */}
        <div className=" relative z-10 mt-[45px] max-w-[1320px] rounded bg-newsletter-footer xl:w-full">
          <SubscriptionWidget
            title="text-subscribe-now"
            description="text-subscribe-details"
          />
        </div>
        {/* Center */}
        <div className="relative z-10  grid w-full grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 pt-16 md:grid-cols-3 lg:pt-24 lg:pb-16 xl:w-5/6 xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-12 2xl:grid-cols-4">
          <div className="relative flex  flex-col after:absolute after:-right-6 after:top-0 after:hidden after:h-full after:w-[1px] after:bg-grey after:xl:visible after:xl:block ">
            <div className="mb-[2px] flex h-16 items-start justify-center xl:justify-start">
              <Logo className={'w-64'} />
            </div>
            <div>
              <p className=" text-center text-sm xl:text-left xl:text-base">
                {t('footer.text1')}
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center border-t-[0.5px] border-gray-200 pt-9 pb-12 after:absolute after:-right-6 after:top-0 after:hidden after:h-full after:w-[1px] after:bg-grey lg:border-t-0 xl:items-start xl:py-0 after:xl:visible after:xl:block ">
            <h2
              className={
                'mb-7 flex h-[40px] items-center justify-center text-xl font-bold text-light opacity-80 xl:justify-start'
              }
            >
              {t('nav-menu-contact')}
            </h2>
            <Link
              href={`tel:${t(siteSettings.footer.phone)}`}
              className="mb-3 xl:text-left"
            >
              {t(siteSettings.footer.phone)}
            </Link>
            <address className="mb-4 not-italic xl:text-left">
              {t(siteSettings.footer.address)}
            </address>
            <Link
              href={`mailto:${t(siteSettings.footer.email)}`}
              className="mb-1 xl:text-left"
            >
              {t(siteSettings.footer.email)}
            </Link>
          </div>
          <div className="relative border-t-[0.5px] border-gray-200 pt-9 pb-12 text-center after:absolute after:-right-6 after:top-0 after:hidden after:h-full after:w-[1px] after:bg-grey lg:border-t-0 xl:py-0 xl:text-left after:xl:visible after:xl:block ">
            <h2
              className={
                'mb-7 flex h-[40px] items-center justify-center text-xl font-bold text-light opacity-80 xl:justify-start'
              }
            >
              {t('footer.menu1.heading')}
            </h2>
            <nav className="flex flex-col ">
              <Link
                className="pb-4"
                href="/productos-gourmet-online-a-domicilio"
              >
                {t('footer.menu1.menu1')}
              </Link>
              <Link className="pb-4" href="/regalos-gourmet-online">
                {t('footer.menu1.menu2')}
              </Link>
              <Link className="pb-4" href="/ensaladas-gourmet">
                {t('footer.menu1.menu3')}
              </Link>
              <Link className="pb-4" href="/conservas-gourmet">
                {t('footer.menu1.menu4')}
              </Link>
              <Link className="pb-4" href="/aceite-de-trufa">
                {t('footer.menu1.menu5')}
              </Link>
              <Link className="pb-4" href="/cestas-regalo">
                {t('footer.menu1.menu6')}
              </Link>
            </nav>
          </div>
          <div className="relative z-10 flex flex-col border-t-[0.5px] border-gray-200 pt-9 pb-12 lg:border-t-0 xl:items-start xl:py-0">
            <h2
              className={
                'mb-7 flex h-[40px] items-center justify-center text-xl font-bold text-light opacity-80 xl:justify-start'
              }
            >
              {t('footer.menu2.heading')}
            </h2>
            <nav className="mb-6 flex flex-col xl:text-left">
              <Link className="pb-4" href="/que-es">
                {t('footer.menu2.menu1')}
              </Link>
              <Link className="pb-4" href="/quienes-somos">
                {t('footer.menu2.menu2')}
              </Link>
              <Link className="pb-4" href="/faqs">
                {t('footer.menu2.menu3')}
              </Link>
            </nav>
            <Image src={ConfianzaLogo} className="" />
          </div>
        </div>
        {/* Bottom */}
        <div className="relative z-10 mt-8 flex flex-col items-center border-t-[0.5px] border-gray-200 pt-8 pb-12 text-xs lg:mx-auto lg:mt-0 lg:w-4/6 lg:flex-row lg:justify-between lg:border-t-0">
          <Link className="pb-4" href="/faqs">
            {t('footer.bottom-menu.menu1')}
          </Link>
          <Link className="pb-4" href="/aviso-legal">
            {t('footer.bottom-menu.menu2')}
          </Link>
          <Link className="pb-4" href="/condiciones-generales">
            {t('footer.bottom-menu.menu3')}
          </Link>
          <Link className="pb-4" href="/politica-de-privacidad">
            {t('footer.bottom-menu.menu4')}
          </Link>
          <Link className="pb-4" href="/politica-de-cookies">
            {t('footer.bottom-menu.menu5')}
          </Link>
          <a
            className="pb-4"
            href="https://www.instagram.com/gourmetlavanguardia/?hl=es"
            target={'_blank'}
          >
            {t('footer.bottom-menu.menu6')}
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
