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
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Blog from './pages/Blog';
import DoctorProfile from './pages/DoctorProfile';
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
          <Route path='/terms-conditions' element={<TermsConditions />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/refund-policy' element={<RefundPolicy />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/doctor-profile' element={<DoctorProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
