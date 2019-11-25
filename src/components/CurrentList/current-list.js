import React from 'react';
import './current-list.css';

const CurrentList = ({ ccy, buy, sale }) => {
    return (<div className='list-wrapper'>
        
        <ul>
            <li>
                <button type="button" className="btn btn-outline-warning btn-like">like</button>
                {ccy}
            </li>
            <li>{buy}</li>
            <li>{sale}</li>
        </ul>
    </div>
    )

};

export default CurrentList;
