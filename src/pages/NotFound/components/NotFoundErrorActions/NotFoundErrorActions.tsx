import React from 'react';
import Button from '@components/Button/Button';
import { Home, HelpCircle } from 'lucide-react';
import './NotFoundErrorActions.css';

type Props = {};

const NotFoundErrorActions = () => {
  return (
    <div className='not-found-error-actions'>
      <Button variant='outline' className='not-found-error-actions__button'>
        <Home size={16} /> Return Home
      </Button>
      <Button variant='default' className='not-found-error-actions__button'>
        <HelpCircle size={16} /> Contact Support
      </Button>
    </div>
  );
};

export default NotFoundErrorActions;
