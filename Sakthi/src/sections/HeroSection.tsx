import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 opacity-0 transition-opacity duration-1000">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sakthi Sangameswaran</span></span>
            <span className="block mt-2">I build things for the web</span>
          </h1>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            I'm a passionate front-end developer specializing in creating exceptional digital experiences.
            Currently focused on building accessible, human-centered products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-700 transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
          
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ChevronDown size={32} className="text-gray-700 dark:text-gray-300" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;