import { FaCarSide, FaUserShield, FaExchangeAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Features() {
  return (
    <div className="container-fluid px-16 bg-charcoal">
      <div className="container py-10">
        <h2 className="text-center text-5xl py-16 font-medium font-moondance text-golden mb-10 animate-pulse-slow tracking-wide">
          Luxurious Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="relative flex flex-col items-center rounded-2xl bg-deep-black p-8 shadow-luxury hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute -top-10 w-20 h-20 bg-golden rounded-full flex items-center justify-center rotate-45 shadow-inner-luxury">
              <FaCarSide className="text-deep-black text-3xl" />
            </div>
            <div className="mt-10 flex flex-col items-center">
              <h5 className="text-silver text-2xl font-montserrat font-semibold mb-3 tracking-wide text-center leading-tight">Free Shipping</h5>
              <p className="mb-0 text-golden text-lg font-montserrat italic text-center leading-relaxed">Free on order over $300</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-deep-black/15 to-charcoal/15 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="relative flex flex-col items-center rounded-2xl bg-deep-black p-8 shadow-luxury hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute -top-10 w-20 h-20 bg-golden rounded-full flex items-center justify-center -rotate-45 shadow-inner-luxury">
              <FaUserShield className="text-deep-black text-3xl" />
            </div>
            <div className="mt-10 flex flex-col items-center">
              <h5 className="text-silver text-2xl font-montserrat font-semibold mb-3 tracking-wide text-center leading-tight">Security Payment</h5>
              <p className="mb-0 text-golden text-lg font-montserrat italic text-center leading-relaxed">100% security payment</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-deep-black/15 to-charcoal/15 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="relative flex flex-col items-center rounded-2xl bg-deep-black p-8 shadow-luxury hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute -top-10 w-20 h-20 bg-golden rounded-full flex items-center justify-center rotate-45 shadow-inner-luxury">
              <FaExchangeAlt className="text-deep-black text-3xl" />
            </div>
            <div className="mt-10 flex flex-col items-center">
              <h5 className="text-silver text-2xl font-montserrat font-semibold mb-3 tracking-wide text-center leading-tight">30 Day Return</h5>
              <p className="mb-0 text-golden text-lg font-montserrat italic text-center leading-relaxed">30 day money guarantee</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-deep-black/15 to-charcoal/15 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="relative flex flex-col items-center rounded-2xl bg-deep-black p-8 shadow-luxury hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute -top-10 w-20 h-20 bg-golden rounded-full flex items-center justify-center -rotate-45 shadow-inner-luxury">
              <FaPhoneAlt className="text-deep-black text-3xl" />
            </div>
            <div className="mt-10 flex flex-col items-center">
              <h5 className="text-silver text-2xl font-montserrat font-semibold mb-3 tracking-wide text-center leading-tight">24/7 Support</h5>
              <p className="mb-0 text-golden text-lg font-montserrat italic text-center leading-relaxed">Support every time fast</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-deep-black/15 to-charcoal/15 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}