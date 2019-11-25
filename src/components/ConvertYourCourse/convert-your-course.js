import React from 'react';

import ConvertChanging from '../ConvertChanging/convert-changing';
import ConvertGetting from '../ConvertGetting/convert-getting';

import '../ConvertYourCourse/convert-your-course.css';


const ConvertYourCourse = () => {
    return (
        <div>
            <h1 className='title text-muted'>Convert your own course</h1>
            <div className='convert-wrapper'>
                <ConvertChanging />
                <ConvertGetting />
            </div>
        </div>

    )

};

export default ConvertYourCourse;
