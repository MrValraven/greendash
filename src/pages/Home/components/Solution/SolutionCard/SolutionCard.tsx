import type { ISolutionCard } from '../types';

import './SolutionCard.css';

const SolutionCard = ({ Icon, title, description }: ISolutionCard) => {
  return (
    <div className='solution-card'>
      <Icon />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SolutionCard;
