import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { personalSchema, PersonalFormData } from '../../schema.ts';
import { PersonalInformationFormProps } from './types.ts';
import RegistrationSteps from '../RegistrationSteps/RegistrationSteps.tsx';
import StepButtons from '../StepButtons/StepButtons.tsx';
import ToastNotification from '@components/ToastNotification/ToastNotification.tsx';
import InputField from '@components/FieldComponents/InputField/InputField.tsx';
import Label from '@components/FieldComponents/Label/Label.tsx';
import ErrorMessage from '@components/FieldComponents/ErrorMessage/ErrorMessage.tsx';

import './PersonalInformation.css';

const PersonalInformationForm = ({
  onSubmit,
  onPrevious,
  activeStep,
  toastNotification,
  closeToastNotification,
}: PersonalInformationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalFormData>({
    resolver: zodResolver(personalSchema),
  });

  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onPrevious) onPrevious();
  };

  return (
    <div className='personal-info-step-container'>
      <div className='personal-info-steps-container'>
        <RegistrationSteps activeStep={activeStep} />
      </div>

      <div className='personal-info-form-container'>
        <div className='personal-info-title-container'>
          <h2>Account Information</h2>
          <p>Enter your account details</p>
        </div>

        {toastNotification && toastNotification.visible && (
          <ToastNotification
            message={toastNotification.message}
            type={toastNotification.type}
            onClose={closeToastNotification}
            duration={5000}
          />
        )}

        <form onSubmit={handleSubmit(onSubmit)} className='personal-info-form'>
          <div className='form-input-groups-container'>
            <div className='form-input-group'>
              <div className='form-input-container'>
                <Label htmlFor='firstName' label='First Name' />
                <InputField
                  id='firstName'
                  type='text'
                  register={register('firstName')}
                  placeholder='John'
                />
                <ErrorMessage error={errors.firstName?.message} />
              </div>

              <div className='form-input-container'>
                <Label htmlFor='mobileNumber' label='Mobile' />
                <InputField
                  id='mobileNumber'
                  type='number'
                  register={register('mobileNumber')}
                  placeholder='205 555 0111'
                />
                <ErrorMessage error={errors.mobileNumber?.message} />
              </div>

              <div className='form-input-container'>
                <Label htmlFor='email' label='Email' />
                <InputField
                  id='email'
                  type='text'
                  register={register('email')}
                  placeholder='Enter your work email'
                />
                <ErrorMessage error={errors.email?.message} />
              </div>
            </div>

            <div className='form-input-group'>
              <div className='form-input-container'>
                <Label htmlFor='lastName' label='Last Name' />
                <InputField
                  id='lastName'
                  type='text'
                  register={register('lastName')}
                  placeholder='Doe'
                />
                <ErrorMessage error={errors.lastName?.message} />
              </div>

              <div className='form-input-container'>
                <Label htmlFor='positionInCompany' label='Position in Company' />
                <InputField
                  id='positionInCompany'
                  type='text'
                  register={register('positionInCompany')}
                  placeholder='Position in Company'
                />
                <ErrorMessage error={errors.positionInCompany?.message} />
              </div>

              <div className='form-input-container'>
                <Label htmlFor='password' label='Password' />
                <InputField
                  id='password'
                  type='password'
                  register={register('password')}
                  placeholder='Enter your password'
                />
                <ErrorMessage error={errors.password?.message} />
              </div>
            </div>
          </div>

          <StepButtons onPrevious={handlePrevious} isFirstStep={false} />
        </form>
      </div>
    </div>
  );
};

export default PersonalInformationForm;
