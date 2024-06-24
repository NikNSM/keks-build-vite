import { Link } from 'react-router-dom';
import { AddressesRoute } from '../../../../const';

export default function LinkCardMainPage(): JSX.Element {
  return (
    <li className="random-main__item">
      <Link to={AddressesRoute.Catalog} className="random-main__link" >
        <div className="random-main__icon-wrapper">
          <div className="random-main__icon">
            <svg width="120" height="130" aria-hidden="true">
              <use xlinkHref="#icon-keks"></use>
            </svg>
          </div>
        </div>
        <h3 className="random-main__subtitle">Все кексы</h3>
      </Link>
    </li>
  );
}
