import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiChevronsRight } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

import profileImage from '../../assets/profile.jpeg';

const About = () => {
  const validCustomEase = [0.6, 0.05, 0.01, 0.9];

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8,
        ease: validCustomEase
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: validCustomEase
      }
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/irehan999', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rehan-irfan-183465280/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:irehan094@gmail.com', label: 'Email' },
  ];

  // Text colors
  const headingColor = "text-[var(--color-white)]";
  const subHeadingColor = "text-[var(--color-accent-tint)]";
  const paragraphColor = "text-[var(--color-slate-lightest)]";
  const strongTextColor = "text-[var(--color-accent-base)] hover:text-[var(--color-white)]";

  return (
    <motion.section
      id="about"
      className="section-theme-about overflow-hidden relative py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[var(--color-spring-green)] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 rounded-full bg-[var(--color-ocean-blue)] opacity-10 blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image with creative shape */}
          <motion.div 
            className="w-full lg:w-2/5 relative"
            variants={imageVariants}
          >
            <div className="relative group">
              {/* Creative clip-path shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-spring-green)] to-[var(--color-ocean-blue)] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out -rotate-6 group-hover:rotate-0 scale-95 group-hover:scale-100"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%)'
                }}
              ></div>
              
              <img
                src={profileImage}
                alt="Rehan Irfan - MERN Stack Developer"
                className="relative w-full h-auto object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transition-all duration-700 ease-out rotate-1 group-hover:rotate-0 shadow-2xl"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%)'
                }}
              />
            </div>

            {/* Social links with staggered animation */}
            <motion.div
              className="flex justify-center space-x-6 mt-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.4
                  }
                }
              }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-[var(--color-slate-lightest)] hover:text-[var(--color-accent-base)] transition-colors duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: validCustomEase
                      }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                >
                  <link.icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Text content with modern typography */}
          <motion.div 
            className="w-full lg:w-3/5"
            variants={containerVariants}
          >
            <motion.h4
              className={`font-mono ${subHeadingColor} text-lg tracking-wider mb-3`}
              variants={textVariants}
            >
              Get to Know Me
            </motion.h4>
            
            <motion.h2
              className={`${headingColor} text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8`}
              variants={textVariants}
            >
              About <span className="text-[var(--color-accent-base)]">Me</span>
            </motion.h2>

            <motion.div 
              className="space-y-6"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.p 
                className={`${paragraphColor} text-lg leading-relaxed`}
                variants={textVariants}
              >
                Hello! I'm Rehan, a passionate <strong className={strongTextColor}>Computer Science student</strong> with a deep-seated enthusiasm for building elegant, high-performance web applications.
              </motion.p>
              
              <motion.p 
                className={`${paragraphColor} text-lg leading-relaxed`}
                variants={textVariants}
              >
                Specializing in the <strong className={strongTextColor}>MERN stack</strong>, I focus on developing robust backend systems and intuitive frontend interfaces that deliver exceptional user experiences.
              </motion.p>
              
              <motion.p 
                className={`${paragraphColor} text-lg leading-relaxed`}
                variants={textVariants}
              >
                Beyond web development, I'm exploring <strong className={strongTextColor}>AI/ML</strong> and constantly expanding my skills to stay at the forefront of technology.
              </motion.p>
            </motion.div>

            <motion.div 
              className="mt-12"
              variants={textVariants}
            >
              <ScrollLink
                to="resume"
                smooth={true}
                duration={500}
                offset={-100}
                className="group relative inline-flex items-center overflow-hidden bg-[var(--color-accent-base)] text-[var(--color-navy-darkest)] hover:text-[var(--color-navy-darkest)] font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10">View My Resume</span>
                <FiChevronsRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" />
                <span className="absolute inset-0 bg-[var(--color-white)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </ScrollLink>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default About;