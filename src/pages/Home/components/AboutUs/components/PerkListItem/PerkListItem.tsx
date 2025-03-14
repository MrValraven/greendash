import { IPerkListItem } from '../types';

import { motion } from 'motion/react';

import './perkListItem.css';

interface PerkListItemProps extends IPerkListItem {
  index: number;
}

const PerkListItem = ({ Icon, text, index }: PerkListItemProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: 'spring', delay: 0.1 * index + 0.3 }}
      viewport={{ once: true }}
      className='perk-list-item'
    >
      <div className='perk-list-item-icon-container'>
        <Icon />
      </div>
      <p>{text}</p>
    </motion.div>
  );
};

export default PerkListItem;
