import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormSchema } from './schema.tsx';
import Button from '@components/Button/Button.tsx';
import './Login.css';

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
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
        <h2>Login</h2>

        <div className='login-form-group'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' {...register('email')} placeholder='Enter your email' />
          {errors.email && <span className='error'>{errors.email.message}</span>}
        </div>

        <div className='login-form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            {...register('password')}
            placeholder='Enter your password'
          />
          {errors.password && <span className='login-error'>{errors.password.message}</span>}
        </div>

        <Button type='submit' disabled={isSubmitting} className='login-button'>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </div>
  );
};

export default Login;
