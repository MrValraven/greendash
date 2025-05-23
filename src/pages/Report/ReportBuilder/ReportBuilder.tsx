import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useReportContext } from '../../../context/ReportContext/ReportContext.tsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { reportFormSchema, type ReportFormData } from './schema';
import FormInput from '../components/Input/Input';
import './ReportBuilder.css';

const ReportBuilder = () => {
  const navigate = useNavigate();
  const { setReportData } = useReportContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReportFormData>({
    resolver: zodResolver(reportFormSchema),
  });

  const onSubmit: SubmitHandler<ReportFormData> = async (data) => {
    try {
      setReportData(data);
      navigate('/report/download');
    } catch (error) {
      console.error('Report submission error:', error);
    }
  };

  const reportingYearOptions = [
    { value: '2025', label: '2025' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
  ];

  const regionOptions = [
    { value: 'southernEurope', label: 'Southern Europe' },
    { value: 'westernEurope', label: 'Western Europe' },
    { value: 'northernEurope', label: 'Northern Europe' },
    { value: 'easternEurope', label: 'Eastern Europe' },
  ];

  const moduleOptions = [
    { value: 'basic', label: 'Basic' },
    { value: 'comprehensive', label: 'Comprehensive' },
  ];

  const basisOptions = [
    { value: 'individual', label: 'Individual' },
    { value: 'consolidated', label: 'Consolidated' },
  ];

  return (
    <div>
      <h1>Report Building</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='report-form'>
        <FormInput
          id='companyName'
          label='Name of the Company'
          type='text'
          register={register('companyName')}
          placeholder='Enter company name'
          error={errors.companyName?.message}
        />

        <FormInput
          id='reportingYear'
          label='Reporting Year'
          type='select'
          register={register('reportingYear')}
          placeholder='Select Year'
          options={reportingYearOptions}
          error={errors.reportingYear?.message}
        />

        <FormInput
          id='logo'
          label='Company Logo'
          type='file'
          register={register('logo')}
          placeholder='Upload your logo'
          accept='image/*'
          error={errors.logo?.message}
        />

        <FormInput
          id='region'
          label='Region'
          type='select'
          register={register('region')}
          placeholder='Select a Region'
          options={regionOptions}
          error={errors.region?.message}
        />

        <FormInput
          id='module'
          label='Module'
          type='select'
          register={register('module')}
          placeholder='Basic/Comprehensive'
          options={moduleOptions}
          error={errors.module?.message}
        />

        <FormInput
          id='basis'
          label='Basis'
          type='select'
          register={register('basis')}
          placeholder='Consolidated/Individual'
          options={basisOptions}
          error={errors.basis?.message}
        />

        <FormInput
          id='subsidiaries'
          label="In case it's consolidated, please write all subsidiaries locations"
          type='textarea'
          register={register('subsidiaries')}
          placeholder='Subsidiaries'
          error={errors.subsidiaries?.message}
        />

        <FormInput
          id='sustainabilityPractices'
          label='What are your practices in terms of working towards a more sustainable economy?'
          type='textarea'
          register={register('sustainabilityPractices')}
          placeholder='Write here'
          error={errors.sustainabilityPractices?.message}
        />

        <div className='submit-button-container'>
          <button type='submit' className='submit-button' disabled={isSubmitting}>
            {isSubmitting ? 'Finishing...' : 'Finish'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportBuilder;
