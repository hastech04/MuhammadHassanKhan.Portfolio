import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Globe, User } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'Saylani Welfare Chatbot',
      description:
        'An intelligent chatbot built with Dialogflow to assist users with Saylani Welfare services. Features natural language processing, multi-intent recognition, and seamless integration with Kommunicate.',
      image:
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Dialogflow', 'Kommunicate', 'JavaScript', 'NLP'],
      icon: Bot,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Saylani Welfare Website',
      description:
        'A comprehensive website for Saylani Welfare organization featuring responsive design, user-friendly interface, and integrated chatbot support for enhanced user experience.',
      image:
        'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      icon: Globe,
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing my skills, projects, and experience. Built with React and Tailwind CSS, featuring smooth animations and dark mode support.',
      image:
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      icon: User,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development
            and AI chatbot creation.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500
                        bg-white/20 dark:bg-gray-800/30 backdrop-blur-md border border-gray-200/40 dark:border-gray-700/40"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity`}
                ></div>
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg">
                    <project.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100/70 dark:bg-gray-800/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
