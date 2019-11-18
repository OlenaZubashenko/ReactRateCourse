import React from 'react';
import ConvertDropdownChanging from '../ConvertDropdownChanging/convert-dropdown-changing';


import '../ConvertDropdownChanging/convert-dropdown-changing.css';
import '../ConvertChanging/convert-changing.css';

const ConvertChanging = () => {
    return (
        <div>
            <div>
                <span className='input-title'>How much? </span>
                <input type = 'number' className='how-much entry-field' label='how much' />
            </div>
            <ConvertDropdownChanging />
        </div>
    );

};

export default ConvertChanging;
