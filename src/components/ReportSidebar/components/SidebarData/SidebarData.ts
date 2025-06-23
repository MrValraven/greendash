import reportHUBIcon from './icons/sidebar-report-hub-icon.svg';
import filesIcon from './icons/sidebar-folders-icon.svg';
import certificateIcon from './icons/sidebar-file-certificate-icon.svg';
import usersIcon from './icons/sidebar-users-icon.svg';
import tasksIcon from './icons/sidebar-checkup-list-icon.svg';
import supportIcon from './icons/sidebar-help-icon.svg';
import carbonAccIcon from './icons/sidebar-chart-donut-icon.svg';
import doubleMatIcon from './icons/sidebar-materiality-icon.svg';
import esgPolicyIcon from './icons/sidebar-esg-icon.svg';

import databaseIcon from './icons/sidebar-database-icon.svg';
import analyticsIcon from './icons/sidebar-analytics-icon.svg';
import genReportIcon from './icons/sidebar-gen-report-icon.svg';
import exportFilesIcon from './icons/sidebar-export-icon.svg';
import requestIcon from './icons/sidebar-requests-icon.svg';

import { SidebarSection } from '../../types.ts';

const sidebarItems: SidebarSection[] = [
  {
    section: 'REPORT',
    items: [
      {
        icon: reportHUBIcon,
        label: 'Report Hub',
        path: '/report/report-hub/',
        items: [
          { icon: databaseIcon, label: 'Database', path: '/report/report-hub/database/' },
          { icon: analyticsIcon, label: 'Analytics', path: '/report/report-hub/analytics/' },
          {
            icon: genReportIcon,
            label: 'Generate Report',
            path: '/report/report-hub/generate-report/',
          },
          { icon: exportFilesIcon, label: 'Export', path: '/report/report-hub/export/' },
          { icon: requestIcon, label: 'Requests', path: '/report/report-hub/requests/' },
        ],
      },
      { icon: filesIcon, label: 'Files', path: '/report/files/' },
      { icon: certificateIcon, label: 'Certification', path: '/report/certification/' },
      { icon: usersIcon, label: 'Users', path: '/report/users/' },
    ],
  },
  {
    section: 'PERSONAL',
    items: [
      { icon: tasksIcon, label: 'Tasks', path: '/personal/tasks/' },
      { icon: supportIcon, label: 'Support', path: '/personal/support/' },
    ],
  },
  {
    section: 'MODULES',
    items: [
      { icon: carbonAccIcon, label: 'Carbon Accounting', path: '/modules/carbon-accounting/' },
      { icon: doubleMatIcon, label: 'Double Materiality', path: '/modules/double-materiality/' },
      { icon: esgPolicyIcon, label: 'ESG Policy', path: '/modules/esg-policy/' },
    ],
  },
];

export default sidebarItems;
