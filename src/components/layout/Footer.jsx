// filepath: c:\Users\DELL\Desktop\portfolio\rehan_portfolio\src\components\layout\Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Added FaEnvelope

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/irehan999', label: 'GitHub' }, // Updated
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rehan-irfan-183465280/', label: 'LinkedIn' }, // Updated
    { icon: FaEnvelope, href: 'mailto:irehan094@gmail.com', label: 'Email' } // Added Email
  ];

  return (
    <footer className="bg-[var(--color-navy-dark)] border-t border-[var(--color-navy-lightest)] py-8 text-[var(--color-slate-base)]"> {/* Updated classes */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> {/* Matched container width */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-[var(--color-slate-light)] hover:text-[var(--color-accent-base)] transition-colors duration-300" // Updated classes
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>
        <p className="text-sm">
          &copy; {currentYear} Rehan Irfan. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-[var(--color-slate-dark)]"> {/* Slightly muted text */}
          Designed & Built by Rehan Irfan
        </p>
      </div>
    </footer>
  );
};

export default Footer;