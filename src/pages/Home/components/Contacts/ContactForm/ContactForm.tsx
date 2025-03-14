import Button from '@components/Button/Button';

import './contactForm.css';

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <h2>Interested?</h2>
      <h3>Send us a message for more information</h3>
      <form>
        <div className='details'>
          <label htmlFor='name'>
            Name
            <input type='text' />
          </label>
          <label htmlFor='email'>
            Email
            <input type='email' />
          </label>
        </div>
        <label id='contact-form-message' htmlFor='message'>
          Message
          <textarea />
        </label>
        <Button size='medium'>Send message</Button>
      </form>
    </div>
  );
};

export default ContactForm;
