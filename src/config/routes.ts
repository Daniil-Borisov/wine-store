export const Routes = {
  home: '/', //used
  categories: '/categorias', //used
  category: (category: string, name: string) =>
    `/categorias/${encodeURIComponent(category)}/${name
      .replace(/( )|(%)/g, '-')
      .toLowerCase()}`, //used
  products: (category: string, name: string) =>
    `/categoria/${encodeURIComponent(category)}/${name
      .replace(/( )|(%)/g, '-')
      .toLowerCase()}`,
  checkout: '/checkout', //used
  brand: (brand: string, name: string) =>
    `/marca/${encodeURIComponent(brand)}/${name
      .replace(/( )|(%)/g, '-')
      .toLowerCase()}`,
  checkoutDigital: '/checkout/digital',
  checkoutGuest: '/checkout/guest',
  profile: '/profile', //used
  changePassword: '/change-password', //used
  orders: '/orders', //used
  order: (tracking_number: string) =>
    `/orders/${encodeURIComponent(tracking_number)}`,
  refunds: '/refunds',
  help: '/help',
  logout: '/logout',
  coupons: '/offers',
  orderReceived: '/order-received',
  productPage: '/product-page',
  product: (slug: string, name: string) => {
    return `/producto/${encodeURIComponent(slug)}/${name
      .replace(/( )|(%)/g, '-')
      .toLowerCase()}`;
  },
  privacy: '/privacy',
  terms: '/terms',
  contactUs: '/contact',
  shops: '/shops',
  shop: (slug: string) => `/shops/${encodeURIComponent(slug)}`,
  downloads: '/downloads',
  authors: '/authors',
  author: (slug: string) => `/authors/${encodeURIComponent(slug)}`,
  manufacturers: '/manufacturers',
  manufacturer: (slug: string) => `/manufacturers/${encodeURIComponent(slug)}`,
  search: '/search',
  wishlists: '/wishlists',
  questions: '/questions',
  reports: '/reports',
  vinotecaEs: '/club-de-vinos', //used
  vinotecaCa: '/club-de-vins', //used
  profileAddresses: '/profile-addresses', //used
  profileWineSubscription: '/profile-wine-subscription', //used
  profileGourmetOro: '/profile-gourmet-oro',
};
