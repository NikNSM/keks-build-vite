import CardProductMainPage from './cards-product/card-product-main-page';
import LinkCardMainPage from './cards-product/link-card-main-page';

export default function ListProductsMainPage(): JSX.Element {
  const array = Array.from({ length: 4 });
  return (
    <div className="container">
      <h2 className="random-main__title">кексы</h2>
      <ul className="random-main__list">
        {array.map((_, index) => {
          if (index === array.length - 1) {
            return <LinkCardMainPage key={`keks-${index}`} />;
          }
          return <CardProductMainPage key={`keks-${index}`} />;
        })}
      </ul>
    </div>
  );
}
