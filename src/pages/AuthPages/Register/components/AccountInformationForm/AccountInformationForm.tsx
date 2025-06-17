import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { accountSchema, type AccountFormData } from '../../../Register/schema.ts';
import { AccountInformationFormProps } from './types.ts';
import RegistrationSteps from '../RegistrationSteps/RegistrationSteps.tsx';
import StepButtons from '../StepButtons/StepButtons.tsx';
import InputField from '@components/FieldComponents/InputField/InputField.tsx';
import Label from '@components/FieldComponents/Label/Label.tsx';

import './AccountInformation.css';

const AccountInformationForm = ({ onSubmit, onPrevious }: AccountInformationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
  });

  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onPrevious) onPrevious();
  };

  return (
    <div className='account-info-step-container'>
      <div className='account-info-steps-container'>
        <h1>Sign up</h1>
        <RegistrationSteps activeStep={1} />
      </div>

      <div className='account-info-form-container'>
        <div className='account-info-title-container'>
          <h2>Account Information</h2>
          <p>Enter your account details</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='account-info-form'>
          <div className='username-email-input-container'>
            <div className='form-input-container'>
              <Label htmlFor='username' label='Username' />
              <InputField
                id='username'
                type='text'
                register={register('username')}
                placeholder='Enter your username'
                error={errors.username?.message}
              />
            </div>

            <div className='form-input-container'>
              <Label htmlFor='email' label='Email' />
              <InputField
                id='email'
                type='text'
                register={register('email')}
                placeholder='Enter your email'
                error={errors.email?.message}
              />
            </div>
          </div>

          <div className='password-inputs-container'>
            <div className='form-input-container'>
              <Label htmlFor='password' label='Password' />
              <InputField
                id='password'
                type='password'
                register={register('password')}
                placeholder='Enter your password'
                error={errors.password?.message}
              />
            </div>

            <div className='form-input-container'>
              <Label htmlFor='confirmPassword' label='Confirm Password' />
              <InputField
                id='confirmPassword'
                type='password'
                register={register('confirmPassword')}
                placeholder='Confirm your password'
                error={errors.confirmPassword?.message}
              />
            </div>
          </div>

          <StepButtons onPrevious={handlePrevious} isFirstStep={false} />
        </form>
      </div>
    </div>
  );
};

export default AccountInformationForm;
