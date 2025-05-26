import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300">
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700 shadow-xl">
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-cyan-500" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Email</h4>
                  <a href="mailto:akshatha@example.com" className="text-white hover:text-cyan-400 transition-colors">
                    akshatha.mundrathi2931@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-cyan-500" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Phone</h4>
                  <p className="text-white">(405) 570-3584</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-cyan-500" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Location</h4>
                  <p className="text-white">oklahoma city, oklahoma</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Akshatha29nv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg text-gray-300 hover:text-cyan-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="www.linkedin.com/in/akshatha-ui" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg text-gray-300 hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://drive.google.com/file/d/1OCu1_8P1ubHbkIg3SxtbO04LkrlYUUtx/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg text-gray-300 hover:text-cyan-400 transition-colors"
                  aria-label="Resume"
                >
                  <FileText className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700 shadow-xl">
            <h3 className="text-xl font-semibold mb-6 text-white">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="button"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;