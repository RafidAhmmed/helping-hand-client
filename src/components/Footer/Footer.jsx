const Footer = () => {
  return (
    <footer className="bg-slate-900 text-center text-white text-lg md:text-xl p-2 md:p-4">
      <p className="text-xl md:text-2xl">
        Contact Us:
      </p>
      <div className="flex justify-center space-x-4 mt-2 pb-2 md:pb-4">
        <a 
          href="mailto:helping_hand@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300"
        >
          <i className="fas fa-envelope text-2xl"></i>
        </a>
        <a 
          href="tel:+8801600000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300"
        >
          <i className="fas fa-phone text-2xl"></i>
        </a>
      </div>
      <p>Follow Us on:</p>
      <div className="flex justify-center space-x-4 mt-2 pb-2 md:pb-4">
        <a 
          href="https://www.facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300"
        >
          <i className="fab fa-facebook-f text-2xl"></i>
        </a>
        <a 
          href="https://www.twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-300"
        >
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition duration-300"
        >
          <i className="fab fa-instagram text-2xl"></i>
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Helping Hand. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
