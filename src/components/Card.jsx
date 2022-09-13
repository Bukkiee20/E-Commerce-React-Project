import React from 'react';

function Card(props){
    return(
       <div>
           <div className='collection-card'>
               <img 
                   src={props.src}
                   alt={props.alt}
               />
                </div>
       </div>
    );
}

export default Card;