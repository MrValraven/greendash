import React from 'react';
import '../../Register.css';

import accountIconBlack from '../../icons/accountIcon_b.svg';
import accountIconWhite from '../../icons/accountIcon_w.svg';
import accountIconCompleted from '../../icons/accountIcon_c.svg';
import personalIconBlack from '../../icons/personalIcon_b.svg';
import personalIconWhite from '../../icons/personalIcon_w.svg';
import arrowStepIcon from '../../icons/arrow-stepIcon.svg';

import { RegistrationStepsProps, StepInfo } from './types.ts';

import './RegistrationSteps.css';

const RegistrationSteps: React.FC<RegistrationStepsProps> = ({ activeStep }) => {
  const steps: StepInfo[] = [
    {
      id: 1,
      title: 'Account',
      description: 'Enter your Account Details',
      iconBlack: accountIconBlack,
      iconWhite: accountIconWhite,
      iconCompleted: accountIconCompleted,
    },
    {
      id: 2,
      title: 'Personal',
      description: 'Setup Information',
      iconBlack: personalIconBlack,
      iconWhite: personalIconWhite,
    },
  ];

  return (
    <div className='register-steps'>
      {steps.map((step, index) => {
        const isActive = activeStep === step.id;
        const isCompleted = activeStep > step.id;
        return (
          <React.Fragment key={step.id}>
            <div className='register-step-container'>
              <div
                className={`register-step-graphic 
                ${isActive ? 'active' : ''}
                ${isCompleted ? ' completed' : ''}`}
              >
                {isCompleted && step.iconCompleted ? (
                  <img src={step.iconCompleted} alt={step.title} />
                ) : (
                  <>
                    <img
                      src={step.iconBlack}
                      className={isActive ? 'hidden' : ''}
                      alt={step.title}
                    />
                    <img
                      src={step.iconWhite}
                      className={isActive ? '' : 'hidden'}
                      alt={step.title}
                    />
                  </>
                )}
              </div>
              <div className={`register-step-info ${isCompleted ? 'completed' : ''}`}>
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
        );
      })}
    </div>
  );
};

export default RegistrationSteps;
