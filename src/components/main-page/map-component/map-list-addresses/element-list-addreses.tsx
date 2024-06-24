import { TypeDataMarker } from '../../../../type/type-data';

type TypeElementListAddresesProps = {
  shop: TypeDataMarker;
  activeShop: TypeDataMarker;
  onChange: (value: string) => void;
}

export default function ElementListAddreses({ shop, activeShop, onChange }: TypeElementListAddresesProps): JSX.Element {
  const value = shop.value;

  return (
    <li className="map__address">
      <div className="custom-toggle custom-toggle--radio custom-toggle--address">
        <input type="radio" value={value} id={`shop-${shop.value}`} name="user-agreement" checked={activeShop.value === value} onChange={(evt) => {
          const newValue = evt.currentTarget.value;
          onChange(newValue);
        }}
        />
        <label className="custom-toggle__label" htmlFor={`shop-${shop.value}`}>{shop.name}</label>
        <address className="custom-toggle__address">{shop.address}
          <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
            <use xlinkHref="#icon-keks-footprint"></use>
          </svg>
        </address>
      </div>
    </li>
  );
}
