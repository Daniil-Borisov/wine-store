import type {
  Attachment,
  Author,
  AuthorPaginator,
  AuthorQueryOptions,
  AuthResponse,
  CategoryPaginator,
  CategoryQueryOptions,
  ChangePasswordUserInput,
  CheckoutVerificationInput,
  CouponPaginator,
  CouponQueryOptions,
  CreateAbuseReportInput,
  CreateContactUsInput,
  CreateFeedbackInput,
  CreateOrderInput,
  CreateQuestionInput,
  CreateRefundInput,
  CreateReviewInput,
  DownloadableFilePaginator,
  Feedback,
  ForgotPasswordUserInput,
  LoginUserInput,
  Manufacturer,
  ManufacturerPaginator,
  ManufacturerQueryOptions,
  MyQuestionQueryOptions,
  MyReportsQueryOptions,
  Order,
  OrderPaginator,
  OrderQueryOptions,
  OrderStatusPaginator,
  OtpLoginInputType,
  OTPResponse,
  PasswordChangeResponse,
  PopularProductQueryOptions,
  Product,
  ProductPaginator,
  ProductQueryOptions,
  QueryOptions,
  QuestionPaginator,
  QuestionQueryOptions,
  Refund,
  RefundPaginator,
  RegisterUserInput,
  ResetPasswordUserInput,
  Review,
  ReviewPaginator,
  ReviewQueryOptions,
  ReviewResponse,
  SendOtpCodeInputType,
  Settings,
  Shop,
  ShopPaginator,
  ShopQueryOptions,
  SocialLoginInputType,
  TagPaginator,
  TagQueryOptions,
  Type,
  TypeQueryOptions,
  UpdateReviewInput,
  UpdateUserInput,
  User,
  VerifiedCheckoutData,
  VerifyCouponInputType,
  VerifyCouponResponse,
  VerifyForgotPasswordUserInput,
  VerifyOtpInputType,
  Wishlist,
  WishlistPaginator,
  WishlistQueryOptions,
  GetParams,
  SettingsQueryOptions,
} from '@/types';
import { API_ENDPOINTS } from './api-endpoints';
import { HttpClient } from './http-client';
import { Banner, OTPVerifyResponse } from '@/types';

class Client {
  products = {
    all: (body) => {
      const formData = new URLSearchParams(body);
      return HttpClient.post(API_ENDPOINTS.STOREFRONT, formData);
    },

    add2cart: (body) => {
      const formData = new URLSearchParams(body);
      return HttpClient.post<ProductPaginator>(
        API_ENDPOINTS.CART_ADD,
        formData
      );
    },

    vinoteca: (body) => {
      const formData = new URLSearchParams(body);
      return HttpClient.post<ProductPaginator>(
        API_ENDPOINTS.VINOTECA,
        formData
      );
    },

    popular: (params: Partial<PopularProductQueryOptions>) =>
      HttpClient.get<Product[]>(API_ENDPOINTS.PRODUCTS_POPULAR, params),

    questions: ({ question, ...params }: QuestionQueryOptions) =>
      HttpClient.get<QuestionPaginator>(API_ENDPOINTS.PRODUCTS_QUESTIONS, {
        searchJoin: 'and',
        ...params,
        search: HttpClient.formatSearchParams({
          question,
        }),
      }),

    get: (body) => {
      const formData = new URLSearchParams(body);
      return HttpClient.post(API_ENDPOINTS.PRODUCT, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    },

    createFeedback: (input: CreateFeedbackInput) =>
      HttpClient.post<Feedback>(API_ENDPOINTS.FEEDBACK, input),
    createAbuseReport: (input: CreateAbuseReportInput) =>
      HttpClient.post<Review>(
        API_ENDPOINTS.PRODUCTS_REVIEWS_ABUSE_REPORT,
        input
      ),
    createQuestion: (input: CreateQuestionInput) =>
      HttpClient.post<Review>(API_ENDPOINTS.PRODUCTS_QUESTIONS, input),
    getGourmetProduct: (data: any) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post(API_ENDPOINTS.GOURMET_ORO_PRODUCT, formData);
    },
  };
  myQuestions = {
    all: (params: MyQuestionQueryOptions) =>
      HttpClient.get<QuestionPaginator>(API_ENDPOINTS.MY_QUESTIONS, {
        with: 'user',
        orderBy: 'created_at',
        sortedBy: 'desc',
        ...params,
      }),
  };
  myReports = {
    all: (params: MyReportsQueryOptions) =>
      HttpClient.get<QuestionPaginator>(API_ENDPOINTS.MY_REPORTS, {
        with: 'user',
        orderBy: 'created_at',
        sortedBy: 'desc',
        ...params,
      }),
  };
  reviews = {
    all: ({ rating, ...params }: ReviewQueryOptions) =>
      HttpClient.get<ReviewPaginator>(API_ENDPOINTS.PRODUCTS_REVIEWS, {
        searchJoin: 'and',
        with: 'user',
        ...params,
        search: HttpClient.formatSearchParams({
          rating,
        }),
      }),
    get: ({ id }: { id: string }) =>
      HttpClient.get<Review>(`${API_ENDPOINTS.PRODUCTS_REVIEWS}/${id}`),
    create: (input: CreateReviewInput) =>
      HttpClient.post<ReviewResponse>(API_ENDPOINTS.PRODUCTS_REVIEWS, input),
    update: (input: UpdateReviewInput) =>
      HttpClient.put<ReviewResponse>(
        `${API_ENDPOINTS.PRODUCTS_REVIEWS}/${input.id}`,
        input
      ),
  };
  categories = {
    all: (body) => {
      const formData = new URLSearchParams(body);
      return HttpClient.post<CategoryPaginator>(
        API_ENDPOINTS.CATEGORIES,
        formData
      );
    },
    category: (body) => {
      const formData = new URLSearchParams(body);
      return HttpClient.post<CategoryPaginator>(
        API_ENDPOINTS.STOREFRONT,
        formData
      );
    },
  };
  tags = {
    all: (params: Partial<TagQueryOptions>) =>
      HttpClient.get<TagPaginator>(API_ENDPOINTS.TAGS, params),
  };
  types = {
    all: (params?: Partial<TypeQueryOptions>) =>
      HttpClient.get<Type[]>(API_ENDPOINTS.TYPES, params),
    get: ({ slug, language }: { slug: string; language: string }) =>
      HttpClient.get<Type>(`${API_ENDPOINTS.TYPES}/${slug}`, { language }),
  };
  shops = {
    all: () => HttpClient.get(API_ENDPOINTS.CLICK_AND_COLLECT),
    get: (slug: string) =>
      HttpClient.get<Shop>(`${API_ENDPOINTS.SHOPS}/${slug}`),
  };
  authors = {
    all: ({ name, ...params }: Partial<AuthorQueryOptions>) => {
      return HttpClient.get<AuthorPaginator>(API_ENDPOINTS.AUTHORS, {
        ...params,
        search: HttpClient.formatSearchParams({
          name,
        }),
      });
    },
    top: (params: Pick<QueryOptions, 'limit'>) =>
      HttpClient.get<Author[]>(API_ENDPOINTS.AUTHORS_TOP, params),
    get: ({ slug, language }: { slug: string; language?: string }) =>
      HttpClient.get<Author>(`${API_ENDPOINTS.AUTHORS}/${slug}`, {
        language,
      }),
  };
  manufacturers = {
    all: ({ name, ...params }: Partial<ManufacturerQueryOptions>) =>
      HttpClient.get<ManufacturerPaginator>(API_ENDPOINTS.MANUFACTURERS, {
        ...params,
        search: HttpClient.formatSearchParams({
          name,
        }),
      }),
    top: (params: Pick<QueryOptions, 'limit'>) =>
      HttpClient.get<Manufacturer[]>(API_ENDPOINTS.MANUFACTURERS_TOP, params),
    get: ({ slug, language }: { slug: string; language?: string }) =>
      HttpClient.get<Manufacturer>(`${API_ENDPOINTS.MANUFACTURERS}/${slug}`, {
        language,
      }),
  };
  coupons = {
    all: (params: Partial<CouponQueryOptions>) =>
      HttpClient.get<CouponPaginator>(API_ENDPOINTS.COUPONS, params),
    verify: (input: VerifyCouponInputType) =>
      HttpClient.post<VerifyCouponResponse>(
        API_ENDPOINTS.COUPONS_VERIFY,
        input
      ),
  };
  orders = {
    all: (params: Partial<OrderQueryOptions>) => {
      const formData = new URLSearchParams(params);
      return HttpClient.post<OrderPaginator>(
        API_ENDPOINTS.GET_ORDERS,
        formData
      );
    },
    getOrderDetails: (params: Partial<OrderQueryOptions>) => {
      const formData = new URLSearchParams(params);
      return HttpClient.post<OrderPaginator>(
        API_ENDPOINTS.GET_ORDER_DETAILS,
        formData
      );
    },
    get: (tracking_number: string) =>
      HttpClient.get<Order>(`${API_ENDPOINTS.ORDERS}/${tracking_number}`),
    create: (input: CreateOrderInput) =>
      HttpClient.post<Order>(API_ENDPOINTS.ORDERS, input),
    statuses: (params: Pick<QueryOptions, 'limit'>) =>
      HttpClient.get<OrderStatusPaginator>(API_ENDPOINTS.ORDERS_STATUS, params),
    refunds: (params: Pick<QueryOptions, 'limit'>) =>
      HttpClient.get<RefundPaginator>(API_ENDPOINTS.ORDERS_REFUNDS, params),
    createRefund: (input: CreateRefundInput) =>
      HttpClient.post<Refund>(API_ENDPOINTS.ORDERS_REFUNDS, input),

    downloadable: (query?: OrderQueryOptions) =>
      HttpClient.get<DownloadableFilePaginator>(
        API_ENDPOINTS.ORDERS_DOWNLOADS,
        query
      ),
    verify: (input: CheckoutVerificationInput) =>
      HttpClient.post<VerifiedCheckoutData>(
        API_ENDPOINTS.ORDERS_CHECKOUT_VERIFY,
        input
      ),
    generateDownloadLink: (input: { digital_file_id: string }) =>
      HttpClient.post<string>(
        API_ENDPOINTS.GENERATE_DOWNLOADABLE_PRODUCT_LINK,
        input
      ),
  };
  users = {
    me: (user: any) => {
      const formData = new URLSearchParams(user);
      return HttpClient.post<User>(API_ENDPOINTS.USERS_ME, formData);
    },
    update: (user: UpdateUserInput) =>
      HttpClient.post<User>(`${API_ENDPOINTS.SET_PROFILE}`, user),
    setDeliveryAddress: (user: UpdateUserInput) => {
      const formData = new URLSearchParams(user);
      return HttpClient.post<User>(`${API_ENDPOINTS.SET_ADDRESS}`, formData);
    },
    setBillingAddress: (user: UpdateUserInput) => {
      const formData = new URLSearchParams(user);
      return HttpClient.post<User>(
        `${API_ENDPOINTS.SET_BILLING_ADDRESS}`,
        formData
      );
    },
    getAddress: (user: UpdateUserInput) => {
      const formData = new URLSearchParams(user);
      return HttpClient.post<User>(
        `${API_ENDPOINTS.USER_GET_ADDRESS}`,
        formData
      );
    },
    login: (input: LoginUserInput) => {
      const formData = new URLSearchParams(input);
      return HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_LOGIN, formData);
    },
    socialLogin: (input: SocialLoginInputType) =>
      HttpClient.post<AuthResponse>(API_ENDPOINTS.SOCIAL_LOGIN, input),
    sendOtpCode: (input: SendOtpCodeInputType) =>
      HttpClient.post<OTPResponse>(API_ENDPOINTS.SEND_OTP_CODE, input),
    verifyOtpCode: (input: VerifyOtpInputType) =>
      HttpClient.post<OTPVerifyResponse>(API_ENDPOINTS.VERIFY_OTP_CODE, input),
    OtpLogin: (input: OtpLoginInputType) =>
      HttpClient.post<AuthResponse>(API_ENDPOINTS.OTP_LOGIN, input),
    register: (input: RegisterUserInput) => {
      const formData = new URLSearchParams(input);
      return HttpClient.post<AuthResponse>(
        API_ENDPOINTS.USERS_REGISTER,
        formData
      );
    },
    forgotPassword: (input: ForgotPasswordUserInput) => {
      const formData = new URLSearchParams(input);
      return HttpClient.post<PasswordChangeResponse>(
        API_ENDPOINTS.USERS_FORGOT_PASSWORD,
        formData
      );
    },

    verifyForgotPasswordToken: (input: VerifyForgotPasswordUserInput) => {
      const formData = new URLSearchParams(input);
      return HttpClient.post<PasswordChangeResponse>(
        API_ENDPOINTS.RECOVERY_VALIDATION,
        formData
      );
    },
    resetPassword: (input: VerifyForgotPasswordUserInput) => {
      const formData = new URLSearchParams(input);
      return HttpClient.post<PasswordChangeResponse>(
        API_ENDPOINTS.RECOVERY_SET,
        formData
      );
    },
    changePassword: (input: ChangePasswordUserInput) =>
      HttpClient.post<PasswordChangeResponse>(
        API_ENDPOINTS.USERS_CHANGE_PASSWORD,
        input
      ),
    logout: () => HttpClient.post<boolean>(API_ENDPOINTS.USERS_LOGOUT, {}),
    deleteAddress: (data: UpdateUserInput) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<User>(`${API_ENDPOINTS.DELETE_ADDRESS}`, formData);
    },
    deleteBillingAddress: (data: UpdateUserInput) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<User>(
        `${API_ENDPOINTS.DELETE_BILLING_ADDRESS}`,
        formData
      );
    },
    subscribe: (input: { email: string }) => {
      const formData = new URLSearchParams(input);
      return HttpClient.post<any>(
        API_ENDPOINTS.USERS_SUBSCRIBE_TO_NEWSLETTER,
        formData
      );
    },
    contactUs: (input: CreateContactUsInput) =>
      HttpClient.post<any>(API_ENDPOINTS.USERS_CONTACT_US, input),
    getProvinces: (data: any) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<User>(API_ENDPOINTS.PROVINCES, formData);
    },
    getCountries: (data: any) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<User>(API_ENDPOINTS.COUNTRIES, formData);
    },
    getCart: (data: any) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<User>(API_ENDPOINTS.GET_CART, formData);
    },
    getCard: (data: any) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<any>(API_ENDPOINTS.USER_GET_CARD, formData);
    },
    getPaymentMethod: (data: any) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<any>(API_ENDPOINTS.GET_PAYMENT_METHOD, formData);
    },
    setCard: (data: any) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<User>(API_ENDPOINTS.SET_CARD, formData);
    },
    checkout: (data: any) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<User>(API_ENDPOINTS.CHECKOUT, formData);
    },
    promocode: (data: any) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<User>(API_ENDPOINTS.CHECK_PROMO_CODE, formData);
    },
    checkout3ds: (data: any) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<User>(API_ENDPOINTS.CHECKOUT_3DS, formData);
    },
    getWineCellar: (data: any) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<User>(API_ENDPOINTS.GET_WINE_CELLAR, formData);
    },
    wineCellarQty: (data: any) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<User>(API_ENDPOINTS.WINE_CELLAR_QTY, formData);
    },
    wineCellarReject: (data: any) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<User>(API_ENDPOINTS.WINE_CELLAR_REJECT, formData);
    },
    getVouchers: (data: any) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<User>(API_ENDPOINTS.GET_VOUCHERS, formData);
    },
    checkGourmet: (data: any) => {
      const formData = new URLSearchParams(data);
      return HttpClient.post<User>(API_ENDPOINTS.CHECK_GOURMET_ORO, formData);
    },
  };
  wishlist = {
    all: (params: WishlistQueryOptions) =>
      HttpClient.get<WishlistPaginator>(API_ENDPOINTS.USERS_WISHLIST, {
        with: 'shop',
        orderBy: 'created_at',
        sortedBy: 'desc',
        ...params,
      }),
    toggle: (input: { product_id: string; language?: string }) =>
      HttpClient.post<{ in_wishlist: boolean }>(
        API_ENDPOINTS.USERS_WISHLIST_TOGGLE,
        input
      ),
    remove: (id: string) =>
      HttpClient.delete<Wishlist>(`${API_ENDPOINTS.WISHLIST}/${id}`),
    checkIsInWishlist: ({ product_id }: { product_id: string }) =>
      HttpClient.get<boolean>(
        `${API_ENDPOINTS.WISHLIST}/in_wishlist/${product_id}`
      ),
  };
  settings = {
    all: {
      id: 1,
      options: {
        seo: {
          ogImage: null,
          ogTitle: null,
          metaTags: null,
          metaTitle: null,
          canonicalUrl: null,
          ogDescription: null,
          twitterHandle: null,
          metaDescription: null,
          twitterCardType: null,
        },
        logo: {
          id: '862',
          original:
            'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/860/PickBazar.png',
          thumbnail:
            'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/860/conversions/PickBazar-thumbnail.jpg',
        },
        useOtp: false,
        currency: 'USD',
        taxClass: 1,
        siteTitle: 'Pickbazar',
        deliveryTime: [
          { title: 'Express Delivery', description: '90 min express delivery' },
          { title: 'Morning', description: '8.00 AM - 11.00 AM' },
          { title: 'Noon', description: '11.00 AM - 2.00 PM' },
          { title: 'Afternoon', description: '2.00 PM - 5.00 PM' },
          { title: 'Evening', description: '5.00 PM - 8.00 PM' },
        ],
        signupPoints: 100,
        siteSubtitle: 'Your next ecommerce',
        shippingClass: 1,
        contactDetails: {
          contact: '+129290122122',
          socials: [
            { url: 'https://www.facebook.com/', icon: 'FacebookIcon' },
            { url: 'https://twitter.com/home', icon: 'TwitterIcon' },
            { url: 'https://www.instagram.com/', icon: 'InstagramIcon' },
          ],
          website: 'https://redq.io',
          location: {
            lat: 42.9585979,
            lng: -76.90872019999999,
            zip: null,
            city: null,
            state: 'NY',
            country: 'United States',
            formattedAddress: 'NY State Thruway, New York, USA',
          },
        },
        minimumOrderAmount: 0,
        maximumQuestionLimit: 5,
        currencyToWalletRatio: 3,
      },
      language: 'en',
      created_at: '2021-03-24T15:30:18.000Z',
      updated_at: '2022-01-15T19:02:50.000Z',
    },
    upload: (input: File[]) => {
      let formData = new FormData();
      input.forEach((attachment) => {
        formData.append('attachment[]', attachment);
      });
      return HttpClient.post<Attachment[]>(API_ENDPOINTS.UPLOADS, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
  };
  banner = {
    all: (body) => {
      const formData = new URLSearchParams(body);
      return HttpClient.post<Banner>(API_ENDPOINTS.BANNER_IMG, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    },
  };
  brands = {
    all: (body) => {
      const formData = new URLSearchParams(body);
      return HttpClient.post<Banner>(API_ENDPOINTS.BRANDS, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    },
  };
  ip = {
    get: () => HttpClient.get(API_ENDPOINTS.IP),
  };
}

export default new Client();
