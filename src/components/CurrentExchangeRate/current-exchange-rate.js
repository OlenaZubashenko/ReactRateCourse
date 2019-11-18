import React from 'react';

import './current-exchange-rate.css';
import CurrentList from '../CurrentList/current-list';


const CurrentExchangeRate = () => {
    return (
        <div>
            <h1 className='title'>Current Exchange Rate</h1>
            <CurrentList />
        </div>
    );
};

export default CurrentExchangeRate;
