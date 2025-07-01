import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormSchema } from './schema.ts';
import Button from '@components/Button/Button.tsx';
import InputField from '@components/FieldComponents/InputField/InputField.tsx';
import ErrorMessage from '@components/FieldComponents/ErrorMessage/ErrorMessage.tsx';
import Label from '@components/FieldComponents/Label/Label.tsx';
import AuthLayout from '../components/AuthLayout/AuthLayout.tsx';
import ToastNotification from '@components/ToastNotification/ToastNotification.tsx';

import './Login.css';

import axios from 'axios';
import baseURL from '../../../api/api.ts';

const Login = () => {
  const [toastNotification, setToastNotification] = useState<{
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    visible: boolean;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormSchema> = async (data) => {
    try {
      console.log('Form data:', data);
      const response = await axios.post(`${baseURL}/auth/users/login`, data);

      if (response.status === 200) {
        window.location.href = '/report/';
      } else {
        console.error('Login failed:', response.data);
        setToastNotification({
          message: 'Login failed. Please check your credentials.',
          type: 'error',
          visible: true,
        });
      }
    } catch (error: any) {
      console.error('Login error:', error);

      if (error.response) {
        switch (error.response.status) {
          case 401:
            setToastNotification({
              message: 'Invalid email or password. Please try again.',
              type: 'warning',
              visible: true,
            });
            break;
          case 403:
            setToastNotification({
              message: 'Your account is inactive. Please contact support.',
              type: 'error',
              visible: true,
            });
            break;
          case 429:
            setToastNotification({
              message: 'Too many login attempts. Please try again later.',
              type: 'warning',
              visible: true,
            });
            break;
          default:
            setToastNotification({
              message: 'Login failed. Please try again later.',
              type: 'error',
              visible: true,
            });
            break;
        }
      } else if (error.request) {
        setToastNotification({
          message: 'Unable to reach the server. Please check your connection.',
          type: 'error',
          visible: true,
        });
      } else {
        setToastNotification({
          message: `An unexpected error occurred. Please try again later.`,
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
      title='Welcome to GreenDash!'
      description='Please sign-in to your account and start the adventure'
    >
      {toastNotification && toastNotification.visible && (
        <ToastNotification
          message={toastNotification.message}
          type={toastNotification.type}
          onClose={closeToastNotification}
          duration={5000}
        />
      )}

      <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
        <div className='form-input-container'>
          <Label htmlFor='email' label='Email' />
          <InputField
            id='email'
            type='text'
            register={register('email')}
            placeholder='Enter your email'
          />
          <ErrorMessage error={errors.email?.message} />
        </div>

        <div className='form-input-container'>
          <Label htmlFor='password' label='Password' />
          <InputField
            id='password'
            type='password'
            register={register('password')}
            placeholder='Enter your password'
            error={errors.password?.message}
          />
          <ErrorMessage error={errors.password?.message} />
        </div>

        <div className='login-form-options'>
          <div className='remember-me-container'>
            <input id='rememberMe' type='checkbox' />
            <label htmlFor='rememberMe' className='checkbox-icon'></label>
            <span className='remember-me-text'>Remember Me</span>
          </div>

          <div className='forgot-password-link'>
            <a href='/forgot-password'>Forgot password?</a>
          </div>
        </div>

        <Button className='login-button' type='submit' disabled={isSubmitting}>
          Login
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Login;
