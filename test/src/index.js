import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactstrap';

import CurrentExchangeRate from './components/CurrentExchangeRate/current-exchange-rate';
import ConvertYourCourse from './components/ConvertYourCourse/convert-your-course';

import './index.css';


const getResourse = async (url) => {
    const res = await fetch(url);
    const body = await res.json();
    return body;
};
getResourse('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
.then((body) => {
    console.log(body);
})


fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
.then((res) => {
    return res.json();
})
.then((body) => {
    console.log(body);
});


const App = () => {
    return (
        <div>
            <CurrentExchangeRate />
            <ConvertYourCourse />
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

