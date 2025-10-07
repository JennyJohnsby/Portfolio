import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import placeholderImg from "../assets/placeholder.jpg";

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

export default function Home() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center bg-[var(--bg)] text-[var(--text)]"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Hero Section */}
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
        Frontend Developer | Building modern, responsive, and creative web experiences.
      </motion.p>

      {/* Featured Projects */}
      <section className="w-full max-w-7xl text-center py-16 border-t border-[var(--border)]/30">
        <h2 className="text-2xl font-bold text-[var(--accent)] mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="w-full max-w-sm md:max-w-md"
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

      {/* Contact Section */}
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