import { useReportContext } from '../../../context/ReportContext/ReportContext.tsx';
import './ReportDownload.css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import SustainabilityReport from '../../PDFBuilder/SustainabilityReport.tsx';

const ReportDownload = () => {
  const { reportData } = useReportContext();
  /*  const [error, setError] = useState<string | null>(null); */

  /*  const handleDownload = async () => {
    if (!reportData) return;

    try {
      // generate the report here :)
    } catch (error) {
      console.error('Error generating report:', error);
      setError('An error occurred while generating the report. Please try again');
    }
  }; */

  if (!reportData) {
    return <div className='loading'>Loading report data...</div>;
  }

  return (
    <div className='download-container'>
      <h1>Your Sustainability Report</h1>

      <div className='report-summary'>
        <h2>Report Summary</h2>
        <div className='summary-item'>
          <span className='label'>Company:</span>
          <span className='value'>{reportData.companyName}</span>
        </div>
        <div className='summary-item'>
          <span className='label'>Year:</span>
          <span className='value'>{reportData.reportingYear}</span>
        </div>
        <div className='summary-item'>
          <span className='label'>Region:</span>
          <span className='value'>{reportData.region}</span>
        </div>
        <div className='summary-item'>
          <span className='label'>Module:</span>
          <span className='value'>{reportData.module}</span>
        </div>
        <div className='summary-item'>
          <span className='label'>Basis:</span>
          <span className='value'>{reportData.basis}</span>
        </div>
        {reportData.basis === 'consolidated' && reportData.subsidiaries && (
          <div className='summary-item'>
            <span className='label'>Subsidiaries:</span>
            <span className='value'>{reportData.subsidiaries}</span>
          </div>
        )}
      </div>

      {/* {error && <div className='error-message'>{error}</div>} */}

      <PDFDownloadLink
        document={
          <SustainabilityReport
            ano={reportData.reportingYear}
            nome_empresa={reportData.companyName}
            module={reportData.module}
            reportType={reportData.basis}
            logoUrl={reportData.logo}
            /*   logoUrl='https://media.licdn.com/dms/image/v2/D4D0BAQEFLBP2amu0LA/company-logo_200_200/company-logo_200_200/0/1734466404994/green_dash_ai_logo?e=1753315200&v=beta&t=2U5-2hFaBRtPRIB6NeU-CCnxjQOADWotNNZb6lLs_Os' */
            practices_sustainable_economy={reportData.sustainabilityPractices}
            ano_empresa={reportData.reportingYear}
          />
        }
        fileName='sustainability-report.pdf'
      >
        {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  );
};

export default ReportDownload;
