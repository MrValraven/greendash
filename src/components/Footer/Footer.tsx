import './styles/footer.css';
import { motion } from 'motion/react';
import GreendashLogo from '@components/GreendashLogo/GreendashLogo';

import LinkedinIcon from './icons/linkedin.svg';
import MailIcon from './icons/mail.svg';

const Footer = () => {
  return (
    <motion.footer
      className='footer'
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: 'spring', delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className='footer-content'>
        <div className='footer-info'>
          <div className='socials'>
            <GreendashLogo />
            <a
              className='email'
              href='mailto:hello@green-dash.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={MailIcon} alt='' />
              <span>hello@green-dash.com</span>
            </a>
            <a
              className='linkedin'
              href='https://www.linkedin.com/company/green-dash-ai'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={LinkedinIcon} alt='' />
              <span>GreenDash</span>
            </a>
          </div>
          <div className='quick-links'>
            <h4>Quick Links</h4>
            <div className='quick-links-container'>
              <a href=''>Home</a>
              <a href=''>Courses & Certificates</a>
              <a href=''>Features</a>
              <a href=''>Contact Us</a>
            </div>
          </div>
        </div>
        <div className='copyright-container'>
          <p className='copyright'>
            &copy; {new Date().getFullYear()} GreenDash. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
