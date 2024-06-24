import { TypeDataMarker } from '../../../../type/type-data';
import ElementListAddreses from './element-list-addreses';
type TypeMapListAddresseProps = {
  shops: TypeDataMarker[];
  activeShop: TypeDataMarker;
  onChangeElement: (value: string) => void;
}

export default function MapListAddresses({ shops, activeShop, onChangeElement }: TypeMapListAddresseProps): JSX.Element {
  return (
    <ul className="map__addresses" >
      {shops.map((shop) => (< ElementListAddreses key={`key-${shop.value}`} shop={shop} activeShop={activeShop} onChange={onChangeElement} />))}
    </ul>
  );
}
