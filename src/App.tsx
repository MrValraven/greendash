import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home/Home.tsx';
import Login from '@pages/Login/Login.tsx';
import Register from '@pages/Register/Register.tsx';
import Header from '@components/Header/Header.tsx';
import Footer from '@components/Footer/Footer.tsx';
import ResetPassword from '@pages/Home/ResetPassword/ResetPassword';
import './styles/global.css';
import NotFound from '@pages/NotFound/NotFound';
import NotFound2 from '@pages/NotFound/NotFound2';
import { NotFoundTailwind } from '@pages/NotFound/components/NotFoundPage/NotFound';
import { UserUploadedStorageTailwind } from '@components/UserUploadedStorage/UserUploadedStorage';
import { UserProjectAnalyticsTailwind } from '@components/UserProjectAnalytics/UserProjectAnalytics';
import { UserProfileTailwind } from '@components/UserProfile/UserProfile';
import { EsgKnowledgeHubTailwind } from '@components/EsgKnowlegeHub/EsgKnowledgeHub';
import { EsgDataFormPageTailwind } from '@components/EsgDataFormPage/EsgDataFormPage';
import { EsgChatbotDisplayTailwind } from '@components/EsgChatbotDisplay/EsgChatboxDisplay';
import { DashboardTailwind } from '@components/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/storage' element={<UserUploadedStorageTailwind />} />
          <Route path='/user/analytics' element={<UserProjectAnalyticsTailwind />} />
          <Route path='/user/profile' element={<UserProfileTailwind />} />
          <Route path='/user/dashboard' element={<DashboardTailwind />} />
          <Route path='/esg/chatbot' element={<EsgChatbotDisplayTailwind />} />
          <Route path='/esg/data' element={<EsgDataFormPageTailwind />} />
          <Route path='/esg/hub' element={<EsgKnowledgeHubTailwind />} />
          <Route path='/notfound' element={<NotFoundTailwind />} />
          <Route path='/hehe' element={<NotFound2 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
