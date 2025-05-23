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
};

const SelectField = ({ id, register, placeholder, options, error }: SelectFieldProps) => (
  <select
    id={id}
    {...register}
    placeholder={placeholder}
    className={error ? 'error-input' : ''}
  >
    <option value=''>Select an Option</option>
    {options?.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default SelectField;