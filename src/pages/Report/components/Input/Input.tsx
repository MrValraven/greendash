import './Input.css';
import { FormInputProps } from './types';

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
  const getErrorMessage = () => {
    if (typeof error === 'string') {
      return error;
    }
    if (error && typeof error === 'object' && 'message' in error) {
      return error.message as string;
    }
    return '';
  };

  return (
    <div className='input-container-top'>
      <label htmlFor={id}>{label}</label>

      {type === 'select' && (
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
      )}

      {type === 'textarea' && (
        <textarea
          id={id}
          {...register}
          placeholder={placeholder}
          className={error ? 'error-input' : ''}
        />
      )}

      {type === 'file' && (
        <input
          id={id}
          type={type}
          {...register}
          placeholder={placeholder}
          accept={accept}
          className={error ? 'error-input' : ''}
        />
      )}

      {(type === 'text' || type === 'number') && (
        <input
          id={id}
          type={type}
          {...register}
          placeholder={placeholder}
          className={`${error ? 'error-input' : ''} custom-input`}
        />
      )}

      {children}

      {error && <span className='error'>{getErrorMessage()}</span>}
    </div>
  );
};

export default FormInput;
