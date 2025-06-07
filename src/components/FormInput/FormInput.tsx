import Label from './Components/Label';
import SelectField from './Components/SelectField';
import TextAreaField from './Components/TextAreaField';
import FileField from './Components/FileField';
import DateField from './Components/DateField';
import InputField from './Components/InputField';
import ErrorMessage from './Components/ErrorMessage';

interface FormInputProps {
  id: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'textarea' | 'file' | 'date' | 'checkbox';
  register?: any;
  placeholder?: string;
  error?: string;
  options?: { value: string; label: string }[];
  accept?: string;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: any;
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
  defaultValue,
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
          defaultValue={defaultValue}
          error={error}
        />
      )}

      {type === 'textarea' && (
        <TextAreaField
          id={id}
          register={register}
          placeholder={placeholder}
          defaultValue={defaultValue}
          error={error}
        />
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

      {type === 'date' && (
        <DateField id={id} register={register} defaultValue={defaultValue} error={error} />
      )}

      {(type === 'text' || type === 'number') && (
        <InputField
          id={id}
          type={type}
          register={register}
          placeholder={placeholder}
          defaultValue={defaultValue}
          error={error}
        />
      )}

      {children}
      <ErrorMessage error={error} />
    </div>
  );
};

export default FormInput;
