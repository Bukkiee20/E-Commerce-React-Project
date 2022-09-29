import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from 'react';

function Card(props){

    const iconStyle= {
        borderRadius: "50%",
        margin: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40px",
        width: "40px",
        
    }

    const pointer= {
        cursor: "pointer",
    }
    
    const hover= {
        opacity: "0",
    }

    const hoverEnter= {
        opacity: "1",
        backgroundColor: "rgba(0,0,0,0.4)",
        transition: "all 0.5s ease-in",
    }

    const hoverLeave= {
        opacity: "0",
    }
    const [HoverEffect, setHoverEffect]= useState(hover)

    const handleHoverEnter= () => {
        setHoverEffect(hoverEnter)
    }

    const handleHoverLeave= () => {
        setHoverEffect(hoverLeave)
    }

    return(
       <div className='card' onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
           <div className='collection-card'>
               <img 
                   src={props.src}
                   alt={props.alt}
               />
            </div>

            <div className='icons' style={HoverEffect}>
                   <div style= {iconStyle} className="icon"> 
                      <ShoppingCartOutlinedIcon style={pointer}/>
                   </div>

                   <div style= {iconStyle} className="icon">
                       <FavoriteBorderOutlinedIcon style={pointer}/>
                   </div>

                   <div style= {iconStyle} className="icon">
                      <SearchIcon style={pointer}/>
                   </div>
               </div>
       </div>
    );
}

export default Card;