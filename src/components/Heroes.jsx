import React from 'react';

function Heroes(){
    return(
        <div className='heroes-section'>
            <div>
               <h1 className='heroes-header'>Find The Best Fashion Style For You</h1>
               <p>Outfits With Class from the Store.</p>
               <button>SHOP NOW</button>
            </div> 
            <div className='heroes-image'>
                <img src="./images/download1.jpg" alt="Picture1" />
            </div>
       </div>
    );
}

export default Heroes;