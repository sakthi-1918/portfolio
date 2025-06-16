import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const IconComponent = LucideIcons[skill.icon as keyof typeof LucideIcons];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3">
      {IconComponent && (
        <div className="text-blue-600 dark:text-blue-400">
          <IconComponent size={24} />
        </div>
      )}
      <span className="font-medium text-gray-800 dark:text-white">{skill.name}</span>
    </div>
  );
};

export default SkillCard;