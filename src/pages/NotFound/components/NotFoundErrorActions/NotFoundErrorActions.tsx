import React from 'react';
import Button from '@components/Button/Button';
import { Home, HelpCircle } from 'lucide-react';

type Props = {};

const NotFoundErrorActions = () => {
  return (
    <div className='flex gap-4 mt-6'>
      <Button variant='outline' className='flex items-center gap-2'>
        <Home size={16} /> Return Home
      </Button>
      <Button variant='default' className='flex items-center gap-2'>
        <HelpCircle size={16} /> Contact Support
      </Button>
    </div>
  );
};

export default NotFoundErrorActions;
