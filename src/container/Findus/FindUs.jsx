import React from 'react';
import { SubHeading} from '../../componenents';
import { images} from '../../constants';
import './FindUs.css';

const FindUs = () => (
  
    <div className='app__bg app__wrapper section__padding' id='contact'>
        <div className='app__wrapper_info'>
            <SubHeading title="Contact"/>
            <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find US</h1>
            <div className='app__wrapper-content'>
                <p className='p__opensans'>Sana'a yemen Amman St: near the restorant</p>
                <p className='p__cormorent' style={{color:'#DCCA87' ,margin:'2rem 0'}}>Opening Hours</p>
                <p className='p__opensans'>Mon - fri: 10:00 am - 10:00 pm</p>
                <p className='p__opensans'>sat - sun: 10:00 -am 08:00 pm</p>
            </div>

            <button className='custom__button' style={{marginTop:'2rem'}}>Visit US</button>
        </div>
        <div className='app__wrapper_img'>
            <img src={images.findus} alt="FindUs" />
        </div>
    </div>
 
);
export default FindUs;