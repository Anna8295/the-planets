import React from 'react'
import { Tilt } from "react-tilt";
import {motion} from 'framer-motion'

import { fadeIn } from '../utils/motion'

const FactCard = ({fact}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring')}
        className='w-full p-[1px] border border-[#838391]'
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-transparent px-4 py-6 sx:h-[48px] sx:w-[327px] sm:max-h-[88px] sm:max-w-[164px] flex justify-between items-center sm:flex-col sm:items-start'>
          <h3
            className='text-[#838391] text-[8px] lg:text-[10px] uppercase font-bold pb-2 fact-name'
          >{fact.name}</h3>
          <p
            className='text-white text-[20px] sm:text-[24px] uppercase font-bold fact-value'
          >{fact.value}</p>
        </div>      
      </motion.div>
    </Tilt>
  )
}

export default FactCard