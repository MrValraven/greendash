import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema, type ResetPasswordFormSchema } from './schema';
import Button from '@components/Button/Button.tsx';
import AuthLayout from '../components/AuthLayout/AuthLayout.tsx';
import ToastNotification from '@components/ToastNotification/ToastNotification.tsx';

import InputField from '@components/FieldComponents/InputField/InputField.tsx';
import Label from '@components/FieldComponents/Label/Label.tsx';

import backArrowIcon from '@assets/chevron-left.svg';
import './ResetPassword.css';

import axios from 'axios';
import baseURL from '../../../api/api.ts';

const ResetPassword = () => {
  const [toastNotification, setToastNotification] = useState<{
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    visible: boolean;
  } | null>(null);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormSchema>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordFormSchema) => {
    try {
      console.log('Form data:', data);

      const response = await axios.post(`${baseURL}/auth/users/password/reset`, data);

      if (response.status === 200) {
        setIsPasswordReset(true);
      } else {
        console.error('Failed Resetting Password:', response.data);
        setToastNotification({
          message: 'Failed to reset password. Please try again.',
          type: 'error',
          visible: true,
        });
      }
    } catch (error: any) {
      console.error('Reset password error:', error);

      if (error.response) {
        switch (error.response.status) {
          case 400:
            setToastNotification({
              message: 'Invalid request. Please check your input.',
              type: 'error',
              visible: true,
            });
            break;
          case 401:
          case 403:
            setToastNotification({
              message: 'Your reset link has expired or is invalid. Please request a new one.',
              type: 'warning',
              visible: true,
            });
            break;
          case 404:
            setToastNotification({
              message: "We couldn't find an account matching this reset request.",
              type: 'error',
              visible: true,
            });
            break;
          case 429:
            setToastNotification({
              message: 'Too many password reset attempts. Please try again later.',
              type: 'warning',
              visible: true,
            });
            break;
          default:
            setToastNotification({
              message: 'An unexpected error occurred. Please try again later.',
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

  return (
    <AuthLayout
      title={!isPasswordReset ? 'Reset Your Password' : 'Your password was successfully reset'}
      description={
        !isPasswordReset
          ? 'Your new password must be at least 8 characters long'
          : 'You can now go to login, and sign in with your new password!'
      }
    >
      {toastNotification && toastNotification.visible && (
        <ToastNotification
          message={toastNotification.message}
          type={toastNotification.type}
          onClose={() => setToastNotification(null)}
          duration={5000}
        />
      )}
      {!isPasswordReset && (
        <form onSubmit={handleSubmit(onSubmit)} className='reset-password-form'>
          <div className='form-input-container'>
            <Label htmlFor='newPassword' label='New Password' />
            <InputField
              id='newPassword'
              type='password'
              register={register('newPassword')}
              placeholder='Enter your new password'
              error={errors.newPassword?.message}
            />
          </div>

          <div className='form-input-container'>
            <Label htmlFor='confirmNewPassword' label='Confirm New Password' />
            <InputField
              id='confirmNewPassword'
              type='password'
              register={register('confirmNewPassword')}
              placeholder='Confirm your new password'
              error={errors.confirmNewPassword?.message}
            />
          </div>

          <Button className='reset-password-button' type='submit'>
            Set New Password
          </Button>
        </form>
      )}

      <a href='/login' className='reset-password-back-to-login-link'>
        <img src={backArrowIcon} alt='Back' />
        Back to Login
      </a>
    </AuthLayout>
  );
};

export default ResetPassword;
