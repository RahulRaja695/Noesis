import React, { useState, useEffect, useMemo } from 'react';
import { PROJECTS } from '../constants';

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const Works = () => {
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => p.category === 'Architecture');
  }, []);

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const selectedProject = filteredProjects[selectedProjectIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prev =>
        selectedProject?.imageUrls ? (prev + 1) % selectedProject.imageUrls.length : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedProject]);

  const handleThumbnailClick = (index: number) => {
    setSelectedProjectIndex(index);
    setImageIndex(0);
  };

  const handlePrev = () => {
    setSelectedProjectIndex(prev => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
    setImageIndex(0);
  };

  const handleNext = () => {
    setSelectedProjectIndex(prev => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
    setImageIndex(0);
  };

  const handlePreviewPrev = () => {
    setImageIndex(prev =>
      selectedProject?.imageUrls ? (prev === 0 ? selectedProject.imageUrls.length - 1 : prev - 1) : 0
    );
  };

  const handlePreviewNext = () => {
    setImageIndex(prev =>
      selectedProject?.imageUrls ? (prev + 1) % selectedProject.imageUrls.length : 0
    );
  };

  const closePreview = () => setIsPreviewOpen(false);

  return (
    <section id="works" className="pt-20 lg:pt-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className='text-brand-accent text-2xl '>W O R K S</p>
        <div className="text-left my-12">
          <h2 className="mt-2 text-4xl lg:text-5xl font-serif font-bold text-brand-blue">
            Some of our crafts<br />
            made with love
          </h2>
        </div>

        {selectedProject ? (
          <div className="flex flex-col lg:flex-col">
            {/* Thumbnails - should appear first on small screens */}
            <div className="order-1 lg:order-2 mb-8 overflow-x-auto scrollbar-hide p-4">
              <div className="flex gap-4 whitespace-nowrap h-58">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    onClick={() => handleThumbnailClick(index)}
                    className={`min-w-[240px] cursor-pointer group rounded-md overflow-hidden transition-all duration-300 ${
                      selectedProjectIndex === index ? 'ring-2 ring-brand-accent ring-offset-2' : ''
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={project.imageUrls[0]}
                        alt={project.title}
                        className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                    </div>
                    <div className="bg-brand-light p-3">
                      <h4 className="font-bold text-brand-blue">{project.title}</h4>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <CalendarIcon />
                        <span className="ml-1">{project.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main image display - should appear second on small screens */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPreviewOpen(true)}>
                  <img
                    src={selectedProject.imageUrls[imageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover rounded-lg shadow-xl transition-all duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-brand-blue">{selectedProject.title}</h3>
                  <p className="mt-1 text-gray-600">
                    {selectedProject.client} / <span className="font-semibold">{selectedProject.year}</span>
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed">{selectedProject.description}</p>
                </div>
              </div>

              {/* Arrows */}
              <div className="my-8 flex items-center justify-center space-x-4">
                <button onClick={handleNext}>
                  <img src="assets/Icons/left-arrow.svg" alt="" />
                </button>
                <button onClick={handleNext}>
                  <img src="assets/Icons/right-arrow.svg" alt="" />
                </button>
              </div>
            </div>
          </div>

        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500">No projects in this category yet. Stay tuned!</p>
          </div>
        )}
      </div>

      {/* Background image below projects */}
      <div className="flex justify-center">
        <img src="assets/Group (1).png" alt="Architectural sketch" className="w-full max-w-2xl h-auto opacity-20" />
      </div>

      {/* Image Preview Modal */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={closePreview}
        >
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closePreview} className="absolute top-2 right-2 text-white text-2xl font-bold">&times;</button>
            <img
              src={selectedProject.imageUrls[imageIndex]}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2">
              <button onClick={handlePreviewPrev} className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80">
                <ArrowLeftIcon />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2">
              <button onClick={handlePreviewNext} className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80">
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
