import React from 'react';
import Header from './Header';
import Heroes from './Heroes';
import Collections from './Collections';
import BestSeller from './BestSeller';
import Products from './ourProducts';

function App(){
    return(
        <div>
           <Header/>
           <Heroes/>
           <Collections/>
           <BestSeller/>
           <Products/>
        </div>
        
    );
      
}
export default App;