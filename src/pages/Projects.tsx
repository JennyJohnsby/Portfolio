import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

import placeholderImg from "../assets/placeholder.jpg"; // ✅ single placeholder for all

const projects = [
  {
    title: "Holidaze",
    description:
      "A booking app for browsing and reserving venues, with admin tools for managing listings.",
    image: placeholderImg,
    link: "https://jenjoh.netlify.app/",
    techStack: ["HTML", "CSS", "API", "Vite", "Tailwind", "JavaScript", "MPA"],
  },
  {
    title: "Bid For Forest",
    description:
      "An auction platform where users list and bid on items using credits. Built with TypeScript, TailwindCSS, and the Noroff Auction API.",
    image: placeholderImg,
    link: "https://bidforforest.netlify.app/",
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
    image: placeholderImg,
    link: "https://jenny-exam-pe1.netlify.app/",
    techStack: ["HTML", "CSS", "API", "JavaScript", "MPA"],
  },
  {
    title: "Rainy Days",
    description:
      "An online store that fetches products from an API with filtering, shopping basket, and dynamic functionality.",
    image: placeholderImg,
    link: "https://cross-cours-jenjoh.netlify.app/",
    techStack: ["HTML", "CSS", "API", "JavaScript", "MPA"],
  },
  {
    title: "Mystic Market",
    description:
      "An e-commerce app built with React and TypeScript. Includes search, sorting, cart with checkout, and contact form validation.",
    image: placeholderImg,
    link: "https://jsf-m9htew6n1-jennyjohnsbys-projects.vercel.app/",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind",
      "API",
      "Vite",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Petagram",
    description:
      "A social media app with CRUD posts, comments, emoji reactions, and user following features.",
    image: placeholderImg,
    link: "https://petagramtailwindcss.netlify.app/",
    techStack: ["HTML", "CSS", "API", "Vite", "Tailwind", "JavaScript", "MPA"],
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

export default function Projects() {
  return (
    <motion.main
      className="min-h-screen px-6 py-12 bg-[var(--bg)]"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.h1
        variants={item}
        id="projects-heading"
        className="text-3xl md:text-5xl font-bold text-center text-[var(--text)] mb-6"
      >
        My Projects
      </motion.h1>

      <motion.p
        variants={item}
        className="text-center text-[var(--nav-text)] max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed"
      >
        Each project has helped me grow as a developer, from learning responsive
        layouts to mastering APIs, TypeScript, and modern frameworks. These
        experiences strengthened my technical skills, improved my problem-solving,
        and deepened my focus on clean, user-friendly design. I’m excited to keep
        learning by exploring advanced React features, backend integration, and
        building scalable real-world applications.
      </motion.p>

      <motion.div
        variants={container}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  );
}
