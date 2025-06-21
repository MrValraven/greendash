import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { PersonalFormData, CompanyFormData } from './schema.ts';
import { RegistrationData } from './types.ts';

import GreendashLogo from '@components/GreendashLogo/GreendashLogo.tsx';
import GreendashLogoImg from '../../../../public/greendashLogo.png';

import PersonalInformationForm from './components/PersonalInformationForm/PersonalInformationForm.tsx';
import CompanyInformationForm from './components/CompanyInformationForm/CompanyInformationForm.tsx';
import RegistrationSuccess from './components/RegistrationSuccess/RegistrationSuccess.tsx';

import './Register.css';

const Register = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [registrationData, setRegistrationData] = useState<RegistrationData>({});

  const handleCompanySubmit: SubmitHandler<Partial<CompanyFormData>> = async (data) => {
    try {
      const updatedData = { ...registrationData, ...data };
      setRegistrationData(updatedData);

      setActiveStep(2);
    } catch (error) {
      console.error('Company registration error:', error);
    }
  };

  const handlePersonalSubmit: SubmitHandler<PersonalFormData> = async (data) => {
    try {
      const finalData = {
        ...registrationData,
        ...data,
      };
      setRegistrationData(finalData);
      console.log('Registration complete with data:', finalData);

      setActiveStep(3);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  if (activeStep === 3) {
    return <RegistrationSuccess />;
  }

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

      <div className='register-forms-container'>
        {activeStep === 1 && (
          <CompanyInformationForm
            onSubmit={handleCompanySubmit}
            onPrevious={handlePreviousStep}
            activeStep={activeStep}
            defaultValues={registrationData}
          />
        )}

        {activeStep === 2 && (
          <PersonalInformationForm
            onSubmit={handlePersonalSubmit}
            onPrevious={handlePreviousStep}
            activeStep={activeStep}
          />
        )}
      </div>
    </div>
  );
};

export default Register;
