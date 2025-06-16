import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 
                  before:bg-blue-600 dark:before:bg-blue-500 before:rounded-full before:z-10
                  after:content-[''] after:absolute after:left-[7px] after:top-6 after:bottom-0 after:w-0.5 
                  after:bg-gray-300 dark:after:bg-gray-700 last:after:hidden">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.position}</h3>
      <div className="text-md font-medium text-blue-600 dark:text-blue-400 mb-1">{experience.company}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">{experience.duration}</div>
      <p className="text-gray-700 dark:text-gray-300">{experience.description}</p>
    </div>
  );
};

export default ExperienceItem;