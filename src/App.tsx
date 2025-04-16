import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home/Home.tsx';
import Register from '@pages/Register/Register.tsx';
import Header from '@components/Header/Header.tsx';
import Footer from '@components/Footer/Footer.tsx';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
