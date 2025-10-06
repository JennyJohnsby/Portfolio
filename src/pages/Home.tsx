import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen text-center px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-bold text-indigo-600 mb-4">Hi, I’m Jenny 👋</h1>
      <p className="text-lg text-gray-600 max-w-xl">
        Frontend Developer | Building modern, responsive, and creative web experiences.
      </p>
    </motion.div>
  );
}
