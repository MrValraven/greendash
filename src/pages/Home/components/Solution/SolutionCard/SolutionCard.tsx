import type { ISolutionCard } from '../types';
import { motion } from 'motion/react';

import './SolutionCard.css';

const SolutionCard = ({ Icon, title, description, animationDelay = 0 }: ISolutionCard) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, type: 'spring', delay: animationDelay }}
      viewport={{ once: true }}
      className='solution-card'
    >
      <Icon />
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default SolutionCard;
