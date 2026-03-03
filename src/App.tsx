import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Philosophy from "@/components/Philosophy";
import Experience from "@/components/Experience";
import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0D1117]">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Philosophy />
      <Experience />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
