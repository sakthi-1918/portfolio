import React, { useEffect, useRef, useState } from 'react';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/skills';

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
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

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              My <span className="text-blue-600 dark:text-blue-400">Skills</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Technologies I work with
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeCategory === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory('frontend')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeCategory === 'frontend'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveCategory('backend')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeCategory === 'backend'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveCategory('tools')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeCategory === 'tools'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Tools
            </button>
            <button
              onClick={() => setActiveCategory('design')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeCategory === 'design'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Design
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={`${skill.name}-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;