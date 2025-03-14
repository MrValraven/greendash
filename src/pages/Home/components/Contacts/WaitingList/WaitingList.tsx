import Button from '@components/Button/Button';

import { motion } from 'motion/react';

import './waitingList.css';

const WaitingList = () => {
  return (
    <div className='waiting-list'>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', delay: 0.1 }}
        viewport={{ once: true }}
      >
        Join the waiting list
      </motion.h2>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', delay: 0.2 }}
        viewport={{ once: true }}
      >
        Be the first have access to our groundbreaking sustainability report builder and be notified
        when we launch!
      </motion.p>
      <motion.form
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', delay: 0.3 }}
        viewport={{ once: true }}
        className='waiting-list-form'
      >
        <input id='waiting-list-input' type='email' placeholder='Enter your email address' />
        <Button size='medium'>Join the waiting list!</Button>
      </motion.form>
    </div>
  );
};

export default WaitingList;
