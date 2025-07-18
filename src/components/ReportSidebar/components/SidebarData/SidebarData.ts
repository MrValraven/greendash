import homeIcon from './icons/sidebar-report-hub-icon.svg';
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
import generalIcon from './icons/sidebar-general-icon.svg';
import environmentIcon from './icons/sidebar-environment-icon.svg';
import socialIcon from './icons/sidebar-social-icon.svg';
import governanceIcon from './icons/sidebar-governance-icon.svg';

import { SidebarSection } from '../../types.ts';

const sidebarItems: SidebarSection[] = [
  {
    section: '',
    items: [
      { icon: homeIcon, label: 'Home', path: '/home/' },
      { icon: tasksIcon, label: 'Tasks', path: '/tasks/' },
    ],
  },
  {
    section: 'REPORT HUB',
    items: [
      {
        icon: databaseIcon,
        label: 'Data Collection',
        path: '/report-hub/database/',
        items: [
          { icon: generalIcon, label: 'General', path: '/report-hub/database/general/' },
          {
            icon: environmentIcon,
            label: 'Environment',
            path: '/report-hub/database/environment/',
          },
          { icon: socialIcon, label: 'Social', path: '/report-hub/database/social/' },
          { icon: governanceIcon, label: 'Governance', path: '/report-hub/database/governance/' },
        ],
      },
      { icon: analyticsIcon, label: 'Analytics', path: '/report/report-hub/analytics/' },
      { icon: requestIcon, label: 'Requests', path: '/report/report-hub/requests/' },
      { icon: exportFilesIcon, label: 'Export', path: '/report/report-hub/export/' },
      {
        icon: genReportIcon,
        label: 'Generate Report',
        path: '/report/report-hub/generate-report/',
      },
    ],
  },
  {
    section: 'TRANSVERSAL',
    items: [
      { icon: usersIcon, label: 'Users', path: '/report/users/' },
      { icon: certificateIcon, label: 'Certification', path: '/report/certification/' },
      { icon: filesIcon, label: 'Files', path: '/report/files/' },
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
