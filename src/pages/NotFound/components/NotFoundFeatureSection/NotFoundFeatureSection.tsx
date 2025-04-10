import React from 'react'

type Props = {}

const NotFoundFeatureSection = (props: Props) => {
  return (
    <div className='mt-10 flex flex-wrap justify-center gap-6'>
      <FeatureCard title='Reduz o desperdício' description='Práticas que ajudam a minimizar o desperdício de recursos.' />
      <FeatureCard title='Energia Renovável' description='Apoia iniciativas que utilizam energia sustentável.' />
      <FeatureCard title='Transparência ESG' description='Facilitamos relatórios de sustentabilidade com clareza.' />
    </div>
  )
}

export default NotFoundFeatureSection

const FeatureCard = ({ title, description }: {title: string, description: string}) => (
    <div className='p-4 text-center w-64'>
      <div>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-gray-500 mt-1'>{description}</p>
      </div>
    </div>
  );
  
  const FeatureSection = () => (
    
  );