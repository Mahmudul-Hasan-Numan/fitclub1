import React from 'react';
import './Header.css';
import image from '../../Images/Image.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-title'>
                <h1 className='header-name'>Train with Elite Coaches Right From Home</h1>
                <p className='header-description'>Explore online courses continue to studying, build professional skills and connect width expert</p>
                <div className='button'>
                    <button className='login-btn'>Login</button>
                    <button className='free-trial-btn'>Start Free Trial</button>
                </div>
            </div>
            <div className='header-image'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Header;