import { HiMoon, HiSun } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`group relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/60 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-surface-hover ${className}`}
    >
      {theme === "dark" ? (
        <HiSun className="h-5 w-5 text-accent transition-transform group-hover:rotate-12" />
      ) : (
        <HiMoon className="h-5 w-5 text-accent transition-transform group-hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
