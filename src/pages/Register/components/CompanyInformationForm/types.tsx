import { SubmitHandler } from 'react-hook-form';
import { RegisterFormSchema } from '../../schema';

export interface CompanyInformationFormProps {
  onSubmit: SubmitHandler<RegisterFormSchema>;
  onPrevious: () => void;
  activeStep: number;
  isReviewMode: boolean;
  defaultValues?: any;
}
