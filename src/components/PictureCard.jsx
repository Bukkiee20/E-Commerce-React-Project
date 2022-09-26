import React from 'react';

function PictureCard(props){
    return(
       <div className='picture-card'>
         <img src={props.image} alt="" />
       </div>
    );
}

export default PictureCard;