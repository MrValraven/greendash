import { useEffect, useState } from 'react';

type Option = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  id: string;
  register?: any;
  placeholder?: string;
  options?: Option[];
  defaultValue?: string;
  error?: any;
};

const SelectField = ({
  id,
  register,
  placeholder,
  options,
  defaultValue,
  error,
}: SelectFieldProps) => {
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    if (defaultValue) setSelectedValue(defaultValue);
  }, [defaultValue]);

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
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
