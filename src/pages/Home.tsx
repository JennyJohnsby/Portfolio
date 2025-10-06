import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center h-screen text-center px-4 bg-[var(--off-white)]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-[var(--dark-purple)] mb-4"
      >
        Hi, I’m Jenny 👋
      </motion.h1>

     
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-base md:text-lg text-[var(--eggplant)] max-w-xl"
      >
        Frontend Developer | Building modern, responsive, and creative web experiences.
      </motion.p>

      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Link
          to="/projects"
          className="mt-6 inline-block px-6 py-3 rounded-2xl bg-[var(--eggplant)] text-[var(--light-pink)] font-medium hover:bg-[var(--pink)] transition"
        >
          See My Projects!
        </Link>
      </motion.div>
    </motion.main>
  );
}