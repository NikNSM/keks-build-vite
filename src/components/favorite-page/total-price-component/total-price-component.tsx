import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../utils';
import { AddressesRoute } from '../../../const';

export default function TotalPriceComponent(): JSX.Element {
  const listProduct = useAppSelector((state) => state.product.favoriteProducts);
  const totalPrice = new Intl.NumberFormat('ru-RU').format(listProduct.reduce((acc, product) => acc + product.price, 0));
  return (
    <section className="number-of-favourites favorites-page__qty">
      <div className="container">
        <h2 className="visually-hidden">Количество товаров в избранном.</h2>
        <p className="number-of-favourites__cakes">{listProduct.length} кекса</p>
        <div className="number-of-favourites__wrapper">
          <div className="number-of-favourites__wrap-price">
            <p className="number-of-favourites__text">Всего</p>
            <p className="number-of-favourites__price">{totalPrice} р</p>
          </div>
        </div>
        <div className="number-of-favourites__button">
          <Link to={AddressesRoute.Catalog} className="btn">В каталог</ Link>
        </div>
      </div>
    </section>
  );
}
