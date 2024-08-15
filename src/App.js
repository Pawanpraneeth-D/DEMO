import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cart from './components/About/Cart';
import Footer from './components/Footer/Footer';
import Safety from './components/Safety/Safety';
import Contact from './components/Contact/Contact';
import Registration from './components/Register/Registration';
import BikeBooking from './components/Booking/BikeBooking';
import SelectionPage from './components/Selection/SelectionPage';
import Sharer from './components/Sharer/Sharer';
import Signup from './components/Signup/Signup';
import AdminDashboard from './components/Dashboard/Dashboard';
import BillPaymentPage from './components/PaymentPage/PaymentPage';
import BookRide from './components/BookRide/BookRide';
import ResultsPage from './components/ResultPage/ResultPage';

const AppContent = () => {
  const location = useLocation();
  const shouldShowFooter = !['/login','/signup', '/registration', '/booking','/sharer','/selection','/dashboard','/payment'].includes(location.pathname.toLowerCase());

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/safety' element={<Safety />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/registration' element={<Registration />} />
        <Route exact path='/booking' element={<BikeBooking />} />
        <Route exact path='/selection' element={< SelectionPage/>} />
        <Route exact path='/sharer' element={< Sharer/>} />
        <Route exact path='/signup' element={< Signup/>} />
        <Route exact path='/dashboard' element={< AdminDashboard/>} />
        <Route exact path='/payment' element={<BillPaymentPage/>}/>
        <Route exact path='/bookride' element={<BookRide/>}/>
        <Route exact path='/resultpage' element={<ResultsPage/>} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
