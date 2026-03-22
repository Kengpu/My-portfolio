import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `relative pb-1 transition-all duration-300 ${
      isActive
        ? "text-blue-500 after:w-full"
        : "text-gray-300 after:w-0 hover:text-blue-400 hover:after:w-full"
    } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300`;

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 sm:py-6 bg-black/10 backdrop-blur-md z-50">
      {/* Logo */}
      <div className="text-xl sm:text-2xl font-bold text-blue-500">
        Keng Puthearith
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
        <NavLink to="/projects" className={navClass}>
          Projects
        </NavLink>
        <NavLink to="/about" className={navClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={navClass}>
          Contact
        </NavLink>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none text-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 w-48 bg-black/90 backdrop-blur-md rounded-b-xl shadow-lg flex flex-col py-4 px-4 md:hidden">
          <NavLink
            to="/"
            className={`${navClass} py-2`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={`${navClass} py-2`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={`${navClass} py-2`}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={`${navClass} py-2`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;