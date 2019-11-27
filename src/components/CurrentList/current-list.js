import React, { Component } from 'react';
import './current-list.css';

export default class CurrentList extends Component {
    render() {
        const { ccy, buy, sale } = this.props;
    
    return(
        <div className = "list-wrapper">
        <ul>
            <li>
                <button type="button" className="btn btn-outline-warning btn-like"
                    onClick={() => console.log(`try ${ccy}, ${buy}`)}
                >like</button>
                {ccy}
            </li>
            <li>{buy}</li>
            <li>{sale}</li>
        </ul>
    </div>
    )
};
};


