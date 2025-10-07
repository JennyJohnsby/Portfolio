import { motion } from "framer-motion";
import portrett from "../assets/portett.jpg"; 

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-[var(--bg)] text-[var(--text)]"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="bg-[var(--nav-bg)] shadow-lg rounded-2xl p-8 md:p-12 max-w-3xl w-full text-center border border-[var(--border)]"
        variants={item}
      >
        <motion.img
          src={portrett}
          alt="Jenny Johnsby"
          className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full mx-auto mb-6 shadow-md object-cover border-2 border-[var(--accent)]"
          variants={item}
        />

        <motion.h1
          className="text-3xl md:text-5xl font-bold text-[var(--accent)] mb-6"
          variants={item}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-[var(--text)] leading-relaxed mb-8"
          variants={item}
        >
          I’m Jenny, a frontend developer passionate about building clean,
          responsive, and creative web apps. Skilled in React, Tailwind, and
          modern web tools. I enjoy crafting user-friendly experiences and
          continuously exploring new technologies to improve my craft.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={item}
        >
          {["React", "Tailwind", "TypeScript", "JavaScript", "APIs"].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-medium shadow-sm bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition"
              >
                {skill}
              </span>
            )
          )}
        </motion.div>
      </motion.div>
    </motion.main>
  );
}