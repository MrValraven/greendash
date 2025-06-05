import { SubmitHandler } from 'react-hook-form';
import { RegisterFormSchema } from '../../schema';

export interface AccountInformationFormProps {
  onSubmit: SubmitHandler<RegisterFormSchema>;
  onPrevious?: () => void;
}
