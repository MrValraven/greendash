import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormSchema } from './schema.ts';
import Button from '@components/Button/Button.tsx';
import InputField from '@components/FieldComponents/InputField/InputField.tsx';
import Label from '@components/FieldComponents/Label/Label.tsx';
import AuthLayout from '../components/AuthLayout/AuthLayout.tsx';

import './Login.css';

import axios from 'axios';
import baseURL from '../../../api/api.ts';

const Login = () => {
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
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <AuthLayout
      title='Welcome to GreenDash!'
      description='Please sign-in to your account and start the adventure'
    >
      <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
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
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Login;
