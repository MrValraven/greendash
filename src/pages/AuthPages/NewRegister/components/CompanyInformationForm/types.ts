import { CompanyFormData } from '../../schema';

export interface CompanyInformationFormProps {
  onSubmit: (data: CompanyFormData) => void;
  onPrevious: () => void;
  activeStep: number;
  defaultValues?: any;
}
