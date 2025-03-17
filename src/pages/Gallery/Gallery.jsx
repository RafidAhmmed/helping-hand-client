import { useState } from 'react';

const Gallery = () => {
  // Sample gallery data - replace with your actual images
  const [images] = useState([
    {
      id: 1,
      src: '/Photo/gaza.jpg',
      title: 'Gaza Relief Efforts',
      category: 'humanitarian'
    },
    {
      id: 2,
      src: '/Photo/flood1.png',
      title: 'Flood Relief Distribution',
      category: 'disaster'
    },
    {
      id: 3,
      src: '/Photo/flood3.webp',
      title: 'Community Support',
      category: 'community'
    },
    {
      id: 4,
      src: '/Photo/gaza.jpg',
      title: 'Medical Camp',
      category: 'healthcare'
    },
    {
      id: 5,
      src: '/Photo/flood1.png',
      title: 'Education Support',
      category: 'education'
    },
    {
      id: 6,
      src: '/Photo/flood3.webp',
      title: 'Food Distribution',
      category: 'humanitarian'
    }
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-slate-200 pt-28">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Our Gallery
        </h1>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image) => (
            <div 
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <h3 className="text-white text-xl font-semibold text-center mt-4">
              {selectedImage.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
