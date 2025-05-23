import './Input.css';
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
  register: any; // Adjust the type according to your form library
  placeholder?: string;
  error?: string;
  options?: { value: string; label: string }[]; // For select type
  accept?: string; // For file type
  children?: React.ReactNode; // For additional content
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
}: FormInputProps) => {
  return (
    <div>
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
