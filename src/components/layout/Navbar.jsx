import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const navLinkBase = "relative font-medium text-sm tracking-wide transition-colors duration-300 ease-out cursor-pointer";
  const navLinkClass = `${navLinkBase} text-slate-light hover:text-accent-base after:content-[''] after:absolute after:w-0 after:h-[2px] after:block after:bg-accent-base after:transition-all after:duration-300 after:ease-out after:-bottom-1 after:left-1/2 after:-translate-x-1/2 hover:after:w-full`;
  const activeNavLinkClass = `${navLinkBase} text-accent-base after:content-[''] after:absolute after:w-full after:h-[2px] after:block after:bg-accent-base after:-bottom-1 after:left-1/2 after:-translate-x-1/2`;

  const mobileNavLinkClass = "block w-full text-center py-3 text-base font-medium text-slate-lightest hover:text-accent-base hover:bg-navy-light transition-all duration-200 rounded-md";
  const activeMobileNavLinkClass = "block w-full text-center py-3 text-base font-medium text-accent-base bg-navy-light rounded-md";

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const validCustomEase = [0.6, 0.05, 0.01, 0.9];

  const logoVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: validCustomEase } }
  };

  const navItemParentVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: validCustomEase } }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: "0%", transition: { duration: 0.4, ease: validCustomEase } },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.3, ease: validCustomEase } }
  };

  // Define navbar heights
  const initialHeight = "h-20 md:h-24";
  const scrolledHeight = "h-16 md:h-16"; // Shorter height when scrolled

  // Define logo sizes
  const initialLogoSize = "text-5xl"; // Slightly reduced from 6xl to better fit initial height
  const scrolledLogoSize = "text-5xl"; // Smaller logo when scrolled

  // Determine current height and logo size based on scroll and mobile menu state
  // When mobile menu is open, we want to keep the initial height and logo size for better layout
  const currentHeight = isMobileMenuOpen ? initialHeight : (isScrolled ? scrolledHeight : initialHeight);
  const currentLogoSize = isMobileMenuOpen ? initialLogoSize : (isScrolled ? scrolledLogoSize : initialLogoSize);
  
  // Adjust scroll offset based on navbar height.
  // Using a base offset and adjusting if scrolled.
  // Scrolled height is h-16 (64px) or md:h-20 (80px).
  // Initial height is h-20 (80px) or md:h-24 (96px).
  // A common practice is to offset slightly more than the navbar height.
  // Let's try a dynamic offset.
  const scrollOffset = isMobileMenuOpen ? -100 : (isScrolled ? -80 : -100);


  return (
    <motion.header
      className={`fixed w-full top-0 z-[100] transition-all duration-300 ease-out
                  ${isMobileMenuOpen ? 'bg-navy-dark shadow-xl' : (isScrolled ? 'bg-navy-light/80 backdrop-blur-lg shadow-xl' : 'bg-transparent')}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: validCustomEase }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apply dynamic height here */}
        <div className={`flex items-center justify-between ${currentHeight} transition-height duration-300 ease-out`}>
          <motion.div variants={logoVariants} initial="hidden" animate="visible">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={scrollOffset} // Use dynamic scroll offset
              // Apply dynamic logo size here
              className={`${currentLogoSize} font-bold text-accent-base font-mono cursor-pointer group transition-font-size duration-300 ease-out`}
              onClick={() => isMobileMenuOpen && toggleMobileMenu()}
            >
              <motion.span
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="inline-block"
              >
                R
              </motion.span>
              <span className="text-slate-lightest group-hover:text-accent-tint transition-colors duration-300">.</span>
            </ScrollLink>
          </motion.div>

          <nav className="hidden md:flex items-center">
            <motion.ul className="flex items-center space-x-8" variants={navItemParentVariants} initial="hidden" animate="visible">
              {navItems.map((item) => (
                <motion.li key={item.id} variants={navItemVariants}>
                  <ScrollLink
                    to={item.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={scrollOffset} // Use dynamic scroll offset
                    className={navLinkClass}
                    activeClass={activeNavLinkClass}
                  >
                    {item.label}
                  </ScrollLink>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="p-2 text-slate-light hover:text-accent-base transition-colors z-[110] relative"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // Adjust pt if initialHeight changes significantly, pt-24 assumes initial h-20 (80px) or md:h-24 (96px)
            // If initialHeight is h-20 (80px), pt-20 would be directly below. pt-24 gives a little space.
            className={`md:hidden fixed inset-0 bg-navy-dark ${isScrolled ? 'pt-20' : 'pt-24'} pb-10 px-6 flex flex-col justify-between items-center z-[90]`}
          >
            <nav className="w-full">
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <ScrollLink
                      to={item.id}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={scrollOffset} // Use dynamic scroll offset
                      className={mobileNavLinkClass}
                      activeClass={activeMobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex space-x-6 mt-8">
              <a href="https://github.com/irehan999" target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-accent-base transition-colors" aria-label="GitHub"><FaGithub size={24}/></a>
              <a href="https://www.linkedin.com/in/rehan-irfan-183465280/" target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-accent-base transition-colors" aria-label="LinkedIn"><FaLinkedin size={24}/></a>
              <a href="mailto:irehan094@gmail.com" className="text-slate-light hover:text-accent-base transition-colors" aria-label="Email"><HiOutlineMail size={26}/></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;