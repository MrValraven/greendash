import { useState } from 'react';
import { Link } from 'react-router-dom';
import GreendashLogo from '@components/GreendashLogo/GreendashLogo';
import Button from '@components/Button/Button';
import NotificationIcon from './icons/NotificationButton.svg';
import AvatarIcon from './icons/Avatar.svg';
import ProfileIcon from './icons/ProfileIcon.svg';
import SettingsIcon from './icons/SettingsIcon.svg';
import LogoutIcon from './icons/LogoutIcon.svg';
import './ReportHeader.css';

const ReportHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className='report-header'>
      <div className='report-header-container'>
        <Link to='/'>
          <GreendashLogo />
        </Link>

        <div className='report-header-actions'>
          <button className='notification-button'>
            <img src={NotificationIcon} />
          </button>

          <div className='profile-dropdown'>
            <button className='profile-button' onClick={toggleDropdown}>
              <img src={AvatarIcon} alt='Profile' />
            </button>

            {isDropdownOpen && (
              <div className='dropdown-menu'>
                <div className='dropdown-header'>
                  <img src={AvatarIcon} alt='Profile' />

                  <div className='dropdown-user-info'>
                    <span className='dropdown-username'>John Doe</span>
                    <span className='dropdown-user-role'>Admin</span>
                  </div>
                </div>
                <div className='dropdown-items'>
                  <Link to='/profile' className='dropdown-item'>
                    <img src={ProfileIcon} />
                    <div>My Profile</div>
                  </Link>
                  <Link to='/settings' className='dropdown-item'>
                    <img src={SettingsIcon} />
                    <div>Settings</div>
                  </Link>
                </div>
                <div className='dropdown-footer'>
                  <Button className='logout-button'>
                    <div>Logout</div>
                    <img src={LogoutIcon} />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default ReportHeader;
