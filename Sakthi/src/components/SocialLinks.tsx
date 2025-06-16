import React from 'react';
import * as LucideIcons from 'lucide-react';
import { socialLinks } from '../data/social';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => {
        const IconComponent = LucideIcons[social.icon as keyof typeof LucideIcons];
        
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 
                    transition-transform hover:scale-110 duration-200"
            aria-label={social.name}
          >
            {IconComponent && <IconComponent size={24} />}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;