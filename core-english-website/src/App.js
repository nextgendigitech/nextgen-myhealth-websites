import './App.css';
import TopAppBar from './layouts/TopAppBar';
import Footer from './layouts/Footer';
import AboutUs from './views/AboutUs';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Contact from './views/Contact';
import Home from './views/Home';
import Payment from './views/Payment';
import AllSpecialitiesPage from './views/AllSpecialitiesPage';
import PrivacyPolicy from './views/PrivacyPolicy';
import RefundPolicy from './views/RefundPolicy';
import TermsAndConditions from './views/TermsAndConditions';
import ScrollTop from './components/ScrollTop';
import DoctorListPage from './views/DoctorListPage';
import DoctorDetails from './views/DoctorDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollTop />
      <TopAppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/specialities' element={<AllSpecialitiesPage />} />
          <Route path='/specialities/:specialty' element={<DoctorListPage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/refund-policy' element={<RefundPolicy />} />
          <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
          <Route path='/doctor-details/:doctorId' element={<DoctorDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <HomeBanner />
      <WorldHeartDay />
      <Features />
      <Specialities />
      <Steps />
      <AboutUs />
      <ClientTestimonials />
      <DoctorJoinSection /> */}
    </div>
  );
}

export default App;
