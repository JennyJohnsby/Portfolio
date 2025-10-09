import { motion } from "framer-motion";
import { useState } from "react";
import { FaShareAlt, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import placeholderImg from "../assets/placeholder.jpg";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
  github?: string;
  techStack?: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  github,
  techStack = [],
}: ProjectCardProps) {
  const [copied, setCopied] = useState(false);
  const [imgSrc, setImgSrc] = useState(image || placeholderImg);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-col bg-[var(--nav-bg)] text-[var(--nav-text)] rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg border border-[var(--border)]/30 h-full"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imgSrc}
          onError={() => setImgSrc(placeholderImg)}
          alt={title}
          className="w-full h-80 object-cover bg-[var(--bg)]"
        />
      </a>

      <div className="flex flex-col flex-grow p-6 text-center">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm opacity-80 mb-4">{description}</p>

        {techStack.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--nav-text)] bg-[var(--bg)] transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn flex items-center justify-center gap-2 w-full sm:w-auto px-3 py-1.5 rounded-lg shadow-md bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] transition"
          >
            <span>View Project</span>
            <FaExternalLinkAlt className="text-base" />
          </a>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-3 py-1.5 rounded-lg shadow-md border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition"
            >
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </a>
          )}

          <button
            onClick={handleShare}
            className="flex items-center justify-center w-full sm:w-auto gap-2 px-3 py-1.5 rounded-lg shadow-md border border-[var(--border)] text-[var(--nav-text)] hover:bg-[var(--accent)] hover:text-white transition"
          >
            <FaShareAlt className="text-base" />
            {copied ? "Copied!" : "Share"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}