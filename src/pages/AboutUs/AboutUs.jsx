import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100">
      {/* Hero Section with Image */}
      <div className="relative h-[400px] w-full">
        <img 
          src="/Photo/gaza.jpg" 
          alt="Helping Hand Organization" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            About Helping Hand
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Helping Hand is a non-profit organization dedicated to making a positive impact in communities around the world. Our mission is to provide humanitarian aid, support sustainable development projects, and empower individuals to create lasting change in their communities.
          </p>

          <h2 className="text-3xl font-bold text-green-700 mb-6 mt-8">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Founded in 2020, Helping Hand emerged from a simple idea: to create a platform where people could come together to help those in need. What started as a small group of dedicated volunteers has grown into a global movement of change-makers, working tirelessly to address some of the world's most pressing challenges.
          </p>

          <h2 className="text-3xl font-bold text-green-700 mb-6 mt-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-2">100+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-2">50+</h3>
              <p className="text-gray-600">Communities Served</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-2">1000+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-green-700 mb-6 mt-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-2">Transparency</h3>
              <p className="text-gray-600">We believe in complete transparency in our operations and how we use donations.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-2">Sustainability</h3>
              <p className="text-gray-600">Our projects focus on long-term solutions that create lasting impact.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-2">Community</h3>
              <p className="text-gray-600">We work with local communities to ensure our solutions are culturally appropriate.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-2">Innovation</h3>
              <p className="text-gray-600">We constantly seek innovative solutions to address complex challenges.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Join Our Mission</h2>
            <p className="text-gray-700 text-lg mb-6">
              Whether you're looking to volunteer, donate, or partner with us, there are many ways to get involved and make a difference.
            </p>
            {/* <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300">
              Get Involved
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 