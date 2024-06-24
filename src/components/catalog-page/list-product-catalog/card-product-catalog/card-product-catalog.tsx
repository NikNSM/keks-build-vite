import { TypeProductCard } from '../../../../type/type-data';
import { useAppDispatch, useAppSelector } from '../../../../utils';
import { useNavigate } from 'react-router-dom';
import { AddressesRoute, AutorizationStatus } from '../../../../const';
import { deleteFavorite, addToFavorites } from '../../../../store/product-slice/api-product-action';

type TypeCardCatalogProps = {
  product: TypeProductCard;
}

export default function CardProductCatalog({ product }: TypeCardCatalogProps): JSX.Element {
  const price = new Intl.NumberFormat('ru-RU').format(product.price);
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
    <li className="catalog__item">
      <div className="card-item card-item--big">
        <a className="card-item__img-link" href="#">
          <div className="card-item__img-wrapper">
            <picture>
              <source type="image/webp" srcSet={product.previewImageWebp} />
              <img src={product.previewImage} srcSet={product.previewImage} width="326" height="332" alt="Торт голубика." />
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
        ><span className="visually-hidden">Добавить в избранное</span>
          <svg width="51" height="41" aria-hidden="true">
            <use xlinkHref="#icon-like"></use>
          </svg>
        </button><span className="card-item__price">{price} p</span>
        <a className="card-item__link" href="#">
          <h3 className="card-item__title"><span>{product.title}</span></h3>
        </a>
      </div>
    </li>
  );
}
