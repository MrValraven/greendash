import React from 'react';
import tips from './tips.json';
import './NotFoundTipsCarousel.css';

type Props = {};

const NotFoundTipsCarousel = (props: Props) => {
  return (
    <div className='tips-carousel'>
      {tips.map((tip, index) => (
        <TipCard key={index} tip={tip.textContent} />
      ))}
    </div>
  );
};

export default NotFoundTipsCarousel;

const TipCard = ({ tip }: { tip: string }) => (
  <div className='tip-card'>
    <div className='tip-card__content'>
      <p className='tip-card__text'>{tip}</p>
    </div>
  </div>
);
