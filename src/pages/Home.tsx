import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

import ahtImg from "../assets/aht.png";
import bffImg from "../assets/bff.png";
import holidazeImg from "../assets/holidaze.png";

const projects = [
  {
    title: "Holidaze",
    description:
      "A booking app for browsing and reserving venues, with admin tools for managing listings.",
    image: holidazeImg,
    link: "https://jenjoh.netlify.app/",
    github: "https://github.com/JennyJohnsby/holidaze",
    techStack: ["HTML", "CSS", "API", "Vite", "Tailwind", "JavaScript", "MPA"],
  },
  {
    title: "Bid For Forest",
    description:
      "An auction platform where users list and bid on items using credits. Built with TypeScript, TailwindCSS, and the Noroff Auction API.",
    image: bffImg,
    link: "https://bidforforest.netlify.app/",
    github: "https://github.com/JennyJohnsby/jenny-sp2",
    techStack: [
      "HTML",
      "CSS",
      "API",
      "TypeScript",
      "Vite",
      "Tailwind",
      "JavaScript",
      "MPA",
    ],
  },
  {
    title: "Arctic Husky Travelers",
    description:
      "A blog application that fetches posts from an API, featuring a carousel and individual article pages.",
    image: ahtImg,
    link: "https://jenny-exam-pe1.netlify.app/",
    github: "https://github.com/NoroffFEU/FED1-PE1-JennyJohnsby",
    techStack: ["HTML", "CSS", "API", "JavaScript", "MPA"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center bg-[var(--bg)] text-[var(--text)] gap-8"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.h1
        variants={item}
        className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4"
      >
        Hi, I’m <span className="text-[var(--accent)]">Jenny</span>{" "}
        <motion.span
          role="img"
          aria-label="waving hand"
          animate={{ rotate: [0, 20, -10, 20, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 4 }}
          className="inline-block origin-bottom"
        >
          👋
        </motion.span>
      </motion.h1>

      <motion.p
        variants={item}
        className="text-base md:text-lg leading-relaxed opacity-80 mb-10"
      >
        Frontend Developer | Building modern, responsive, and creative web
        experiences.
      </motion.p>

      <section className="w-full max-w-7xl text-center py-16 border-t border-[var(--border)]/30">
        <h2 className="text-2xl font-bold text-[var(--accent)] mb-8 text-center">
          Featured Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 justify-items-center">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex justify-center w-full max-w-[460px]"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/projects" className="btn px-6 py-3 hover-bounce">
            See All Projects
          </Link>
        </div>
      </section>

      <motion.section
        variants={item}
        className="w-full max-w-4xl text-center py-16 border-t border-[var(--border)]/30"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--accent)] mb-4">
          Let’s Connect
        </h2>
        <p className="text-base md:text-lg opacity-80 mb-8 max-w-2xl mx-auto">
          I’m always open to new opportunities and collaborations. You can{" "}
          <a
            href="mailto:jjohnsby.dev@gmail.com"
            className="text-[var(--accent)] font-medium underline hover:text-[var(--accent-light)] transition"
          >
            email me
          </a>{" "}
          directly, or head over to my contact page.
        </p>

        <Link to="/contact" className="btn px-6 py-3 hover-bounce">
          Go to Contact Page
        </Link>
      </motion.section>
    </motion.main>
  );
}