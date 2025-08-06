import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/hastech04", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hassan-khan-ba28532b0/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BzHPXV%2BQZSmqv01FxR6%2FH%2FA%3D%3D", color: "hover:text-blue-400" },
    { icon: Instagram, href: "https://instagram.com/yourusername", color: "hover:text-pink-500" },
    { icon: Mail, href: "mailto:hassanrustam009@gmail.com", color: "hover:text-red-400" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* About / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">Muhammad Hassan Khan</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Crafting modern web experiences and intelligent solutions with AI and cutting-edge technologies.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${social.color}`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span>Made by Muhammad Hassan Khan</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Coffee className="w-4 h-4 text-yellow-500" />
                <span>Fueled by passion & coffee</span>
              </div>
            </div>
            
            <div className="mt-4 text-xs text-gray-500">
              © {currentYear} Muhammad Hassan Khan. All rights reserved.
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
