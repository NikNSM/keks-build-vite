export enum AddressesRoute {
  Catalog = '/Catalog',
  Favorite = '/Favourites',
  Page404 = '/404',
  LogIn = '/logIn',
  SignUp = '/SignUp',
  Main = '/',
  ErrorPage = '/ErrorPage',
  ProductPage = '/ProductPage',
}

export enum ApiRoute {
  PRODUCTS = '/products',
  CATEGORIES = '/categories',
  FAVORITES = '/favorites',
  REVIEWS = '/reviews',
  LAST_REVIEW = '/reviews/getLast',
  REGISTRATION = '/users/registration',
  POST_AVATAR_USER = '/users/upload',
  AUTORIZATION = '/users/login',
  LOGOUT = '/users/logout',
}

export enum AutorizationStatus {
  UNKNOW = 'unknow',
  NO_AUTORIZATION = 'no autorization',
  AUTORIZATION = 'autorization',
}
