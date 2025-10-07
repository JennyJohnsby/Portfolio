import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Work" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-[var(--nav-bg)] text-[var(--nav-text)] shadow-md px-6 py-4 relative transition-colors duration-500">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl sm:text-4xl font-bold hover:text-[var(--accent)] transition"
        >
          Jenny Johnsby · Developer
        </Link>

        <div className="hidden sm:flex items-center space-x-6 text-lg tracking-wide">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1 rounded-md transition ${
                location.pathname === link.to
                  ? "text-[var(--accent)] font-semibold"
                  : "hover:text-[var(--accent)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden flex flex-col space-y-3 mt-4 text-lg tracking-wide bg-[var(--nav-bg)] text-[var(--nav-text)] rounded-lg p-4 shadow-md animate-fade-in transition-colors duration-500">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 rounded-md transition ${
                location.pathname === link.to
                  ? "bg-[var(--accent)] text-white font-semibold"
                  : "hover:text-[var(--accent)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}