import { useState } from 'react';

type Option = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  id: string;
  register: any;
  placeholder?: string;
  options?: Option[];
  error?: any;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectField = ({ id, register, placeholder, options, error }: SelectFieldProps) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <select
      id={id}
      {...register}
      value={selectedValue}
      onChange={handleChange}
      className={`${error ? 'error-input' : ''} ${
        selectedValue === '' ? 'placeholder-selected' : ''
      }`}
    >
      <option value='' hidden disabled>
        {placeholder}
      </option>
      {options?.map((option) => (
        <option key={option.value} value={option.label}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
