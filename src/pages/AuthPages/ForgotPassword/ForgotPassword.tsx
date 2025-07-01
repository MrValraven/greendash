import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, type ForgotPasswordFormSchema } from './schema.ts';
import InputField from '@components/FieldComponents/InputField/InputField.tsx';
import Label from '@components/FieldComponents/Label/Label.tsx';
import Button from '@components/Button/Button.tsx';
import AuthLayout from '../components/AuthLayout/AuthLayout.tsx';
import ToastNotification from '@components/ToastNotification/ToastNotification.tsx';

import backArrowIcon from '@assets/chevron-left.svg';
import './ForgotPassword.css';

import axios from 'axios';
import baseURL from '../../../api/api.ts';

const ForgotPassword = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [toastNotification, setToastNotification] = useState<{
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    visible: boolean;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormSchema) => {
    try {
      console.log('Form data:', data);

      const response = await axios.post(`${baseURL}/auth/users/password/reset-request`, data);
      setUserEmail(data.email);

      if (response.status === 200) {
        setIsEmailSent(true);
      } else {
        console.error('Failed to send reset link:', response.data);
        setToastNotification({
          message: 'Failed to send reset link. Please try again.',
          type: 'error',
          visible: true,
        });
      }
    } catch (error: any) {
      console.error('Error sending forgot password request:', error);

      if (error.response) {
        switch (error.response.status) {
          case 404:
            setToastNotification({
              message: 'Email not found. Please check your email.',
              type: 'error',
              visible: true,
            });
            break;
          case 429:
            setToastNotification({
              message: 'Too many requests. Please try again later.',
              type: 'warning',
              visible: true,
            });
            break;
          default:
            setToastNotification({
              message: 'Failed to send reset link. Please try again.',
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

  const handleResendEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/auth/users/password/reset-request`, {
        email: userEmail,
      });

      if (response.status === 200) {
        console.log('Reset link resent successfully');
      } else {
        console.error('Failed to resend reset link:', response.data);
        setToastNotification({
          message: 'Failed to resend reset link. Please try again.',
          type: 'error',
          visible: true,
        });
      }
    } catch (error: any) {
      console.error('Error resending reset link:', error);

      if (error.response) {
        switch (error.response.status) {
          case 404:
            setToastNotification({
              message: 'Email not found. Please check your email.',
              type: 'error',
              visible: true,
            });
            break;
          case 429:
            setToastNotification({
              message: 'Too many requests. Please try again later.',
              type: 'error',
              visible: true,
            });
            break;
          default:
            setToastNotification({
              message: 'Failed to resend reset link. Please try again.',
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
          message: `An unexpected error occurred. Please try again.`,
          type: 'error',
          visible: true,
        });
      }
    }
  };

  const closeToastNotification = () => {
    setToastNotification(null);
  };

  return (
    <AuthLayout
      title={!isEmailSent ? 'Forgot Password' : 'Check your email'}
      description={
        !isEmailSent
          ? "Enter your email and we'll send you instructions to reset your password"
          : ''
      }
    >
      {toastNotification && toastNotification.visible && (
        <ToastNotification
          message={toastNotification.message}
          type={toastNotification.type}
          onClose={closeToastNotification}
          duration={5000}
        />
      )}

      {!isEmailSent && (
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
      )}

      {isEmailSent && (
        <div className='forgot-password-success-container'>
          <div className='forgot-password-message'>
            <p>
              If the email you provided was registered, the password reset link was sent to your
              email address:
            </p>
            <p className='forgot-password-email'>{userEmail}</p>
            <p>Please follow the link sent to continue.</p>
          </div>

          <div className='forgot-password-conf-footer'>
            <p>
              Didn't get the email? <a onClick={handleResendEmail}>Resend</a>
            </p>
          </div>
        </div>
      )}

      <a href='/login' className='forgot-password-back-to-login-link'>
        <img src={backArrowIcon} alt='Back' />
        Back to Login
      </a>
    </AuthLayout>
  );
};

export default ForgotPassword;
