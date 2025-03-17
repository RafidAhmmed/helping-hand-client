import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openFullScreen = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  return (
    <div className="home-container">
      <div 
        className="w-full h-[500px] md:h-[650px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Photo/gaza.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-30">
          <p className="bg-transparent text-2xl md:text-6xl font-bold text-center tracking-wider text-white">
            Genocide in Gaza
          </p>
          <br/>
          <Link 
            to="/gaza-genocide"
            className="rounded-3xl p-1 md:p-2 px-2 md:px-4 bg-black text-white hover:scale-110 hover:cursor-pointer hover:bg-transparent hover:text-white hover:border-white border-2 transition duration-500 text-balance md:text-2xl"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col items-center bg-gray-200 p-16">
        <h1 className="text-center text-xl md:text-4xl font-bold mb-4">
          Helping Hand
        </h1>
        <p className="text-base text-center space-y-4">
          <span className="block mb-4">
            Welcome to Helping Hand, a charitable organization founded by the students and alumni of Jashore University of Science and Technology (JUST), Bangladesh. Rooted in the values of compassion, solidarity, and community upliftment, our mission is to bring positive change to society while supporting those in need.
          </span>

          <span className="block mb-4">
            Our activities range from providing financial aid to underprivileged students, organizing blood donation drives, and raising awareness on critical social and health issues, to distributing essentials to vulnerable communities. With a commitment to fostering equality and empowerment, we strive to create a brighter future for everyone.
          </span>

          <span className="block">
            Join us in our journey to elevate lives and contribute to a better tomorrow!
          </span>
        </p>
      </div>

      <div className="w-full text-center p-10">
        <h1 className="font-bold text-xl md:text-3xl">Latest News</h1>
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pb-6 md:pb-10">
          {[
            { img: '/Photo/flood1.png', title: '1st news' },
            { img: '/Photo/flood3.webp', title: '2nd news' },
            { img: '/Photo/gaza.jpg', title: '3rd news' }
          ].map((news, index) => (
            <div key={index} className="relative h-[400px] md:h-[500px] w-full rounded-xl border border-transparent shadow-lg pb-20 hover:scale-105 transition duration-500 cursor-pointer">
              <img src={news.img} alt={news.title} className="h-[200px] md:h-[300px] w-full rounded-t-xl rounded-b-none object-cover" />
              <p className="text-center font-bold text-xl md:text-3xl p-5">{news.title}</p>
              <Link to="/news" className="bg-transparent rounded-full p-1 md:p-2 px-2 md:px-3 hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-300 inline-block">
                More..
              </Link>
            </div>
          ))}
        </div>
        <Link to="/news">
          <button className="p-1 md:p-2 px-3 md:px-4 rounded-3xl bg-slate-800 text-white hover:scale-105 transition duration-200">
            More..
          </button>
        </Link>
      </div>

      <div className="w-full text-center p-10 bg-gray-100 pt-10">
        <h1 className="font-bold text-xl md:text-3xl">Latest Projects</h1>
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pb-6 md:pb-10">
          {[
            { img: '/Photo/gaza.jpg', title: '1st Project' },
            { img: '/Photo/flood1.png', title: '2nd Project' },
            { img: '/Photo/flood3.webp', title: '3rd Project' }
          ].map((project, index) => (
            <div key={index} className="relative h-[400px] md:h-[500px] w-full rounded-xl border border-transparent shadow-lg pb-20 hover:scale-105 transition duration-700 cursor-pointer bg-white">
              <img src={project.img} alt={project.title} className="h-[200px] md:h-[300px] w-full rounded-t-xl rounded-b-none object-cover" />
              <p className="text-center font-bold text-xl md:text-3xl p-5">{project.title}</p>
              <Link to="/projects" className="bg-transparent rounded-full p-1 md:p-2 px-2 md:px-3 hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-300 inline-block">
                More..
              </Link>
            </div>
          ))}
        </div>
        <Link 
          to="/projects" 
          onClick={() => window.scrollTo(0, 0)}
          className="inline-block"
        >
          <button className="p-1 md:p-2 px-3 md:px-4 rounded-3xl bg-slate-800 text-white hover:scale-105 transition duration-200">
            More..
          </button>
        </Link>
      </div>

      <div className="p-10 md:p-16 text-center">
        <div className="col-span-full">
          <p className="text-xl md:text-4xl font-bold text-center p-2 md:p-4 pb-6 md:pb-10">Photo Gallery</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gp-10 pb-6 md:pb-10">
          {[
            '/Photo/gaza.jpg',
            '/Photo/flood1.png',
            '/Photo/flood3.webp',
            '/Photo/gaza.jpg'
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-[200px] md:h-[300px] object-cover rounded-lg bg-blue-300 cursor-pointer"
              onClick={() => openFullScreen(img)}
            />
          ))}
        </div>
        <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}
          className="inline-block">
          <button className="p-1 md:p-2 px-3 md:px-4 rounded-3xl bg-slate-800 text-white hover:scale-105 transition duration-200">
            More..
          </button>
        </Link>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 cursor-pointer"
          onClick={closeFullScreen}
        >
          <img 
            src={selectedImage} 
            alt="Full screen view" 
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Home;
