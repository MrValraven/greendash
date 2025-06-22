import { Outlet } from 'react-router-dom';
import { ReportContextProvider } from '../../../context/ReportContext/ReportContext.tsx';
import ReportHeader from '@components/ReportHeader/ReportHeader.tsx';
import ReportSidebar from '@components/ReportSidebar/ReportSidebar.tsx';
import './ReportLayout.css';

const ReportLayout = () => {
  return (
    <ReportContextProvider>
      <div className='report-layout'>
        <ReportSidebar />
        <div className='report-content'>
          <ReportHeader />
          <main className='report-main'>
            <Outlet />
          </main>
        </div>
      </div>
    </ReportContextProvider>
  );
};

export default ReportLayout;
