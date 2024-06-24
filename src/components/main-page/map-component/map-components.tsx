import { useState } from 'react';
import MapListAddresses from './map-list-addresses/map-list-addresses';
import Map from './map/map';
import { TypeDataMarker } from '../../../type/type-data';
import { storeMapMarkerData } from './const-map';

export default function MapComponent(): JSX.Element {
  const [activeShop, setActiveShop] = useState<TypeDataMarker>(storeMapMarkerData[0]);

  const handlerChangeActive = (value: string) => {
    const newshop = storeMapMarkerData.find((shop) => shop.value === value);

    if (newshop) {
      setActiveShop(newshop);
    }
  };

  return (
    <div className="container">
      <h2 className="map__title">адреса</h2>
      <Map activeAddress={activeShop} />
      <MapListAddresses shops={storeMapMarkerData} activeShop={activeShop} onChangeElement={handlerChangeActive} />
    </div>
  );
}
