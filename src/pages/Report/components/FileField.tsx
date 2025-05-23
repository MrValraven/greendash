type FileFieldProps = {
  id: string;
  register: any;
  placeholder?: string;
  accept?: string;
  error?: any;
};

const FileField = ({ id, register, placeholder, accept, error }: FileFieldProps) => (
  <input
    id={id}
    type='file'
    {...register}
    placeholder={placeholder}
    accept={accept}
    className={error ? 'error-input' : ''}
  />
);

export default FileField;