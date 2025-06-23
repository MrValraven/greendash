import { Link } from 'react-router-dom';
import Button from '@components/Button/Button.tsx';

import avatarIcon from './icons/Avatar.svg';
import profileIcon from './icons/ProfileIcon.svg';
import settingsIcon from './icons/SettingsIcon.svg';
import questionIcon from './icons/question-mark-icon.svg';
import logoutIcon from './icons/LogoutIcon.svg';

import './ProfileDropdown.css';

interface ProfileDropdownProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onLogout: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ isOpen, onOpen, onClose, onLogout }) => {
  return (
    <div className='profile-dropdown'>
      <button className='profile-button' onClick={isOpen ? onClose : onOpen}>
        <img src={avatarIcon} alt='Profile' />
      </button>
      {isOpen && (
        <div className='dropdown-user-menu'>
          <div className='dropdown-user-header'>
            <img src={avatarIcon} alt='Profile' />
            <div className='dropdown-user-info'>
              <span className='dropdown-username'>John Doe</span>
              <span className='dropdown-user-role'>Admin</span>
            </div>
          </div>
          <div className='dropdown-user-items'>
            <Link to='/profile' className='dropdown-user-item'>
              <img src={profileIcon} />
              <div>My Profile</div>
            </Link>
            <Link to='/settings' className='dropdown-user-item'>
              <img src={settingsIcon} />
              <div>Settings</div>
            </Link>
          </div>
          <div className='dropdown-user-footer'>
            <Link to='' className='dropdown-user-item'>
              <img src={questionIcon} />
              <div>FAQ</div>
            </Link>
            <div className='logout-button-container'>
              <Button onClick={onLogout} className='logout-button'>
                <div>Logout</div>
                <img src={logoutIcon} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
