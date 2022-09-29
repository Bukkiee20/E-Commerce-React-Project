import React from 'react'
import SendIcon from '@mui/icons-material/Send';

function Newsletter() {

    const pointer= {
        cursor: "pointer",
    } 

  return (
    <div className='newsletter-section'>
        <h1 className="newsletter-header">NEWSLETTER</h1>
        <h2 className="newsletter-sub">Keep in touch with us for trending outfits</h2>

        <div className="newsletter-button">
            <input type="email" placeholder="Your email..."/>
            <SendIcon style={pointer}/>
        </div>
    </div>
  )
}

export default Newsletter;