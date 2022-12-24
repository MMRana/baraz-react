import React from 'react';
import './BarazMall.css'
import mallData from '../Data/mallData';


const BarazMall = () => {
    return (
        <div className='container mall-section'>
        <div className='row'>
            <div className='col-12'>
                <h2 className='my-4 mall-title'>BarazMall</h2>
            </div>
        </div>
        <div className="row">
            {mallData.map(data =>
                <div key={data.id} className="col-12 col-md-2">
                <div className="mall-box my-3">
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

export default BarazMall;