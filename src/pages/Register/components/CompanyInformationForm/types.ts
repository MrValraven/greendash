import { SubmitHandler } from 'react-hook-form';

export interface CompanyInformationFormProps {
  onSubmit: SubmitHandler<any>;
  onPrevious: () => void;
  activeStep: number;
  isReviewMode: boolean;
  defaultValues?: any;
}
