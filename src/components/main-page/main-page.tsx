export default function MainPage(): JSX.Element {
  return (
    <div className="wrapper">
      <header className="header header--authorized">
        <div className="container">
          <div className="header__inner"><span className="header__logo"><img src="img/svg/logo.svg" width="170" height="69" alt="Кондитерская кекс" /></span>
            <div className="header__user-info-wrap">
              <div className="header__user-info">
                <div className="header__user-avatar">
                  <picture>
                    <source type="image/webp" srcSet="img/content/user-avatar.webp, img/content/user-avatar@2x.webp 2x" /><img src="img/content/user-avatar.jpg" srcSet="img/content/user-avatar@2x.jpg 2x" width="62" height="62" alt="Аватар пользователя." />
                  </picture>
                </div>
                <p className="header__user-mail">keks@academy.ru</p>
              </div>
            </div>
            <div className="header__buttons">
              <a className="header__favourite" href="#">
                <span className="header__favourite-icon">
                  <svg width="33" height="29" aria-hidden="true">
                    <use xlinkHref="#icon-favourite"></use>
                  </svg>
                </span><span className="header__favourite-number">2</span><span className="visually-hidden">Избранное</span>
              </a>
              <div className="header__buttons-authorized">
                <div className="header__btn">
                  <a className="btn btn--second" href="#">Выйти</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
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
          <div className="container">
            <h2 className="random-main__title">кексы</h2>
            <ul className="random-main__list">
              <li className="random-main__item">
                <div className="card-item">
                  <a className="card-item__img-link" href="#">
                    <div className="card-item__img-wrapper">
                      <picture>
                        <source type="image/webp" srcSet="img/content/blueberry-cake.webp, img/content/blueberry-cake@2x.webp 2x" /><img src="img/content/blueberry-cake.jpg" srcSet="img/content/blueberry-cake@2x.jpg 2x" width="241" height="245" alt="Торт голубика." />
                      </picture>
                    </div><span className="card-item__label">Новинка</span>
                  </a>
                  <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
                    <svg width="51" height="41" aria-hidden="true">
                      <use xlinkHref="#icon-like"></use>
                    </svg>
                  </button>
                  <a className="card-item__link" href="#">
                    <h3 className="card-item__title"><span>Торт Голубика</span></h3>
                  </a>
                </div>
              </li>
              <li className="random-main__item">
                <div className="card-item">
                  <a className="card-item__img-link" href="#">
                    <div className="card-item__img-wrapper">
                      <picture>
                        <source type="image/webp" srcSet="img/content/chocolate-pie.webp, img/content/chocolate-pie@2x.webp 2x" /><img src="img/content/chocolate-pie.jpg" srcSet="img/content/chocolate-pie@2x.jpg 2x" width="241" height="245" alt="Шоколадный кекс." />
                      </picture>
                    </div>
                  </a>
                  <button className="card-item__favorites"><span className="visually-hidden">Добавить в избранное</span>
                    <svg width="51" height="41" aria-hidden="true">
                      <use xlinkHref="#icon-like"></use>
                    </svg>
                  </button>
                  <a className="card-item__link" href="#">
                    <h3 className="card-item__title"><span>Шоколадный Кекс</span></h3>
                  </a>
                </div>
              </li>
              <li className="random-main__item">
                <div className="card-item">
                  <a className="card-item__img-link" href="#">
                    <div className="card-item__img-wrapper">
                      <picture>
                        <source type="image/webp" srcSet="img/content/lemon-pie.webp, img/content/lemon-pie@2x.webp 2x" /><img src="img/content/lemon-pie.jpg" srcSet="img/content/lemon-pie@2x.jpg 2x" width="241" height="245" alt="Лимонный чизкейк." />
                      </picture>
                    </div><span className="card-item__label">Новинка</span>
                  </a>
                  <button className="card-item__favorites"><span className="visually-hidden">Добавить в избранное</span>
                    <svg width="51" height="41" aria-hidden="true">
                      <use xlinkHref="#icon-like"></use>
                    </svg>
                  </button>
                  <a className="card-item__link" href="#">
                    <h3 className="card-item__title"><span>Лимонный Чизкейк</span></h3>
                  </a>
                </div>
              </li>
              <li className="random-main__item">
                <a className="random-main__link" href="#">
                  <div className="random-main__icon-wrapper">
                    <div className="random-main__icon">
                      <svg width="120" height="130" aria-hidden="true">
                        <use xlinkHref="#icon-keks"></use>
                      </svg>
                    </div>
                  </div>
                  <h3 className="random-main__subtitle">Все кексы</h3>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="last-review">
          <div className="container">
            <h2 className="last-review__title">последний отзыв</h2>
            <div className="review">
              <div className="review__inner-wrapper review__inner-wrapper--border">
                <time className="review__date" dateTime="2023-05-15">15.05</time><span className="review__author">Уважаемый(-ая) Кот</span>
                <div className="star-rating">
                  <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </div>
                <div className="review__text-wrapper">
                  <p className="review__text">&quot;Отличный сервис! Очень вкусный, сочный и&nbsp;яркий торт. Удобная коробка для транспортировки. Свежие фрукты и&nbsp;съедобный дизайн.</p>
                  <p className="review__text">Недостатков нет, обязательно будем заказывать и&nbsp;приходить в&nbsp;Кексик</p>
                </div>
                <div className="review__image-wrapper">
                  <picture>
                    <source type="image/webp" srcSet="img/content/review-1.webp, img/content/review-1@2x.webp 2x" /><img src="img/content/review-1.jpg" srcSet="img/content/review-1@2x.jpg 2x" width="162" height="162" alt="Кот" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map">
          <div className="container">
            <h2 className="map__title">адреса</h2>
            <div className="map__wrapper"></div>
            <ul className="map__addresses">
              <li className="map__address">
                <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                  <input type="radio" value="user-agreement-10" id="user-agreement-id-10" name="user-agreement" />
                  <label className="custom-toggle__label" htmlFor="user-agreement-id-10">Кондитерская 1</label>
                  <address className="custom-toggle__address">Морской пр. 2А
                    <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
                      <use xlinkHref="#icon-keks-footprint"></use>
                    </svg>
                  </address>
                </div>
              </li>
              <li className="map__address">
                <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                  <input type="radio" value="user-agreement-12" id="user-agreement-id-12" name="user-agreement" checked />
                  <label className="custom-toggle__label" htmlFor="user-agreement-id-12">Кондитерская 2</label>
                  <address className="custom-toggle__address">Морской пр. 2А
                    <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
                      <use xlinkHref="#icon-keks-footprint"></use>
                    </svg>
                  </address>
                </div>
              </li>
              <li className="map__address">
                <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                  <input type="radio" value="user-agreement-13" id="user-agreement-id-13" name="user-agreement" />
                  <label className="custom-toggle__label" htmlFor="user-agreement-id-13">Производство</label>
                  <address className="custom-toggle__address">Морской пр. 2А
                    <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
                      <use xlinkHref="#icon-keks-footprint"></use>
                    </svg>
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <p className="footer__feedback">Напишите нам:<a className="footer__feedback-email" href="mailto:pecarnya@academy.pro">pecarnya@academy.pro</a></p>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__social-link" href="#" target="_blank" rel="nofollow noopener"><span className="visually-hidden">Вконтакте</span>
                  <svg width="50" height="50" aria-hidden="true">
                    <use xlinkHref="#icon-vk"></use>
                  </svg>
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__social-link" href="#" target="_blank" rel="nofollow noopener"><span className="visually-hidden">Телеграм</span>
                  <svg width="50" height="50" aria-hidden="true">
                    <use xlinkHref="#icon-telegram"></use>
                  </svg>
                </a>
              </li>
            </ul><a className="footer__devolopers" href="https://htmlacademy.ru/">Разработано .html Academy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
