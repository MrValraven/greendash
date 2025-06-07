import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormSchema } from '../../schema';
import { AccountInformationFormProps } from './types';
import RegistrationSteps from '../RegistrationSteps/RegistrationSteps';
import StepButtons from '../StepButtons/StepButtons';

import './AccountInformation.css';

const AccountInformationForm = ({ onSubmit, onPrevious }: AccountInformationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerSchema),
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
            <div className='account-info-form-group'>
              <label htmlFor='username'>Username</label>
              <input id='username' type='text' placeholder='Enter your username' />
            </div>

            <div className='account-info-form-group'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='email'
                {...register('email')}
                placeholder='Enter your email'
              />
              {errors.email && <span className='error'>{errors.email.message}</span>}
            </div>
          </div>

          <div className='password-inputs-container'>
            <div className='account-info-form-group'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                {...register('password')}
                placeholder='Enter your password'
              />
              {errors.password && <span className='error'>{errors.password.message}</span>}
            </div>

            <div className='account-info-form-group'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input id='confirmPassword' type='password' placeholder='Confirm your password' />
            </div>
          </div>

          <StepButtons onPrevious={handlePrevious} isFirstStep={false} />
        </form>
      </div>
    </div>
  );
};

export default AccountInformationForm;
