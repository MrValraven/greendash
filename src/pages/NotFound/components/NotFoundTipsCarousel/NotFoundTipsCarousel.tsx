import React from 'react';
import tips from './tips.json';

type Props = {};

const NotFoundTipsCarousel = (props: Props) => {
  return (
    <div className='mt-10 flex gap-4 overflow-x-auto p-2'>
      {tips.map((tip, index) => (
        <TipCard key={index} tip={tip} />
      ))}
    </div>
  );
};

export default NotFoundTipsCarousel;

const TipCard = ({ tip }: { tip: string }) => (
  <div className='p-4 text-center w-48'>
    <div>
      <p className='text-gray-700'>{tip}</p>
    </div>
  </div>
);
