import React from 'react';


function PeopleCard(props){
    return(
        <div className='people-card'>
            <div>
               <p className='people-comment'>{props.comment}</p>
            </div>
           <img src={props.image} alt="" />
           <p className='people-name'>{props.names}</p>
           <p className='people-ref'>{props.title}</p>
        </div>
    );
}

export default PeopleCard;