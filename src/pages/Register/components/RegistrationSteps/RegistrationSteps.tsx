import React from 'react';
import '../../Register.css';

import accountIconBlack from '../../icons/accountIcon_b.svg';
import accountIconWhite from '../../icons/accountIcon_w.svg';
import companyIconBlack from '../../icons/companyIcon_b.svg';
import companyIconWhite from '../../icons/companyIcon_w.svg';
import infoReviewIconBlack from '../../icons/info_reviewIcon_b.svg';
import infoReviewIconWhite from '../../icons/info_reviewIcon_w.svg';
import arrowStepIcon from '../../icons/arrow-stepIcon.svg';

import { RegistrationStepsProps, StepInfo } from './types';

const RegistrationSteps: React.FC<RegistrationStepsProps> = ({ activeStep, onStepChange }) => {
  const steps: StepInfo[] = [
    {
      id: 1,
      title: 'Account',
      description: 'Enter your Account Details',
      iconBlack: accountIconBlack,
      iconWhite: accountIconWhite,
    },
    {
      id: 2,
      title: 'Company',
      description: 'Setup Information',
      iconBlack: companyIconBlack,
      iconWhite: companyIconWhite,
    },
    {
      id: 3,
      title: 'Information Review',
      description: 'Confirm Information',
      iconBlack: infoReviewIconBlack,
      iconWhite: infoReviewIconWhite,
    },
  ];

  return (
    <div className='register-steps-container'>
      <h1>Sign up</h1>
      <div className='register-steps'>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className='register-step-container'>
              <button
                className={`register-step-graphic ${activeStep === step.id ? 'active' : ''}`}
                onClick={() => onStepChange(step.id)}
              >
                <img
                  src={step.iconBlack}
                  className={activeStep === step.id ? 'hidden' : ''}
                  alt={step.title}
                />
                <img
                  src={step.iconWhite}
                  className={activeStep === step.id ? '' : 'hidden'}
                  alt={step.title}
                />
              </button>
              <div className='register-step-info'>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>

            {index < steps.length - 1 && (
              <div className='register-step-arrow'>
                <img src={arrowStepIcon} alt='Arrow Step' />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RegistrationSteps;
