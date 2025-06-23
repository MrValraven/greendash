import Button from '@components/Button/Button.tsx';

import notificationIcon from './icons/NotificationButton.svg';
import mailIcon from './icons/mailIcon.svg';
import dismissIcon from './icons/dismissIcon.svg';

import avatar1 from './icons/Avatar1.svg';
import avatar2 from './icons/Avatar2.svg';
import avatar3 from './icons/Avatar3.svg';
import avatar4 from './icons/Avatar4.svg';
import avatar5 from './icons/Avatar5.svg';

import './NotificationDropdown.css';

interface NotificationDropdownProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const mockNotifications = [
  {
    id: '1',
    avatar: avatar1,
    title: 'Congratulation Flora! 🎉',
    description: 'Won the monthly best seller gold badge',
    date: 'Today',
    read: false,
  },
  {
    id: '2',
    avatar: avatar2,
    title: 'New user registered.',
    description: 'Accepted your connection',
    date: 'Yesterday',
    read: false,
  },
  {
    id: '3',
    avatar: avatar3,
    title: 'New message received 👋🏻',
    description: 'You have new message from Natalie',
    date: '11 Aug',
    read: true,
  },
  {
    id: '4',
    avatar: avatar4,
    title: 'Paypal',
    description: 'ACME Inc. made new order $1,154',
    date: '25 May',
    read: false,
  },
  {
    id: '5',
    avatar: avatar5,
    title: 'Data received',
    description: 'Maria Santos has sent you data regarding your request',
    date: '19 Mar',
    read: false,
  },
];
const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ isOpen, onOpen, onClose }) => {
  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  return (
    <div className='notification-dropdown'>
      <div className='notification-button' onClick={isOpen ? onClose : onOpen}>
        <img src={notificationIcon} alt='Notifications' />
        {unreadCount > 0 && <span className='notification-badge'></span>}
      </div>
      {isOpen && (
        <div className='dropdown-notification-menu'>
          <div className='dropdown-notification-header'>
            <div className='notification-header-title'>Notifications</div>
            <div className='notification-header-info'>
              <span className='notification-new-badge'>{unreadCount} New</span>
              <img className='notification-mail-icon' src={mailIcon} alt='Mail Icon' />
            </div>
          </div>
          <div className='dropdown-notification-list'>
            {mockNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`notification-item ${notification.read ? ' read' : ''}`}
              >
                <img className='notification-avatar' src={notification.avatar} alt='' />
                <div className='notification-content'>
                  <div className='notification-title'>{notification.title}</div>
                  <div className='notification-description'>{notification.description}</div>
                  <div className='notification-date'>{notification.date}</div>
                </div>
                <img className='notification-dismiss' src={dismissIcon} />
                {!notification.read && <span className='notification-dot' />}
              </div>
            ))}
          </div>
          <div className='dropdown-notification-footer'>
            <Button className='view-all-notifications-button'>View All Notifications</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
