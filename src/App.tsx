import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home/Home.tsx';
import Header from '@components/Header/Header.tsx';
import Footer from '@components/Footer/Footer.tsx';

import Login from '@pages/Login/Login.tsx';
import Register from '@pages/Register/Register.tsx';
import ResetPassword from '@pages/ResetPassword/ResetPassword';

import { ReportContextProvider } from 'context/ReportContext/ReportContext';
import Report from '@pages/Report/Report';
import ReportBuilder from '@pages/Report/ReportBuilder/ReportBuilder';
import ReportDownload from '@pages/Report/ReportDownload/ReportDownload';

import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/register' element={<Register />} />

          <ReportContextProvider>
            <Route path='/report' element={<Report />} />
            <Route path='/report/builder' element={<ReportBuilder />} />
            <Route path='/report/download' element={<ReportDownload />} />
          </ReportContextProvider>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
