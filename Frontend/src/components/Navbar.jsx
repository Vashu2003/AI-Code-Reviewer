import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Code, Plus, List, History, Home } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const navItemClass = (path) =>
    `flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
      location.pathname === path
        ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-md"
        : "text-gray-300 hover:text-white hover:bg-gray-800"
    }`;

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/submit", label: "Submit Code", icon: Code },
    { path: "/add-sample", label: "Add Sample", icon: Plus },
    { path: "/sample-questions", label: "Sample List", icon: List },
    { path: "/history-submissions", label: "History", icon: History },
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center gap-2">
              <Code className="w-8 h-8 text-purple-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                CodeCheck AI
              </h1>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-2 ">
            {navItems.map((item) => {
              const IconComponent = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={navItemClass(item.path)}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
