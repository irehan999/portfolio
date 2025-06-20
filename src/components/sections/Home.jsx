import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { FiChevronsRight, FiArrowDownCircle } from 'react-icons/fi'; // Added FiArrowDownCircle for consistency if you want the scroll down arrow

const Home = () => {
  const validCustomEase = [0.6, 0.05, 0.01, 0.9];

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const textItemVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: validCustomEase, delay } }
  });

  const buttonGroupVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.8 } } // Matched delay from your code
  };
  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: validCustomEase } }
  };

  const nameGradientStyle = {
    background: `linear-gradient(90deg, var(--color-accent-base) 0%, var(--color-white) 50%, var(--color-accent-tint) 100%)`, // Using theme variables
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    backgroundSize: '250% 100%',
    animation: 'flowGradientText 7s linear infinite',
    color: 'transparent', // Fallback
  };

  const subHeadlineString = "MERN Developer | Backend Focused | AI Enthusiast";
  const subHeadlineWords = subHeadlineString.split(' ');

  const wordWrapperVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5, // Matched delay from your code
        staggerChildren: 0.08,
      },
    },
  };

  const wordEntranceVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(3px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: validCustomEase },
    },
  };

  const wordGradientStyles = [
    `linear-gradient(90deg, var(--color-accent-base) 0%, var(--color-white) 50%, var(--color-accent-tint) 100%)`,
    `linear-gradient(90deg, var(--color-accent-tint) 0%, var(--color-white) 50%, var(--color-accent-base) 100%)`,
    `linear-gradient(90deg, var(--color-slate-lightest) 0%, var(--color-accent-base) 50%, var(--color-white) 100%)`,
  ];

  return (
    <motion.section // Changed section to motion.section for consistency if parentVariants are on it
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden pt-24 md:pt-0 section-theme-home" // Applied new theme
      variants={parentVariants} // Added parentVariants here
      initial="hidden"
      animate="visible"
    >
      <Container className="relative z-10 flex flex-col items-center"> {/* Added flex flex-col items-center to Container for centering content */}
        <motion.div // This div was in your original structure, keeping it for consistency
          className="max-w-4xl mx-auto"
          // variants={parentVariants} // parentVariants moved to section
          // initial="hidden"
          // animate="visible"
        >
         <motion.p
            className="font-mono text-[var(--color-accent-base)] text-sm md:text-base lg:text-lg mb-3 tracking-wide" // Adjusted base size
            variants={textItemVariants(0)} 
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight"
            variants={textItemVariants(0.1)} // Delay from your code
            style={nameGradientStyle}
          >
            Rehan Irfan
          </motion.h1>

          <motion.h2
            className="text-base min-[420px]:text-lg sm:text-xl md:text-3xl font-medium mb-6 leading-snug cursor-pointer sm:whitespace-nowrap"

            variants={wordWrapperVariants} // wordWrapperVariants for the h2 itself
            // initial="hidden" // Handled by parent
            // animate="visible" // Handled by parent
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          >
            {subHeadlineWords.map((word, index) => {
              const isSeparator = word === "|";
              const selectedGradient = wordGradientStyles[index % wordGradientStyles.length];

              if (isSeparator) {
                return (
                  <motion.span
                    key={word + index}
                    variants={wordEntranceVariants}
                    className="text-[var(--color-slate-dark)] !text-opacity-70 font-light mx-1 sm:mx-2"
                    style={{ display: 'inline-block' }}
                  >
                    {word}
                  </motion.span>
                );
              }

              return (
                <React.Fragment key={word + index}>
                  <motion.span
                    variants={wordEntranceVariants}
                    style={{
                      display: 'inline-block',
                      background: selectedGradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                      backgroundSize: '300% 100%',
                      color: 'transparent',
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "300% 50%"],
                    }}
                    transition={{
                      duration: 6 + (index % 3) * 0.5,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 0.5 + index * 0.1, // Stagger start of continuous animation from your code
                    }}
                  >
                    {word}
                  </motion.span>
                  {index < subHeadlineWords.length - 1 && ' '}
                </React.Fragment>
              );
            })}
          </motion.h2>

          <motion.p
            className="text-[var(--color-slate-light)] text-lg sm:text-xl mb-10 max-w-2xl mx-auto"
            variants={textItemVariants(0.4)} // Delay from your code
          >
            Passionate about building robust backends, intuitive user experiences, and exploring the frontiers of AI to craft impactful digital solutions.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-5 justify-center" variants={buttonGroupVariants}>
            <motion.div variants={buttonVariants}> {/* Individual button variant */}
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-80} // Your offset
                className="group cursor-pointer inline-flex items-center justify-center bg-[var(--color-accent-base)] text-[var(--color-navy-dark)] hover:bg-[var(--color-accent-shade)] 
                             font-semibold py-3.5 px-10 rounded-md shadow-lg hover:shadow-[var(--shadow-accent)]
                             transition-all duration-300 ease-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-shade)] focus:ring-opacity-50"
              >
                View My Work
                <FiChevronsRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </ScrollLink>
            </motion.div>
            <motion.div variants={buttonVariants}> {/* Individual button variant */}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80} // Your offset
                className="group cursor-pointer inline-flex items-center justify-center bg-[color-mix(in_srgb,var(--color-navy-light)_50%,transparent)] text-[var(--color-accent-base)] border-2 border-[var(--color-accent-base)] hover:bg-[color-mix(in_srgb,var(--color-accent-base)_15%,transparent)] hover:text-[var(--color-accent-tint)]
                             font-semibold py-3.5 px-10 rounded-md shadow-md hover:shadow-lg
                             transition-all duration-300 ease-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-base)] focus:ring-opacity-50"
              >
                Get In Touch
              </ScrollLink>
            </motion.div>
          </motion.div>
        </motion.div> {/* End of max-w-4xl div */}

        

      </Container>
    </motion.section>
  );
};

export default Home;