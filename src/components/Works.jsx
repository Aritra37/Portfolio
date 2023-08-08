import React from 'react'
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import {styles} from '../style';
import {github} from '../assets';
import {SectionWrapper} from '../hoc';
import {projects} from '../constants';
import { fadeIn,textVariant } from '../utils/motion';
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p variants={fadeIn(0,0,0.1,1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcase my skills and experience through. Each project is briefly described with links of code
        </motion.p>
      </div>
    </>
  );
}

export default SectionWrapper(Works,"");