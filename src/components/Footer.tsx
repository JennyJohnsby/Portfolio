import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-purple)] text-[var(--light-pink)] py-8 border-t border-[var(--eggplant)]/30">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-10 space-y-4 sm:space-y-0">
        <a
          href="https://github.com/JennyJohnsby"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--eggplant)] transition transform hover:scale-110"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/jenny-samuline-kvalheim-johnsby-01aab2142/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--eggplant)] transition transform hover:scale-110"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
      <p className="text-center mt-6 text-xs opacity-70 tracking-wide">
        © {new Date().getFullYear()} Designed & Built by <span className="font-semibold">Jenny Johnsby</span>.
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="block mx-auto mt-4 text-xs hover:underline"
      >
        Back to top ↑
      </button>
    </footer>
  );
}