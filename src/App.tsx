import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
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
      <Experience />
      <Skills />
      <Certification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
