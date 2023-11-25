import React from 'react';
import { SubHeading} from '../../componenents';
import { images, data } from '../../constants';
import './Laurels.css';


const AwordCard =({award:{imgUrl,title,subtitle}})=>(
    <div className='app_laurels_awards-card'>
        <img src={imgUrl} alt="award" />
        <div className='app_laurels_awards-card_content'>
            <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
            <p className='p__cormorant'>{subtitle}</p>
        </div>
    </div>
)

const Laurels = () => (
  
    <div className='app__bg   app__wrapper section__padding' id ='awards'>
        <div className='app__wrapper_info'>
            <SubHeading title='Awords & recognation'/>
            <h1 className='headtext__cormorant'>our Laurels</h1>

            <div className='app__laurels_awards'>
                {data.awards.map((award)=> <AwordCard award={award} key={award.title}/>)}
            </div>
        </div>

        <div className='app__wrapper_img'>
            <img src={images.laurels} alt="laurel" />
        </div>
        
    </div>
 
);
export default Laurels;