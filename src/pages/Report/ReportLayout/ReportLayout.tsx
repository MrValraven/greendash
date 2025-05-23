import { Outlet } from 'react-router-dom';
import { ReportContextProvider } from '../../../context/ReportContext/ReportContext.tsx';
import ReportHeader from '@components/ReportHeader/ReportHeader.tsx';
import './ReportLayout.css';

const ReportLayout = () => {
  return (
    <ReportContextProvider>
      <div className='report-layout'>
        <ReportHeader />
        <main className='report-main'>
          <Outlet />
        </main>
      </div>
    </ReportContextProvider>
  );
};

export default ReportLayout;
