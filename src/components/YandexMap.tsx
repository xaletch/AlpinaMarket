import React from 'react'

import { YMaps, Map, Placemark, RulerControl, TrafficControl, ZoomControl } from '@pbe/react-yandex-maps';

export const YandexMap: React.FC = () => {
    return (
        <YMaps>
            <Map defaultState={{ center: [57.153033, 65.534328], zoom: 9, controls: [], }} style={{ width: '100%', height: '100%' }} options={{ suppressMapOpenBlock: true }} >
                <Placemark geometry={[57.108770, 65.565212]} />
                <Placemark geometry={[57.112060, 65.545835]} />
                <Placemark geometry={[57.131351, 65.555393]} />
                <TrafficControl options={{ position: { top: 10, right: 10 }}} />
                <RulerControl options={{ position: { top: 10, right: 110 }}} />
                <ZoomControl options={{ position: { top: 200, right: 10 }}} />
            </Map>
        </YMaps>
    )
}