import { useState } from 'react';
import { useReportContext } from '../../../context/ReportContext/ReportContext.tsx';
import './ReportDownload.css';

const ReportDownload = () => {
  const { reportData } = useReportContext();
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    if (!reportData) return;

    try {
      // generate the report here :)
    } catch (error) {
      console.error('Error generating report:', error);
      setError('An error occurred while generating the report. Please try again');
    }
  };

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

      {error && <div className='error-message'>{error}</div>}

      <div className='viewer-actions'>
        <button className='download-button' onClick={handleDownload}>
          Download
        </button>
      </div>
    </div>
  );
};

export default ReportDownload;
