import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { accountSchema, type AccountFormData } from '../../schema.ts';
import { AccountInformationFormProps } from './types.ts';
import RegistrationSteps from '../RegistrationSteps/RegistrationSteps.tsx';
import StepButtons from '../StepButtons/StepButtons.tsx';
import FormInput from '@components/FormInput/FormInput.tsx';

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
            <FormInput
              id='username'
              label='Username'
              type='text'
              placeholder='Enter your username'
              register={register('username')}
              error={errors.username?.message}
            />

            <FormInput
              id='email'
              label='Email'
              type='text'
              placeholder='Enter your email'
              register={register('email')}
              error={errors.email?.message}
            />
          </div>

          <div className='password-inputs-container'>
            <FormInput
              id='password'
              label='Password'
              type='password'
              placeholder='Enter your password'
              register={register('password')}
              error={errors.password?.message}
            />

            <FormInput
              id='confirmPassword'
              label='Confirm Password'
              type='password'
              placeholder='Confirm your password'
              register={register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
          </div>

          <StepButtons onPrevious={handlePrevious} isFirstStep={false} />
        </form>
      </div>
    </div>
  );
};

export default AccountInformationForm;
