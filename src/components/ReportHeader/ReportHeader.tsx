import { useState } from 'react';

import YearDropdown from './components/YearDropdown/YearDropdown.tsx';
import ProfileDropdown from './components/ProfileDropdown/ProfileDropdown.tsx';
import NotificationDropdown from './components/NotificationDropdown/NotificationDropdown.tsx';
import LanguageDropdown from './components/LanguageDropdown/LanguageDropdown.tsx';

import actionIcon from './icons/ActionIcon.svg';

import axios from 'axios';
import baseURL from '../../api/api.ts';

import './ReportHeader.css';

type DropdownType = 'notification' | 'profile' | 'language' | 'year' | null;

const ReportHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [selectedYear, setSelectedYear] = useState<number>(2025);

  const handleLogout = async () => {
    await axios.get(`${baseURL}/auth/users/logout`);
    console.log('User logged out');

    window.location.href = '/login';
  };

  return (
    <header className='report-header'>
      <div className='report-header-container'>
        <div className='report-header-actions'>
          <YearDropdown
            isOpen={activeDropdown === 'year'}
            onOpen={() => setActiveDropdown('year')}
            onClose={() => setActiveDropdown(null)}
            years={[2022, 2023, 2024, 2025, 2026]}
            selectedYear={selectedYear}
            onYearChange={(year) => setSelectedYear(year)}
          />
          <img src={actionIcon} alt='action' />
          <NotificationDropdown
            isOpen={activeDropdown === 'notification'}
            onOpen={() => setActiveDropdown('notification')}
            onClose={() => setActiveDropdown(null)}
          />
          <LanguageDropdown
            isOpen={activeDropdown === 'language'}
            onOpen={() => setActiveDropdown('language')}
            onClose={() => setActiveDropdown(null)}
          />
          <ProfileDropdown
            isOpen={activeDropdown === 'profile'}
            onOpen={() => setActiveDropdown('profile')}
            onClose={() => setActiveDropdown(null)}
            onLogout={handleLogout}
          />

          <div className='report-header-company-name'>Noxel, Lda</div>
        </div>
      </div>
    </header>
  );
};

export default ReportHeader;
