import './styles/footer.css';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <motion.footer className='footer' initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
      <p>&copy; {new Date().getFullYear()} GreenDash. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;