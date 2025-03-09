import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { BASE_URL } from '../constants/constants';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToCart } from '../utils/api';

export default function ShoppngSection() {
  const [watches, setWatches] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { loggedInUser, token, updateCartCount } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/products/all`);
        setWatches(response.data || []);
      } catch (error) {
        setError('Failed to load watches.');
        setWatches([]);
      } finally {
        setLoading(false);
      }
    };
    fetchWatches();
  }, []);

  useEffect(() => {
    const fetchNewWatches = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/products/new`);
        setNewArrival(response.data || []);
      } catch (error) {
        setError('Failed to load watches.');
        setNewArrival([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNewWatches();
  }, []);

  const handleAddToCart = async (watchId) => {
    if (!loggedInUser) {
      toast.error('Please log in to add items to your cart.');
      navigate('/login');
      return;
    }

    try {
      await addToCart(watchId, token);
      toast.success('Item added to cart!');
      updateCartCount(1); // Instantly increment cart count
    } catch (error) {
      toast.error('Failed to add item to cart.');
    }
  };

  if (loading) return <Spinner />;
  if (error) return <div className="container py-16 text-center text-golden text-xl">{error}</div>;

  return (
    <div className="container-fluid py-16 bg-charcoal">
      <div className="container py-6">
        <p className="py-4 text-golden text-center text-4xl font-playfair">
          Shop Luxury Watches
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newArrival.map((watch) => (
            <div key={watch._id} className="flex flex-col items-center group">
              <div className="relative w-80 h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-deep-black/20 to-charcoal/20">
                <img
                  src={watch.image}
                  className="w-full h-full object-contain rounded-2xl group-hover:scale-110 transition-transform duration-300"
                  alt={watch.name}
                  onError={(e) => (e.target.src = 'path/to/default-image.jpg')}
                />
              </div>
              <div className="mt-4 bg-[#d9d9d9] p-6 rounded-xl w-80 h-32 flex flex-col justify-center items-center">
                <h5 className="text-deep-black text-2xl font-montserrat font-semibold">{watch.name}</h5>
                <p className="text-deep-black/80 text-base font-montserrat">Price: ${watch.price}</p>
                <button
                  className="bg-golden text-deep-black px-4 py-2 rounded-full mt-2"
                  onClick={() => handleAddToCart(watch._id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <div key={watch._id} className="flex flex-col items-center group">
              <div className="relative w-80 h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-deep-black/20 to-charcoal/20">
                <img
                  src={watch.image}
                  className="w-full h-full object-contain rounded-2xl group-hover:scale-110 transition-transform duration-300"
                  alt={watch.name}
                  onError={(e) => (e.target.src = 'path/to/default-image.jpg')}
                />
              </div>
              <div className="mt-4 bg-[#d9d9d9] p-6 rounded-xl w-80 h-32 flex flex-col justify-center items-center">
                <h5 className="text-deep-black text-2xl font-montserrat font-semibold">{watch.name}</h5>
                <p className="text-deep-black/80 text-base font-montserrat">Price: ${watch.price}</p>
                <button
                  className="bg-golden text-deep-black px-4 py-2 rounded-full mt-2"
                  onClick={() => handleAddToCart(watch._id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}