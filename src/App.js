import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About';
import Navbar from './components/shared/Navbar';
import Appoinment from './components/Pages/Appoinment/Appoinment';
import SignIn from './components/Pages/Auth/SignIn';
import SignUp from './components/Pages/Auth/SignUp';
import RequiredAuth from './components/Pages/Auth/RequiredAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appoinment" element={
          <RequiredAuth>
          <Appoinment />
        </RequiredAuth>
         } />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
