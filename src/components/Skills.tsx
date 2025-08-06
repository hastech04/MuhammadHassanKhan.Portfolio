import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Bot, Palette, Database, Globe, MessageSquare, Users, 
  Lightbulb, Server, GitBranch, Cloud, Cpu, Rocket 
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const technicalSkills = [
    { name: 'Web Designing (UI/UX)', icon: Palette, level: 90, color: 'bg-blue-500' },
    { name: 'HTML & CSS', icon: Globe, level: 95, color: 'bg-orange-500' },
    { name: 'JavaScript / TypeScript', icon: Code, level: 85, color: 'bg-yellow-500' },
    { name: 'React & Tailwind CSS', icon: Rocket, level: 85, color: 'bg-cyan-500' },
    { name: 'Node.js & Express', icon: Server, level: 75, color: 'bg-green-600' },
    { name: 'MongoDB & Database Design', icon: Database, level: 80, color: 'bg-green-500' },
    { name: 'Git & GitHub', icon: GitBranch, level: 85, color: 'bg-gray-600' },
    { name: 'Hosting (Vercel / Netlify)', icon: Cloud, level: 70, color: 'bg-indigo-500' },
    { name: 'VS Code & Dev Tools', icon: Code, level: 90, color: 'bg-blue-600' },
    { name: 'Dialogflow Chatbot Design', icon: Bot, level: 85, color: 'bg-green-500' },
    { name: 'Kommunicate Integration', icon: MessageSquare, level: 80, color: 'bg-purple-500' },
    { name: 'Google Gemini API / AI Bots', icon: Cpu, level: 70, color: 'bg-pink-500' },
  ];

  const softSkills = [
    { name: 'Communication', icon: MessageSquare, description: 'Effective verbal and written communication' },
    { name: 'Teamwork & Leadership', icon: Users, description: 'Collaborative work and guiding teams' },
    { name: 'Problem-solving', icon: Lightbulb, description: 'Analytical thinking and creative solutions' },
    { name: 'Adaptability', icon: Rocket, description: 'Quick learning and flexibility in dynamic projects' },
    { name: 'Creativity & Innovation', icon: Palette, description: 'Designing unique and impactful solutions' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A blend of technical expertise, creative problem-solving, and soft skills to deliver complete digital solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                        <skill.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      className={`h-2 rounded-full ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Soft Skills
            </h3>
            
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Currently Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Bot className="w-5 h-5 mr-2 text-blue-600" />
                Currently Learning
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Advanced AI Chatbot Development with Dialogflow, Gemini AI, MongoDB & Cloud Integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                  Natural Language Processing
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                  Conversational AI
                </span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm font-medium">
                  Cloud Webhooks
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
