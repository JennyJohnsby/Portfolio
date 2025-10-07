import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
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
        Contact
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-base md:text-lg text-[var(--eggplant)] max-w-xl mx-auto leading-relaxed"
      >
        Feel free to reach out! You can contact me directly via{" "}
        <a
          href="mailto:jjohnsby.dev@gmail.com"
          className="text-[var(--purple)] font-medium underline hover:text-[var(--eggplant)] transition"
        >
          email
        </a>{" "}
        or connect with me on my socials below.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-10 text-lg font-semibold text-[var(--dark-purple)]"
      >
        Let’s connect <span className="inline-block animate-bounce">👋</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-4 flex space-x-8"
      >
        <a
          href="https://github.com/JennyJohnsby"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          title="GitHub"
          className="transition transform hover:scale-110 hover:text-black"
        >
          <FaGithub size={36} />
        </a>
        <a
          href="https://linkedin.com/in/jenny-samuline-kvalheim-johnsby-01aab2142/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          title="LinkedIn"
          className="transition transform hover:scale-110 hover:text-blue-600"
        >
          <FaLinkedin size={36} />
        </a>
      </motion.div>
    </motion.main>
  );
}