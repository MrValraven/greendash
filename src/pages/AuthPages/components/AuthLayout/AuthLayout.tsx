import GreendashLogo from '@components/GreendashLogo/GreendashLogo.tsx';
import greendashLogoImg from '../../../../../public/greendashLogo.png';
import './AuthLayout.css';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const AuthLayout = ({ children, title, description }: AuthLayoutProps) => {
  return (
    <div className='auth-page'>
      <div className='auth-container-wrapper'>
        <div className='auth-bg-container-top'></div>
        <div className='auth-bg-container-bottom'></div>

        <div className='auth-container'>
          <div className='auth-greendash-logo-container'>
            <div className='auth-greendash-logo'>
              <img src={greendashLogoImg} alt='GreenDash Logo' />
              <GreendashLogo />
            </div>
          </div>

          <div className='auth-header'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
