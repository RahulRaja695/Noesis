import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !/^\d{10}$/.test(formData.phone)) {
      alert('Name and a valid 10-digit phone number are required.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setResponseMsg('Email sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setResponseMsg(`Error: ${data.error}`);
      }

      // Clear message after 3 seconds
      setTimeout(() => setResponseMsg(''), 3000);

    } catch (err) {
      setResponseMsg('Failed to send email');
      setTimeout(() => setResponseMsg(''), 3000);
    }
  };


  return (
    <section id="contact" style={{ backgroundColor: '#F9FAFB' }} className="py-20 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <p className="text-gray-700 text-lg mb-2">Get Started</p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-10">
            Get in touch with us. We're here to assist you.
          </h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Input Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b py-2 focus:outline-none border-gray-300"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b py-2 focus:outline-none border-gray-300"
                  placeholder="10-digit phone number"
                  pattern="\d{10}"
                  required
                />
              </div>

              {/* Email (optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address (optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Message (optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border-b border-gray-300 focus:outline-none py-2 resize-none"
                placeholder="Write your message here..."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-brand-accent text-white px-6 py-3 rounded shadow transition-all"
              >
                Leave us a Message →
              </button>
            </div>

            {responseMsg && (
              <p className="text-green-600 text-sm mt-2">{responseMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
