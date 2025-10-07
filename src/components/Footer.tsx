import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--nav-bg)] text-[var(--nav-text)] py-8 border-t border-[var(--border)]/30 transition-colors duration-500 animate-fade-up">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center text-center sm:text-left">
        <div className="flex justify-center sm:justify-start gap-10">
          <a
            href="https://github.com/JennyJohnsby"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--accent)] transition transform hover:scale-110 hover-bounce"
            aria-label="GitHub"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://linkedin.com/in/jenny-samuline-kvalheim-johnsby-01aab2142/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--accent)] transition transform hover:scale-110 hover-bounce"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={40} />
          </a>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-sm font-bold text-[var(--accent)]">
            Let’s build something great together.
          </p>
          <p className="text-xs opacity-70 tracking-wide mt-2">
            © {new Date().getFullYear()} Designed & Built by{" "}
            <span className="font-semibold hover:text-[var(--accent)] hover:underline transition">
              Jenny Johnsby
            </span>
            .
          </p>
        </div>

        <div className="flex justify-center sm:justify-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="p-3 rounded-full border border-[var(--border)] hover:bg-[var(--accent)] hover:text-white transition transform hover:scale-110"
          >
            <FaArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}