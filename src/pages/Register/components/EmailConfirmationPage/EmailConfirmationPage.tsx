import Button from '@components/Button/Button';
import { EmailConfirmationPageProps } from './types';
import emailConfirmationImage from '@assets/email-conf-Illustration.svg';

import './EmailConfirmationPage.css';

const EmailConfirmationPage = ({ userEmail }: EmailConfirmationPageProps) => {
  return (
    <div className='email-conf-step-container'>
      <div className='email-conf-img-container'>
        <img src={emailConfirmationImage} />
      </div>
      <div className='email-conf-content-container'>
        <Button className='email-conf-button'>Information Confirmed!</Button>
        <div className='email-conf-text-container'>
          <h2>Verify your email</h2>
          <p>Account activation link sent to your email address:</p>
          <p className='email-conf-user-email'>{userEmail}</p>
          <p>Please follow the link in the email to continue.</p>
        </div>
        <div className='email-conf-footer'>
          <p>
            Did not receive the email? <a href=''>Resend</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmationPage;
