import './App.css';
import Hero from './Components/Hero.jsx/Hero';
import ImgGrid from './Components/ImgGrid/ImgGrid';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Team from './Components/Team/Team';
import Testimonials from './Components/Testimonials/Testimonials';
import WhyUs from './Components/WhyUs/WhyUs';

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
      </div>
    </div>
  );
}

export default App;
