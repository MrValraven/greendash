import React from 'react';
import './NotFoundErrorMessage.css';

type Props = {};

const NotFoundErrorMessage = (props: Props) => {
  return (
    <div className='not-found-error-message'>
      <h1 className='not-found-error-message__title'>Oops! We can't find that page</h1>
      <p className='not-found-error-message__description'>
        Just like sustainable practices, good navigation is essential. The page you're looking for
        might have been moved, deleted, or is temporarily unavailable.
      </p>
    </div>
  );
};

export default NotFoundErrorMessage;
