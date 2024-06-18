import { useAppSelector } from '../../../utils-redux-hook';
import { AutorizationStatus } from '../../../const';

export default function Header(): JSX.Element {
  const autorizationStatus = useAppSelector((state) => state.user.status);
  const user = useAppSelector((state) => state.user.users);
  const isAutorization = autorizationStatus === AutorizationStatus.AUTORIZATION;

  return (
    isAutorization ?
      <header className="header header--authorized">
        <div className="container">
          <div className="header__inner">
            <span className="header__logo">
              <img src="img/svg/logo.svg" width="170" height="69" alt="Кондитерская кекс" />
            </span>
            <div className="header__user-info-wrap">
              <div className="header__user-info">
                <div className="header__user-avatar">
                  <picture>
                    <source type="image/webp" srcSet="img/content/user-avatar.webp, img/content/user-avatar@2x.webp 2x" />
                    <img src={user.avatarUrl} srcSet="img/content/user-avatar@2x.jpg 2x" width="62" height="62" alt="Аватар пользователя." />
                  </picture>
                </div>
                <p className="header__user-mail">{user.email}</p>
              </div>
            </div>
            <div className="header__buttons">
              <a className="header__favourite" href="#">
                <span className="header__favourite-icon">
                  <svg width="33" height="29" aria-hidden="true">
                    <use xlinkHref="#icon-favourite"></use>
                  </svg>
                </span>
                <span className="header__favourite-number">2</span>
                <span className="visually-hidden">Избранное</span>
              </a>
              <div className="header__buttons-authorized">
                <div className="header__btn">
                  <a className="btn btn--second" href="#">Выйти</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> :
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <a className="header__logo" href="index.html" aria-label="Переход на главную">
              <img src="img/svg/logo.svg" width="170" height="69" alt="Кондитерская кекс" />
            </a>
            <div className="header__buttons">
              <div className="header__btn">
                <a className="btn btn--third header__link header__link--reg" href="register-page.html">Регистрация</a>
              </div>
              <div className="header__btn">
                <a className="btn" href="login-page.html">Войти</a>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}
