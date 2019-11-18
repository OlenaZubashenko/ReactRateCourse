import React from 'react';
import ConvertDropdownChanging from '../ConvertDropdownChanging/convert-dropdown-changing';


import '../ConvertDropdownChanging/convert-dropdown-changing.css';
import '../ConvertGetting/convert-getting.css';

const ConvertGetting = () => {
    return (
        <div>
            <div className='getting'>
                <span className='input-title'>I will receive </span>
                <input className='getting entry-field' label='I will receive' />
            </div>
            <ConvertDropdownChanging />
        </div>

    );

};

export default ConvertGetting;
