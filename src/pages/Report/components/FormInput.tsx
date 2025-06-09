import './FormInput.css';
import Label from './Label';
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';
import FileField from './FileField';
import InputField from './InputField';
import ErrorMessage from './ErrorMessage';

interface FormInputProps {
  id: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'textarea' | 'file';
  register: any;
  placeholder?: string;
  error?: string;
  options?: { value: string; label: string }[];
  accept?: string;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  id,
  label,
  type,
  register,
  placeholder,
  error,
  options,
  accept,
  children,
  onChange,
}: FormInputProps) => {
  return (
    <div className='form-input-container'>
      <Label htmlFor={id} label={label} />

      {type === 'select' && (
        <SelectField
          id={id}
          register={register}
          placeholder={placeholder}
          options={options}
          error={error}
        />
      )}

      {type === 'textarea' && (
        <TextAreaField id={id} register={register} placeholder={placeholder} error={error} />
      )}

      {type === 'file' && (
        <FileField
          id={id}
          register={register}
          placeholder={placeholder}
          accept={accept}
          error={error}
          onChange={onChange}
        />
      )}

      {(type === 'text' || type === 'number') && (
        <InputField
          id={id}
          type={type}
          register={register}
          placeholder={placeholder}
          error={error}
        />
      )}

      {children}
      <ErrorMessage error={error} />
    </div>
  );
};

export default FormInput;
