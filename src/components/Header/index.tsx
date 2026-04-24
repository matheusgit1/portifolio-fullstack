"use client";

import { FaGithub, FaMailchimp } from "react-icons/fa";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Matheus Alves Pereira
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-5">
            <a
              href="https://github.com"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="mailto:benrobo@example.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <FaMailchimp size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
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
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex space-x-6 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="mailto:benrobo@example.com"
                  className="text-gray-400 hover:text-white"
                >
                  <FaMailchimp size={18} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
