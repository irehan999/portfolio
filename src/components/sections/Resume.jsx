// filepath: c:\Users\DELL\Desktop\portfolio\rehan_portfolio\src\components\sections\Resume.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { FiDownloadCloud } from 'react-icons/fi';

const Resume = () => {
  const validCustomEase = [0.6, 0.05, 0.01, 0.9];
  const resumePdfPath = '/Rehan_Irfan_Resume.pdf'; // Ensure this PDF is in your /public folder

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: validCustomEase } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: validCustomEase, delay: 0.2 } },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px -5px var(--color-accent-base)", // Accent shadow
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { scale: 0.95 }
  };

  // Colors for Resume section on navy/steel-blue theme
  const headerTextColor = "text-[var(--color-white)]";
  const subHeaderTextColor = "text-[var(--color-accent-base)]"; // Accent for "techy" feel
  const paragraphColor = "text-[var(--color-slate-lightest)]";
  const accentDotColor = "text-[var(--color-accent-base)]";
  // Button: Accent background, dark text
  const buttonBgColor = "bg-[var(--color-accent-base)]";
  const buttonTextColor = "text-[var(--color-navy-darkest)]";
  const buttonHoverBgColor = "hover:bg-[var(--color-accent-shade)]";
  const buttonFocusRing = "focus:ring-[var(--color-accent-shade)]";

  return (
    <motion.section
      id="resume"
      className="section-theme-resume text-center overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Container>
        <motion.div variants={contentVariants}>
          <h4 className={`font-mono ${subHeaderTextColor} text-base md:text-lg tracking-wider mb-3`}>
            My Credentials
          </h4>
          <h2 className={`h2-style !font-bold ${headerTextColor} mb-6`}>
            Explore My Professional Journey<span className={accentDotColor}>.</span>
          </h2>
          <p className={`${paragraphColor} text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed`}>
            Interested in a more detailed look at my qualifications, experience, and projects? Download my full resume to learn more.
          </p>
        </motion.div>

        <motion.a
          href={resumePdfPath}
          download="Rehan_Irfan_Resume.pdf"
          className={`inline-flex items-center justify-center gap-3 ${buttonBgColor} ${buttonTextColor} 
                     font-semibold text-base md:text-lg py-3.5 px-8 md:px-10 rounded-md shadow-lg 
                     ${buttonHoverBgColor}
                     focus:outline-none focus:ring-2 ${buttonFocusRing} focus:ring-opacity-75`}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          style={{ transition: 'background-color 0.3s ease-out, box-shadow 0.3s ease-out, transform 0.2s ease-out' }}
        >
          <FiDownloadCloud size={22} />
          Download Resume
        </motion.a>
      </Container>
    </motion.section>
  );
};

export default Resume;