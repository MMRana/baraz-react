import React from 'react';
import './saleArea.css';
import saleAreaItem from '../Data/saleAreaData';
 
const saleArea = () => {
    return (
        <div className='container sale-section my-2'>
            <div className='row'>
                {
                    saleAreaItem.map(data => 
                    <div  key={data.id} className="col-12 col-md-3">
                     <div className=' sale-box my-2'>
                        <a href={data.link}><img src={data.images} className='img-fluid sale-img' alt="{data.name}" /></a>
                        <span>{data.name}</span>
                     </div>
                    </div>     
                )}
            </div>
        </div>
    );
};

export default saleArea;