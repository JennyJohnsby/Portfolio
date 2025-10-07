import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--nav-bg)] text-[var(--nav-text)] py-8 border-t border-[var(--border)]/30 transition-colors duration-500 animate-fade-up">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-10 space-y-4 sm:space-y-0">
        <a
          href="https://github.com/JennyJohnsby"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--accent)] transition transform hover:scale-110 hover-bounce"
          aria-label="GitHub"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/jenny-samuline-kvalheim-johnsby-01aab2142/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--accent)] transition transform hover:scale-110 hover-bounce"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} />
        </a>
      </div>

      <p className="text-center mt-6 text-sm font-bold text-[var(--accent)]">
        Let’s build something great together.
      </p>

      <p className="text-center mt-2 text-xs opacity-70 tracking-wide transition-colors duration-500">
        © {new Date().getFullYear()} Designed & Built by{" "}
        <span className="font-semibold hover:text-[var(--accent)] hover:underline transition">
          Jenny Johnsby
        </span>
        .
      </p>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="btn-outline block mx-auto mt-6 p-2"
      >
        Back to top ↑
      </button>
    </footer>
  );
}