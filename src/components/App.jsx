import React from 'react';
import Header from './Header';
import Heroes from './Heroes';
import Collections from './Collections';
import BestSeller from './BestSeller';
import Products from './ourProducts';
import People from './people';
import Pictures from './Pictures';
import Announce from './Announce';
import Newsletter from './Newsletter';


function App(){
    return(
        <div>
           <Announce/>
           <Header/>
           <Heroes/>
           <Collections/>
           <BestSeller/>
           <Products/>
           <People/>
           <Pictures/>
           <Newsletter/>
           

        </div>
        
    );
      
}
export default App;