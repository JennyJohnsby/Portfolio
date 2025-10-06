import { motion } from "framer-motion";
import { useState } from "react";
import { FaShareAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-[var(--light-pink)] rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl max-w-lg border-2 border-[var(--pink)]"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="w-full h-50 object-fit bg-[var(--eggplant)] p-1" />
      </a>

      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-[var(--dark-purple)] mb-2">
          {title}
        </h2>
        <p className="text-[var(--eggplant)] text-sm mb-4">{description}</p>

        {techStack.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-[var(--eggplant)] text-[var(--light-pink)] rounded-full shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-center gap-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-xl bg-[var(--eggplant)] text-[var(--light-pink)] font-medium hover:bg-[var(--pink)] transition"
          >
            View My Project!
          </a>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--eggplant)] text-[var(--eggplant)] hover:bg-[var(--eggplant)] hover:text-[var(--light-pink)] transition"
          >
            <FaShareAlt />
            {copied ? "Copied!" : "Share"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
