import { deleteFavorite } from '../../store/product-slice/api-product-action';
import { useAppDispatch, useAppSelector } from '../../utils';
import ListFavoriteProduct from './list-favorite-product/list-favorite-product';
import TotalPriceComponent from './total-price-component/total-price-component';
import EmptyFavoritePage from './empty-favorite-page/empty-favorite-page';
export default function FavoritePage(): JSX.Element {
  const listFavoriteProduct = useAppSelector((state) => state.product.favoriteProducts);
  const dispatch = useAppDispatch();

  const handlerClickClear = () => {
    listFavoriteProduct.forEach((product): void => {
      dispatch(deleteFavorite(product.id));
    });
  };
  return (
    listFavoriteProduct.length === 0 ? <EmptyFavoritePage /> :
      <main>
        <div className="favorites-page">
          <h1 className="visually-hidden">Избранное</h1>
          <div className="back-link">
            <div className="container">
              <a className="back-link__link" href="#">Назад
                <svg className="back-link__icon" width="30" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-arrow-left"></use>
                </svg>
              </a>
            </div>
          </div>
          <TotalPriceComponent />
          <section className="favourites">
            <div className="container">
              <h2 className="visually-hidden">Избранные товары</h2>
              <div className="favourites__button">
                <button
                  className="btn btn--second"
                  type="button"
                  onClick={handlerClickClear}
                >Очистить
                </button>
              </div>
            </div>
            <section className="catalog">
              <div className="container">
                <h2 className="visually-hidden">Каталог</h2>
                <div className="catalog__wrapper">
                  <ListFavoriteProduct />
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
  );
}
