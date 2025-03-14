import Button from '@components/Button/Button';

import './waitingList.css';

const WaitingList = () => {
  return (
    <div className='waiting-list'>
      <h2>Join the waiting list</h2>
      <p>
        Be the first have access to our groundbreaking sustainability report builder and be notified
        when we launch!
      </p>
      <form className='waiting-list-form'>
        <input id='waiting-list-input' type='email' placeholder='Enter your email address' />
        <Button size='medium'>Join the waiting list!</Button>
      </form>
    </div>
  );
};

export default WaitingList;
