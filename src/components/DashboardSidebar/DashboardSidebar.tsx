import React from 'react';
import navLinks from './navLinks.json';

const SidebarNav: React.FC = () => {
  return (
    <nav>
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          label={link.label}
          icon={link.icon}
          href={link.href}
          isActive={link.isActive}
        />
      ))}
    </nav>
  );
};

type Props = {};

const DashboardSidebar = (props: Props) => {
  return (
    <div className='col-span-1'>
      <SidebarNav />
      <SustainabilityTip
        message='Reducing your carbon footprint by 20% this quarter could qualify your organization for green certification!'
        onCtaClick={() => alert('Redirecting to green certification info...')}
      />
    </div>
  );
};

export default DashboardSidebar;

type NavLinkProps = {
  label: string;
  icon: string;
  href: string;
  isActive?: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ label, icon, href, isActive }) => {
  const baseClasses = 'flex items-center space-x-3 p-3 rounded-lg transition-all duration-200';
  const activeClasses =
    'bg-primary-50 text-primary-700 border-l-4 border-primary-600 font-medium hover:bg-primary-100';
  const inactiveClasses = 'hover:bg-gray-50';

  return (
    <a href={href} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
      <span className='material-symbols-outlined'>{icon}</span>
      <span>{label}</span>
    </a>
  );
};

type SustainabilityTipProps = {
  title?: string;
  icon?: string;
  message: string;
  ctaText?: string;
  onCtaClick?: () => void;
};

const SustainabilityTip: React.FC<SustainabilityTipProps> = ({
  title = 'Sustainability Tip',
  icon = 'tips_and_updates',
  message,
  ctaText = 'Learn more →',
  onCtaClick,
}) => {
  return (
    <div className='mt-8 p-4 bg-green-50 rounded-lg border border-green-100'>
      <div className='flex items-center space-x-2 mb-2'>
        <span className='material-symbols-outlined text-green-600'>{icon}</span>
        <h3 className='font-medium text-green-800'>{title}</h3>
      </div>
      <p className='text-sm text-green-700'>{message}</p>
      {onCtaClick && (
        <button
          onClick={onCtaClick}
          className='mt-3 text-sm text-green-600 font-medium hover:text-green-700 transition-colors'
        >
          {ctaText}
        </button>
      )}
    </div>
  );
};
