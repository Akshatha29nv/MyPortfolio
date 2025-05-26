import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education'; // Added Education import
import Footer from './components/Footer';

function App() {
  // Update document title
  useEffect(() => {
    document.title = "Akshatha Mundrathi | Network Engineer & Cybersecurity Specialist";
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education /> {/* Added Education component */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;