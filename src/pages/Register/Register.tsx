import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { RegisterFormSchema } from './schema.tsx';

import GreendashLogo from '@components/GreendashLogo/GreendashLogo.tsx';
import GreendashLogoImg from '../../../public/greendashLogo.png';

import AccountInformationForm from './components/AccountInformationForm/AccountInformationForm.tsx';
import CompanyInformationForm from './components/CompanyInformationForm/CompanyInformationForm.tsx';
import EmailConfirmationPage from './components/EmailConfirmationPage/EmailConfirmationPage.tsx';

import './Register.css';

interface RegistrationData {
  // Account info
  username?: string;
  email?: string;
  password?: string;

  // Company info
  companyName?: string;
  businessSector?: string;
  companyNIF?: string;
  dateOfEstablishment?: string;
  contactNumber?: string;
  pincode?: string;
  address?: string;
  city?: string;
  country?: string;
  netTurnover?: string;
  assetsValue?: string;
}

const Register = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [registrationData, setRegistrationData] = useState<RegistrationData>({});

  //These handle functions and the RegistrationData is temporary, it will be replaced with the actual API calls and the data will be checked against a schema

  const handleAccountSubmit: SubmitHandler<RegisterFormSchema> = async (data) => {
    try {
      const updatedData = {
        ...registrationData,
        ...data,
      };
      setRegistrationData(updatedData);

      console.log('Account data:', data);

      setActiveStep(2);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleCompanySubmit = async (data: any) => {
    try {
      const updatedData = { ...registrationData, ...data };
      setRegistrationData(updatedData);
      console.log('Company data:', data);

      if (activeStep === 2) {
        setActiveStep(3);
        return;
      }
      await submitRegistrationToAPI(updatedData);
      setActiveStep(4);
    } catch (error) {
      console.error('Company registration error:', error);
    }
  };

  const submitRegistrationToAPI = async (data: RegistrationData) => {
    try {
      // Here we will make the API call to submit the registration data
      /* const parsedData = { username: data.username, email: data.email, password: data.password }; */

      console.log('Submitting registration data to API:', data);
    } catch (error) {
      console.error('Error submitting registration data:', error);
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
