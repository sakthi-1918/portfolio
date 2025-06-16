import React from 'react';
import profile from '../assets/profile.jpeg';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-3 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Developer & Machine Learning Engineer
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-justify">
              <i>Final year BE CSE (AI & ML) student at PSG College of Technology.</i> Interested to work in the field of Machine learning, Cloud computing and Artificial Intelligence. Always on the lookout for new challenges and opportunities to further improve my knowledge and skills.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-justify">
              Strong in programming with intuitive problem solving skills and have experience in Machine Learning, Deep learning, Data science. Proficient in Java, Python, C and an intermediate in JavaScript.
              Process and apply new skills and concepts quickly. Passionate about Technology, implementing and coming out with new project. Ability to transfigure business requirements into technical solutions. Has excellent leadership skills along with good communication skills.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  <span className="text-gray-800 dark:text-gray-200">Based in New York, USA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  <span className="text-gray-800 dark:text-gray-200"><b>Degree: </b>Bachelor's</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  <span className="text-gray-800 dark:text-gray-200"><b>City: </b>Coimbatore, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  <span className="text-gray-800 dark:text-gray-200">Available for Freelance</span>
                </div>
              </div>
              
              <a 
                href="/Sakthi__S.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 self-start"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;