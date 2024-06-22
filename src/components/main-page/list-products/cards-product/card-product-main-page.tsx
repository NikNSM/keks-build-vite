import { TypeProductCard } from '../../../../type/type-data';

type TypeCardProductProps = {
  product: TypeProductCard;
}
export default function CardProductMainPage({ product }: TypeCardProductProps): JSX.Element {
  const classButtonFavorite = product.isFavorite ? 'card-item__favorites card-item__favorites--active' : 'card-item__favorites';

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
        <button className={classButtonFavorite}><span className="visually-hidden">Добавить в избранное</span>
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
