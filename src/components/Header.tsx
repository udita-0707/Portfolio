import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) return null;

  return (
    <header className="glass-card py-3 px-6 mb-8 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 bg-gray-800 rounded-full overflow-hidden flex items-center justify-center border border-white/10">
          <span className="text-xl font-bold">US</span>
        </div>
        <h1 className="text-xl font-semibold">Udita</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="border border-white/10 rounded-full px-3 py-1">
          <span>EN</span>
        </div>
        <button
          onClick={toggleTheme}
          className="rounded-full p-2 hover:bg-white/10 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
