import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example Education Item 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Master of Science in Computer Science</h3>
            <p className="text-gray-400 mb-1">Oklahoma city University </p>
            <p className="text-gray-500 text-sm mb-3">Graduated: December 2021</p>
            <p className="text-gray-300">
              Focused on Network Security and Cybersecurity, with coursework in advanced network protocols, security architecture, and risk management.
              Built the foundation for a career in network engineering and cybersecurity through hands-on projects and research.
              Held a graduate research assistantship, contributing to research on network security protocols and vulnerability assessments.
              Developed a strong understanding of network design, implementation, and security best practices.
              Achieved Certifications in Fortinet Network Security Expert 4 (NSE4) and Cisco Certified Network Associate (CCNA).
            </p>
          </div>

          {/* Example Education Item 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Software Engineering</h3>
            <p className="text-gray-400 mb-1">Malla Reddy Engineering College</p>
            <p className="text-gray-500 text-sm mb-3">Graduated: May 2018</p>
            <p className="text-gray-300">
                Core curriculum in software development, algorithms, and database management.
                Developed strong programming skills in languages such as Java, Python, and C++.
                Completed projects in software design and development, including a capstone project on secure software development practices.
                Participated in internships focused on software development and testing, gaining practical experience in the industry.
                Engaged in extracurricular activities, including coding competitions and software development workshops, to enhance technical skills.
                Held leadership roles in student organizations, fostering teamwork and collaboration.
                
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;