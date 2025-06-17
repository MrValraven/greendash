import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { companySchema, type CompanyFormData } from '../../../Register/schema.ts';
import RegistrationSteps from '../RegistrationSteps/RegistrationSteps.tsx';
import StepButtons from '../StepButtons/StepButtons.tsx';
import { CompanyInformationFormProps } from './types.ts';

import InputField from '@components/FieldComponents/InputField/InputField.tsx';
import SelectField from '@components/FieldComponents/SelectField/SelectField.tsx';
import DateField from '@components/FieldComponents/DateField/DateField.tsx';
import Label from '@components/FieldComponents/Label/Label.tsx';

import registrationImage from '@assets/register-illustration.svg';

import './CompanyInformationFrom.css';

const CompanyInformationForm = ({
  onSubmit,
  onPrevious,
  activeStep,
  isReviewMode,
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
      <div className='company-info-image-container'>
        <div className='company-info-box-bg'></div>
        <div className='company-info-img-bg'>
          <img src={registrationImage} />
        </div>
      </div>

      <div className='company-info-content-container'>
        <div className='company-info-steps-container'>
          <RegistrationSteps activeStep={activeStep} />
        </div>

        <div className='company-info-form-container'>
          <div className='company-info-title-container'>
            <h2>Company Information {isReviewMode && '- Review'}</h2>
            <p>
              {isReviewMode
                ? 'Review and confirm your company information'
                : 'Enter Your Company Information'}
            </p>
          </div>

          <form className='company-info-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-input-container'>
              <Label htmlFor='companyName' label='Company Name' />
              <InputField
                id='companyName'
                type='text'
                register={register('companyName')}
                placeholder='Enter Company Name'
                error={errors.companyName?.message}
              />
            </div>

            <div className='form-input-container'>
              <Label htmlFor='businessSector' label='Business Sector' />
              <SelectField
                id='businessSector'
                placeholder='Select a Business Sector'
                options={businessSectorOptions}
                register={register('businessSector')}
                defaultValue={defaultValues.businessSector}
                error={errors.businessSector?.message}
              />
            </div>

            <div className='form-input-container'>
              <Label htmlFor='companyNIF' label='NIF' />
              <InputField
                id='companyNIF'
                type='number'
                register={register('companyNIF')}
                placeholder='Enter Company NIF'
                error={errors.companyNIF?.message}
              />
            </div>

            <div className='date-of-establishment-input-container'>
              <div className='form-input-container'>
                <Label htmlFor='dateOfEstablishment' label='Date of Establishment' />
                <DateField
                  id='dateOfEstablishment'
                  register={register('dateOfEstablishment')}
                  defaultValue={defaultValues.dateOfEstablishment}
                  error={errors.dateOfEstablishment?.message}
                />
              </div>
            </div>

            {/* I do not know how to implement this yet
            <div className='company-info-form-group'>
              <label htmlFor='companySize'>Company Size ( # of employees )</label>
              <div className='company-size-input-container'>
                <input id='companySize' type='number' />
                <div className='checkbox-listed-company-container'>
                  <input id='listedCompany' type='checkbox' className='checkbox-listed-company' />
                  <label htmlFor='listedCompany'>Listed Company</label>
                </div>
              </div>
            </div> */}

            <div className='company-info-form-group'>
              <div className='form-input-container'>
                <Label htmlFor='contactNumber' label='Contact Number' />
                <InputField
                  id='contactNumber'
                  type='number'
                  register={register('contactNumber')}
                  placeholder='202 555 0111'
                  error={errors.contactNumber?.message}
                />
              </div>

              <div className='form-input-container'>
                <Label htmlFor='pincode' label='Pincode' />
                <InputField
                  id='pincode'
                  type='text'
                  register={register('pincode')}
                  placeholder='Postal Code'
                  error={errors.pincode?.message}
                />
              </div>
            </div>

            <div className='form-input-container'>
              <Label htmlFor='address' label='Address' />
              <InputField
                id='address'
                type='text'
                register={register('address')}
                placeholder='Enter Company Address'
                error={errors.address?.message}
              />
            </div>

            <div className='company-info-form-group'>
              <div className='form-input-container'>
                <Label htmlFor='city' label='City' />
                <InputField
                  id='city'
                  type='text'
                  register={register('city')}
                  placeholder='Enter City'
                  error={errors.city?.message}
                />
              </div>

              <div className='form-input-container'>
                <Label htmlFor='country' label='Country' />
                <SelectField
                  id='country'
                  placeholder='Select a Country'
                  options={countryOptions}
                  register={register('country')}
                  defaultValue={defaultValues.country}
                  error={errors.country?.message}
                />
              </div>
            </div>

            <h3>Financial Data</h3>

            <div className='company-info-form-group'>
              <div className='form-input-container'>
                <Label htmlFor='netTurnover' label='Net Turnover' />
                <InputField
                  id='netTurnover'
                  type='number'
                  register={register('netTurnover')}
                  placeholder='€'
                  error={errors.netTurnover?.message}
                />
              </div>

              <div className='form-input-container'>
                <Label htmlFor='assetsValue' label='Assets Value' />
                <InputField
                  id='assetsValue'
                  type='number'
                  register={register('assetsValue')}
                  placeholder='€'
                  error={errors.assetsValue?.message}
                />
              </div>
            </div>

            <StepButtons onPrevious={handlePrevious} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformationForm;
