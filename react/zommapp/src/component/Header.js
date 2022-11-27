import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <React.Fragment>
            <header>
                <div id="brand">
                    <h1>Developer Funnel</h1>
                </div>
                <div id="social">
                    <a href="www.facebook.com">
                        <img src="https://i.ibb.co/wrG1PKh/facebook.png" alt="fb" className="socialLogo"/>
                    </a>
                    <a href="www.facebook.com">
                        <img src="https://i.ibb.co/19H5LvT/insta.png" alt="fb" className="socialLogo"/>
                    </a>
                    <a href="www.facebook.com">
                        <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="fb" className="socialLogo"/>
                    </a>
                </div>
                </header> 
        </React.Fragment>
    )
}

export default Header;