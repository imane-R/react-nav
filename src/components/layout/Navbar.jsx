import { useState } from "react";
import { NavLink } from "react-router";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        {/* Logo */}
        <NavLink to="/" className="text-lg font-bold">
          MyApp
        </NavLink>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden block text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex space-x-4 flex-col lg:flex-row lg:items-center`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-200 font-medium" : "hover:text-blue-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-200 font-medium" : "hover:text-blue-300"
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
