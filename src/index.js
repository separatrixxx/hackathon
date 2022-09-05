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