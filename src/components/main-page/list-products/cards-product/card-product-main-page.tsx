import { AddressesRoute, AutorizationStatus } from '../../../../const';
import { addToFavorites, deleteFavorite } from '../../../../store/product-slice/api-product-action';
import { TypeProductCard } from '../../../../type/type-data';
import { useAppDispatch, useAppSelector } from '../../../../utils';
import { useNavigate } from 'react-router-dom';

type TypeCardProductProps = {
  product: TypeProductCard;
}
export default function CardProductMainPage({ product }: TypeCardProductProps): JSX.Element {
  const classButtonFavorite = product.isFavorite ? 'card-item__favorites card-item__favorites--active' : 'card-item__favorites';
  const statusAutorization = useAppSelector((state) => state.user.status);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerCLickFavoriteButton = (value: string) => {
    if (statusAutorization === AutorizationStatus.NO_AUTORIZATION) {
      navigate(AddressesRoute.LogIn);
      return;
    }
    if (product.isFavorite) {
      dispatch(deleteFavorite(value));
      return;
    }

    dispatch(addToFavorites(value));
  };

  return (
    <li className="random-main__item">
      <div className="card-item">
        <a className="card-item__img-link" href="#">
          <div className="card-item__img-wrapper">
            <picture>
              <source type="image/webp" srcSet={product.previewImageWebp} /><img src={product.previewImage} srcSet={product.previewImage} width="241" height="245" alt={product.title} />
            </picture>
          </div>
          {product.isNew ? <span className="card-item__label">Новинка</span> : ''}
        </a>
        <button
          id={product.id}
          className={classButtonFavorite}
          onClick={(evt) => {
            evt.preventDefault();
            const value = evt.currentTarget.id;
            handlerCLickFavoriteButton(value);
          }}
        >
          <span className="visually-hidden">Добавить в избранное</span>
          <svg width="51" height="41" aria-hidden="true">
            <use xlinkHref="#icon-like"></use>
          </svg>
        </button>
        <a className="card-item__link" href="#">
          <h3 className="card-item__title"><span>{product.title}</span></h3>
        </a>
      </div>
    </li>
  );
}
