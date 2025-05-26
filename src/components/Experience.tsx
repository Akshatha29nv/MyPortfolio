import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: " Network Engineer",
    company: "Braums Ice Cream and Dairy Stores",
    location: "oklahoma city , OK",
    period: "2022 - Present",
    description: [
      "Lead a team of security professionals in implementing and maintaining network security infrastructure",
      "Conduct regular security assessments and penetration testing to identify vulnerabilities",
      "Develop and implement security policies and procedures in line with industry standards and best practices",
      "Respond to and mitigate security incidents, performing root cause analysis and implementing preventive measures"
    ],
    tags: ["Network Security", "cloud Infrastructure", "SAML", "Incident Response","Access Control","Active Directory"]
  },
  {
    title: "ReactJS Developer",
    company: "Visa Inc.",
    location: "Denver, CO",
    period: "2021 - 2022",
    description: [
      "Designed and implemented projects for banking clients",
      "Developed and maintained web applications using ReactJS",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Participated in code reviews and provided constructive feedback to team members",
      "Implemented responsive design principles to ensure optimal user experience across devices"

    ],
    tags: ["Front-end developer", "API", "ReactJs", "JavaScript", "Responsive Design", "Agile Methodologies"]
  },
  {
    title: "IT Network Trainee",
    company: "Netomates Ltd.",
    location: "oklahoma city, OK",
    period: "2021 - 2022",
    description: [
      "Monitored network traffic for security threats and anomalies",
      "Implemented security controls and countermeasures to protect organizational assets",
      "Conducted security awareness training for employees",
      "Assisted in developing disaster recovery and business continuity plans"
    ],
    tags: ["Security Monitoring", "Access Control", "Security Training", "Disaster Recovery"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Professional Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300">
            My journey in the field of network engineering and cybersecurity.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-cyan-500/30 pl-8 ml-4 space-y-10">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700 shadow-xl transition-transform duration-300 hover:scale-[1.01]"
              >
                <div className="absolute -left-12 bg-gray-800 rounded-full p-2 border-2 border-cyan-500">
                  <div className="h-4 w-4 bg-cyan-500 rounded-full"></div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <h4 className="text-lg text-cyan-400">{exp.company}</h4>
                  </div>
                  <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                    <div className="flex items-center text-gray-400 mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="mb-4 space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-cyan-500 mr-2">▹</span>
                      {desc}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;