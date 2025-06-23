import { SubmitHandler } from 'react-hook-form';
import { AccountFormData } from '../../../Register/schema.ts';

export interface AccountInformationFormProps {
  onSubmit: SubmitHandler<AccountFormData>;
  onPrevious?: () => void;
}
