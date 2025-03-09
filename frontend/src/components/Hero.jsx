import { useState, useEffect } from 'react';
import main from '../assets/img/main.jpg';
import h1 from '../assets/img/h1.jpg';
import h2 from '../assets/img/h2.jpg';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // Slower for elegance
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="container-fluid py-24 px-16 bg-deep-black relative overflow-hidden"
      id="one"
    >
      <img
        src={main}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))] z-10"></div>
      <div className="container py-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2 text-left"> 
            <h1 className="mb-8 text-5xl text-silver font-moondance leading-tight shadow-inner-luxury">Collection Of Luxury Brands</h1>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="overflow-hidden rounded-xl shadow-luxury max-w-lg mx-auto">
                <div className={`transition-opacity duration-1000 ${activeSlide === 0 ? 'block' : 'hidden'}`}>
                  <img src={h2} className="w-full h-80 object-cover" alt="First slide" />
                </div>
                <div className={`transition-opacity duration-1000 ${activeSlide === 1 ? 'block' : 'hidden'}`}>
                  <img src={h1} className="w-full h-80 object-cover" alt="Second slide" />
                </div>
              </div>
              <button
                className=" invisible absolute text-2xl top-1/2 left-24 -translate-y-1/2 w-11 h-11 bg-slate-300 bg-opacity-50 rounded-full text-off-white flex items-center justify-center hover:bg-opacity-90 hover:scale-105 hover:text-black transition-all duration-300 lg:visible"
                onClick={() => setActiveSlide((prev) => (prev === 0 ? 1 : 0))}
              >
                &lt;
              </button>
              <button
                className="invisible absolute text-2xl top-1/2 right-24 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-300 bg-opacity-50 text-off-white flex items-center justify-center hover:bg-opacity-90 hover:scale-105 hover:text-black transition-all duration-300 lg:visible"
                onClick={() => setActiveSlide((prev) => (prev === 1 ? 0 : 1))}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}