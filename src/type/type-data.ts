export enum CategoryProduct {
  'bisque',
  'cheesecake',
  'shortbread',
  'dessert',
}

export enum TypeProduct {
  'chocolate',
  'vanilla',
  'vegetarian',
  'honey-cake',
  'lemon',
  'new-york',
  'tart',
  'funnel-cake',
  'basket-cake',
  'chocolate-muffin',
  'brand-muffin',
}

export type TypeProductCard = {
  id: string;
  title: string;
  category: CategoryProduct;
  type: TypeProduct;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
};

export type TypeProductsCards = TypeProductCard[];

export type TypeProductPage = {
  id: string;
  title: string;
  category: CategoryProduct;
  type: TypeProduct;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
  description: string;
  images: string[];
  weight: number;
  rating: number;
  reviewCount: number;
};

export type TypeListFavorite = TypeProductPage[];

export type TypeCategory = {
  category: string;
  types: string[];
};

export type TypeCategories = TypeCategory[];

export type TypeUserFeedback = {
  name: string;
  avatarUrl: string;
};

export type TypeFeedback = {
  id: string;
  isoDate: string;
  user: TypeUserFeedback;
  positive: string;
  negative: string;
  reating: number;
};

export type TypeListFeedback = TypeFeedback[];

export type TypeUser = {
  name: string;
  email: string;
  avatarUrl: string;
  token: string;
};

export type TypeDataMarker = {
  value: string;
  lat: number;
  lng: number;
  type: 'production' | 'confectionery';
  name: string;
};
