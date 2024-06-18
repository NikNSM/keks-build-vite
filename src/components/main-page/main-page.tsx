import Header from './header/header';
import ListProductsMainPage from './list-products/list-products';
import LastReview from './last-review/last-review';
import Footer from './footer/footer';
import MapComponent from './map-component/map-components';

export default function MainPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
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
      <Footer />
    </div>
  );
}
