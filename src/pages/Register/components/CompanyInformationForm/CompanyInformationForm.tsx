import { useForm } from 'react-hook-form';
import RegistrationSteps from '../RegistrationSteps/RegistrationSteps';
import StepButtons from '../StepButtons/StepButtons';
import { CompanyInformationFormProps } from './types';
import FormInput from '@components/FormInput/FormInput';

import registrationImage from '@assets/register-illustration.svg';

import './CompanyInformationFrom.css';

const CompanyInformationForm = ({
  onSubmit,
  onPrevious,
  activeStep,
  isReviewMode,
  defaultValues = {},
}: CompanyInformationFormProps) => {
  const { register, handleSubmit } = useForm({ defaultValues });

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
            <FormInput
              id='companyName'
              label='Company Name'
              type='text'
              placeholder='Enter Company Name'
              register={register('companyName')}
              defaultValue={defaultValues.companyName}
            />

            <FormInput
              id='businessSector'
              label='Business Sector'
              type='select'
              placeholder='Select a Business Sector'
              options={businessSectorOptions}
              register={register('businessSector')}
              defaultValue={defaultValues.businessSector}
            />

            <FormInput
              id='companyNIF'
              label='NIF'
              type='number'
              register={register('companyNIF')}
              defaultValue={defaultValues.companyNIF}
            />

            <div className='date-of-establishment-input-container'>
              <FormInput
                id='dateOfEstablishment'
                label='Date of Establishment'
                type='date'
                register={register('dateOfEstablishment')}
                defaultValue={defaultValues.dateOfEstablishment}
              />
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
              <FormInput
                id='contactNumber'
                label='Contact Number'
                type='number'
                placeholder='202 555 0111'
                register={register('contactNumber')}
                defaultValue={defaultValues.contactNumber}
              />

              <FormInput
                id='pincode'
                label='Pincode'
                type='text'
                placeholder='Postal Code'
                register={register('pincode')}
                defaultValue={defaultValues.pincode}
              />
            </div>

            <FormInput
              id='address'
              label='Address'
              type='text'
              placeholder='Address'
              register={register('address')}
              defaultValue={defaultValues.address}
            />

            <div className='company-info-form-group'>
              <FormInput
                id='city'
                label='City'
                type='text'
                placeholder='Lisbon'
                register={register('city')}
                defaultValue={defaultValues.city}
              />

              <FormInput
                id='country'
                label='Country'
                type='select'
                placeholder='Select any country'
                options={countryOptions}
                register={register('country')}
                defaultValue={defaultValues.country}
              />
            </div>

            <h3>Financial Data</h3>

            <div className='company-info-form-group'>
              <FormInput
                id='netTurnover'
                label='Net Turnover'
                type='number'
                placeholder='€'
                register={register('netTurnover')}
                defaultValue={defaultValues.netTurnover}
              />

              <FormInput
                id='assetsValue'
                label='Assets Value'
                type='number'
                placeholder='€'
                register={register('assetsValue')}
                defaultValue={defaultValues.assetsValue}
              />
            </div>

            <StepButtons onPrevious={handlePrevious} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformationForm;
