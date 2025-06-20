import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import ProjectCard from '../common/ProjectCard';
import eCommerceImage from '../../assets/image.png';

const myProjects = [
	{
		id: 1,
		title: 'Movie App',
		features: [
			'Search for movies',
			'Trending movies section',
			'Clickable cards with modal info',
		],
		techStack: ['React', 'Tailwind CSS', 'TMDB API', 'React Router'],
		imageUrl:
			'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
		liveLink: 'https://movie-app-tan-three.vercel.app/',
		githubLink: 'https://github.com/irehan999/movie_app',
	},
	{
		id: 2,
		title: 'E-commerce Backend',
		features: [
			'Product management',
			'User authentication',
			'Shopping cart',
			'Stripe integration',
			'Real-time updates with Socket.io',
		],
		techStack: ['Node.js', 'Express', 'Stripe', 'Socket.io'],
		imageUrl: eCommerceImage,
		liveLink: null,
		githubLink: 'https://github.com/irehan999/e-commerce-backend',
	},
	{
		id: 3,
		title: 'Video Streaming Backend',
		features: [
			'Video upload to Cloudinary',
			'JWT authentication',
			'User channels',
			'Content search and streaming',
		],
		techStack: ['Node.js', 'Express', 'JWT', 'Cloudinary'],
		imageUrl:
			'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBzdHJlYW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
		liveLink: null,
		githubLink: 'https://github.com/irehan999/node_videoStreaming_app',
	},
];

const Projects = () => {
	return (
		<motion.section
			id="projects"
			className="section-theme-projects py-16 md:py-24 relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.6 }}
		>
			{/* Decorative elements */}
			<div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
				<div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-[var(--color-accent-base)] opacity-10 blur-3xl"></div>
				<div className="absolute bottom-20 -right-20 w-64 h-64 rounded-full bg-[var(--color-spring-green)] opacity-10 blur-3xl"></div>
			</div>

			<Container className="relative z-10">
				{/* Section header */}
				<div className="text-center mb-12 md:mb-16">
					<motion.h4
						className="font-mono text-[var(--color-accent-base)] text-sm md:text-base tracking-wider mb-3"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
					>
						Featured Work
					</motion.h4>
					<motion.h2
						className="text-3xl md:text-5xl font-bold text-[var(--color-white)] mb-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						My{' '}
						<span className="text-[var(--color-accent-base)]">Projects</span>
					</motion.h2>
					<motion.div
						className="w-16 h-1 bg-[var(--color-accent-base)] mx-auto"
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
					></motion.div>
				</div>

				{/* Projects grid */}
				<motion.div
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: {
								staggerChildren: 0.15,
								delayChildren: 0.3,
							},
						},
					}}
				>
					{myProjects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</motion.div>

				{/* GitHub CTA */}
				<motion.div
					className="text-center mt-14"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
				>
					<a
						href="https://github.com/irehan999?tab=repositories"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-6 py-3 border-2 border-[var(--color-accent-base)] text-[var(--color-accent-base)] font-mono text-sm md:text-base rounded-full hover:bg-[var(--color-accent-base)] hover:text-[var(--color-navy-darkest)] hover:shadow-lg transition-all duration-300 group"
					>
						View All Projects
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							className="ml-2 transition-transform group-hover:translate-x-1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5 12H19M19 12L12 5M19 12L12 19"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
				</motion.div>
			</Container>
		</motion.section>
	);
};

export default Projects;