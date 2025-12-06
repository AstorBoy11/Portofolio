import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certification from './components/certification';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Certification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
