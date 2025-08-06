import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills: Skill[] = [
    // Frontend
    { name: "React", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Next.js", level: 80, category: "Frontend" },
    { name: "React Native", level: 75, category: "Frontend" },
    { name: "Flutter", level: 70, category: "Frontend" },

    // Backend
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "Express.js", level: 88, category: "Backend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "Java", level: 80, category: "Backend" },
    { name: "Spring Boot", level: 75, category: "Backend" },
    { name: "JSP/Servlets", level: 80, category: "Backend" },

    // Database & Cloud
    { name: "MongoDB", level: 85, category: "Tools" },
    { name: "PostgreSQL", level: 80, category: "Tools" },
    { name: "MySQL", level: 85, category: "Tools" },
    { name: "AWS (EC2, S3)", level: 75, category: "Tools" },
    { name: "Firebase", level: 80, category: "Tools" },
    { name: "Git", level: 95, category: "Tools" },
    { name: "Docker", level: 70, category: "Tools" },
    { name: "Vercel", level: 85, category: "Tools" }
  ];

  const categories = ["Frontend", "Backend", "Tools"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="card p-6"
            >
              <motion.h3
                variants={itemVariants}
                className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center"
              >
                {category}
              </motion.h3>

              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                          <motion.div
                            variants={progressVariants}
                            custom={skill.level}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full relative overflow-hidden"
                          >
                            {/* Shimmer effect */}
                            <motion.div
                              animate={{
                                x: ["-100%", "100%"]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "linear"
                              }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "HTML5", "CSS3", "SASS", "REST APIs", "JDBC", "JavaFX",
              "Postman", "Cloudinary", "Render", "Heroku", "Agile", "Scrum"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
