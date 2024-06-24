import { Link } from 'react-router-dom';
import { AddressesRoute } from '../../const';

export default function Page404(): JSX.Element {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <Link className="header__logo" to={AddressesRoute.Main} aria-label="Переход на главную">
              <img src="img/svg/logo.svg" width="170" height="69" alt="Кондитерская кекс" />
            </ Link>
            <div className="header__buttons">
              <div className="header__btn">
                <Link className="btn btn--third header__link header__link--reg" to={AddressesRoute.SignUp}>Регистрация</ Link>
              </div>
              <div className="header__btn">
                <Link className="btn" to={AddressesRoute.LogIn}>Войти</ Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <h1 className="visually-hidden">404</h1>
        <section className="error-page">
          <div className="container">
            <h2 className="error-page__title">404</h2>
            <p className="error-page__message">Страница не найдена</p>
            <p className="error-page__text">Она была удалена<br />или<br />вы&nbsp;указали неправильный адрес.</p>
            <div className="error-page__button">
              <Link className="btn btn--large" to={AddressesRoute.Main}>Вернуться&nbsp;на&nbsp;главную</ Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
