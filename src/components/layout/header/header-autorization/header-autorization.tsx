import { useAppDispatch, useAppSelector } from '../../../../utils';
import { AddressesRoute } from '../../../../const';
import { Link } from 'react-router-dom';
import { logOutUser } from '../../../../store/users-slice/api-action';

export default function HeaderAutorization(): JSX.Element {
  const user = useAppSelector((state) => state.user.users);
  const loading = useAppSelector((state) => state.user.loading);
  const loadinFavoriteList = useAppSelector((state) => state.product.loadingFavoriteList);
  const listFavorite = useAppSelector((state) => state.product.favoriteProducts);
  const dispatch = useAppDispatch();

  const handlerClickLogOut = () => {
    dispatch(logOutUser());
  };

  const classButton = loading ? 'header__btn is-is-disabled' : 'header__btn';

  return (
    <header className="header header--authorized">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" to={AddressesRoute.Main} aria-label="Переход на главную">
            <span className="header__logo">
              <img src="img/svg/logo.svg" width="170" height="69" alt="Кондитерская кекс" />
            </span>
          </Link>
          <div className="header__user-info-wrap">
            <div className="header__user-info">
              <div className="header__user-avatar">
                <picture>
                  <source type="image/webp" srcSet={user.avatarUrl} />
                  <img src={user.avatarUrl} srcSet={user.avatarUrl} width="62" height="62" alt="Аватар пользователя." />
                </picture>
              </div>
              <p className="header__user-mail">{user.email}</p>
            </div>
          </div>
          <div className="header__buttons">
            {loadinFavoriteList ?
              <div className="loader" /> :
              <Link to={AddressesRoute.Favorite} className="header__favourite" >
                <span className="header__favourite-icon">
                  <svg width="33" height="29" aria-hidden="true">
                    <use xlinkHref="#icon-favourite"></use>
                  </svg>
                </span>
                <span className="header__favourite-number">{listFavorite.length}</span>
                <span className="visually-hidden">Избранное</span>
              </Link>}
            <div className="header__buttons-authorized">
              <div
                className={classButton}
                onClick={(evt) => {
                  evt.preventDefault();
                  handlerClickLogOut();
                }}
              >
                {loading ? <div className="loader" /> : <a className="btn btn--second" href="#">Выйти</a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
