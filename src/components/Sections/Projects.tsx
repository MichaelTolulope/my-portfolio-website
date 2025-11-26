import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import troco from '../../assets/troco.png'
import suhstei from '../../assets/suhstei.png'
import star_taskz from '../../assets/star-taskz.png'
import mydahsoft from '../../assets/mydahsoft.png'
import tedlab from '../../assets/tedlab.png'
import dwm from '../../assets/dwm.png'

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
}

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Task & Project Management Solution Backend",
      description: "A comprehensive task and project management web app with real-time updates, user roles, and notifications. Built to streamline task assignment, progress tracking, and team collaboration.",
      image: star_taskz,
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "Open AI"],
      githubUrl: "https://github.com/MichaelTolulope/star-taskz-backendv2",
      liveUrl: "https://star-taskz.vercel.app",
      category: "backend"
    },
    {
      id: 2,
      title: "Suhstei",
      description: "Connect with fellow book lovers. Lend, borrow, and gift books in your neighborhood. Turn your bookshelf into a community library.",
      image: suhstei,
      technologies: ["React js", "NodeJs", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com/dejetem/bookworm-client",
      liveUrl: "https://bookworm-client.onrender.com",
      category: "fullstack"
    },
    {
      id: 3,
      title: "Quick Basket",
      description: "A fully functional online store for food with product listings, shopping cart, payment integration, and admin panel for inventory management.",

      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com/michaelolagnju",
      liveUrl: "https://ecommerce-demo.com",
      category: "fullstack"
    },
    {
      id: 4,
      title: "Troco Escro App",
      description: "This software makes sure that your transactions are easy and your money is safe with its user-friendly UI, cutting-edge security measures, and smooth experience.",
      image: troco,
      technologies: ["Next Js", "Flutter"],
      githubUrl: "https://github.com/MichaelTolulope/troco-admin",
      liveUrl: "https://www.troco.ng",
      category: "frontend"
    },
    {
      id: 5,
      title: "Mydahsoft Academy Learning Management System (LMS)",
      description: "A comprehensive LMS platform with course management, student tracking, content delivery, and progress analytics for educational institutions.",
      image: mydahsoft,
      technologies: ["Wordpress", "WooCommerce", "Paystack"],
      githubUrl: "https://github.com/MichaelTolulopes",
      liveUrl: "https://mydahsoftacademy.com",
      category: "fullstack"
    },
    {
      id: 6,
      title: "NGO Website Platform",
      description: "Multiple NGO websites built for awareness campaigns, donation management, and volunteer coordination with CMS integration and responsive design.",

      technologies: ["React", "Next.js", "Strapi CMS", "PayPal API", "Vercel"],
      githubUrl: "https://github.com/michaelolagnju",
      liveUrl: "https://ngo-demo.com",
      category: "frontend"
    },
    {
      id: 7,
      title: "Ted Lab Website",
      description: "A company that offers varieties of tech services.",
      image: tedlab,
      technologies: ["React", "Next.js", "Vercel"],
      githubUrl: "https://github.com/MichaelTolulope",
      liveUrl: "#",
      category: "frontend"
    },
    {
      id: 8,
      title: "Ted Finance",
      description: "A multi currency fintech solution Start-up",

      technologies: ["React", "Next.js"],
      githubUrl: "https://github.com/MichaelTolulope",
      liveUrl: "#",
      category: "frontend"
    },
    {
      id: 9,
      title: "DWM Church Website",
      description: "A church website.",
      image: dwm,
      technologies: ["React", "Supabase"],
      githubUrl: "https://github.com/MichaelTolulope",
      liveUrl: "https://dwm-globe.onrender.com",
      category: "fullstack"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

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
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${filter === category.id
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white'
                }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              className="card card-hover group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <div className="relative overflow-hidden rounded-t-2xl">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title || "Project Image"}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                    </div>
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <Eye size={20} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-6 p-4 rounded-xl 
  bg-gray-100/70 dark:bg-white/5 
  border border-gray-300/50 dark:border-white/10 
  text-sm text-gray-600 dark:text-gray-300 
  backdrop-blur">
          <p className="leading-relaxed">
            Note: Some projects have no images, live demos, or repo links because they
            are not yet launched or protected under NDA. Thanks for your understanding.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
