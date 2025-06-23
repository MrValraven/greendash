import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { companySchema, type CompanyFormData } from '../../schema.ts';
import RegistrationSteps from '../RegistrationSteps/RegistrationSteps.tsx';
import StepButtons from '../StepButtons/StepButtons.tsx';
import { CompanyInformationFormProps } from './types.ts';

import InputField from '@components/FieldComponents/InputField/InputField.tsx';
import SelectField from '@components/FieldComponents/SelectField/SelectField.tsx';
import Label from '@components/FieldComponents/Label/Label.tsx';
import ErrorMessage from '@components/FieldComponents/ErrorMessage/ErrorMessage.tsx';

import './CompanyInformationFrom.css';

const CompanyInformationForm = ({
  onSubmit,
  onPrevious,
  activeStep,
  defaultValues = {},
}: CompanyInformationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyFormData>({
    resolver: zodResolver(companySchema),
    defaultValues,
  });

  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onPrevious) onPrevious();
  };

  const businessSectorOptions = [
    { value: 'technology', label: 'Technology' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance' },
    { value: 'education', label: 'Education' },
    { value: 'retail', label: 'Retail' },
    { value: 'manufacturing', label: 'Manufacturing' },
  ];

  const countryOptions = [
    { value: 'portugal', label: 'Portugal' },
    { value: 'spain', label: 'Spain' },
    { value: 'france', label: 'France' },
    { value: 'germany', label: 'Germany' },
    { value: 'italy', label: 'Italy' },
  ];

  return (
    <div className='company-info-step-container'>
      <div className='company-info-steps-container'>
        <RegistrationSteps activeStep={activeStep} />
      </div>

      <div className='company-info-form-container'>
        <div className='company-info-title-container'>
          <h2>Company Information</h2>
          <p>Enter Your Company Details</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='company-info-form'>
          <div className='form-input-container'>
            <Label htmlFor='companyName' label='Company Name' />
            <InputField
              id='companyName'
              type='text'
              register={register('companyName')}
              error={errors.companyName?.message}
            />
            <ErrorMessage error={errors.companyName?.message} />
          </div>

          <div className='form-input-container'>
            <Label htmlFor='businessSector' label='Business Sector' />
            <SelectField
              id='businessSector'
              options={businessSectorOptions}
              placeholder='Select a Business Sector'
              register={register('businessSector')}
              error={errors.businessSector?.message}
            />
            <ErrorMessage error={errors.businessSector?.message} />
          </div>

          <div className='company-input-group'>
            <div className='form-input-container'>
              <Label htmlFor='taxId' label='Tax ID' />
              <InputField
                id='taxId'
                type='number'
                register={register('taxId')}
                placeholder='xxxxxx'
                error={errors.taxId?.message}
              />
              <ErrorMessage error={errors.taxId?.message} />
            </div>

            <div className='form-input-container'>
              <Label htmlFor='companySize' label='Company size (nr of employees)' />
              <InputField
                id='companySize'
                type='number'
                register={register('companySize')}
                placeholder='xxxxxx'
                error={errors.companySize?.message}
              />
              <ErrorMessage error={errors.companySize?.message} />
            </div>
          </div>

          <div className='company-input-group'>
            <div className='form-input-container'>
              <Label htmlFor='contactNumber' label='Contact Number' />
              <InputField
                id='contactNumber'
                type='text'
                register={register('contactNumber')}
                placeholder='202 555 0111'
                error={errors.contactNumber?.message}
              />
              <ErrorMessage error={errors.contactNumber?.message} />
            </div>

            <div className='form-input-container'>
              <Label htmlFor='companyPincode' label='Pincode' />
              <InputField
                id='companyPincode'
                type='text'
                register={register('companyPincode')}
                placeholder='Postal Code'
                error={errors.companyPincode?.message}
              />
              <ErrorMessage error={errors.companyPincode?.message} />
            </div>
          </div>

          <div className='form-input-container'>
            <Label htmlFor='companyAddress' label='Address' />
            <InputField
              id='companyAddress'
              type='text'
              register={register('companyAddress')}
              placeholder='Address'
              error={errors.companyAddress?.message}
            />
            <ErrorMessage error={errors.companyAddress?.message} />
          </div>

          <div className='company-input-group'>
            <div className='form-input-container'>
              <Label htmlFor='city' label='City' />
              <InputField
                id='city'
                type='text'
                register={register('city')}
                placeholder='City'
                error={errors.city?.message}
              />
              <ErrorMessage error={errors.city?.message} />
            </div>

            <div className='form-input-container'>
              <Label htmlFor='country' label='Country' />
              <SelectField
                id='country'
                options={countryOptions}
                placeholder='Select a Country'
                register={register('country')}
                error={errors.country?.message}
              />
              <ErrorMessage error={errors.country?.message} />
            </div>
          </div>

          <div className='form-input-container'>
            <Label htmlFor='companyWebsite' label='Company Website' />
            <InputField
              id='companyWebsite'
              type='text'
              register={register('companyWebsite')}
              placeholder='www.mycompany.com'
              error={errors.companyWebsite?.message}
            />
            <ErrorMessage error={errors.companyWebsite?.message} />
          </div>

          <StepButtons onPrevious={handlePrevious} isFirstStep={false} />
        </form>
      </div>
    </div>
  );
};

export default CompanyInformationForm;
