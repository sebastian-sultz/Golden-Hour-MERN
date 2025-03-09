import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../UserContext';
import { FaUser, FaShoppingBag, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { loggedInUser, cartCount, updateUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    updateUser('', null);
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const handleScroll = (sectionId) => {
    if (location.pathname !== '/') {
      // Navigate to home and scroll after navigation
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Small delay for smooth transition
    } else {
      // Already on home page, just scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    } else {
      navigate('/'); // Redirect to Home
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  // Combined handler for mobile menu items
  const handleMobileMenuClick = (action) => {
    action(); // Execute the passed action (e.g., handleHomeClick or handleScroll)
    setIsOpen(false); // Close the mobile menu
  };

  return (
    <div className="sticky top-0 bg-deep-black z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <h1>
            <button onClick={handleHomeClick} className="text-3xl font-moondance text-golden">
              Golden Hour
            </button>
          </h1>

          <div className="hidden lg:flex flex-grow font-montserrat justify-center space-x-10">
            <button onClick={handleHomeClick} className="text-silver text-lg hover:text-golden">
              Home
            </button>
            <Link to="/shop" className="text-silver text-lg hover:text-golden">
              Shop
            </Link>
            <button onClick={() => handleScroll('about')} className="text-silver text-lg hover:text-golden">
              About Us
            </button>
            <button onClick={() => handleScroll('contact')} className="text-silver text-lg hover:text-golden">
              Contact
            </button>
          </div>

          <div className="flex space-x-6 items-center">
            <Link to="/cart" className="relative">
              <FaShoppingBag className="text-silver text-xl hover:text-golden" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-golden text-deep-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            {loggedInUser ? (
              <button onClick={handleLogout}>
                <FaSignOutAlt className="text-silver text-xl hover:text-golden" />
              </button>
            ) : (
              <Link to="/login">
                <FaUser className="text-silver text-xl hover:text-golden" />
              </Link>
            )}
          </div>

          <button className="lg:hidden text-golden" onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="text-2xl" />
          </button>
        </nav>

        {isOpen && (
          <div className="lg:hidden mt-4 flex flex-col items-center space-y-3 bg-deep-black p-4">
            <button
              onClick={() => handleMobileMenuClick(handleHomeClick)}
              className="text-silver hover:text-golden"
            >
              Home
            </button>
            <Link
              to="/shop"
              className="text-silver hover:text-golden"
              onClick={() => setIsOpen(false)} // No need for handleMobileMenuClick here since Link handles navigation
            >
              Shop
            </Link>
            <button
              onClick={() => handleMobileMenuClick(() => handleScroll('about'))}
              className="text-silver hover:text-golden"
            >
              About Us
            </button>
            <button
              onClick={() => handleMobileMenuClick(() => handleScroll('contact'))}
              className="text-silver hover:text-golden"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </div>
  );
}