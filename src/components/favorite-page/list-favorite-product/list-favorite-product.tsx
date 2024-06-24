import { useAppSelector } from '../../../utils';
import CardFavoriteProduct from './card-favorite-product/card-favorite-product';

export default function ListFavoriteProduct(): JSX.Element {
  const listFavoriteProduct = useAppSelector((state) => state.product.favoriteProducts);

  return (
    <ul className="catalog__list">
      {listFavoriteProduct.map((product) => <CardFavoriteProduct key={`key-${product.id}`} product={product} />)}
    </ul>
  );
}
