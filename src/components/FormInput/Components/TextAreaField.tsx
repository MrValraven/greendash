type TextAreaFieldProps = {
  id: string;
  register?: any;
  placeholder?: string;
  defaultValue?: string;
  error?: any;
};

const TextAreaField = ({ id, register, placeholder, defaultValue, error }: TextAreaFieldProps) => (
  <textarea
    id={id}
    {...register}
    placeholder={placeholder}
    defaultValue={defaultValue}
    className={error ? 'error-input' : ''}
  />
);

export default TextAreaField;
