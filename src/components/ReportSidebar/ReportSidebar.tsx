import { useState } from 'react';
import GreendashLogo from '@components/GreendashLogo/GreendashLogo';
import greendashLogoImg from '../../../public/greendashLogo.png';

import './ReportSidebar.css';

import reportHUBIcon from './icons/sidebar-report-hub-icon.svg';
import filesIcon from './icons/sidebar-folders-icon.svg';
import certificateIcon from './icons/sidebar-file-certificate-icon.svg';
import usersIcon from './icons/sidebar-users-icon.svg';
import tasksIcon from './icons/sidebar-checkup-list-icon.svg';
import supportIcon from './icons/sidebar-help-icon.svg';
import carbonAccIcon from './icons/sidebar-chart-donut-icon.svg';
import doubleMatIcon from './icons/sidebar-materiality-icon.svg';
import esgPolicyIcon from './icons/sidebar-esg-icon.svg';
import collapseIcon from './icons/collapse-icon.svg';

const sidebarItems = [
  {
    section: 'REPORT',
    items: [
      { icon: reportHUBIcon, label: 'Report Hub' },
      { icon: filesIcon, label: 'Files' },
      { icon: certificateIcon, label: 'Certification' },
      { icon: usersIcon, label: 'Users' },
    ],
  },
  {
    section: 'PERSONAL',
    items: [
      { icon: tasksIcon, label: 'Tasks' },
      { icon: supportIcon, label: 'Support' },
    ],
  },
  {
    section: 'MODULES',
    items: [
      { icon: carbonAccIcon, label: 'Carbon Accounting' },
      { icon: doubleMatIcon, label: 'Double Materiality' },
      { icon: esgPolicyIcon, label: 'ESG Policy' },
    ],
  },
];

const ReportSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`report-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className={`sidebar-header ${collapsed ? 'collapsed' : 'expanded'}`}>
        <div className='sidebar-greendash-logo-container'>
          <div className='sidebar-greendash-logo'>
            <img src={greendashLogoImg} alt='GreenDash Logo' />
            {!collapsed && <GreendashLogo />}
          </div>
        </div>
        {!collapsed && (
          <div
            className='sidebar-toggle'
            onClick={() => setCollapsed((prev) => !prev)}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <img src={collapseIcon} alt='toggle' />
          </div>
        )}
      </div>
      <nav className='sidebar-nav'>
        {sidebarItems.map((section) => (
          <div key={section.section} className='sidebar-section'>
            {!collapsed && <div className='sidebar-section-title'>{section.section}</div>}
            {section.items.map((item) => (
              <div key={item.label} className='sidebar-item' onClick={() => setCollapsed(false)}>
                <img src={item.icon} alt={item.label} className='sidebar-icon' />
                {!collapsed && <div className='sidebar-label'>{item.label}</div>}
              </div>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default ReportSidebar;
