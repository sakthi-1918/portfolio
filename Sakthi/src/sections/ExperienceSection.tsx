import React, { useEffect, useRef } from 'react';
import ExperienceItem from '../components/ExperienceItem';
import { experiences } from '../data/experience';

const ExperienceSection: React.FC = () => {
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
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              My professional journey
            </p>
          </div>
          
          <div className="mt-12">
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;