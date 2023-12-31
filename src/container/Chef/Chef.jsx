import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../componenents';
import './Chef.css';

const Chef = () => (
  
    <div className='app__bg  app__wrapper section__padding ' id='chef'>
         <div className='app__wrapper_img app__wrapper_img-reverse'>
            <img src={images.chef} alt="Chef" />
         </div>

         <div className='app__wrapper_info'>
            <SubHeading title="Chef's Word"/>
            <h1 className='headtext__cormorant'>What we believe in</h1>

            <div className='app__chef-content'>
                <div className='app__chef-content_quote'>
                    <img src={images.quote} alt="quote" />
                    <p className='p__opensans'>What we believe in What we believe in What we believe in What we believe in </p>
                </div>
                <p className='p__opensans'>What we believe in What we believe in What we believe in What we believe in What we believe in What we believe in What we believe in What we believe in What we believe in What we believe in What we believe in What we believe in </p>
            </div>

            <div className='app__chef-sign'>
                <p>Kevin luo</p>
                <p className='p__opensans'>Chef & Founder</p> 
                <img src={images.sign} alt="Sign" />
            </div>
         </div>
    </div>
 
);
export default Chef;