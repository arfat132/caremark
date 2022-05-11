import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
