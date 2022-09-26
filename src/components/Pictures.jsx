import React from 'react';
import PictureCard from './PictureCard';
import Gallery from '../picture';

function Pictures(){
    return(
      <div className='picture-section'>
         <div className="picture-grp">
            
               {Gallery.map(Gallery => (
               <PictureCard
                   key= {Gallery.id}
                   image={Gallery.image}
                />
             ))}
            
        
            
         </div>

      </div>
    );
}

export default Pictures;