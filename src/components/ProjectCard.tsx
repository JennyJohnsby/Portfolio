import { motion } from "framer-motion";
import { useState } from "react";
import { FaShareAlt, FaExternalLinkAlt } from "react-icons/fa";
import placeholderImg from "../assets/placeholder.jpg";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
  techStack?: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
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
      className="bg-[var(--nav-bg)] text-[var(--nav-text)] rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg max-w-lg border border-[var(--border)]/30"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imgSrc}
          onError={() => setImgSrc(placeholderImg)}
          alt={title}
          className="w-full h-52 object-fit bg-[var(--bg)]"
        />
      </a>

      <div className="p-6 text-center">
        <h2 className="text-lg font-bold text-[var(--nav-text)] mb-2">
          {title}
        </h2>
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

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5"
          >
            <span>View Project</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>

          <button
            onClick={handleShare}
            className="btn-outline flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5"
          >
            <FaShareAlt />
            {copied ? "Copied!" : "Share"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}