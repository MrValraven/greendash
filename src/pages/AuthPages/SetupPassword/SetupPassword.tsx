import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { setupPasswordSchema, type SetupPasswordFormSchema } from './schema.ts';
import Button from '@components/Button/Button.tsx';
import AuthLayout from '../components/AuthLayout/AuthLayout.tsx';

import InputField from '@components/FieldComponents/InputField/InputField.tsx';
import Label from '@components/FieldComponents/Label/Label.tsx';

import backArrowIcon from '@assets/chevron-left.svg';
import './SetupPassword.css';

const SetupPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetupPasswordFormSchema>({
    resolver: zodResolver(setupPasswordSchema),
  });

  const onSubmit = async (data: SetupPasswordFormSchema) => {
    try {
      console.log('Form data:', data);

      // Make here the api call to set up the password.The api does not have an endpoint for this yet.
    } catch (error) {
      console.error('Setup password error:', error);
    }
  };

  return (
    <AuthLayout
      title='Set Up Your Password'
      description='Your password must be at least 8 characters long.'
    >
      <form onSubmit={handleSubmit(onSubmit)} className='setup-password-form'>
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

        <Button className='setup-password-button' type='submit'>
          Set New Password
        </Button>
      </form>

      <a href='/login' className='setup-password-back-to-login-link'>
        <img src={backArrowIcon} alt='Back' />
        Back to Login
      </a>
    </AuthLayout>
  );
};

export default SetupPassword;
