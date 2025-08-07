import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa?: string;
}

const Resume: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences: Experience[] = [
    {
      title: "IT Executive",
      company: "OTL AFRICA DOWNSTREAM",
      location: "Nigeria",
      period: "2025 - Present",
      description: [
        "Provided comprehensive IT support within the office, ensuring smooth system operations",
        "Managed and maintained the company website, improving functionality and performance",
        "Developed new websites and internal software solutions to optimize company processes",
        "Implemented security measures and system upgrades to enhance operational efficiency"
      ],
      technologies: ["Web Development", "System Administration", "Database Management", "IT Support"]
    },
    {
      title: "Software Engineer Intern",
      company: "TEDFINANCE",
      location: "Nigeria",
      period: "2025 - Present",
      description: [
        "Collaborated on the development of fintech applications, eCommerce platforms, and business solutions",
        "Designed and developed secure, high-performance software solutions for financial transactions",
        "Worked closely with cross-functional teams to build scalable applications",
        "Implemented best practices for secure coding and financial data handling"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Security Protocols", "Fintech APIs"]
    },
    {
      title: "Web Developer",
      company: "MYDAHSOFT ICT Ltd.",
      location: "Nigeria",
      period: "2024 - 2025",
      description: [
        "Built and deployed web solutions tailored to client needs",
        "Collaborated with teams to design scalable and secure web applications",
        "Implemented frontend and backend functionalities using modern technologies",
        "Delivered multiple projects including e-commerce platforms and business websites"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript"]
    },
    {
      title: "Programming Instructor",
      company: "NIIT",
      location: "Nigeria",
      period: "Aug 2023 - Oct 2024",
      description: [
        "Taught programming fundamentals and advanced concepts through interactive lessons",
        "Guided students in building real-world projects in Java, JavaScript, Python, and SQL",
        "Helped students understand data structures, algorithms, and best practices",
        "Mentored over 100+ students in their programming journey"
      ],
      technologies: ["Java", "JavaScript", "Python", "SQL", "Teaching", "Curriculum Development"]
    }
  ];

  const education: Education[] = [
    {
      degree: "BSc. Computer Science",
      school: "Miva Open University",
      location: "Nigeria",
      period: "May 2025 - Ongoing",
      gpa: "In Progress"
    },
    {
      degree: "Professional Diploma in Full Stack Development (Software Engineering)",
      school: "NIIT",
      location: "Nigeria",
      period: "Jan 2022 - March 2024",
      gpa: "Completed"
    }
  ];

  const handleDownloadResume = () => {
    // In a real application, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume file
    link.download = 'Your_Name_Resume.pdf';
    link.click();
  };

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="resume" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my professional experience, education, and skills.
          </p>
          
          <motion.button
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg mr-3"></div>
              Professional Experience
            </motion.h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-6 relative"
                >
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-accent opacity-30"></div>
                  )}
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <div className="flex items-center text-primary font-medium mt-1">
                        <ExternalLink size={16} className="mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
                      <div className="flex items-center md:justify-end">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center md:justify-end mt-1">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg mr-3"></div>
                Education
              </h3>
              
              {education.map((edu, index) => (
                <div key={index} className="card p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <div className="text-primary font-medium mb-2">{edu.school}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {edu.location}
                    </div>
                    {edu.gpa && (
                      <div className="text-gray-700 dark:text-gray-300 font-medium">
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg mr-3"></div>
                Certifications
              </h3>
              
              <div className="space-y-4">
                {[
                  "NIIT Full Stack Development Certificate",
                  "Java Programming Certification",
                  "Web Development Professional",
                  "Database Management Systems"
                ].map((cert) => (
                  <motion.div
                    key={cert}
                    whileHover={{ x: 5 }}
                    className="card p-4 cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-br from-primary to-accent rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
