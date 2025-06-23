import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema, type ResetPasswordFormSchema } from './schema';
import Button from '@components/Button/Button';
import AuthLayout from '../components/AuthLayout/AuthLayout';

import InputField from '@components/FieldComponents/InputField/InputField';
import Label from '@components/FieldComponents/Label/Label';

import backArrowIcon from '@assets/chevron-left.svg';
import './ResetPassword.css';

import axios from 'axios';
import baseURL from '../../../api/api.ts';

const ResetPassword = () => {
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
      }
    } catch (error) {
      console.error('Reset password error:', error);
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
