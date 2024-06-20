import { useRef, useEffect } from 'react';
import { TypeDataMarker } from '../../../../type/type-data';
import { iconUrlMarkerProduction, iconUrlMarkerConfectionery, cityCenter } from '../const-map';
import useMap from '../hook-map/use-map';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type TypeMapProps = {
  activeAddress: TypeDataMarker;
}

const productionMarker = new Icon({
  iconUrl: iconUrlMarkerProduction,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const confectioneryMarker = new Icon({
  iconUrl: iconUrlMarkerConfectionery,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Map({ activeAddress }: TypeMapProps): JSX.Element {
  const mapContainer = useRef(null);
  const map = useMap(cityCenter, mapContainer);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      const marker = new Marker({
        lat: activeAddress.lat,
        lng: activeAddress.lng,
      });

      marker.setIcon(
        activeAddress.type === 'production' ? productionMarker : confectioneryMarker
      ).addTo(markerLayer);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [activeAddress, map]);

  return (
    <div className="map__wrapper" ref={mapContainer}></div>
  );
}
