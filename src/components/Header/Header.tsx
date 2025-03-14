import GreendashLogo from '@components/GreendashLogo/GreendashLogo';
import './styles/header.css';
import { motion } from 'framer-motion';
import Button from '@components/Button/Button';

const Header = () => {
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
            <li>
              <a href=''>Courses & Certification</a>
            </li>
            <li>
              <Button hasGlowyShadow={false} size='medium'>
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
