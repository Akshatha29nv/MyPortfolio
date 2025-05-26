import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Network Intrusion Detection System",
    description: "Developed a custom NIDS using machine learning algorithms to detect and classify unusual network traffic patterns. The system achieved a 97% accuracy rate in identifying potential security threats.",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Python", "Machine Learning", "Network Security", "TensorFlow"],
    github: "https://github.com",
    demo: "https://demo-link.com",
    featured: true
  },
  {
    title: "Enterprise Firewall Configuration Tool",
    description: "Created an automated tool for configuring and managing enterprise-level firewalls. The tool streamlines security policy implementation and reduces configuration errors by 85%.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["JavaScript", "React", "Node.js", "Network Security"],
    github: "https://github.com",
    featured: true
  },
  {
    title: "Vulnerability Assessment Dashboard",
    description: "Designed a comprehensive dashboard for visualizing and prioritizing security vulnerabilities across network infrastructure. Helps security teams efficiently allocate resources to critical issues.",
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Vue.js", "D3.js", "Data Visualization", "Risk Assessment"],
    github: "https://github.com",
    demo: "https://demo-link.com",
    featured: false
  },
  {
    title: "Secure VPN Implementation",
    description: "Implemented a secure VPN solution for a multinational corporation, ensuring encrypted communications across global offices. Includes multi-factor authentication and detailed access logging.",
    image: "https://images.pexels.com/photos/4960464/pexels-photo-4960464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Networking", "Encryption", "VPN", "Security Protocols"],
    featured: false
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 mb-8">
            A selection of cybersecurity and network engineering projects I've worked on.
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'all'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'featured'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 shadow-xl transition-all duration-300 hover:shadow-cyan-500/10 hover:translate-y-[-5px]"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-cyan-500 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gray-700 text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;