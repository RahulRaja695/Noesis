import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Works } from './components/Works';
import { Philosophy } from './components/Philosophy';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm'

function App() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Works />
         <Philosophy />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;