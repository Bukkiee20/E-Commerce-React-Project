import React from 'react';
import Header from './Header';
import Heroes from './Heroes';
import Collections from './Collections';
import BestSeller from './BestSeller';
import Products from './ourProducts';
import People from './people';

function App(){
    return(
        <div>
           <Header/>
           <Heroes/>
           <Collections/>
           <BestSeller/>
           <Products/>
           <People/>

        </div>
        
    );
      
}
export default App;