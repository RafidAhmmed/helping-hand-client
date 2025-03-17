import { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterModal from '../Auth/RegisterModal';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isVisible = useScrollDirection();

  return (
    <>
      <div 
        id="navbar" 
        className={`bg-yellow-300 h-[72px] w-full flex justify-between fixed transition-transform duration-300 z-10 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <p className="px-4 md:px-6 p-2 md:p-4 text-lg md:text-3xl text-green-700 font-extrabold">Helping Hand</p>
        <div className="p-4 pr-3 md:pr-5 flex space-x-3 md:space-x-5 text-green-600 text-base md:text-xl">
          <Link to="/" className="hover:scale-110 hover:text-green-700 hover:cursor-pointer transition duration-300 hover:font-bold">Home</Link>
          <Link to="/news" className="hover:scale-110 hover:text-green-700 hover:cursor-pointer transition duration-300 hover:font-bold">News</Link>
          <Link to="/projects" className="hover:scale-110 hover:text-green-700 hover:cursor-pointer transition duration-300 hover:font-bold">Projects</Link>
          <Link to="/gallery" className="hover:scale-110 hover:text-green-700 hover:cursor-pointer transition duration-300 hover:font-bold">Gallery</Link>
          <Link to="/about" className="hover:scale-110 hover:text-green-700 hover:cursor-pointer transition duration-300 hover:font-bold">About Us</Link>
          <span 
            onClick={() => setIsModalOpen(true)} 
            className="text-green-600 hover:scale-110 hover:text-green-700 hover:cursor-pointer transition duration-300 hover:font-bold"
          >
            Join Us
          </span>
          <Link to="/donate" className="font-bold text-red-500 hover:scale-110 hover:text-red-700 hover:cursor-pointer transition duration-300 hover:font-bold">Donate</Link>
        </div>
      </div>

      {/* Registration Modal */}
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Back To Top Button */}
      <div className="fixed float-left bottom-4 right-4">
        <button 
          id="top" 
          className="bg-transparent p-2 rounded-full shadow-lg hover:bg-yellow-200 transition duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className="fa-solid fa-arrow-turn-up"></i>
        </button>
      </div>
    </>
  );
};

export default Navbar;

// This file is already properly set up to be rendered
// It's being imported and rendered through App.jsx which is rendered in main.jsx

// If you want to test this component, make sure your App.jsx imports and uses it like:


// import Navbar from './components/Navbar/Navbar'

// function App() {
//   return (
//     <>
//       <Navbar />
//       {/* Your other components */}
//     </>
//   )
// }

