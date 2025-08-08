
import React from 'react';

export const Philosophy = () => {
  return (
    <section id="philosophy" style={{ backgroundColor: '#327EB2' }} className="text-white pb-20 lg:pb-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
             <img src="assets\Group.png" alt="Architectural sketch" className="w-full max-w-2xl h-auto opacity-20" />
        </div>
        <p className='text-2xl'>S T U D I O</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* <p className="text-sm text-brand-highlight font-semibold tracking-wider">OUR VISION</p> */}
            <h2 className="mt-2 text-4xl lg:text-5xl font-serif font-bold">Our Design Philosophy</h2>
            <p className="mt-6 text-brand-light leading-relaxed">
              At Noesis Design Studio, we take architecture as an art form that masterfully blends innovation, practicality, and sustainability, a significant response to its context. Nestled at the heart of Chennai, our studio is driven by a commitment to construct environments that are significant and resonate with our clients' visions and needs. Under the direction of foremost architects Ar. C .Arvind Krishnan and Ar. Jayanth R., our inter-disciplinary team of seasoned architects and exceptional designers brings diverse expertise in responsive designs, sustainable architecture, and design thinking. Every architectural endeavour offers us an opportunity to combine elegance and functionality to develop spaces that are enduring, versatile, and intriguing.
            </p>
          </div>
          <div className="grid grid-cols-1">
            <div className="relative pt-16 flex justify-center">
              {/* <div className="absolute top-6 h-30 w-30 flex items-center justify-center text-center text-xs font-bold uppercase tracking-wider transform -rotate-10">
                <img src="assets\Icons\Mob-Badge.svg" alt="" />
              </div>
              <div className="absolute top-10 h-24 w-24 flex items-center justify-center text-center text-xs font-bold uppercase tracking-wider transform -rotate-10">
                <img src="assets\Badge.png" alt="" />
              </div> */}
              {/* Mobile Badge - visible only on small screens */}
              <div className="absolute top-6 h-30 w-30 flex items-center justify-center text-center text-xs font-bold uppercase tracking-wider transform -rotate-10 block md:hidden">
                <img src="assets/Icons/Mob-Badge.svg" alt="Mobile Badge" />
              </div>

              {/* Desktop Badge - visible only on medium and larger screens */}
              <div className="absolute top-10 h-24 w-24 flex items-center justify-center text-center text-xs font-bold uppercase tracking-wider transform -rotate-10 hidden md:flex">
                <img src="assets/Badge.png" alt="Desktop Badge" />
              </div>

              <img src="assets\about-creative.png" alt="Modern kitchen" className="rounded-lg shadow-xl" />
              
            </div>
            {/* <div className="relative pb-16">
              <img src="assets\about-creative.png" alt="Modern bedroom vanity" className="rounded-lg shadow-xl" />
            </div> */}
          </div>
        </div>
        {/* <div className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center space-x-2 text-left">
              <p className="text-5xl font-serif font-bold text-brand-highlight">100%</p>
              <div className="flex flex-col leading-none">
                <p className="text-sm uppercase tracking-widest text-brand-light">Satisfaction <br />Clients</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-left">
              <p className="text-5xl font-serif font-bold text-brand-highlight">47</p>
              <div className="flex flex-col leading-none text-center">
                <p className="text-sm uppercase tracking-widest text-brand-light">Employees</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-left">
              <p className="text-5xl font-serif font-bold text-brand-highlight">34</p>
              <div className="flex flex-col leading-none">
                <p className="text-sm uppercase tracking-widest text-brand-light">Projects Completed <br />in 60 Countries</p>
              </div>
            </div>
        </div> */}
        {/* <div className="flex justify-center mt-20">
             <img src="./assets/image3.png" alt="Architectural sketch" className="w-full max-w-2xl h-auto opacity-20" />
        </div> */}
      </div>
    </section>
  );
};