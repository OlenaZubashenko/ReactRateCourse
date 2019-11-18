import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactstrap';

import CurrentExchangeRate from './components/CurrentExchangeRate/current-exchange-rate';
import ConvertYourCourse from './components/ConvertYourCourse/convert-your-course';

import './index.css';


const getResourse = async (url) => {
    const res = await fetch(url);
    if(!res.ok){
        throw new Error (`Could not fetch ${url}`);
    }
    const body = await res.json();
    return body;
};
getResourse('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
.then((body) => {
    console.log(body[0].buy);
})





const App = () => {
    return (
        <div>
            <CurrentExchangeRate />
            <ConvertYourCourse />
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

