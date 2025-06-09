type ErrorMessageProps = {
  error?: string | { message?: string };
};

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  if (!error) return null;

  const message =
    typeof error === 'string'
      ? error
      : error && typeof error === 'object' && 'message' in error
      ? error.message
      : '';

  return <span className='error'>{message}</span>;
};

export default ErrorMessage;