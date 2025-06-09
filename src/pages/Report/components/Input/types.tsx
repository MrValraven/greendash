import { ReactNode } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export type InputType = 'text' | 'number' | 'file' | 'select' | 'textarea';

export interface FormInputProps {
  id: string;
  label: string;
  type: InputType;
  register: any;
  placeholder?: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  options?: { value: string; label: string }[];
  accept?: string;
  children?: ReactNode;
}
