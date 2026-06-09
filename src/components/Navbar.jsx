import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { shubham } from "../assets";
import { navLinks } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";
import ThemeToggle from "./ThemeToggle";
import styles from "../style";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setToggle(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nav backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>
        <div className="flex justify-between items-center h-[72px]">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={shubham}
                alt="Shubham Jethva"
                className="w-11 h-11 rounded-xl object-cover ring-2 ring-border group-hover:ring-accent/40 transition-all duration-300"
              />
            </div>
            <span className="hidden sm:block font-display font-semibold text-heading text-sm">
              Shubham<span className="text-accent">.</span>
            </span>
          </a>

          <ul className="list-none hidden md:flex items-center gap-1">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(nav.id)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-body hover:text-heading hover:bg-surface transition-all duration-200"
                >
                  {nav.title}
                </button>
              </li>
            ))}
            <li className="ml-2">
              <ThemeToggle />
            </li>
          </ul>

          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setToggle((prev) => !prev)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/60 text-heading"
            >
              {toggle ? <HiX className="h-5 w-5" /> : <HiMenuAlt3 className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-nav backdrop-blur-xl overflow-hidden"
          >
            <ul className="list-none flex flex-col p-4 gap-1">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(nav.id)}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-body hover:text-heading hover:bg-surface transition-all"
                  >
                    {nav.title}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
