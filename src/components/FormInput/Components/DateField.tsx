import React from 'react';

type DateFieldProps = {
  id: string;
  register?: any;
  defaultValue?: string;
  error?: any;
};

const DateField: React.FC<DateFieldProps> = ({ id, register, defaultValue, error }) => {
  return (
    <input
      id={id}
      type='date'
      {...register}
      defaultValue={defaultValue}
      className={`date-input ${error ? 'error-input' : ''}`}
      required
    />
  );
};

export default DateField;
