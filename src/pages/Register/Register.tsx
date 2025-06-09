import axios from 'axios';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { AccountFormData, CompanyFormData } from './schema.tsx';
import { RegistrationData } from './types.tsx';

import GreendashLogo from '@components/GreendashLogo/GreendashLogo.tsx';
import GreendashLogoImg from '../../../public/greendashLogo.png';

import AccountInformationForm from './components/AccountInformationForm/AccountInformationForm.tsx';
import CompanyInformationForm from './components/CompanyInformationForm/CompanyInformationForm.tsx';
import EmailConfirmationPage from './components/EmailConfirmationPage/EmailConfirmationPage.tsx';

import './Register.css';
import baseURL from '../../api/api.ts';

const Register = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [registrationData, setRegistrationData] = useState<RegistrationData>({});

  //These handle functions are temporary

  const submitRegistrationToAPI = async (data: RegistrationData): Promise<boolean> => {
    try {
      const apiData = { email: data.email, password: data.password };

      const response = await axios.post(`${baseURL}/auth/users/register`, apiData);

      console.log('Submitting registration data to API:', response.data);
      return true;
    } catch (error) {
      console.error('Error submitting registration data:', error);
      return false;
    }
  };

  const handleAccountSubmit: SubmitHandler<AccountFormData> = async (data) => {
    try {
      const updatedData = {
        ...registrationData,
        ...data,
      };
      setRegistrationData(updatedData);

      setActiveStep(2);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleCompanySubmit: SubmitHandler<Partial<CompanyFormData>> = async (data) => {
    try {
      const updatedData = { ...registrationData, ...data };
      setRegistrationData(updatedData);

      if (activeStep === 2) {
        setActiveStep(3);
        return;
      }

      const success = await submitRegistrationToAPI(updatedData);

      if (success) {
        setActiveStep(4);
      }
    } catch (error) {
      console.error('Company registration error:', error);
    }
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

      {activeStep === 1 && (
        <AccountInformationForm onSubmit={handleAccountSubmit} onPrevious={handlePreviousStep} />
      )}

      {activeStep === 2 && (
        <CompanyInformationForm
          onSubmit={handleCompanySubmit}
          onPrevious={handlePreviousStep}
          activeStep={activeStep}
          isReviewMode={false}
        />
      )}

      {activeStep === 3 && (
        <CompanyInformationForm
          onSubmit={handleCompanySubmit}
          onPrevious={handlePreviousStep}
          activeStep={activeStep}
          isReviewMode={true}
          defaultValues={registrationData}
        />
      )}

      {activeStep === 4 && <EmailConfirmationPage userEmail={registrationData.email || ''} />}
    </div>
  );
};

export default Register;
