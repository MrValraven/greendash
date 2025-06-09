import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormSchema } from './schema.ts';
import Button from '@components/Button/Button.tsx';
import FormInput from '@components/FormInput/FormInput.tsx';
import GreendashLogo from '@components/GreendashLogo/GreendashLogo.tsx';
import GreendashLogoImg from '../../../public/greendashLogo.png';
import facebookIcon from './icons/facebook-icon.svg';
import twitterIcon from './icons/twitter-icon.svg';
import githubIcon from './icons/github-icon.svg';
import googleIcon from './icons/google-icon.svg';
import './Login.css';
import axios from 'axios';
import baseURL from '../../api/api.ts';

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
    <div className='login-page'>
      <div className='login-container-wrapper'>
        <div className='login-bg-green-container-top'></div>
        <div className='login-bg-green-container-bottom'></div>
        <div className='login-bg-transp-container-top'></div>
        <div className='login-bg-transp-container-bottom'></div>

        <div className='login-container'>
          <div className='login-greendash-logo-container'>
            <div className='login-greendash-logo'>
              <img src={GreendashLogoImg} />
              <GreendashLogo />
            </div>
          </div>

          <div className='login-header'>
            <h2>Welcome to GreenDash!</h2>
            <p>Please sign-in to your account and start the adventure</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
            <FormInput
              id='email'
              label='Email'
              type='text'
              register={register('email')}
              placeholder='Enter your email'
              error={errors.email?.message}
            />

            <FormInput
              id='password'
              label='Password'
              type='password'
              register={register('password')}
              placeholder='Enter your password'
              error={errors.password?.message}
            />

            <div className='login-form-options'>
              <div className='remember-me-container'>
                <input id='rememberMe' type='checkbox' />
                <label htmlFor='rememberMe' className='checkbox-icon'></label>
                <span className='remember-me-text'>Remember Me</span>
              </div>

              <div className='forgot-password-link'>
                <a href='/reset-password'>Forgot password?</a>
              </div>
            </div>

            <Button className='login-button' type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          <div className='register-link-container'>
            <p>New on our platform?</p>
            <a href='/register'>Create an account</a>
          </div>

          <div className='login-social-media-divider'>
            <span>or</span>
          </div>

          <div className='login-social-media-options'>
            <img src={facebookIcon}></img>
            <img src={twitterIcon}></img>
            <img src={githubIcon}></img>
            <img src={googleIcon}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
