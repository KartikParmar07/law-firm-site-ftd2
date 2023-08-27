import './App.css';
import Hero from './Components/Hero.jsx/Hero';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <div className="heroWrapper">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
