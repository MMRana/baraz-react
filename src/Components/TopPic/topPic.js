import React from 'react';
import './topPic.css';

import headPic from '../../images/top.png';

const topPic = () => {
    return (
        <div className='container head-img-option my-2'>
            <a href="/"> <img src={headPic} className='d-block img-fluid m-auto head-img' alt="Top Image" /> </a>
        </div>
    );
};

export default topPic;