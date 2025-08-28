import React from 'react';

const RoofingEasySection = () => {
  const projectImages = [
    'https://i.ibb.co/VYDx1QCP/image.png',
    'https://i.ibb.co/1GdWD2Fy/image.png',
    'https://i.ibb.co/4gpF2szV/image.png'
  ];

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We Make <span className="text-yellow-500">Roofing Easy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether your roof has been damaged by a recent storm or you're upgrading with new siding and gutters, 
            CoMitted 365 is here to make the process as smooth and stress-free as possible. We are always available 
            to answer your questions and keep you informed every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src={image}
                alt={`Roofing project ${index + 1}`}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoofingEasySection;