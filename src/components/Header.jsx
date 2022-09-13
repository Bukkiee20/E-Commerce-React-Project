import React from 'react';

function Header(){
    return(
        <header>
            <h1 className='logo'>FIFASH</h1>
            <ul className='lists'>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>COLLECTION</li>
                <li>TRENDS</li>
            </ul>
            <button>SIGN IN</button>
       </header>
    );
}

export default Header;