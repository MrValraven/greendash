import './styles/header.css';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header className='header' initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className='logo'>GreenDash</div>
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;