import ListProductsMainPage from './list-products/list-products';
import LastReview from './last-review/last-review';
import MapComponent from './map-component/map-components';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils';
import { getLastReview } from '../../store/reviews-slice/api-review-action';
import { getFavoriteProducts, getListProducts } from '../../store/product-slice/api-product-action';
import { AddressesRoute, AutorizationStatus } from '../../const';
import { Link } from 'react-router-dom';

export default function MainPage(): JSX.Element {
  const statusAutorization = useAppSelector((state) => state.user.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLastReview());
    dispatch(getListProducts());

  }, [dispatch]);

  useEffect(() => {
    if (statusAutorization === AutorizationStatus.AUTORIZATION) {
      dispatch(getFavoriteProducts());
    }
  }, [statusAutorization, dispatch]);

  return (
    <div className="wrapper">
      <main>
        <div className="hero">
          <div className="container">
            <div className="hero__img-wrapper"><img className="hero__img" src="img/svg/hero-keks.svg" width="727" height="569" alt="Картика кота." /></div>
            <div className="hero__wrapper">
              <p className="hero__subtitle">Твоя пушистая кондитерская</p>
              <p className="hero__title">КЕКС</p>
              <div className="hero__button-wrapper">
                <Link to={AddressesRoute.Catalog} className="btn">Скорее смотреть</Link>
              </div>
            </div>
          </div>
        </div>
        <section className="random-main">
          <ListProductsMainPage />
        </section>
        <section className="last-review">
          <LastReview />
        </section>
        <section className="map">
          <MapComponent />
        </section>
      </main>
    </div>
  );
}
