import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Theme = "light" | "attenuated" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("freegamehub-theme") as Theme;
      if (saved && ["light", "attenuated", "dark"].includes(saved)) {
        return saved;
      }
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "attenuated", "dark");
    root.classList.add(theme);
    localStorage.setItem("freegamehub-theme", theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
