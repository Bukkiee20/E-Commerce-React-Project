import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


function Announce() {
    const style={
        display: "flex", 
        margin: "0 -40px", 
        justifyContent: "center", 
        padding: "5px 0",
        backgroundColor: "white",
        position: "fixed",
        width: "100%",
    }

    const style2={
        display: "none",
    }

    const [Announcement, SetAnnouncement] = useState(style)

    const handleClose= () => {
        SetAnnouncement(style2)
    }
       
  return (
    <div style={Announcement}>
       <h3>Hurry Up!!! 40% Discount now</h3>
       <CloseIcon className='cursor-pointer' onClick={handleClose}/>
    </div>
  );
}

export default Announce;