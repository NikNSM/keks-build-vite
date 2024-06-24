import { TypeDataMarker } from '../../../type/type-data';

export const iconUrlMarkerProduction = '/img/content/map-marker1.svg';
export const iconUrlMarkerConfectionery = '/img/content/map-marker2.svg';

export const storeMapMarkerData: TypeDataMarker[] = [
  {
    value: 'confectionery-1',
    lat: 59.970969,
    lng: 30.316252,
    type: 'confectionery',
    name: 'Кондитерская 1',
    address: 'ул. Профессора Попова',
  },
  {
    value: 'confectionery-2',
    lat: 59.967947,
    lng: 30.274708,
    type: 'confectionery',
    name: 'Кондитерская 2',
    address: 'ул. Вязовая ',
  },
  {
    value: 'production',
    lat: 59.96038,
    lng: 30.308725,
    type: 'production',
    name: 'Производство',
    address: 'Ул. Ленина, 10 ',
  },
];

export const cityCenter = {
  lat: 59.970969,
  lng: 30.316252,
  zoom: 12,
};
