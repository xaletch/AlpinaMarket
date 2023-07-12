import React from 'react'

import { YMaps, Map, Placemark, RulerControl, TrafficControl } from '@pbe/react-yandex-maps';

export const YandexMap: React.FC = () => {
    return (
        <YMaps
        query={{
            ns: "use-load-option",
            load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
          }}
          >
            <Map defaultState={{ center: [57.121033, 65.5574328], zoom: 13, controls: ["zoomControl", "fullscreenControl"], }} style={{ width: '100%', height: '100%' }} >
                <Placemark defaultGeometry={[57.108770, 65.565212]}/>
                <Placemark defaultGeometry={[57.112060, 65.545835]} />
                <Placemark defaultGeometry={[57.131351, 65.555393]} />
                <TrafficControl />
                <RulerControl />
            </Map>
        </YMaps>
    )
}