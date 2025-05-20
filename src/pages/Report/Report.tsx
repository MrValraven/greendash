import { useNavigate } from 'react-router-dom';
import './Report.css';

const Report = () => {
  const navigate = useNavigate();

  const handleStartReport = () => {
    navigate('/report/builder');
  };

  return (
    <div className='report-container'>
      <h1>Build your Report</h1>
      <button className='start-report-button' onClick={handleStartReport}>
        Start Now
      </button>
    </div>
  );
};

export default Report;
