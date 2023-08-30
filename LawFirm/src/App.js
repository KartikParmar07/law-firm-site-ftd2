import './App.css';
import Faq from './Components/FAQ/Faq';
import Hero from './Components/Hero.jsx/Hero';
import ImgGrid from './Components/ImgGrid/ImgGrid';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Team from './Components/Team/Team';
import Testimonials from './Components/Testimonials/Testimonials';
import WhyUs from './Components/WhyUs/WhyUs';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="designWrap">
      <div className="heroWrapper">
        <Navbar />
        <Hero />
      </div>
      <div className="contentWrapper">
        <Intro />
        <WhyUs />
        <ImgGrid />
        <Testimonials />
        <Team />
        <Faq />
        <NewsLetter /> 
      </div>
      <div className="heroWrapper">
      <Footer />
      </div>
    </div>
  );
}

export default App;
