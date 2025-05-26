import React from 'react';
import { Server, Shield, Cpu, Network } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Network Security', icon: <Shield className="h-6 w-6 text-cyan-500" /> },
    { name: 'SIEM Systems', icon: <Server className="h-6 w-6 text-cyan-500" /> },
    { name: 'Vulnerability Assessment', icon: <Cpu className="h-6 w-6 text-cyan-500" /> },
    { name: 'Firewall Configuration', icon: <Network className="h-6 w-6 text-cyan-500" /> },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              I'm Akshatha Mundrathi, a Network Engineer with a passion for cybersecurity. With a strong foundation in network architecture and security protocols, I specialize in building and maintaining secure digital infrastructures.
            </p>
            <p className="text-gray-300 mb-4">
              My experience spans across various industries, implementing robust security measures, conducting vulnerability assessments, and ensuring compliance with industry standards.
            </p>
            <p className="text-gray-300">
              I believe in a proactive approach to cybersecurity, staying ahead of potential threats through continuous learning and adaptation to emerging technologies and security practices.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 shadow-xl">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Core Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                  <div className="mr-4">{skill.icon}</div>
                  <div>
                    <h4 className="text-white font-medium">{skill.name}</h4>
                    <div className="mt-2 w-full bg-gray-700 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-1.5 rounded-full" 
                        style={{ width: `${Math.floor(Math.random() * 20) + 80}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Certifications</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2"></span>
                  Fortinet  Network Security Expert 4(NSE4)
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2"></span>
                  Fortinet Network security Expert 7 (NSE7)
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2"></span>
                  Cisco Certified Network Associate(CCNA)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;