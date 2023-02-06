import { Routes } from '@/config/routes';

export const siteSettings = {
  name: 'PickBazar',
  description: '',
  logo: {
    url: '/logo.svg',
    alt: 'PickBazar',
    href: '/',
    width: 128,
    height: 40,
  },
  defaultLanguage: 'es',
  currencyCode: 'USD',
  product: {
    placeholderImage: '/product-placeholder.svg',
    cardMaps: {
      grocery: 'Krypton',
      furniture: 'Radon',
      bag: 'Oganesson',
      makeup: 'Neon',
      book: 'Xenon',
      medicine: 'Helium',
      default: 'Argon',
    },
  },
  authorizedLinks: [
    {
      href: Routes.profile,
      label: 'profile-sidebar-profile',
    },
    {
      href: Routes.orders,
      label: 'profile-sidebar-orders',
    },
    {
      href: Routes.profileAddresses,
      label: 'profile-sidebar-addresses',
    },
    {
      href: Routes.profileWineSubscription,
      label: 'profile-sidebar-wine-subscription',
    },
    {
      href: Routes.changePassword,
      label: 'profile-sidebar-password',
    },
    {
      href: Routes.profileGourmetOro,
      label: 'profile-gourmet-oro',
    },
  ],
  authorizedLinksMobile: [
    {
      href: Routes.profile,
      label: 'profile-sidebar-profile',
    },
    {
      href: Routes.orders,
      label: 'profile-sidebar-orders',
    },
    {
      href: Routes.profileAddresses,
      label: 'profile-sidebar-addresses',
    },
    {
      href: Routes.profileWineSubscription,
      label: 'profile-sidebar-wine-subscription',
    },
    {
      href: Routes.changePassword,
      label: 'profile-sidebar-password',
    },
    {
      href: Routes.profileGourmetOro,
      label: 'profile-gourmet-oro',
    },
  ],
  dashboardSidebarMenu: [
    {
      href: Routes.profile,
      label: 'profile-sidebar-profile',
    },
    {
      href: Routes.orders,
      label: 'profile-sidebar-orders',
    },
    {
      href: Routes.profileAddresses,
      label: 'profile-sidebar-addresses',
    },
    {
      href: Routes.profileWineSubscription,
      label: 'profile-sidebar-wine-subscription',
    },
    {
      href: Routes.changePassword,
      label: 'profile-sidebar-password',
    },
    {
      href: Routes.profileGourmetOro,
      label: 'profile-gourmet-oro',
    },
    {
      href: Routes.logout,
      label: 'profile-sidebar-logout',
    },
  ],
  sellingAdvertisement: {
    image: {
      src: '/selling.png',
      alt: 'Selling Advertisement',
    },
  },
  cta: {
    mockup_img_src: '/mockup-img.png',
    play_store_link: '/',
    app_store_link: '/',
  },
  footer: {
    copyright: {
      name: 'RedQ, Inc',
      href: 'https://redq.io/',
    },
    address:
      'Emilio Alcalá Galiano, 26A 08940 Cornellà de Llobregat, Barcelona',
    email: 'clientes@gourmetlavanguardia.com',
    phone: '935 500 105',
    menus: [
      {
        title: 'text-explore',
        links: [
          {
            name: 'text-about-us',
            href: '/',
          },
          {
            name: 'text-sitemap',
            href: '/',
          },
          {
            name: 'text-bookmarks',
            href: '/',
          },
          {
            name: 'text-sign-join',
            href: '/',
          },
        ],
      },
      {
        title: 'text-customer-service',
        links: [
          {
            name: 'text-faq-help',
            href: Routes.help,
          },
          {
            name: 'text-returns',
            href: '/',
          },
          {
            name: 'text-accessibility',
            href: '/',
          },
          {
            name: 'text-contact-us',
            href: Routes.contactUs,
          },
          {
            name: 'text-store-pickup',
            href: '/',
          },
        ],
      },
      {
        title: 'text-our-information',
        links: [
          {
            name: 'text-privacy-update',
            href: Routes.privacy,
          },
          {
            name: 'text-terms-condition',
            href: Routes.terms,
          },
          {
            name: 'text-return-policy',
            href: '/',
          },
          {
            name: 'text-sitemap',
            href: '/',
          },
        ],
      },
    ],
    payment_methods: [
      {
        img: '/payment/master.png',
        url: '/',
      },
      {
        img: '/payment/skrill.png',
        url: '/',
      },
      {
        img: '/payment/paypal.png',
        url: '/',
      },
      {
        img: '/payment/visa.png',
        url: '/',
      },
      {
        img: '/payment/discover.png',
        url: '/',
      },
    ],
    footerImage: {
      img: '/footer_img.png',
    },
  },
};
