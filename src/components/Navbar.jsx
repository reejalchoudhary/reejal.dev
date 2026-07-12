import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Certificates", path: "/certificates" },
    { name: "Hackathons", path: "/hackathons" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-transparent border-b border-white/10"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-14 sm:h-16">

          <Link to="/" className="relative group flex-shrink-0">
            <span className="text-xl sm:text-2xl font-bold gradient-text whitespace-nowrap">
              Reejal.Dev
            </span>

            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300" />
          </Link>

          <div className="hidden lg:flex items-center space-x-2">

            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 rounded-lg group"
                >
                  <span
                    className={`relative z-10 transition ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-300 group-hover:text-cyan-400"
                    }`}
                  >
                    {item.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}

                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-white/5 transition duration-300" />
                </Link>
              );
            })}

          </div>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/20"
          >
            <Download size={18} />
            Resume
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-white rounded-full" />
              <span className="w-full h-0.5 bg-white rounded-full" />
              <span className="w-full h-0.5 bg-white rounded-full" />
            </div>
          </button>

        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full px-4 pt-3 z-50"
          >
            <div className="flex flex-col gap-2 rounded-2xl p-4 backdrop-blur-xl bg-[#030712]/80 border border-white/10">

              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl transition ${
                      isActive
                        ? "bg-cyan-500/10 border border-cyan-400/30 text-cyan-400"
                        : "text-gray-300 hover:bg-white/5 hover:text-cyan-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <motion.a
                href="#"
                whileTap={{ scale: 0.95 }}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/20"
              >
                <Download size={18} />
                Resume
              </motion.a>

            </div>
          </motion.div>
        )}

      </div>
    </motion.nav>
  );
}
