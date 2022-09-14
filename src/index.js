import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {load} from '@2gis/mapgl';
import {Directions} from '@2gis/mapgl-directions';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

let mainBtn = document.getElementById('main_btn');
let cityFrom = document.getElementById('city_from');
let cityTo = document.getElementById('city_to');

cityFrom.value = localStorage.getItem('hometown');

mainBtn?.addEventListener('click', () => {
    if (+cityFrom.value === 0 || +cityTo.value === 0) {
        if (+cityFrom.value === 0) {
            cityFrom.classList.remove('bg-white');
            cityFrom.classList.add('bg-red-200');
        } else {
            cityFrom.classList.add('bg-white');
            cityFrom.classList.remove('bg-red-200');
        }

        if (+cityTo.value === 0) {
            cityTo.classList.remove('bg-white');
            cityTo.classList.add('bg-red-200');
        } else {
            cityTo.classList.add('bg-white');
            cityTo.classList.remove('bg-red-200');
        }
    } else {
        cityFrom.classList.add('bg-white');
        cityFrom.classList.remove('bg-red-200');
        cityTo.classList.add('bg-white');
        cityTo.classList.remove('bg-red-200');

        let hometown = cityFrom.value;
        localStorage.setItem('hometown', hometown);
    }
})

let map;

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;

        load().then((mapglAPI) => {
            let time = new Date().getHours();

            if (time > 4 && time < 21) {
                map = new mapglAPI.Map('container', {
                    center: [longitude, latitude],
                    zoom: 13,
                    key: 'bfd8bbca-8abf-11ea-b033-5fa57aae2de7',
                    style: 'add11b0a-e1ad-4b39-8d87-3fa4c80550ce'
                });
            } else {
                map = new mapglAPI.Map('container', {
                    center: [longitude, latitude],
                    zoom: 13,
                    key: 'bfd8bbca-8abf-11ea-b033-5fa57aae2de7',
                    style: '2b68bd2c-5b29-41f5-acd7-510f1b15b5c7'
                });
            }

            const directions = new Directions(map, {
                directionsApiKey: 'rugoqt4514 ',
            });

            const markers = [];
            let firstPoint;
            let secondPoint;

            new mapglAPI.Marker(map, {
                coordinates: [longitude, latitude],
            });

            let selecting = 'a';
            const buttonText = ['Choose point on the map', 'Reset points'];
            const controlsHtml = `<button id="reset" disabled>${buttonText[0]}</button> `;
            new mapglAPI.Control(map, controlsHtml, {
                position: 'topLeft',
            });
            const resetButton = document.getElementById('reset');
            resetButton.addEventListener('click', function() {
                selecting = 'a';
                firstPoint = undefined;
                secondPoint = undefined;
                directions.clear();
                this.disabled = true;
                this.textContent = buttonText[0];
            });
            map.on('click', (e) => {
                const coords = e.lngLat;
                if (selecting !== 'end') {
                    // Just to visualize selected points, before the route is done
                    markers.push(
                        new mapglAPI.Marker(map, {
                            coordinates: coords,
                            icon: 'https://docs.2gis.com/img/dotMarker.svg',
                        }),
                    );
                }
                if (selecting === 'a') {
                    secondPoint = coords;
                    selecting = 'end';
                }
                firstPoint = [longitude, latitude]
                // If all points are selected — we can draw the route
                if (firstPoint && secondPoint) {
                    directions.carRoute({
                        points: [firstPoint, secondPoint],
                    });
                    markers.forEach((m) => {
                        m.destroy();
                    });
                    resetButton.disabled = false;
                    resetButton.textContent = buttonText[1];
                }
            });
        });
    });
}