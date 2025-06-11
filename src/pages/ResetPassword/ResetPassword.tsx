import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema, type ResetPasswordFormSchema } from './schema';
import FormInput from '@components/FormInput/FormInput';
import Button from '@components/Button/Button';
import GreendashLogo from '@components/GreendashLogo/GreendashLogo';
import GreendashLogoImg from '../../../public/greendashLogo.png';
import backArrowIcon from './icons/chevron-left.svg';
import './ResetPassword.css';

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormSchema>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordFormSchema) => {
    try {
      console.log('Reset Password Data:', data);
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };

  return (
    <div className='reset-password-page'>
      <div className='reset-password-container-wrapper'>
        <div className='reset-password-bg-green-container-top'></div>
        <div className='reset-password-bg-green-container-bottom'></div>
        <div className='reset-password-bg-transp-container-top'></div>
        <div className='reset-password-bg-transp-container-bottom'></div>

        <div className='reset-password-container'>
          <div className='reset-password-greendash-logo-container'>
            <div className='reset-password-greendash-logo'>
              <img src={GreendashLogoImg} />
              <GreendashLogo />
            </div>
          </div>

          <div className='reset-password-header'>
            <h2>Reset Password</h2>
            <p>Your new password must be different from previously used passwords</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='reset-password-form'>
            <FormInput
              id='newPassword'
              type='password'
              label='New Password'
              register={register('newPassword')}
              placeholder='Enter your new password'
              error={errors.newPassword?.message}
            />

            <FormInput
              id='confirmNewPassword'
              type='password'
              label='Confirm New Password'
              register={register('confirmNewPassword')}
              placeholder='Confirm your new password'
              error={errors.confirmNewPassword?.message}
            />

            <Button className='reset-password-button' type='submit'>
              Set New Password
            </Button>
          </form>

          <a href='/login' className='reset-password-back-to-login-link'>
            <img src={backArrowIcon} alt='Back' />
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
