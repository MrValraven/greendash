import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema, type ResetPasswordFormSchema } from './schema';
import Button from '@components/Button/Button';
import AuthLayout from '../components/AuthLayout/AuthLayout';

import InputField from '@components/FieldComponents/InputField/InputField';
import Label from '@components/FieldComponents/Label/Label';

import backArrowIcon from '@assets/chevron-left.svg';
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
    <AuthLayout
      title='Reset Password'
      description='Your new password must be different from previously used passwords'
    >
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

      <a href='/login' className='reset-password-back-to-login-link'>
        <img src={backArrowIcon} alt='Back' />
        Back to Login
      </a>
    </AuthLayout>
  );
};

export default ResetPassword;
