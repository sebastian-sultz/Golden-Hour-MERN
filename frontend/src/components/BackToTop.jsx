import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  return (
    <a
      href="#"
      className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-golden text-deep-black rounded-full shadow-luxury hover:bg-opacity-90 transition-all duration-300 z-[99]"
    >
      <FaArrowUp className="text-xl" />
    </a>
  );
}