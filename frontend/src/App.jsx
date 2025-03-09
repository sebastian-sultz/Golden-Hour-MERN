import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import NewArrivals from './components/NewArrivals';
import About from './components/About';
import Facts from './components/Facts';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import BackToTop from './components/BackToTop';
import Login from './components/Login';
import Signup from './components/Signup';

import Cart from './components/Cart';
import ShoppingSection from './components/ShoppingSection';
import { UserProvider } from './UserContext';
function App() {
  return (
  <UserProvider>
   
        <div className="min-h-screen  font-montserrat">
          <Spinner />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path='/shop' element={<ShoppingSection/>}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
          <BackToTop />
        </div>
       
     </UserProvider>
  );
}

// Home Content (Combining all home sections)
function HomeContent() {
  return (
    <>
      <Hero />
      <Features />
      <NewArrivals />
      <About />
      <Facts />
      <Testimonials />
    </>
  );
}

export default App;