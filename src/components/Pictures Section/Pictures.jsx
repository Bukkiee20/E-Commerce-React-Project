import React from 'react';

function PictureCard(props){
    return(
       <div>
         <img src={props.image} alt="" />
       </div>
    );
}

export default PictureCard;