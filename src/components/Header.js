"use client";

import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left Section: Logo and School Name */}
      <div className="flex items-center space-x-4">
        {/* School Logo */}
        <img
          src="/telkom.png" // Replace with the path to your logo
          alt="SMA 1 Banjarmasin Logo"
          className="w-10 h-10"
        />
        {/* School Name */}
        <h1 className="text-lg font-bold text-gray-800">SMA 1 Banjarmasin</h1>
      </div>

      {/* Right Section: Menu Icon */}
      <div>
        <button className="text-gray-800 focus:outline-none" aria-label="Open Menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
