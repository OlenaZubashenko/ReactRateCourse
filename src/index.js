import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactstrap';

import CurrentExchangeRate from './components/CurrentExchangeRate/current-exchange-rate';
import ConvertYourCourse from './components/ConvertYourCourse/convert-your-course';

import './index.css';


var resSourse = [];
const getResourse = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}`);
    }
    const body = await res.json();
    return getResourse('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then((body) => {
            debugger
            resSourse = body;
            console.log(body);
        });

};


const App = () => {
    const resourse = [
        {
            ccy: "USD",
            base_ccy: "UAH",
            buy: "24.10000",
            sale: "24.40000"
        },
        {
            ccy: "EUR",
            base_ccy: "UAH",
            buy: "26.50000",
            sale: "27.05000"
        },
        {
            ccy: "RUR",
            base_ccy: "UAH",
            buy: "0.34500",
            sale: "0.38200"
        },
        {
            ccy: "BTC",
            base_ccy: "USD",
            buy: "7751.9921",
            sale: "8567.9913"
            }
    ];

    return (
        <div>
            <CurrentExchangeRate dataSourse={resourse} />
            <ConvertYourCourse />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

