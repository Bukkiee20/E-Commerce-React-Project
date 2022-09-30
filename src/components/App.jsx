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
import Footer from './Footer';
import Copyright from './Copyright';


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
           <Footer/>
           <Copyright/>
           

        </div>
        
    );
      
}
export default App;