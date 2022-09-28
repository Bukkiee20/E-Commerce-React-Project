import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header(){
   const searchStyle={
       padding: "5px",
       marginLeft: "10px",
       display: "flex",
       alignItems: "center",
       border: "2px solid rgb(44, 20, 2)",
       width: "50%",
   }

   const inputStyle={
     outline: "none",
     background: "none",
     border: "none",
     width: "100%",
     fontSize: "15px",
   }

   const buttonStyle={
      display: "flex",
      alignItems: "center",
      gap: "10px",
     

   }

   const cartStyle={
      cursor: "pointer",
   }
    return(
        <header>
            <h1 className='logo'>BUKKIE</h1>
            
            <div style={searchStyle}>
               <SearchIcon style={cartStyle}/>
               <input type="text" style={inputStyle} placeholder="Search...."/>
                
            </div>
            
            <div style={buttonStyle}>
               <button>REGISTER</button>
               <button>SIGN IN</button>
               <ShoppingCartIcon style={cartStyle}/>
            </div>


          
       </header>
    );
}

export default Header;