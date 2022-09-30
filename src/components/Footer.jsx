import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className="footer-section">
        <div className="footer-left">
           <h2>ELEGANTE TRENDZ</h2>
           <p className="footer-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

           <div className="footer-left-icons">
              <div className="footer-iconstyle facebook">
                 <FacebookIcon className="pointer"/>
              </div>
              
              <div className="footer-iconstyle instagram">
                  <InstagramIcon className="pointer"/>
              </div>
              
              <div className="footer-iconstyle github">
                  <a href="https://github.com/Bukkiee20" target="_blank" rel="noreferrer"><GitHubIcon className="pointer"/></a>
              </div>
              
              <div className="footer-iconstyle twitter">
                  <a href="https://twitter.com/AdeyooyeB" target="_blank" rel="noreferrer"><TwitterIcon className="pointer"/></a>
              </div>
              
              <div className="footer-iconstyle pinterest">
                  <a href="https://www.pinterest.com/adeyooyebukola/" target="_blank" rel="noreferrer"><PinterestIcon className="pointer"/></a>
              </div>

              <div className="footer-iconstyle mail">
                  <a href="mailto:adeyooyebukola22@gmail.com" target="_blank" rel="noreferrer"><EmailIcon className="pointer"/></a>
              </div>
              
           </div>
        </div>

        <div className="footer-right">
            <div className="display">
                <LocationOnOutlinedIcon/>
                <p className="footer-paragraph">Nigeria</p>
            </div>
              
            <div className="display">
                <CallOutlinedIcon/>
                <p className="footer-paragraph">+2348071299655</p>
            </div>
              
            <div className="display">
                <EmailOutlinedIcon/>
                <p className="footer-paragraph">adeyooyebukola22@gmail.com</p>
            </div>
              
        </div>
    </div>

    
  );
}

export default Footer;