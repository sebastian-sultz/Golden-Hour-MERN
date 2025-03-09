import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import payment from '../assets/img/payment.png';

export default function Footer() {
  return (
    <section id="contact">
    <div className="container-fluid py-12 px-16 bg-deep-black">
      <div className="container py-6">
        <div className="pb-6 mb-6 border-b border-golden/30">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/3">
              <a href="/">
                <h1 className="text-2xl font-moondance text-golden mb-2">Golden-Hour</h1>
                <p className="text-silver text-base font-montserrat">Luxury Watches</p>
              </a>
            </div>
            <div className="lg:w-1/2">
              <div className="relative mx-auto">
                <input
                  className="w-full py-3 px-4 rounded-full border border-silver bg-deep-black text-silver placeholder-silver font-montserrat focus:outline-none focus:ring-2 focus:ring-golden"
                  type="email"
                  placeholder="Your Email"
                />
                <button className="absolute top-0 right-0 py-3 px-6 bg-golden text-deep-black rounded-full hover:bg-opacity-90 transition-all duration-300 font-montserrat font-semibold text-base">
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-end pt-3">
              <div className="flex space-x-4">
                <a href="" className="w-10 h-10 flex items-center justify-center border border-silver rounded-full text-silver hover:text-golden hover:border-golden transition-all duration-300">
                  <FaTwitter />
                </a>
                <a href="" className="w-10 h-10 flex items-center justify-center border border-silver rounded-full text-silver hover:text-golden hover:border-golden transition-all duration-300">
                  <FaFacebookF />
                </a>
                <a href="" className="w-10 h-10 flex items-center justify-center border border-silver rounded-full text-silver hover:text-golden hover:border-golden transition-all duration-300">
                  <FaYoutube />
                </a>
                <a href="" className="w-10 h-10 flex items-center justify-center border border-silver rounded-full text-silver hover:text-golden hover:border-golden transition-all duration-300">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="text-silver text-lg font-montserrat font-semibold mb-4">Why People Like us!</h4>
            <p className="mb-4 text-silver text-base font-montserrat leading-relaxed max-w-md">
              People are drawn to our store for its embodiment of timeless elegance, showcasing curated selections, classic designs, and unparalleled service that resonate with those seeking enduring sophistication and style.
            </p>
            <a href="/about" className="inline-block bg-golden text-deep-black py-2 px-4 rounded-full hover:bg-opacity-90 transition-all duration-300 font-montserrat font-semibold text-base">
              Read More
            </a>
          </div>
          <div className="flex flex-col text-start">
            <h4 className="text-silver text-lg font-montserrat font-semibold mb-4">Shop Info</h4>
            <a href="/shop" className="text-silver hover:text-golden transition duration-300 text-base font-montserrat mb-2">Shop-Now</a>
            <a href="/about" className="text-silver hover:text-golden transition duration-300 text-base font-montserrat mb-2">About Us</a>
            <a href="/contact" className="text-silver hover:text-golden transition duration-300 text-base font-montserrat mb-2">Contact Us</a>
          </div>
          <div>
            <h4 className="text-silver text-lg font-montserrat font-semibold mb-4">Contact</h4>
            <p className="text-silver text-base font-montserrat mb-2">Address: 1429 Netus Rd, NY 48247</p>
            <p className="text-silver text-base font-montserrat mb-2">Email: xyz@email.com</p>
            <p className="text-silver text-base font-montserrat mb-2">Phone: +91 00000 00000</p>
            <p className="text-silver text-base font-montserrat mb-2">Payment Accepted</p>
            <img src={payment} className="w-full max-w-md rounded-lg shadow-luxury" alt="" />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}