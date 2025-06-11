import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from '@pages/Home/Home.tsx';
import Login from '@pages/Login/Login.tsx';
import Register from '@pages/Register/Register.tsx';
import ResetPassword from '@pages/ResetPassword/ResetPassword';
import ForgotPassword from '@pages/ForgotPassword/ForgotPassword';
import Header from '@components/Header/Header.tsx';
import Footer from '@components/Footer/Footer.tsx';

import ReportLayout from '@pages/Report/ReportLayout/ReportLayout';
import Report from '@pages/Report/Report';
import ReportBuilder from '@pages/Report/ReportBuilder/ReportBuilder';
import ReportDownload from '@pages/Report/ReportDownload/ReportDownload';

import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <main>
                <Outlet />
              </main>
              <Footer />
            </>
          }
        >
          <Route index element={<Home />} />
        </Route>

        <Route>
          <Route path='login' element={<Login />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route element={<ReportLayout />}>
          <Route path='/report' element={<Report />} />
          <Route path='/report/builder' element={<ReportBuilder />} />
          <Route path='/report/download' element={<ReportDownload />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
