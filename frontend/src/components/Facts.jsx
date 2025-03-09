import { FaCarSide, FaUserShield, FaExchangeAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Features() {
  return (
    <div className="container-fluid px-16 bg-charcoal">
      <div className="container py-8">
      <h2 className="text-center text-5xl py-16 font-medium font-moondance text-golden mb-10 animate-pulse-slow tracking-wide">

          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative flex flex-col items-center rounded-2xl bg-deep-black p-6 shadow-luxury hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="absolute -top-8 w-16 h-16 bg-golden rounded-full flex items-center justify-center rotate-45 shadow-inner-luxury">
              <FaCarSide className="text-deep-black text-2xl " />
            </div>
            <div className="mt-8 flex flex-col items-center">
              <h5 className="text-silver text-xl font-semibold mb-2 tracking-wide text-center">Free Shipping</h5>
              <p className="mb-0 text-golden text-base italic text-center">Free on order over $300</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-deep-black/10 to-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="relative flex flex-col items-center rounded-2xl bg-deep-black p-6 shadow-luxury hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="absolute -top-8 w-16 h-16 bg-golden rounded-full flex items-center justify-center -rotate-45 shadow-inner-luxury">
              <FaUserShield className="text-deep-black text-2xl " />
            </div>
            <div className="mt-8 flex flex-col items-center">
              <h5 className="text-silver text-xl font-semibold mb-2 tracking-wide text-center">Security Payment</h5>
              <p className="mb-0 text-golden text-base italic text-center">100% security payment</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-deep-black/10 to-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="relative flex flex-col items-center rounded-2xl bg-deep-black p-6 shadow-luxury hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="absolute -top-8 w-16 h-16 bg-golden rounded-full flex items-center justify-center rotate-45 shadow-inner-luxury">
              <FaExchangeAlt className="text-deep-black text-2xl " />
            </div>
            <div className="mt-8 flex flex-col items-center">
              <h5 className="text-silver text-xl font-semibold mb-2 tracking-wide text-center">30 Day Return</h5>
              <p className="mb-0 text-golden text-base italic text-center">30 day money guarantee</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-deep-black/10 to-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="relative flex flex-col items-center rounded-2xl bg-deep-black p-6 shadow-luxury hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="absolute -top-8 w-16 h-16 bg-golden rounded-full flex items-center justify-center -rotate-45 shadow-inner-luxury">
              <FaPhoneAlt className="text-deep-black text-2xl " />
            </div>
            <div className="mt-8 flex flex-col items-center">
              <h5 className="text-silver text-xl font-semibold mb-2 tracking-wide text-center">24/7 Support</h5>
              <p className="mb-0 text-golden text-base italic text-center">Support every time fast</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-deep-black/10 to-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}