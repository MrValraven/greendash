import GreendashLogo from '@components/GreendashLogo/GreendashLogo';
import './styles/header.css';
import { motion } from 'framer-motion';
import Button from '@components/Button/Button';
import { useState } from 'react';

const Header = () => {
  const [text, setText] = useState('Courses & Certifications');
  return (
    <div className='header-container'>
      <motion.header
        className='header'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: 'spring' }}
      >
        <div className='logo'>
          <GreendashLogo />
        </div>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='#features'>Features</a>
            </li>
            <li
              onMouseEnter={() => setText('Coming soon!')}
              onMouseLeave={() => setText('Courses & Certification')}
              id='courses-nav-link'
            >
              <a href=''>{text}</a>
            </li>
            <li>
              <Button goToElementId='waiting-list' hasGlowyShadow={false} size='medium'>
                Contact Us
              </Button>
            </li>
          </ul>
        </nav>
      </motion.header>
    </div>
  );
};

export default Header;
