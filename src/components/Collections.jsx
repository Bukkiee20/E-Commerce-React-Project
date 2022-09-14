import React from 'react';
import Card from './Card';
import Images from '../images';

function Collections(){
    return(
        <div className='collection-section'>
            <h1>NEW COLLECTIONS</h1>
            

            <div className='collection-images'>
                <Card
                   src={Images[0].src}
                   alt={Images[0].alt}
                />

               <Card
                   src={Images[1].src}
                   alt={Images[1].alt}
                />

                <Card
                   src={Images[2].src}
                   alt={Images[2].alt}
                />

            </div>
       </div>
    );
}

export default Collections;