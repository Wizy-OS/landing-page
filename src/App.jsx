import React, { useState } from 'react';
import './index.css';

const HeroSection = () => {
  return (
    <section className="p-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold">Hero Section</h1>
        <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, fuga.</p>
        <button className="my-purple mt-6 px-6 py-3 text-white rounded-lg">Download Now!</button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img src="/src/assets/new_b229a281e0.webp" alt="Wiz OS Screenshot" className="rounded-lg"/>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="my-purple py-10 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Features</h2>
      <div className="flex justify-center gap-8">
        <div className="bg-white p-6 text-black rounded-lg w-1/4">
          <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 21a6.75 6.75 0 110-13.5A6.75 6.75 0 0119.5 9a6.75 6.75 0 01-9.75 12z"></path>
          </svg>
          Feature 1
        </div>
        <div className="bg-white p-6 text-black rounded-lg w-1/4">
          <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"></path>
          </svg>
          Feature 2
        </div>
        <div className="bg-white p-6 text-black rounded-lg w-1/4">
          <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
          </svg>
          Feature 3
        </div>
      </div>
    </section>
  );
};

const Screenshots = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/src/assets/new_b229a281e0.webp',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.howtohow.org%2Fwp-content%2Fuploads%2F2023%2F06%2FmacOS-Sonoma-Update.jpg'
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Screenshots</h2>
      <div className="relative">
        <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2">←</button>
        <img src={images[currentImage]} alt="Screenshot" className="mx-auto rounded-lg" />
        <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2">→</button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <p>Developed by John Doe and Jane Doe</p>
      <p>All copyrights &copy; are reserved</p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="font-sans">
      <nav className="flex justify-between items-center p-6 bg-black text-white">
        <h1 className="text-3xl font-extrabold">
          Wiz OS</h1>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Forum</a>
        </div>
      </nav>
      <HeroSection />
      <Features />
      <Screenshots />
      <Footer />
    </div>
  );
};

export default App;
