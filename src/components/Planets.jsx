import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'

import FactCard from './FactCard';
import { slideIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { sourceIcon } from '../assets'

const Planets = ({active, navColors, filteredFacts, buttonActive, setButtonActive, image, image2, content, source}) => {
  
  const handleClick = (buttonIndex ) => {
    setButtonActive(buttonIndex);
  };

  return (
    <div className='w-full mx-auto'>
      <div className={'w-full flex flex-col lg:flex-row gap-10 mt-[55px]'}>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className={'lg:flex-[60%] relative image-cantainer'}
        >
          <img className='w-full object-scale-down sm:object-none sm:object-center image' src={image} alt='planet'/>
          {(buttonActive === 3) && (
            <img className='absolute second-image' src={image2} alt='planet 2'/>
          )}
        </motion.div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className={'sm:flex lg:flex-col lg:flex-[40%] gap-5'}
        >
          <div className='sm:flex-[50%]'>
            <h1 className={`${styles.planetTittle} planet-tittle`}>{active}</h1>
            <h1 className={`${styles.planetContent} content`}>{content}</h1>
            <h1 className={`${styles.planetSource} source`}>
              Source: 
              <a className='font-bold underline' href={source}>Wikipedia &nbsp;
              <img className='inline' src={sourceIcon} alt='source'/></a>
            </h1>
          </div>
          <div className='hidden xs:flex sm:flex-[50%] flex-col gap-4 pt-14'>
            <button 
              className={`${styles.planetButton} button`}
              style={{backgroundColor: buttonActive === 1 ? navColors[active] : ''}}
              onClick={() => handleClick(1)}
            > 
              <span className='mr-4 text-[#838391] font-light'>01</span> 
                overview
            </button>

            <button 
              className={`${styles.planetButton} button`}
              style={{backgroundColor: buttonActive === 2 ? navColors[active] : ''}}
              onClick={() => handleClick(2)}
            >
              <span className='mr-4 text-[#838391] font-light'>02</span> 
                internal structure
            </button>

            <button 
              className={`${styles.planetButton} button`}
              style={{backgroundColor: buttonActive === 3 ? navColors[active] : ''}}
              onClick={() => handleClick(3)}
            >
              <span className='mr-4 text-[#838391] font-light'>03</span> 
                surface geology
            </button>
          </div>
        </motion.div>
      </div>


      <div className='mt-10 flex flex-wrap sm:flex-nowrap gap-10'>
        {filteredFacts.map(({id, fact}) => (
          <FactCard key={id} id={id} fact={fact} />
        ))}
      </div>
    </div>
  )
}

export default  SectionWrapper(Planets);
