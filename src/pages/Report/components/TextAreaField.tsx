type TextAreaFieldProps = {
  id: string;
  register: any;
  placeholder?: string;
  error?: any;
};

const TextAreaField = ({ id, register, placeholder, error }: TextAreaFieldProps) => (
  <textarea
    id={id}
    {...register}
    placeholder={placeholder}
    className={error ? 'error-input' : ''}
  />
);

export default TextAreaField;