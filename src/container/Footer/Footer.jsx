import React from 'react';
import { FooterOverlay, Newsletter } from '../../componenents';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (

    <div className='app__footer section__padding'>
        <FooterOverlay />
        <Newsletter />

        <div className='app__footer-links' >
            <div className='app__footer-links_contact'>
                <h1 className='app__footer-headtext '>Contact Us</h1>
                <p className='p__opensans'>Sana'a Yemen Alzobairi</p>
                <p className='p__opensans'>+967 771969804</p>
                <p className='p__opensans'>+967 771969804</p>

            </div>
            <div className='app__footer-links_logo'>
                <img src={images.gericht} alt="footer_ogo" />
                <p className='p__opensans'>The best way to find your self is to loss yourself in the service of others.</p>
                <img src={images.spoon} alt="spoon_image" className='spoon__img' style={{ marginTop: '15px' }} />

                <div className='app__footer-links_icons'>
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </div>

            <div className='app__footer-links_work'>
                <h1 className='app__footer-headtext '>Working Hours</h1>
                <p className='p__opensans'>Sat-Wed:</p>
                <p className='p__opensans'>08:00 am 04:00 pm</p>
                <p className='p__opensans'>Tus-Fri:</p>
                <p className='p__opensans'>08:00 am 04:00 pm</p>
            </div>
        </div>
        <div className='footer__copyright'>
            <p className='p__opensans'>2023 A.N All Right reserved</p>
        </div>
    </div>
);
export default Footer;