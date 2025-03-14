import './FeaturesInformationCard.css';
import { IFeatureCardInfo } from '../types';

import { motion } from 'motion/react';

const FeaturesInformationCard = ({
  Image,
  title,
  type,
  description,
  isLayoutReversed,
}: IFeatureCardInfo) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: 'spring', delay: 0.3 }}
      viewport={{ once: true }}
      className={`features-information-card ${isLayoutReversed ? 'reversed' : ''}`}
    >
      <div className='feature-card-information-image'>
        <Image />
      </div>
      <div className={`information-container`}>
        <h3>{type}</h3>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default FeaturesInformationCard;
