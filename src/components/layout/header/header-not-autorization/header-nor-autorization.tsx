import { AddressesRoute } from '../../../../const';
import { Link } from 'react-router-dom';

export default function HeaderNotAutorization(): JSX.Element {
  return (
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
              <Link className="btn" to={AddressesRoute.LogIn}>Войти</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
