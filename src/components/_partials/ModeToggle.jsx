import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Esto asegura que el componente solo se renderice en el cliente
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ease-in-out bg-gray-200 dark:bg-zinc-600 hover:scale-110 hover:shadow-lg"
      onClick={toggleTheme}
    >
      <div className="relative">
        {theme === "light" ? (
          <Sun className="h-5 w-5 text-gray-800 dark:text-gray-200 transform transition-transform duration-500 ease-in-out rotate-0 scale-100" />
        ) : (
          <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200 transform transition-transform duration-500 ease-in-out rotate-0 scale-100" />
        )}
      </div>
      <div
        className={`absolute inset-0 rounded-full transition-colors duration-500 ${
          theme === "light" ? "" : ""
        }`}
        aria-hidden="true"
      />
    </button>
  );
}
