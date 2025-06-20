
// filepath: c:\Users\DELL\Desktop\portfolio\rehan_portfolio\src\components\sections\Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import {
  FaReact, FaNodeJs, FaServer, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, FaPhp, FaStripeS
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiRedux, SiReactrouter, SiJsonwebtokens, SiSocketdotio, SiPostman, SiCplusplus, SiDjango, SiMysql, SiCloudinary
} from 'react-icons/si';

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "JavaScript (ES6+)", icon: <FaJsSquare size={30} className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact size={30} className="text-sky-400" /> },
      { name: "Redux Toolkit", icon: <SiRedux size={30} className="text-purple-500" /> },
      { name: "React Router", icon: <SiReactrouter size={30} className="text-red-500" /> },
      { name: "HTML5", icon: <FaHtml5 size={30} className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt size={30} className="text-blue-600" /> },
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={30} className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress size={30} className="text-neutral-800 dark:text-white" /> }, // Keep dark mode explicit for Express icon
      { name: "Django", icon: <SiDjango size={30} className="text-green-700" /> },
      { name: "PHP", icon: <FaPhp size={30} className="text-indigo-400" /> },
      { name: "Socket.IO", icon: <SiSocketdotio size={30} className="text-neutral-800 dark:text-white" /> }, // Keep dark mode explicit
      { name: "RESTful APIs", icon: <FaServer size={30} className="text-slate-400" /> },
    ]
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={30} className="text-green-600" /> },
      { name: "MySQL", icon: <SiMysql size={30} className="text-sky-600" /> },
    ]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt size={30} className="text-orange-600" /> },
      { name: "Postman", icon: <SiPostman size={30} className="text-orange-500" /> },
      { name: "JWT", icon: <SiJsonwebtokens size={30} className="text-pink-500" /> },
      { name: "Cloudinary", icon: <SiCloudinary size={30} className="text-blue-500" /> },
      { name: "Stripe", icon: <FaStripeS size={30} className="text-indigo-500" /> },
    ]
  },
  {
    id: "otherLanguages",
    title: "Other Languages",
    skills: [
      { name: "C++", icon: <SiCplusplus size={30} className="text-blue-700" /> },
      { name: "Python", icon: <FaPython size={30} className="text-blue-400" /> },
    ]
  }
];

const Skills = () => {
  const validCustomEase = [0.6, 0.05, 0.01, 0.9];

  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: validCustomEase, delay: 0.1 } }
  };

  const categoryCardContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const categoryCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: validCustomEase }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: validCustomEase } }
  };

  // Colors for Skills section on navy/dark blue theme
  const headerTextColor = "text-[var(--color-white)]";
  const subHeaderTextColor = "text-[var(--color-accent-base)]"; // Accent for "techy" feel
  const cardBgColor = "bg-[var(--color-navy-lightest)]/70 backdrop-blur-md"; // Lighter navy for card, semi-transparent
  const cardTitleColor = "text-[var(--color-white)]";
  const cardBorderColor = "border-[var(--color-accent-base)]"; // Accent border
  const skillTextColor = "text-[var(--color-slate-lightest)] group-hover:text-[var(--color-accent-base)]";
  const skillItemHoverBg = "hover:bg-[var(--color-deep-space-blue)]/50"; // Darker hover for skill items
  // Skill icons retain their individual colors for visual distinction.

  return (
    <motion.section
      id="skills"
      className="section-theme-skills overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <Container>
        <motion.div className="text-center mb-12 md:mb-16" variants={sectionHeaderVariants}>
          <h4 className={`font-mono ${subHeaderTextColor} text-lg tracking-wider mb-2`}>My Technical Arsenal</h4>
          <h2 className={`h2-style !font-bold ${headerTextColor}`}>Technologies I Work With<span className="text-[var(--color-accent-base)]">.</span></h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={categoryCardContainerVariants}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              className={`${cardBgColor} p-6 rounded-xl shadow-xl flex flex-col`}
              variants={categoryCardVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2), 0 0 30px -5px var(--color-accent-base)", // Accent shadow
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <h3 className={`text-xl font-semibold ${cardTitleColor} mb-6 ${cardBorderColor} border-b-2 pb-3`}>
                {category.title}
              </h3>
              <motion.ul
                className="grid grid-cols-2 gap-x-4 gap-y-5 flex-grow"
                variants={{ visible: { transition: { staggerChildren: 0.05 }}}}
                initial="hidden"
                animate="visible"
              >
                {category.skills.map((skill) => ( // Direct mapping from category.skills
                  <motion.li
                    key={skill.name}
                    className={`flex items-center space-x-3 p-2 rounded-md ${skillItemHoverBg} transition-colors duration-200 group`}
                    variants={skillItemVariants}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {React.cloneElement(skill.icon, { size: 24 })}
                    </div>
                    <span className={`text-sm font-medium ${skillTextColor} transition-colors duration-200`}>
                      {skill.name}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Skills;