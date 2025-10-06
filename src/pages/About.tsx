import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center bg-[var(--off-white)]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold text-[var(--dark-purple)] mb-6"
      >
        About Me
      </motion.h1>

    
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-base md:text-lg text-[var(--eggplant)] max-w-2xl mx-auto leading-relaxed"
      >
        I’m Jenny, a frontend developer passionate about building clean, responsive, and
        creative web apps. Skilled in React, Tailwind, and modern web tools. I enjoy crafting
        user-friendly experiences and continuously exploring new technologies to improve my craft.
      </motion.p>
    </motion.main>
  );
}
