import { useNavigate } from 'react-router-dom';
import Button from '@components/Button/Button';
import './Report.css';

const Report = () => {
  const navigate = useNavigate();

  const handleStartReport = () => {
    navigate('/report/builder');
  };

  return (
    <div className='report-container'>
      <h1>Build your report</h1>
      <Button className='start-report-button' onClick={handleStartReport}>
        Start Now
      </Button>
    </div>
  );
};

export default Report;
