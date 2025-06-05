type FileFieldProps = {
  id: string;
  register: any;
  placeholder?: string;
  accept?: string;
  error?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileField = ({ id, register, placeholder, accept, error, onChange }: FileFieldProps) => (
  <input
    id={id}
    type='file'
    {...register}
    placeholder={placeholder}
    accept={accept}
    className={error ? 'error-input' : ''}
    onChange={onChange}
  />
);

export default FileField;
