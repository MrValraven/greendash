import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, type ForgotPasswordFormSchema } from './schema';
import FormInput from '@components/FormInput/FormInput';
import Button from '@components/Button/Button';
import GreendashLogo from '@components/GreendashLogo/GreendashLogo';
import GreendashLogoImg from '../../../public/greendashLogo.png';
import backArrowIcon from './icons/chevron-left.svg';
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
    <div className='forgot-password-page'>
      <div className='forgot-password-container-wrapper'>
        <div className='forgot-password-bg-green-container-top'></div>
        <div className='forgot-password-bg-green-container-bottom'></div>
        <div className='forgot-password-bg-transp-container-top'></div>
        <div className='forgot-password-bg-transp-container-bottom'></div>

        <div className='forgot-password-container'>
          <div className='forgot-password-greendash-logo-container'>
            <div className='forgot-password-greendash-logo'>
              <img src={GreendashLogoImg} />
              <GreendashLogo />
            </div>
          </div>

          <div className='forgot-password-header'>
            <h2>Forgot Password</h2>
            <p>Enter your email to reset your password</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='forgot-password-form'>
            <FormInput
              id='email'
              type='text'
              label='Email'
              register={register('email')}
              placeholder='Enter your email'
              error={errors.email?.message}
            />

            <Button className='forgot-password-button' type='submit'>
              Send Reset Link
            </Button>
          </form>

          <a href='/login' className='forgot-password-back-to-login-link'>
            <img src={backArrowIcon} alt='Back' />
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
