import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes product management, user authentication, and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://example.com/ecommerce',
    github: 'https://github.com/yourusername/ecommerce',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A productivity application that helps users manage tasks, set deadlines, and track progress. Features include drag-and-drop functionality and team collaboration.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    imageUrl: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://example.com/taskapp',
    github: 'https://github.com/yourusername/taskapp',
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description: 'A weather application that provides real-time weather data for cities around the world. Includes forecast visualization and location-based services.',
    tags: ['JavaScript', 'OpenWeather API', 'Chart.js'],
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://example.com/weather',
    github: 'https://github.com/yourusername/weather',
  },
  {
    id: 'project-4',
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my projects and skills. Built with modern web technologies and features a responsive design.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://example.com/portfolio',
    github: 'https://github.com/yourusername/portfolio',
  },
];