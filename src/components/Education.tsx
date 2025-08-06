import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            My academic journey reflects a strong foundation in science and a deep 
            curiosity for technology, especially <span className="text-blue-600 dark:text-blue-400 font-semibold">AI and software development</span>.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>

            {/* Education Item */}
            <div className="relative flex items-start space-x-6 pb-8">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="relative z-10 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Matriculation (Computer)
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Expected 2025</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-600 font-semibold">The Citizens Foundation</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Currently pursuing matriculation with a focus on <strong>Science & Technology</strong>.  
                  Alongside academics, I actively engage in <strong>web development, AI experiments, and 
                  self-directed coding projects</strong> to strengthen my technical skills.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    'Science Stream',
                    'Tech-Oriented Learning',
                    'Early AI & Web Development Focus',
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Future Goals */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700 shadow-md"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Future Academic Goals
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                I aim to pursue higher education in 
                <strong> Computer Science & Artificial Intelligence</strong>, 
                focusing on building innovative solutions, advanced web applications, and 
                intelligent systems that make a real-world impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
