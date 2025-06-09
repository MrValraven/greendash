import { SubmitHandler } from 'react-hook-form';
import { AccountFormData } from '../../schema';

export interface AccountInformationFormProps {
  onSubmit: SubmitHandler<AccountFormData>;
  onPrevious?: () => void;
}
