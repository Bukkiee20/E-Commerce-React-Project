import React from 'react';

function Card(props){
    return(
       <div className='card'>
           <div className='collection-card'>
               <img 
                   src={props.src}
                   alt={props.alt}
               />

               <div className="collection-sub">
                  <p>{props.names}</p>
                  <p>{props.price}</p>
               </div>
            </div>
       </div>
    );
}

export default Card;