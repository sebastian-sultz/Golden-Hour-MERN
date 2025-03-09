import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { BASE_URL } from '../constants/constants';
import { Link } from 'react-router-dom';

export default function NewArrivals() {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/products/new`);
        setWatches(response.data || []);
        console.log(response)
      } catch (error) {
        console.error('Error fetching new arrivals:', error.response?.data?.message || error.message);
        setWatches([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNewArrivals();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="container-fluid py-16 bg-charcoal">
      <div className="container py-6">
      <h2 className="text-center text-5xl font-medium font-moondance text-golden mb-10 animate-pulse-slow tracking-wide">

          New Arrivals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {watches.map((watch) => (
            <div key={watch._id} className="flex flex-col items-center group transform transition-all duration-500 hover:-translate-y-2">
              <div className="relative w-80 h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-deep-black/20 to-charcoal/20 shadow-luxury hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={watch.image}
                  className="w-full h-full object-contain rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  alt={watch.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Link to="/shop" className="text-golden text-2xl font-playfair animate-pulse-slow">Discover Now</Link>
                </div>
              </div>
              <div className="mt-4 bg-[#d9d9d9] p-6 rounded-xl shadow-inner-luxury border-2 border-gold-gradient text-center w-80 h-32 flex flex-col justify-center items-center transform transition-all duration-300 group-hover:scale-105">
                <h5 className="text-deep-black text-2xl font-montserrat font-semibold mb-1">{watch.name.split(' ')[0]}</h5>
                <p className="text-deep-black text-xl font-montserrat font-medium mb-2">{watch.name.split(' ').slice(1).join(' ')}</p>
                <p className="text-deep-black/80 text-base font-montserrat italic">A timeless masterpiece</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}