import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faCircleChevronLeft,
        faCircleChevronRight,
        faLock,
        faPuzzlePiece,
        faClockRotateLeft
        } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add( faCircleChevronLeft,
  faCircleChevronRight,
  faLock,
  faPuzzlePiece,
  faClockRotateLeft
);

const arrowIconsSize= "4x"
const featureIconSize= "4x"

const ArrowLeft = () => {
  return (
    <FontAwesomeIcon icon={faCircleChevronLeft} size={arrowIconsSize}/>
  );
};

const ArrowRight = () => {
  return (
    <FontAwesomeIcon icon={faCircleChevronRight} size={arrowIconsSize}/>
  );
};

const HeroSection = () => {
  return (
    <section className="p-10 flex flex-col md:flex-row items-center gap-1">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold">Hero Section</h1>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, fuga.</p>
        <button className="my-purple mt-6 px-6 py-3 text-white rounded-lg">Download Now!</button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img src="/src/assets/new_b229a281e0.webp" alt="Wiz OS Screenshot" className="rounded-lg"/>
      </div>
    </section>
  );
};

const FeatureCard = ( {faIconName, text} ) => {
  return (
    <div className="bg-white p-6 px-10 text-black rounded-lg">
            <FontAwesomeIcon icon={faIconName} size={featureIconSize} />
            <p className='mt-5'>{text}</p>
    </div>
  )
}
const Features = () => {
  return (
    <section className="my-purple py-2 text-white text-center">
      <h2 className="text-3xl font-bold mb-10">Features</h2>
      <div className="flex justify-center gap-8 mb-10">
        <FeatureCard faIconName={faLock} text="Feature 1" />
        <FeatureCard faIconName={faPuzzlePiece} text="Feature 2" />
        <FeatureCard faIconName={faClockRotateLeft} text="Feature 2" />
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
      <div className="relative flex">
        <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2">
          <ArrowLeft/>
        </button>
        <img src={images[currentImage]} alt="Screenshot" className="mx-auto rounded-lg" />
        <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2">
        <ArrowRight />
        </button>
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