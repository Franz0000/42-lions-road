import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Tours from './components/Tours';
import Developer from './components/Developer';
import Album from './components/Album';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Album />
      <Tours />
      <Developer/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
