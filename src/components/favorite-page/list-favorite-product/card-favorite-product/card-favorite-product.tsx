import { TypeProductPage } from '../../../../type/type-data';
import { deleteFavorite } from '../../../../store/product-slice/api-product-action';
import { useAppDispatch } from '../../../../utils';
type TypeCardFavoriteProductProps = {
  product: TypeProductPage;
}

export default function CardFavoriteProduct({ product }: TypeCardFavoriteProductProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handlerCLickFavoriteButton = (value: string) => {
    dispatch(deleteFavorite(value));
  };
  return (
    <li className="catalog__item">
      <div className="card-item card-item--big">
        <a className="card-item__img-link" href="#">
          <div className="card-item__img-wrapper">
            <picture>
              <source type="image/webp" srcSet={product.previewImageWebp} />
              <img src={product.previewImage} srcSet={product.previewImage} width="326" height="332" alt="Чизкейк лимонный." />
            </picture>
          </div>
          {product.isNew ? <span className="card-item__label">Новинка</span> : ''}
        </a>
        <button
          id={product.id}
          className="card-item__favorites card-item__favorites--active"
          onClick={(evt) => {
            evt.preventDefault();
            const value = evt.currentTarget.id;
            handlerCLickFavoriteButton(value);
          }}
        ><span className="visually-hidden">Добавить в избранное</span>
          <svg width="51" height="41" aria-hidden="true">
            <use xlinkHref="#icon-like"></use>
          </svg>
        </button><span className="card-item__price">{product.price}</span>
        <a className="card-item__link" href="#">
          <h3 className="card-item__title"><span>{product.title}</span></h3>
        </a>
      </div>
    </li>
  );
}
