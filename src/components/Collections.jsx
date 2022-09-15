import React from 'react';
import Card from './Card';
import Images from '../images';



function Collections(){
    return(
        <div className='collection-section'>
            <h1>NEW COLLECTIONS</h1>
            
            <div className='collection-images'>
                {Images.map(Images => (
                       <Card
                           key={Images.id}
                           src={Images.src}
                           alt={Images.alt}
                           names={Images.names}
                           price={Images.price}
                       /> 
               ))}

            </div>
       </div>
    );
}

export default Collections;