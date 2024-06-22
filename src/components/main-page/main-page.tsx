import ListProductsMainPage from './list-products/list-products';
import LastReview from './last-review/last-review';
import MapComponent from './map-component/map-components';
import { useEffect } from 'react';
import { useAppDispatch } from '../../utils';
import { getLastReview } from '../../store/reviews-slice/api-review-action';
import { getListProducts } from '../../store/product-slice/api-product-action';

export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLastReview());
    dispatch(getListProducts());
  }, [dispatch]);

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
                <a className="btn" href="catalog-page.html">Скорее смотреть</a>
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
