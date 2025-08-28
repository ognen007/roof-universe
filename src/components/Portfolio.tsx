import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      image: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Modern Residential Roofing',
      category: 'Residential',
      description: 'Complete roof replacement with premium asphalt shingles'
    },
    {
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Commercial Metal Roofing',
      category: 'Commercial',
      description: 'Large-scale metal roof installation for warehouse facility'
    },
    {
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Historic Home Restoration',
      category: 'Restoration',
      description: 'Careful restoration of century-old tile roofing system'
    },
    {
      image: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Emergency Storm Repair',
      category: 'Emergency',
      description: 'Rapid response storm damage repair and replacement'
    },
    {
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Luxury Estate Roofing',
      category: 'Luxury',
      description: 'Premium slate roof installation for luxury property'
    },
    {
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Multi-Family Complex',
      category: 'Commercial',
      description: 'Comprehensive roofing solution for apartment complex'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-yellow-400">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects, showcasing the quality and 
            craftsmanship that sets Roof Universe apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
              
              <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;