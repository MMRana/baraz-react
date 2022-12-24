import React from 'react';
import './FlashSale.css';
import flashSaleData from '../Data/flashSaleData';

const FlashSale = () => {
    return (
        <div className='container flash-sale-section'>
            <div className='row'>
                <div className='col-12'>
                    <h2 className='my-4 flash-title'>FlashSale</h2>
                </div>
            </div>
            <div className="row">
            {
                flashSaleData.map(data =>
                    <div key={data.id} className="col-12 col-md-2">
                    <div className="flash-box my-3">
                    <div className="card">
                        <img src={data.images} className="card-img-top img-fluid" alt="" />
                        <div className="card-body">
                            <p className="card-text ">{data.name}</p>
                            <p className="card-price">৳{data.price}</p>
                            <h4 className='card-offer'><strike>{data.offer}</strike>{data.discount}%</h4>
                         </div>
                        </div>
                     </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FlashSale;