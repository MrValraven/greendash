import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { RegisterFormSchema } from './schema.tsx';

import GreendashLogo from '@components/GreendashLogo/GreendashLogo.tsx';
import GreendashLogoImg from '../../../public/greendashLogo.png';

import RegistrationSteps from './components/RegistrationSteps/RegistrationSteps.tsx';
import AccountInformationForm from './components/AccountInformationForm/AccountInformationForm.tsx';

import './Register.css';

const Register = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [registrationData, setRegistrationData] = useState<RegisterFormSchema | null>(null);

  const handleSubmit: SubmitHandler<RegisterFormSchema> = async (data) => {
    try {
      setRegistrationData(data);
      console.log('Registration data:', data);

      if (activeStep < 3) {
        setActiveStep(activeStep + 1);
      } else {
        // submit to api
        await submitRegistrationToAPI(data);
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const submitRegistrationToAPI = async (data: RegisterFormSchema) => {
    try {
      // Here we will make the API call to submit the registration data
      console.log('Submitting registration data to API:', data);
    } catch (error) {
      console.error('Error submitting registration data:', error);
    }
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handlePreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className='register-page'>
      <div className='register-header'>
        <div className='register-greendash-logo-container'>
          <div className='register-greendash-logo'>
            <img src={GreendashLogoImg} alt='GreenDash Logo' />
            <GreendashLogo />
          </div>
        </div>
      </div>

      <RegistrationSteps activeStep={activeStep} onStepChange={handleStepChange} />

      {activeStep === 1 && (
        <AccountInformationForm onSubmit={handleSubmit} onPrevious={handlePreviousStep} />
      )}
    </div>
  );
};

export default Register;
