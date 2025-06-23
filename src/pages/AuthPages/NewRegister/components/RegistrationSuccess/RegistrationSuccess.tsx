import AuthLayout from '@pages/AuthPages/components/AuthLayout/AuthLayout';
import Button from '@components/Button/Button';

import './RegistrationSuccess.css';

const RegistrationSuccess = () => {
  return (
    <AuthLayout title='Congrats!'>
      <div className='registration-success-container'>
        <div className='registration-success-message'>
          <p>You have now successfully created an account for you and your company!</p>
          <p>You will now receive an email to set up your password</p>
        </div>
        <Button
          className='registration-success-button'
          onClick={() => (window.location.href = '/login')}
          hasGlowyShadow={false}
        >
          Get Started
        </Button>
      </div>
    </AuthLayout>
  );
};

export default RegistrationSuccess;
