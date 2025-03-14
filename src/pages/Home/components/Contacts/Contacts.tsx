import WaitingList from './WaitingList/WaitingList';
import ContactForm from './ContactForm/ContactForm';

import './contacts.css';

const Contacts = () => {
  return (
    <section className='contacts'>
      <div className='contacts-container'>
        <WaitingList />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contacts;
