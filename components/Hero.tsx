import React, { useEffect, useState, useRef } from 'react';
import banner1 from '../assets/Banners/Banner1.png';

const slides = [
  {
    image: banner1,
    heading: (
      <> 
        Inspired by the past,<br />
        Designing for <span className="italic">the Future</span>
      </>
    ),
    description:
      'Our designs are timeless, drawing inspiration from the past to create spaces that will last for generations to come.',
  },
  {
    image: banner1,
    heading: (
      <> 
        Your Vision is our<span className="italic"> Expertise</span>
      </>
    ),
    description:
      'We work closely with you to understand your vision and bring it to life!',
  },
  {
    image: banner1,
    heading: (
      <> 
        From Concept to Creation,<br />
        We Build <span className="italic">Your Dreams</span>
      </>
    ),
    description:
      'With our comprehensive services, we ensure a seamless and successful project from the initial spark of an idea to the final construction.',
  },
    {
    image: banner1,
    heading: (
      <> 
        More than a Structure,<br />
        Its a <span className="italic">Story</span>
      </>
    ),
    description:
      'Every building has a story to tell. We translate our clients narrative into an exquisite physical form that is both meaningful and personal.',
  },
    {
    image: banner1,
    heading: (
      <> 
        The Art of Space,<br />
        The <span className="italic">Science of Living</span>
      </>
    ),
    description:
      'Our design philosophy is a blend of artistic vision and scientific precision. We create spaces that enhance the quality of life for those who inhabit them.',
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  const goToSlide = (index: number) => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    setCurrentSlide(index);
    startAutoSlide(); // restart interval after user interaction
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
  <img
    src={slide.image}
    alt="Slide Banner"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

  {/* Bottom-left text area (max 70% width) */}
  <div className="absolute bottom-20 left-0 z-10 w-full sm:w-[70%] md:w-[90%] px-4 sm:px-10 text-white text-left">
    <div>
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-serif font-bold leading-tight">
        {slide.heading}
      </h1>
      <p className="mt-6 text-lg max-w-3xl">{slide.description}</p>
      <a
        href="#contact"
        className="mt-8 inline-block 
                  bg-brand-accent text-white font-medium 
                  py-2 px-4 text-sm 
                  sm:py-3 sm:px-8 sm:text-base 
                  hover:bg-brand-highlight hover:text-brand-blue 
                  transition-colors duration-300"
      >
        Start Your Journey With Noesis
      </a>
    </div>
  </div>


  {/* Dots */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
          currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'
        }`}
      />
    ))}
  </div>
</section>

  );
};
