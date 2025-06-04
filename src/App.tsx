import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from '@pages/Home/Home.tsx';
import Login from '@pages/Login/Login.tsx';
import Register from '@pages/Register/Register.tsx';
import Header from '@components/Header/Header.tsx';
import Footer from '@components/Footer/Footer.tsx';
import ResetPassword from '@pages/Home/ResetPassword/ResetPassword';
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

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
