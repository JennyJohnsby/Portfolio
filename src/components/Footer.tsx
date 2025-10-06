import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-10">
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-white">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-white">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-white">
          <FaTwitter size={24} />
        </a>
      </div>
      <p className="text-center mt-4 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
}
