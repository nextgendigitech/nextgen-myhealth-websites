import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import TopBar from './layouts/TopBar';
import NavBar from './layouts/NavBar';
import Home from './pages/Home';

import AboutUs from './pages/AboutUs';
import Specialties from './pages/Specialties';
import SpecialtyDoctors from './pages/SpecialtyDoctors';
import Payment from './pages/Payment';
import ContactUs from './pages/ContactUs';
import Footer from './layouts/Footer';
import './App.css';

// axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/specialties' element={<Specialties />} />
          <Route path='/specialty-doctors/:specialty' element={<SpecialtyDoctors />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
