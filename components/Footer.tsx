
import React from 'react';

// const MailIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//     </svg>
// )

export const Footer = () => {
    return (
        <footer id="footer" className="bg-white text-gray-600">
            <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* <div className="space-y-6">
                        <p className="max-w-xs">
                            GF-A, ST Royal Springs, Door No.8/9,<br/>
                            Vasudevan Nagar, Thiruvanmiyur,<br/>
                            CHENNAI-600 041
                        </p>
                        <div>
                            <p>PH: 9962785938 / 7871282958</p>
                        </div>
                        <a href="mailto:info@noesisdesignstudio.com" className="inline-flex items-center space-x-2 text-gray-500 hover:text-brand-blue transition-colors">
                            <MailIcon />
                            <span>Contact Us</span>
                        </a>
                    </div> */}
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
                            <a href='#'>
                                <img src="assets\Social\Insta.svg" alt="Architectural drawing" />
                            </a>
                            <a href='#'>
                                <img src="assets\Social\LinkedIn.svg" alt="Architectural drawing" />
                            </a>
                            <a href='#'>
                                <img src="assets\Social\WhatsApp.svg" alt="Architectural drawing" />
                            </a>
                        </div>
                        
                    </div>

                      <div className="space-y-6">
                           <img src="assets\Group (2).png" alt="Architectural drawing" />
                        </div>
                    {/* <div className="flex flex-col justify-between items-start lg:items-end">

                      
                    </div> */}
                </div>

                <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
                    <p>&copy; Copyright 2026, All Rights Reserved by noesisdesignstudio.com.</p>
                </div>
            </div>
        </footer>
    );
};