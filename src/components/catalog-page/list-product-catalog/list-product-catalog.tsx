import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../utils';
import CardProductCatalog from './card-product-catalog/card-product-catalog';

const PRODUCT_COUNT_PER_STEP = 6;

export default function ListProductCatalog(): JSX.Element {
  const listProducts = useAppSelector((state) => state.product.listProducts);
  const [quantityProduct, setQuantityProduct] = useState(Math.min(PRODUCT_COUNT_PER_STEP, listProducts.length));
  const isShowButton = quantityProduct < listProducts.length;
  const handlerClickShowMoreButton = () => {
    setQuantityProduct(Math.min(quantityProduct + PRODUCT_COUNT_PER_STEP, listProducts.length));
  };

  useEffect(() => {
    setQuantityProduct(Math.min(PRODUCT_COUNT_PER_STEP, listProducts.length));
  }, [listProducts]);

  return (
    <section className="catalog">
      <div className="container">
        <h2 className="visually-hidden">Каталог</h2>
        <div className="catalog__wrapper">
          <ul className="catalog__list">
            {listProducts.slice(0, quantityProduct).map((product) => <CardProductCatalog key={`key-product-${product.id}`} product={product} />)}
          </ul>
          <div className="catalog__button-wrapper">
            {isShowButton ?
              <button
                className="btn btn--second"
                type="button"
                onClick={handlerClickShowMoreButton}
              >Показать еще
              </button> :
              <button
                className="btn btn--second"
                type="button"
              >В начало
              </button>}
          </div>
        </div>
      </div>
    </section>
  );
}
