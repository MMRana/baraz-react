import React from 'react';
import './logoBar.css';

import logo from '../../images/logo.png'
const logoBar = () => {
    return (
        <div className='container-fluid logo-bar-logo pt-2 d-flex justify-content-center align-items-center'>
            <a href="/"><img src={logo} className="logo img-fluid" alt='Logo-Images' /></a>
            <form className="d-flex logo-bar-search ms-5" role="search">
                <input className="me-2 input-bar" type="search" placeholder="Search In Baraz" aria-label="Search"/>
                <button className="btn btn-outline-success logo-bar-btn" type="submit">Search</button>
            </form>
          
        </div>
    );
};

export default logoBar;