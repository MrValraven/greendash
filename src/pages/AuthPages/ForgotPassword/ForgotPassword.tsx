import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, type ForgotPasswordFormSchema } from './schema.ts';
import InputField from '@components/FieldComponents/InputField/InputField';
import Label from '@components/FieldComponents/Label/Label';
import Button from '@components/Button/Button';
import AuthLayout from '../components/AuthLayout/AuthLayout.tsx';

import backArrowIcon from '@assets/chevron-left.svg';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormSchema) => {
    try {
      console.log('Forgot Password Data:', data);
    } catch (error) {
      console.error('Error sending forgot password request:', error);
    }
  };

  return (
    <AuthLayout title='Forgot Password' description='Enter your email to reset your password'>
      <form onSubmit={handleSubmit(onSubmit)} className='forgot-password-form'>
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

        <Button className='forgot-password-button' type='submit'>
          Send Reset Link
        </Button>
      </form>

      <a href='/login' className='forgot-password-back-to-login-link'>
        <img src={backArrowIcon} alt='Back' />
        Back to Login
      </a>
    </AuthLayout>
  );
};

export default ForgotPassword;
