import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
type TypeCityCenter = {
  lat: number;
  lng: number;
  zoom: number;
};

const TITLE_LEAR_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const TITLE_LEAR_ATRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export default function useMap(cityCenter: TypeCityCenter, container: MutableRefObject<HTMLDivElement | null>): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderRef = useRef(false);

  useEffect(() => {
    if (container.current !== null && !isRenderRef.current) {
      const instance = new Map(container.current, {
        center: {
          lat: cityCenter.lat,
          lng: cityCenter.lng,
        },
        zoom: cityCenter.zoom
      });

      const layer = new TileLayer(TITLE_LEAR_URL, {
        attribution: TITLE_LEAR_ATRIBUTION,
      });

      instance.addLayer(layer);
      setMap(instance);
      isRenderRef.current = true;
    }
  }, [container, cityCenter]);

  return map;
}
