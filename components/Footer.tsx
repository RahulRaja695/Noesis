
import React from 'react';
import Building from '../assets/footer.png';
import insta from '../assets/Social/Insta.svg';
import linkedIn from '../assets/Social/LinkedIn.svg';
import whatsapp from '../assets/Social/WhatsApp.svg';

export const Footer = () => {
    return (
        <footer id="footer" className="bg-white text-gray-600">
            <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        {/* Embedded Google Map */}
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                           <iframe
                            title="Noesis Design Studio Location"
                            src="https://www.google.com/maps?q=GF-A, ST Royal Springs, Door No.8/9, Vasudevan Nagar, Thiruvanmiyur, CHENNAI-600041&output=embed"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Address */}
                        <p>
                            GF-A, ST Royal Springs, Door No.8/9,<br />
                            Vasudevan Nagar, Thiruvanmiyur,<br />
                            CHENNAI-600 041
                        </p>

                        {/* Phone Numbers */}
                        <div>
                            <p>PH: 9962785938 / 7871282958</p>
                        </div>

                        <div className='flex space-x-5'>
                            <a href='https://www.instagram.com/noesisdesignstudio?igsh=MWlsZTBva2hmaDBtcg=='>
                                <img src={insta} alt="Architectural drawing" />
                            </a>
                            <a href='#'>
                                <img src={linkedIn} alt="Architectural drawing" />
                            </a>
                            <a
                            href="https://wa.me/919600567422?text=Hello%20I%20am%20interested%20in%20your%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img src={whatsapp} alt="Architectural drawing" />
                            </a>
                        </div>
                        
                    </div>

                      <div className="space-y-6">
                           <img src={Building} alt="Architectural drawing" />
                        </div>

                </div>

                <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
                    <p>&copy; Copyright 2026, All Rights Reserved by noesisdesignstudio.com.</p>
                </div>
            </div>
        </footer>
    );
};