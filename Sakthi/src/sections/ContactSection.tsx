import React, { useEffect, useRef } from 'react';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
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
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Have a project in mind? Let's talk!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-10 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 dark:text-blue-400 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                      your.email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 dark:text-blue-400 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Phone</h4>
                    <a href="tel:+1234567890" className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 dark:text-blue-400 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Location</h4>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      New York, USA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect with me</h4>
                <SocialLinks />
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-10 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;