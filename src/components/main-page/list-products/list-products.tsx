import CardProductMainPage from './cards-product/card-product-main-page';
import LinkCardMainPage from './cards-product/link-card-main-page';
import { useAppDispatch, useAppSelector } from '../../../utils';
import { getRandomArrayElements } from '../../../utils';
import { useEffect } from 'react';
import { TypeProductsCards } from '../../../type/type-data';
import { getListProductsMainPage } from '../../../store/product-slice/product-slice';
export default function ListProductsMainPage(): JSX.Element {
  const products = useAppSelector((state) => state.product.listProducts);
  const listProducts = useAppSelector((state) => state.product.listProductsMainPage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (listProducts.length === 0) {
      const randomProductList = getRandomArrayElements(products);
      dispatch(getListProductsMainPage(randomProductList));
      return;
    }

    const newListProducts = listProducts.reduce((acc: TypeProductsCards, productItem) => {
      const newProduct = products.find((product) => product.id === productItem.id);
      if (newProduct !== undefined) {
        acc.push(newProduct);
      }
      return acc;
    }, []);

    dispatch(getListProductsMainPage(newListProducts));
  }, [products]);

  return (
    <div className="container">
      <h2 className="random-main__title">кексы</h2>
      <ul className="random-main__list">
        {listProducts.map((product) => <CardProductMainPage key={`key-${product.id}`} product={product} />)}
        <LinkCardMainPage />
      </ul>
    </div>
  );
}
