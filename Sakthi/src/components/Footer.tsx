import React from 'react';
import { Heart } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Sakthi Sangameswaran</h3>
              <p className="text-gray-400">Developer & Machine Learning Engineer</p>
            </div>
            
            <SocialLinks />
          </div>
          
          <hr className="border-gray-800 my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © {currentYear} Sakthi Sangameswaran. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          {/* <div className="text-center mt-8">
            <p className="text-gray-500 text-sm flex items-center justify-center">
              Built with <Heart size={14} className="mx-1 text-red-500" /> using React & Tailwind CSS
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;