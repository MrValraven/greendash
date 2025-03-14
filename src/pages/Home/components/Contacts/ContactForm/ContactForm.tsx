import Button from '@components/Button/Button';

import { motion } from 'motion/react';

import './contactForm.css';

const ContactForm = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: 'spring', delay: 0.3 }}
      viewport={{ once: true }}
      className='contact-form'
    >
      <h2>Interested?</h2>
      <h3>Send us a message for more information</h3>
      <form>
        <div className='details'>
          <label htmlFor='name'>
            Name
            <input type='text' />
          </label>
          <label htmlFor='email'>
            Email
            <input type='email' />
          </label>
        </div>
        <label id='contact-form-message' htmlFor='message'>
          Message
          <textarea />
        </label>
        <Button size='medium'>Send message</Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
