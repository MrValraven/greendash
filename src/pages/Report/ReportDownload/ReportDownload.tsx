import { useReportContext } from '../../../context/ReportContext/ReportContext.tsx';
import './ReportDownload.css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import SustainabilityReport from '../../PDFBuilder/SustainabilityReport.tsx';
import { useEffect, useState } from 'react';

const ReportDownload = () => {
  const { reportData } = useReportContext();
  const [transformedText, setTransformedText] = useState('');
  const [transformedSub, setTransformedSub] = useState('');
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

  useEffect(() => {
    const getDataFromAI = async (text: string, chapterName: string) => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/auth/ai/build', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            reportChapterName: chapterName,
            userInput: text,
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.section;
      } catch (error) {
        console.error('Error fetching data from AI:', error);
        // setError('Failed to fetch data from AI. Please try again later.');
      }
    };

    const getData = async () => {
      if (reportData && reportData.sustainabilityPractices && !transformedText) {
        const sustainablePractices = await getDataFromAI(
          `These practices encompass: ${reportData.sustainabilityPractices}. You should start the phrase with "These practices encompass: "`,
          'Sustainable Practices',
        );
        setTransformedText(sustainablePractices);
      }
      if (reportData && reportData.subsidiaries && !transformedSub) {
        const subsidiaries = await getDataFromAI(
          reportData.subsidiaries,
          'Company subsidiaries in the report. Please do not make up any data, just make it adjusted to be human readable and start by saying "Our company has the following subsidiaries: "',
        );
        setTransformedSub(subsidiaries);
      }
    };

    getData();
  }, []);

  if (!reportData) {
    return <div className='loading'>Loading report data...</div>;
  }

  return (
    <div className='download-container'>
      <h1>Here is your sustainability report! Download it!</h1>

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
        <div className='summary-item'>
          <span className='label'>Sustainability practices:</span>
          {!transformedText ? (
            <span>Loading transformed Data from AI Service...</span>
          ) : (
            <span className='value'>{transformedText || reportData.sustainabilityPractices}</span>
          )}
        </div>

        <div className='summary-item'>
          <span className='label'>Subsidiaries:</span>
          {!transformedSub ? (
            <span>Loading transformed Data from AI Service...</span>
          ) : (
            <span className='value'>{transformedSub || reportData.subsidiaries}</span>
          )}
        </div>
      </div>

      {/* {error && <div className='error-message'>{error}</div>} */}
      <div className='pdf-download-link'>
        <PDFDownloadLink
          document={
            <SustainabilityReport
              ano={reportData.reportingYear}
              nome_empresa={reportData.companyName}
              module={reportData.module}
              reportType={reportData.basis}
              logoUrl={reportData.logoUrl}
              subsidiaries={transformedSub || reportData.subsidiaries}
              practices_sustainable_economy={transformedText || reportData.sustainabilityPractices}
              ano_empresa={reportData.reportingYear}
            />
          }
          fileName='sustainability-report.pdf'
        >
          {({ loading }) =>
            loading && !transformedSub && !transformedText ? 'Generating PDF...' : 'Download PDF'
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default ReportDownload;
