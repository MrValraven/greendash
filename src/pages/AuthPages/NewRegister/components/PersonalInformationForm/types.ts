import { SubmitHandler } from 'react-hook-form';
import { PersonalFormData } from '../../schema.ts';

export interface PersonalInformationFormProps {
  onSubmit: SubmitHandler<PersonalFormData>;
  onPrevious?: () => void;
  activeStep: number;
}
