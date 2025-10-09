import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
    <nav
      role="navigation"
      className="sticky top-0 z-50 bg-[var(--nav-bg)] text-[var(--nav-text)] shadow-md px-6 py-4 transition-colors duration-500"
    >
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold hover:text-[var(--accent)] transition"
        >
          Jenny Johnsby <span className="text-[var(--accent)] font-normal">· Developer</span>
        </Link>

        <div className="hidden sm:flex items-center space-x-6 text-lg tracking-wide">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={location.pathname === link.to ? "page" : undefined}
              className={`px-3 py-1 transition border-b-2 ${
                location.pathname === link.to
                  ? "text-[var(--accent)] font-semibold border-[var(--accent)]"
                  : "border-transparent hover:text-[var(--accent)] hover:border-[var(--accent)]"
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden flex flex-col space-y-3 mt-4 text-lg tracking-wide bg-[var(--nav-bg)] text-[var(--nav-text)] rounded-lg p-4 shadow-md"
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={location.pathname === link.to ? "page" : undefined}
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}