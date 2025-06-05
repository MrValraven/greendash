import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormSchema } from '../../schema';
import { AccountInformationFormProps } from './types';
import Button from '@components/Button/Button';
import arrowLeftIcon from '../../icons/arrow-left-icon.svg';
import arrowRightIcon from '../../icons/arrow-right-icon.svg';

const AccountInformationForm = ({ onSubmit, onPrevious }: AccountInformationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerSchema),
  });

  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onPrevious) onPrevious();
  };

  return (
    <div className='register-container'>
      <div className='register-title-container'>
        <h2>Account Information</h2>
        <p>Enter your account details</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='register-form'>
        <div className='username-email-input-container'>
          <div className='register-form-group'>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' placeholder='Enter your username' />
          </div>

          <div className='register-form-group'>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' {...register('email')} placeholder='Enter your email' />
            {errors.email && <span className='error'>{errors.email.message}</span>}
          </div>
        </div>

        <div className='password-inputs-container'>
          <div className='register-form-group'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              {...register('password')}
              placeholder='Enter your password'
            />
            {errors.password && <span className='error'>{errors.password.message}</span>}
          </div>

          <div className='register-form-group'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input id='confirmPassword' type='password' placeholder='Confirm your password' />
          </div>
        </div>

        <div className='register-buttons-container'>
          <Button
            variant='ghost'
            className='register-previous-button'
            hasGlowyShadow={false}
            onClick={handlePrevious}
            type='button'
          >
            <img src={arrowLeftIcon} alt='Previous' />
            Previous
          </Button>

          <Button
            variant='primary'
            className='register-next-button'
            hasGlowyShadow={false}
            type='submit'
            disabled={isSubmitting}
          >
            Next
            <img src={arrowRightIcon} alt='Next' />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AccountInformationForm;
