import React from 'react';
import { Github, Linkedin, FileText, ShieldCheck } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
      
      <div className="container mx-auto px-4 z-20 py-20 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Akshatha Mundrathi
            </span>
          </h1>
          <div className="flex items-center justify-center mb-6">
            <ShieldCheck className="h-6 w-6 text-cyan-500 mr-2" />
            <h2 className="text-xl md:text-2xl font-medium text-gray-300">
              Network Engineer & Cybersecurity Specialist
            </h2>
          </div>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Securing networks and protecting digital infrastructures with advanced cybersecurity solutions.
            Experienced in threat detection, vulnerability assessment, and implementing robust security protocols.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border border-cyan-500 text-cyan-400 rounded-md hover:bg-cyan-500/10 transition-all"
            >
              Contact Me
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://drive.google.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Resume"
            >
              <FileText size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;