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
    <nav className="bg-[var(--dark-purple)] text-[var(--light-pink)] shadow-md px-6 py-4 relative">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl sm:text-4xl font-bold hover:text-[var(--pink)] transition"
        >
          Jenny Johnsby · Developer
        </Link>

        <div className="hidden sm:flex space-x-8 text-lg tracking-wide">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition ${
                location.pathname === link.to
                  ? "text-[var(--pink)] font-semibold"
                  : "hover:text-[var(--pink)]"
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
        <div className="sm:hidden flex flex-col space-y-4 mt-4 text-lg tracking-wide bg-[var(--dark-purple)] rounded-lg p-4 shadow-md animate-fade-in">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`transition ${
                location.pathname === link.to
                  ? "text-[var(--pink)] font-semibold"
                  : "hover:text-[var(--pink)]"
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