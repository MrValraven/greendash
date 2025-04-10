import React from 'react';

type Props = {};

const NotFoundErrorMessage = (props: Props) => {
  return (
    <div className='text-center mt-4'>
      <h1 className='text-4xl font-bold text-gray-800'>Oops! We can't find that page</h1>
      <p className='text-gray-600 mt-2'>
        Just like sustainable practices, good navigation is essential. The page you're looking for
        might have been moved, deleted, or is temporarily unavailable.
      </p>
    </div>
  );
};

export default NotFoundErrorMessage;
