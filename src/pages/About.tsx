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
        className="bg-[var(--nav-bg)] shadow-lg rounded-2xl overflow-hidden max-w-5xl w-full border border-[var(--border)]"
        variants={item}
      >
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center md:items-center gap-10 p-8 md:p-12 text-center md:text-left min-h-[200px] md:min-h-[400px]"
          variants={item}
        >
          <motion.div
            className="rounded-full overflow-hidden border-4 border-[var(--accent)] shadow-lg"
            variants={item}
          >
            <motion.img
              src={portrett}
              alt="Jenny Johnsby"
              className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover transition-transform duration-500 scale-150 hover:scale-100"
            />
          </motion.div>

          <motion.div className="flex-1" variants={item}>
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-[var(--accent)] mb-6"
              variants={item}
            >
              About Me
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-[var(--text)] leading-relaxed"
              variants={item}
            >
              I’m a frontend developer with a passion for creating modern,
              responsive, and user-friendly web applications. With a solid
              foundation in web technologies and a creative mindset, I enjoy
              transforming ideas into clean and functional digital experiences.
              <br />
              <br />
              My background includes a two-year education in frontend
              development at Noroff, where I gained strong skills in React,
              Tailwind, TypeScript, and other modern tools. I’m always eager to
              learn new technologies and continuously improve both my technical
              abilities and design sense to deliver high-quality solutions.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}