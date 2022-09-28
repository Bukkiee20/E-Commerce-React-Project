import React from 'react';
import PeopleCard from './peopleCard';
import Reviews from '../apifolder/PeopleRevs';



function People(){
    return(
      <div>
          <div className='people-section'>
              <div>
                  <h1>WHAT PEOPLE SAY ABOUT US</h1>
             </div>

             <div className='people-cardgrp'>
                 {Reviews.map(Reviews => (
                    <PeopleCard
                       key= {Reviews.id}
                       comment= {Reviews.comment}
                       image={Reviews.image}
                       names={Reviews.names}
                       title={Reviews.title}
           
                    />
                 ))}
               </div>
           </div>   
      </div>
    );
}

export default People;