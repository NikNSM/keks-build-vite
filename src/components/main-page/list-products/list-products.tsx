import CardProductMainPage from './cards-product/card-product-main-page';
import LinkCardMainPage from './cards-product/link-card-main-page';
import { useAppSelector } from '../../../utils';
import { getRandomArrayElements } from '../../../utils';
export default function ListProductsMainPage(): JSX.Element {
  const products = useAppSelector((state) => state.product.listProducts);
  const productsList = getRandomArrayElements(products);

  return (
    <div className="container">
      <h2 className="random-main__title">кексы</h2>
      <ul className="random-main__list">
        {productsList.map((product) => <CardProductMainPage key={`key-${product.id}`} product={product} />)}
        <LinkCardMainPage />
      </ul>
    </div>
  );
}
