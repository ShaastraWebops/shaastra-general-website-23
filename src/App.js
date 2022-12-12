import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Theme from './components/Theme';
import Countdown from './components/Countdown';
import About from './components/About';
import Events from './components/Events';
import Speakers from './components/Speakers';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/Home" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/footer" element={<Footer />} /> */}
      </Routes>
    </BrowserRouter>
    <Theme />
    <Countdown />
    <About />
    <Speakers />
    <Events />
    <Footer />
    </div>
  );
}

export default App;
