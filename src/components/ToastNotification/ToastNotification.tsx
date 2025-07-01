import { useEffect } from 'react';
import './ToastNotification.css';

interface ToastNotificationProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  onClose: () => void;
  duration?: number;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  type,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`toast-notification ${type}`}>
      <div className='toast-content'>
        <span className={`toast-icon ${type}`}>
          {type === 'success' && '✓'}
          {type === 'error' && '✗'}
          {type === 'warning' && '⚠'}
          {type === 'info' && 'ℹ'}
        </span>
        <span className='toast-message'>{message}</span>
      </div>
      <button className='toast-close' onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default ToastNotification;
