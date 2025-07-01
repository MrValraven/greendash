import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { PersonalFormData, CompanyFormData } from './schema.ts';
import { RegistrationData } from './types.ts';

import GreendashLogo from '@components/GreendashLogo/GreendashLogo.tsx';
import GreendashLogoImg from '../../../../public/greendashLogo.png';

import PersonalInformationForm from './components/PersonalInformationForm/PersonalInformationForm.tsx';
import CompanyInformationForm from './components/CompanyInformationForm/CompanyInformationForm.tsx';
import RegistrationSuccess from './components/RegistrationSuccess/RegistrationSuccess.tsx';

import axios from 'axios';
import baseURL from '../../../api/api.ts';

import './Register.css';

const Register = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [registrationData, setRegistrationData] = useState<RegistrationData>({});
  const [toastNotification, setToastNotification] = useState<{
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    visible: boolean;
  } | null>(null);

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

      // temporary to make the register functional
      const dataToSend = {
        email: finalData.email,
        password: finalData.password,
      };

      const response = await axios.post(`${baseURL}/auth/users/register`, dataToSend);

      if (response.status === 201) {
        setActiveStep(3);
      } else {
        console.error('Registration failed:', response.data);
        setToastNotification({
          message: 'Registration failed. Please try again.',
          type: 'error',
          visible: true,
        });
      }
    } catch (error: any) {
      console.error('Registration error:', error);

      if (error.response) {
        switch (error.response.status) {
          case 400:
            setToastNotification({
              message: 'Invalid registration details. Please check your information.',
              type: 'warning',
              visible: true,
            });
            break;
          case 409:
            setToastNotification({
              message: 'Email already exists. Please use a different email.',
              type: 'warning',
              visible: true,
            });
            break;
          case 429:
            setToastNotification({
              message: 'Too many registration attempts. Please try again later.',
              type: 'warning',
              visible: true,
            });
            break;
          default:
            setToastNotification({
              message: 'Registration failed. Please try again later.',
              type: 'error',
              visible: true,
            });
        }
      } else if (error.request) {
        setToastNotification({
          message: 'Unable to reach the server. Please check your connection.',
          type: 'error',
          visible: true,
        });
      } else {
        setToastNotification({
          message: 'An unexpected error occurred. Please try again later.',
          type: 'error',
          visible: true,
        });
      }
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const closeToastNotification = () => {
    setToastNotification(null);
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
            toastNotification={toastNotification}
            closeToastNotification={closeToastNotification}
          />
        )}
      </div>
    </div>
  );
};

export default Register;
