import React from 'react';
/* import { Component } from './components/NotFoundPage/NotFound';

type Props = {};

const NotFoundErrorPage = (props: Props) => {
  return (
    <div>
      <Component />
    </div>
  );
};

export default NotFoundErrorPage; */

import { motion } from 'framer-motion';
import { Lightbulb, Home, HelpCircle } from 'lucide-react';
import NotFoundErrorMessage from './components/NotFoundErrorMessage/NotFoundErrorMessage';
import NotFoundErrorActions from './components/NotFoundErrorActions/NotFoundErrorActions';
import NotFoundFeatureSection from './components/NotFoundFeatureSection/NotFoundFeatureSection';
import NotFoundTipsCarousel from './components/NotFoundTipsCarousel/NotFoundTipsCarousel';

const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
      <ErrorIcon />
      <NotFoundErrorMessage />
      <NotFoundErrorActions />
      <NotFoundFeatureSection />
      <NotFoundTipsCarousel />
    </div>
  );
};

const ErrorIcon = () => (
  <motion.div animate={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
    <Lightbulb size={60} className='text-green-600' />
  </motion.div>
);

export default ErrorPage;
