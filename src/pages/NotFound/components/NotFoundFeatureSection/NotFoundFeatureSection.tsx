import React from 'react';
import './NotFoundFeatureSection.css';

type Props = {};

const NotFoundFeatureSection = (props: Props) => {
  return (
    <div className='feature-section'>
      <FeatureCard
        title='Reduz o desperdício'
        description='Práticas que ajudam a minimizar o desperdício de recursos.'
      />
      <FeatureCard
        title='Energia Renovável'
        description='Apoia iniciativas que utilizam energia sustentável.'
      />
      <FeatureCard
        title='Transparência ESG'
        description='Facilitamos relatórios de sustentabilidade com clareza.'
      />
    </div>
  );
};

export default NotFoundFeatureSection;

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className='feature-card'>
    <div className='feature-card__content'>
      <h3 className='feature-card__title'>{title}</h3>
      <p className='feature-card__description'>{description}</p>
    </div>
  </div>
);
