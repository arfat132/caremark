import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About';
import Navbar from './components/shared/Navbar';
import Appoinment from './components/Pages/Appoinment/Appoinment';
import SignIn from './components/Pages/Auth/SignIn';
import SignUp from './components/Pages/Auth/SignUp';
import RequiredAuth from './components/Pages/Auth/RequiredAuth';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MyReview from './components/Pages/Dashboard/MyReview';
import MyHistory from './components/Pages/Dashboard/MyHistory';
import MyAppoinment from './components/Pages/Dashboard/MyAppoinment';
import AllUsers from './components/Pages/Dashboard/AllUsers';
import RequiredAdmin from './components/Pages/Auth/RequiredAdmin';
import Payment from './components/Pages/Dashboard/Payment';





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
         <Route path="/dashboard" element={
          <RequiredAuth>
          <Dashboard />
        </RequiredAuth>
         } />
        <Route path="dashboard" element={<RequiredAuth><Dashboard /></RequiredAuth>} >
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequiredAdmin><AllUsers></AllUsers></RequiredAdmin>}></Route>
        </Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
