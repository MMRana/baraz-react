import React from 'react';
import './Footer.css';
import footerLeft from '../Data/footerLeft';
import footerMidle from '../Data/footerMidle';
import footerRight from '../Data/footerRight';

const Footer = () => {
    return (
        <div className='container-fluid footer-section'>           
            <div className="container footer-box">
            <div className="row">
         {/* L */}
                <div className="col-12 col-md-4">
                <div className="footer-title">
                    <h2>Customer Care</h2>
                    <ul>
                        {footerLeft.map(data =>
                         <li key={data.id}> <a href="/">{data.item}</a></li>
                        )}
                    </ul>
                </div>
                </div>

        {/* M */}
                <div className="col-12 col-md-4">
                <div className="footer-title">
                    <h2>Baraz</h2>
                    <ul>
                        {footerMidle.map(data =>
                            <li key={data.id}> <a href="/">{data.item}</a></li>
                        )}
                    </ul>
                </div>
                </div>

        {/* R */}
                <div className="col-12 col-md-4">
                <div className="footer-title">
                    <h2>Earn With Baraz</h2>
                    <ul>
                    {footerRight.map(data =>
                        <li key={data.id}> <a href="/">{data.item}</a></li>

                    )}
                  </ul>
                </div>
                </div>
            </div>
            <div className='row'>
                <div className='footer-bottom my-2'>
                    <p>&copy;All Rights Reserved. Developed By <a href="/"> M M Rana</a></p>
                </div>
              
            </div>
            </div>
        </div>
    );
};

export default Footer;