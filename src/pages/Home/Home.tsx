import './styles/home.css';
import Hero from './components/Hero/Hero';
import Solution from './components/Solution/Solution';
import Features from './components/Features/Features';
import AboutUs from './components/AboutUs/AboutUs';
import Partners from './components/Partners/Partners';
import Contacts from './components/Contacts/Contacts';

const Home = () => {
  return (
    <section className='home'>
      <Hero />
      <Solution />
      <AboutUs />
      <Features />
      <Partners />
      <Contacts />
    </section>
  );
};

export default Home;
