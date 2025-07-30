

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

interface ThemeToggleProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded hover:bg-gray-700 transition"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 text-[var(--navbar-text)]" />
      ) : (
        <MoonIcon className="h-5 w-5 text-[var(--navbar-text)]" />
      )}
    </button>
  );
}