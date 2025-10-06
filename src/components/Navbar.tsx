import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[var(--dark-purple)] text-[var(--light-pink)] px-6 py-4 flex flex-col sm:flex-row justify-between items-center shadow-md">
      <Link
        to="/"
        className="text-3xl sm:text-4xl font-bold text-[var(--light-pink)] hover:text-[var(--pink)] transition"
      >
        Jenny Johnsby
      </Link>
      <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0 mt-4 sm:mt-0 text-lg tracking-wide">
        <Link to="/" className="hover:text-[var(--pink)] transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-[var(--pink)] transition">
          About
        </Link>
        <Link to="/projects" className="hover:text-[var(--pink)] transition">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-[var(--pink)] transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
