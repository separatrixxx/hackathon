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
let cityTo = document.getElementById('city_to');

let addTo;
let city_to_coords = [];

let map;
let longitude;
let latitude;

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;

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

            new mapglAPI.Marker(map, {
                coordinates: [longitude, latitude],
            });


        });
    });
}

mainBtn?.addEventListener('click', () => {
    city_to_coords = [];
    if (+cityTo.value === 0) {
        if (+cityTo.value === 0) {
            cityTo.classList.remove('bg-white');
            cityTo.classList.add('bg-red-200');
        } else {
            cityTo.classList.add('bg-white');
            cityTo.classList.remove('bg-red-200');
        }
    } else {
        cityTo.classList.add('bg-white');
        cityTo.classList.remove('bg-red-200');

        addTo = cityTo.value;

        (async () => {
            let url = 'https://catalog.api.2gis.com/3.0/items?q='
                + addTo + '&key=rubxgz1637';
            let response_id = await fetch(url);
            let city_id;

            if (response_id.ok) {
                let json = await response_id.json();

                try {
                    for (let val of json.result.items) {
                        if (val.subtype === 'city') {
                            city_id = val.id;
                            break;
                        }
                    }
                } catch (e) {
                    alert('Невозможно прочитать данные об этом городе');
                    console.log(e);
                }
            } else {
                alert("Ошибка HTTP: " + response_id.status);
            }

            let url_city = 'https://catalog.api.2gis.com/3.0/items?q=%D0%BA%D0%B0%D1%84%D0%B5&fields=items.point&city_id='
                + city_id + '&key=rubxgz1637';
            let response_city = await fetch(url_city);

            if (response_city.ok) {
                let json = await response_city.json();

                try {
                    city_to_coords.push(json.result.items[0].point.lon);
                    city_to_coords.push(json.result.items[0].point.lat);
                } catch (e) {
                    console.log(e);
                }

                const directions = new Directions(map, {
                    directionsApiKey: 'rugoqt4514 ',
                });

                if (city_to_coords.length !== 0) {
                    await directions.carRoute({
                        points: [[longitude, latitude], city_to_coords],
                    });
                }
            } else {
                alert("Ошибка HTTP: " + response_city.status);
            }

        })()
    }
})
