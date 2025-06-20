import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { title, features, techStack, imageUrl, liveLink, githubLink } = project;

  return (
    <motion.div
      className="group h-full"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full bg-[var(--color-navy-light)]/50 border border-[var(--color-navy-lightest)]/20 rounded-lg overflow-hidden flex flex-col transition-all duration-300 group-hover:border-[var(--color-accent-base)]/30 group-hover:shadow-md">
        {/* Image */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-dark)] to-transparent opacity-70"></div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-[var(--color-white)] mb-3 group-hover:text-[var(--color-accent-base)] transition-colors">
            {title}
          </h3>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-xs font-mono text-[var(--color-accent-tint)] uppercase tracking-wider mb-2">Key Features</h4>
            <ul className="flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <li 
                  key={index}
                  className="px-2.5 py-1 bg-[var(--color-navy-lightest)]/10 text-[var(--color-slate-lightest)] text-xs rounded border border-[var(--color-navy-lightest)]/20"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="mt-auto">
            <h4 className="text-xs font-mono text-[var(--color-accent-tint)] uppercase tracking-wider mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-[var(--color-accent-base)]/10 text-[var(--color-accent-base)] text-xs font-mono rounded border border-[var(--color-accent-base)]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex  space-x-3 mt-4 pt-4 border-t border-[var(--color-navy-lightest)]/20">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${title}`}
                className="text-[var(--color-slate-light)] hover:text-[var(--color-accent-base)] transition-colors mr-8"
              >
                <FaGithub size={30} />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${title}`}
                className="text-[var(--color-slate-light)] hover:text-[var(--color-accent-base)] transition-colors"
              >
                <FaExternalLinkAlt size={28} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;