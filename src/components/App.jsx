import React from 'react';
import Header from './Header';
import Heroes from './Heroes';
import Collections from './Collections';
import BestSeller from './BestSeller';

function App(){
    return(
        <div>
           <Header/>
           <Heroes/>
           <Collections/>
           <BestSeller/>
        </div>
        
    );
      
}
export default App;