import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg- text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-indigo-400 hover:text-indigo-300">
        MyPortfolio
      </Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-indigo-300">Home</Link>
        <Link to="/about" className="hover:text-indigo-300">About</Link>
        <Link to="/projects" className="hover:text-indigo-300">Projects</Link>
        <Link to="/contact" className="hover:text-indigo-300">Contact</Link>
      </div>
    </nav>
  );
}
