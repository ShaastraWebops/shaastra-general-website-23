import './App.css';
import About from './components/About';
import Events from './components/Events';
import Speakers from './components/Speakers';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
    // <About />
    // <Events />
    // <Speakers />
    // <Footer />
  );
}

export default App;
