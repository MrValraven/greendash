import React from 'react';
import { Component } from './components/NotFoundPage/NotFound';

type Props = {};

const NotFoundErrorPage = (props: Props) => {
  return (
    <div>
      <Component />
    </div>
  );
};

export default NotFoundErrorPage;

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Home, HelpCircle } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
      <ErrorIcon />
      <ErrorMessage />
      <ErrorActions />
      <FeatureSection />
      <TipsCarousel />
    </div>
  );
};

const ErrorIcon = () => (
  <motion.div animate={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
    <Lightbulb size={60} className='text-green-600' />
  </motion.div>
);

export default ErrorPage;
