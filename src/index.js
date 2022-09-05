import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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


const map = new mapgl.Map('container', {
    center: [37.668598, 55.76259],
    zoom: 13,
    key: 'bfd8bbca-8abf-11ea-b033-5fa57aae2de7',
});
const directions = new mapgl.Directions(map, {
    directionsApiKey: 'rugoqt4514 ',
});
const markers = [];
let firstPoint;
let secondPoint;
// A current selecting point
let selecting = 'a';
const buttonText = ['Choose two points on the map', 'Reset points'];
const controlsHtml = `<button id="reset" disabled>${buttonText[0]}</button> `;
new mapgl.Control(map, controlsHtml, {
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
            new mapgl.Marker(map, {
                coordinates: coords,
                icon: 'https://docs.2gis.com/img/dotMarker.svg',
            }),
        );
    }
    if (selecting === 'a') {
        firstPoint = coords;
        selecting = 'b';
    } else if (selecting === 'b') {
        secondPoint = coords;
        selecting = 'end';
    }
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