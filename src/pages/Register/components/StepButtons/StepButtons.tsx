import React from 'react';
import Button from '@components/Button/Button';
import { StepButtonsProps } from './types';
import arrowLeftIcon from '../../icons/arrow-left-icon.svg';
import arrowRightIcon from '../../icons/arrow-right-icon.svg';
import './StepButtons.css';

const StepButtons: React.FC<StepButtonsProps> = ({ onPrevious, isFirstStep = false }) => {
  return (
    <div className='register-buttons-container'>
      <Button
        className={`register-previous-button ${isFirstStep ? 'first-step' : 'active-step'}`}
        hasGlowyShadow={false}
        onClick={onPrevious}
        type='button'
      >
        <img
          src={arrowLeftIcon}
          alt='Previous'
          className={isFirstStep ? 'inactive-icon' : 'active-icon'}
        />
        Previous
      </Button>

      <Button className='register-next-button' hasGlowyShadow={false} type='submit'>
        Next
        <img src={arrowRightIcon} alt='Next' />
      </Button>
    </div>
  );
};

export default StepButtons;
