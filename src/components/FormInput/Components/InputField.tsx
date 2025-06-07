type InputFieldProps = {
  id: string;
  type: 'text' | 'number';
  register?: any;
  placeholder?: string;
  defaultValue?: any;
  error?: any;
};

const InputField = ({ id, type, register, placeholder, error }: InputFieldProps) => (
  <input
    id={id}
    type={type}
    {...register}
    placeholder={placeholder}
    className={`${error ? 'error-input' : ''} custom-input`}
  />
);

export default InputField;
