import React from 'react';
import { FooterOverlay,Newsletter } from '../../componenents';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
    <div className='app__footer section__padding'>
        <FooterOverlay />
        <Newsletter />
    </div>
);
export default Footer;