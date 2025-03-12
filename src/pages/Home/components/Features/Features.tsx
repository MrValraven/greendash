import React from 'react';
import { IFeatureCardInfo } from './types';
import FeaturesInformationCard from './FeaturesInformationCard/FeaturesInformationCard';
import ComplianceImage from './images/ComplianceImage';
import SimplificationImage from './images/SimplificationImage';
import EfficiencyImage from './images/EfficiencyImage';
import ExpertiseImage from './images/ExpertiseImage';

import './Features.css';

const featureCardsInfo: IFeatureCardInfo[] = [
  {
    Image: ComplianceImage,
    title: 'Industry Compliance Assurance',
    type: 'compliance',
    isLayoutReversed: false,
    description:
      'Aligned with CSRD legislation, providing an industry customized and up-to-date solution, so you won’t be a single requirement.This helps avoid compliance-related risks and stay ahead of evolving sustainability reporting standards ',
  },
  {
    Image: SimplificationImage,
    title: 'Easy and Collaborative ESG Reporting',
    type: 'simplification',
    isLayoutReversed: true,
    description:
      'User-friendly interface to easily input and request data from stakeholders, making the entire experience seamless for various users. It also allows to keep track on who owns which disclosure.  You can now build your industry customized report block by block.',
  },
  {
    Image: EfficiencyImage,
    title: 'Cutting-Edge In-House Technology and AI',
    type: 'efficiency',
    isLayoutReversed: false,
    description:
      'The AI-driven system streamlines the process of generating sustainability reports, ensuring efficiency and accuracy. This reduces the time and resources typically required for manual reporting, enhancing overall productivity.',
  },
  {
    Image: ExpertiseImage,
    title: 'Full-Customer Support from our Sustainability Experts',
    type: 'expertise',
    isLayoutReversed: true,
    description:
      'Experience peace of mind with GreenDash’s comprehensive customer support. Our dedicated team provides guidance and assistance, from  helping you navigate our platform’s features, understanding the CSRD, setting up your ESG strategy, conducting your Double Materiality Assessment, collecting data and reporting on all the requirements you must disclose. ',
  },
];

const Features = () => {
  return (
    <section className='features'>
      <h2 className='title'>Main Features</h2>
      <p className='subtitle'>
        GreenDash is the most complete ESG reporting tool powered by Human Expertise and AI support,
        ensuring that you have a smooth and comprehensive reporting process
      </p>
      <div className='features-container'>
        {featureCardsInfo.map((feature) => (
          <FeaturesInformationCard
            key={feature.title}
            Image={feature.Image}
            title={feature.title}
            type={feature.type}
            isLayoutReversed={feature.isLayoutReversed}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
