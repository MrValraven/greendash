import { useState } from 'react';

import ProfileDropdown from './components/ProfileDropdown/ProfileDropdown';
import NotificationDropdown from './components/NotificationDropdown/NotificationDropdown.tsx';
import LanguageDropdown from './components/LanguageDropdown/LanguageDropdown.tsx';

import actionIcon from './icons/ActionIcon.svg';

import axios from 'axios';
import baseURL from '../../api/api.ts';

import './ReportHeader.css';

type DropdownType = 'notification' | 'profile' | 'language' | null;

const ReportHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);

  const handleLogout = async () => {
    await axios.get(`${baseURL}/auth/users/logout`);
    console.log('User logged out');
    // Redirect to login page or home page
    window.location.href = '/login';
  };

  return (
    <header className='report-header'>
      <div className='report-header-container'>
        <div className='report-header-actions'>
          <img src={actionIcon} alt='action' />
          <NotificationDropdown
            isOpen={activeDropdown === 'notification'}
            onOpen={() => setActiveDropdown('notification')}
            onClose={() => setActiveDropdown(null)}
          />
          <ProfileDropdown
            isOpen={activeDropdown === 'profile'}
            onOpen={() => setActiveDropdown('profile')}
            onClose={() => setActiveDropdown(null)}
            onLogout={handleLogout}
          />
          <LanguageDropdown
            isOpen={activeDropdown === 'language'}
            onOpen={() => setActiveDropdown('language')}
            onClose={() => setActiveDropdown(null)}
          />
        </div>
      </div>
    </header>
  );
};

export default ReportHeader;
