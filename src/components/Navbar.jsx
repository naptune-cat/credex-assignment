import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-600 to-indigo-600 backdrop-blur-md shadow-lg px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Soft<span className="text-yellow-300">Sell</span>
        </h1>

        <div className="hidden md:flex space-x-6">
          {[
            { label: "How it works", href: "#how-it-works" },
            { label: "Why us", href: "#why-choose-us" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-white hover:text-yellow-300 font-medium px-3 py-2 rounded-md transition duration-200 hover:bg-white hover:bg-opacity-10"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
