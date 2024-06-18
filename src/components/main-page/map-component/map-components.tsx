import MapListAddresses from './map-list-addresses/map-list-addresses';

export default function MapComponent(): JSX.Element {
  return (
    <div className="container">
      <h2 className="map__title">адреса</h2>
      <div className="map__wrapper"></div>
      <MapListAddresses />
    </div>
  );
}
