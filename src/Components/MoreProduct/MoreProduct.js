import React from 'react';
import './MoreProduct.css'
const MoreProduct = () => {
    return (
        <div className='container more-product-section my-5'>
            <div className="row">
                <div className="col-12">
                <div className="more-box">
                    <a href="/">
                        <button type="button" className="btn btn-outline-primary more-btn d-block mx-auto">More Products</button>
                    </a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default MoreProduct;