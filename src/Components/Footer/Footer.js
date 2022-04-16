import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className='all-footer'>
            <div className='footer'>
                <div>
                    <p className='club-name'> <span className='first-letter'>F</span>
                        itClub</p>
                    <p className='address'>99-01 Queens Blvd, Queens, NY 11374, United States</p>
                </div>
                <div className='sub-footer'>
                    <div>
                        <h1 className='company'>Company</h1>
                        <p className='about'>About</p>
                        <p className='career'>Career</p>
                        <p className='membership'>Membership</p>
                    </div>
                    <div>
                        <h1 className='support'>Support</h1>
                        <p className='chat'>Chat with us</p>
                        <p className='center'>Support Center</p>
                    </div>
                    <div>
                        <h1 className='connection'>Let's Connect</h1>
                        <p className='email'>hello@fitclub.com</p>
                    </div>
                </div>
            </div>
            <p className='credit'>© fitclub.com. 2020</p>
        </div>

    );
};

export default Footer;