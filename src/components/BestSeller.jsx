import React from 'react';
import Card from './Card';
import BestSeller from '../apifolder/bestImg';

function BestSellers(){
    return(
        <div className='bestseller-section'>
            <div className='bestseller-writeup'>
              <h1>Best Seller Product</h1>
              <p>Find The Best Fashion Style For You Find The Best Fashion Style For You Find The Best Fashion Style For You</p>
              <button>SEE MORE</button>
            </div>
            
            
            <div className='bestseller-images'>
                {BestSeller.map(BestSeller => (
                       <Card
                           key={BestSeller.id}
                           src={BestSeller.src}
                           alt={BestSeller.alt}
                           names={BestSeller.names}
                           price={BestSeller.price}
                       /> 
               ))}

            </div>
       </div>
    );
}

export default BestSellers;