import { motion } from 'motion/react';
import Button from '@components/Button/Button';
import HeroImage from '@assets/hero-image.png';

import './Hero.css';

const ANIMATION_DURATION_TIME_IN_SECONDS = 1;

const Hero: React.FC = () => {
  return (
    <section className='hero'>
      <div className='hero-text'>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION_TIME_IN_SECONDS, type: 'spring' }}
        >
          Everything you need for simple & structured Sustainability Reporting, powered by humans
          and AI
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION_TIME_IN_SECONDS, type: 'spring', delay: 0.1 }}
        >
          We are an AI-driven platform that allows you to easily build compliant ESG reports under
          CSRD in one single place
        </motion.p>
        <motion.div
          className='hero-button'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION_TIME_IN_SECONDS, type: 'spring', delay: 0.2 }}
        >
          <Button goToElementId='waiting-list'>Get Started</Button>
        </motion.div>
      </div>
      <div className='hero-explanation'>
        <div className='text'>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: ANIMATION_DURATION_TIME_IN_SECONDS,
              type: 'spring',
              delay: 0.3,
            }}
          >
            Your all-in-one solution for ESG compliance
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: ANIMATION_DURATION_TIME_IN_SECONDS,
              type: 'spring',
              delay: 0.4,
            }}
          >
            Cut through the complexities of the Corporate Sustainability Reporting Directive (CSRD)
            and European Sustainability Reporting Standards (ESRS) reporting requirements with our
            software solution and tailored sustainability services
          </motion.p>
        </div>
        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION_TIME_IN_SECONDS, type: 'spring', delay: 0.5 }}
          src={HeroImage}
          alt=''
        />
      </div>
    </section>
  );
};

export default Hero;
