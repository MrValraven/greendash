import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormSchema } from './schema.tsx';
import Button from '@components/Button/Button.tsx';
import './Register.css';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormSchema> = async (data) => {
    try {
      console.log('Form data:', data);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className='register-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='register-form'>
        <h2>Create Account</h2>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' {...register('email')} placeholder='Enter your email' />
          {errors.email && <span className='error'>{errors.email.message}</span>}
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            {...register('password')}
            placeholder='Enter your password'
          />
          {errors.password && <span className='error'>{errors.password.message}</span>}
        </div>

        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Creating account...' : 'Create Account'}
        </Button>
      </form>
    </div>
  );
};

export default Register;
