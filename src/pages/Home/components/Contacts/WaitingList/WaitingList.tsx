import { motion } from 'motion/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@components/Button/Button';

import './waitingList.css';

const waitingListFormSchema = z.object({
  email: z.string().email(),
});

type WaitingListFormFields = z.infer<typeof waitingListFormSchema>;

const WaitingList = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<WaitingListFormFields>({
    resolver: zodResolver(waitingListFormSchema),
  });

  const onSubmit: SubmitHandler<WaitingListFormFields> = async (data) => {
    const url = 'https://hook.eu2.make.com/fx23d8cr6a5sc4nydsfvp6sqagvsl9b3';
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='waiting-list'>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', delay: 0.1 }}
        viewport={{ once: true }}
      >
        Join the waiting list
      </motion.h2>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', delay: 0.2 }}
        viewport={{ once: true }}
      >
        Be the first to have access to our groundbreaking sustainability report builder and be
        notified when we launch!
      </motion.p>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', delay: 0.3 }}
        viewport={{ once: true }}
        className='waiting-list-form'
      >
        <label htmlFor='email'>
          <input
            {...register('email')}
            id='waiting-list-input'
            required
            type='email'
            placeholder='Enter your email address'
          />
        </label>
        <Button size='medium'>{isSubmitting ? 'Submitting...' : 'Join the waiting list!'}</Button>
      </motion.form>
    </div>
  );
};

export default WaitingList;
