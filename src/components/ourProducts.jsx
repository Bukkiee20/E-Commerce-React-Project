import React from 'react';
import Card from './Card';
import product from '../product';

function Products(){
    return(
        <div className='product-section'>
            <div>
              <h1>OUR PRODUCT</h1>
              <ul className='product-lists'>
                <li>HOT</li>
                <li>ON SALE</li>
                <li>TRENDING NOW</li>
                <li>NEW ARRIVAL</li>
            </ul>
            </div>
            
            
            <div className='product-images'>
                {product.map(product => (
                       <Card
                           key={product.id}
                           src={product.src}
                           alt={product.alt}
                           names={product.names}
                           price={product.price}
                       /> 
               ))}

            </div>
       </div>
    );
}

export default Products;