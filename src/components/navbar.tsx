"use client";

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="shadow-md rounded-full border"
      style={{
        background: '#17191C',
        borderImageSource: 'linear-gradient(180deg, #37393C 0%, rgba(55, 57, 60, 0) 128.66%)',
        borderWidth: '1px',
        boxShadow: '0px 1px 4px 0px #26282E5E',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.svg" // Replace with the path to your logo image
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 focus:outline-none"
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
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex space-x-8 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-[#17191C] md:bg-transparent p-4 md:p-0`}
          style={{ marginLeft: '147px' }}
        >
          <a href="#about" className="text-gray-300 hover:text-blue-500 block md:inline">
            About Us
          </a>
          <a href="#contact" className="text-gray-300 hover:text-blue-500 block md:inline">
            Contact Us
          </a>
          <a href="#blogs" className="text-gray-300 hover:text-blue-500 block md:inline">
            Blogs
          </a>
          <a href="#projects" className="text-gray-300 hover:text-blue-500 block md:inline">
            Projects
          </a>
        </div>

        {/* Sign-Up Button */}
        <div className="hidden md:block" style={{ marginLeft: '147px' }}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign Up Now
          </button>
        </div>
      </div>

      {/* Mobile Sign-Up Button */}
      {isMenuOpen && (
        <div className="block md:hidden text-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign Up Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;