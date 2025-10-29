import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';
import me from '../../assets/me.jpeg'

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user interfaces with attention to detail."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating technical concepts clearly."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative">
              {/* Profile Image Placeholder */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent p-1"
              >
                <div className="w-full h-full overflow-hidden rounded-2xl bg-gray-200 dark:bg-dark-700 flex items-start justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-lg">
                    <img src={me} alt=""  className='object-cover w-full h-full'/>
                  </span>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              >
                About <span className="gradient-text">Me</span>
              </motion.h2>
              
              <motion.div
                variants={itemVariants}
                className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                <p>
                  I'm an experienced full-stack developer with a passion for building innovative
                  web and mobile applications. With expertise in modern technologies like React,
                  Node.js, Python, and cloud platforms, I enjoy turning complex business requirements
                  into scalable, user-friendly solutions.
                </p>

                <p>
                  My journey spans from teaching programming fundamentals at NIIT to developing
                  fintech applications and e-commerce platforms. I've worked across various domains
                  including education, finance, and business solutions, always focusing on delivering
                  high-quality, secure, and performant applications.
                </p>

                <p>
                  Currently pursuing my BSc in Computer Science while working as an IT Executive
                  and Software Engineer Intern, I'm committed to continuous learning and staying
                  at the forefront of technology trends to drive innovation in every project.
                </p>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 py-6"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">4</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Companies Worked</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card card-hover p-6 text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white group-hover:shadow-lg transition-all duration-300"
              >
                <feature.icon size={28} />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
