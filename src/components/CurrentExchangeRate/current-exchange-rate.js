import React from 'react';

import './current-exchange-rate.css';
import CurrentList from '../CurrentList/current-list';


const CurrentExchangeRate = ({ dataSourse }) => {
    const elements = dataSourse.map((item) => {
        return (
            <div className='rate-wrapper'>
                
                <CurrentList
                  /* { ccy={item.ccy}
                    buy={item.buy}
                    sale={item.sale} }
                   меняем с помощью деструктуризации на {...item}*/ 
                    {...item}
                    />
            </div>
        )
    })
    return <ul>
        <h1 className='text-muted'>Current exchange rate</h1>
        <div className='title-wrapper text-muted'>
            <h4>Currency</h4>
            <h4>Buy</h4>
            <h4>Sale</h4>
        </div>
        {elements}
    </ul>
};

export default CurrentExchangeRate;
