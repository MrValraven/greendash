import { motion } from 'motion/react';
import Button from '@components/Button/Button';
import HeroImage from '@assets/hero-image.png';

import './Hero.css';

const Hero: React.FC = () => {
  return (
    <motion.section
      className='hero'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='hero-text'>
        <h1>
          Everything you need for simple & structured Sustainability Reporting, powered by humans
          and AI
        </h1>
        <p>
          We are an AI-driven platform that allows you to easily build compliant ESG reports under
          CSRD in one single place
        </p>
        <Button>Get Started</Button>
      </div>
      <div className='hero-explanation'>
        <div className='text'>
          <h2>Your all-in-one solution for ESG compliance</h2>
          <p>
            Cut through the complexities of the Corporate Sustainability Reporting Directive (CSRD)
            and European Sustainability Reporting Standards (ESRS) reporting requirements with our
            software solution and tailored sustainability services
          </p>
        </div>
        <img src={HeroImage} alt='' />
      </div>
    </motion.section>
  );
};

export default Hero;
