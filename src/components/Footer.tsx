import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-cyan-500 mr-2" />
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Akshatha Mundrathi
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <nav className="flex justify-center space-x-6">
              <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a>
              <a href="#experience" className="text-gray-400 hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Akshatha Mundrathi. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Securing networks and protecting digital infrastructures.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;