import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema, type ResetPasswordFormSchema } from './schema';
import Button from '@components/Button/Button';
import './ResetPassword.css';

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
    <div className='reset-password-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='reset-password-form'>
        <h2>Reset Password</h2>

        <div className='reset-password-form-group'>
          <label htmlFor='password'>New Password</label>
          <input
            id='password'
            type='password'
            {...register('password')}
            placeholder='Enter your new password'
          />
          {errors.password && <span className='error'>{errors.password.message}</span>}
        </div>

        <div className='reset-password-form-group'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            id='confirmPassword'
            type='password'
            {...register('confirmPassword')}
            placeholder='Confirm your new password'
          />
          {errors.confirmPassword && (
            <span className='reset-password-error'>{errors.confirmPassword.message}</span>
          )}
        </div>

        <Button type='submit' disabled={isSubmitting} className='reset-password-button'>
          {isSubmitting ? 'Resetting...' : 'Reset Password'}
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
