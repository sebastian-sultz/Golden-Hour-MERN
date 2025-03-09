import { FaQuoteRight, FaStar } from 'react-icons/fa';
import testimonial1 from '../assets/img/testimonial-1.jpg';

export default function Testimonials() {
  return (
    <div className="container-fluid pb-16 px-16 bg-charcoal">
      <div className="container">
        <div className="text-center">
        <h2 className="text-center text-5xl py-16 font-medium font-moondance text-golden mb-10 animate-pulse-slow tracking-wide">
        Our Clients Saying!</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-off-white rounded-xl p-6 shadow-luxury hover:shadow-xl transition-all duration-300 relative">
            <FaQuoteRight className="text-silver text-2xl absolute bottom-6 right-6 animate-pulse-slow" />
            <div className="mb-4 pb-4 border-b border-silver text-deep-black">
              <p className="mb-0 text-base font-montserrat leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
            <div className="flex items-center">
              <div className="bg-silver rounded-xl">
                <img src={testimonial1} className="w-[100px] h-[100px] rounded-xl object-cover" alt="" />
              </div>
              <div className="ml-4">
                <h4 className="text-golden text-lg font-montserrat font-semibold">Client Name</h4>
                <p className="m-0 text-silver text-sm font-montserrat pb-2">Profession</p>
                <div className="flex space-x-1">
                  <FaStar className="text-golden" />
                  <FaStar className="text-golden" />
                  <FaStar className="text-golden" />
                  <FaStar className="text-golden" />
                  <FaStar className="text-silver" />
                </div>
              </div>
            </div>
          </div>
          {/* Repeat for additional testimonials */}
        </div>
      </div>
    </div>
  );
}