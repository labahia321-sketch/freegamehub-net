import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type ThemeMode = 'light' | 'attenuated' | 'dark';

interface ThemeColors {
  background: string;
  surface: string;
  card: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  primary: string;
  border: string;
  headerBackground: string;
  headerText: string;
}

export const THEME_COLORS: Record<ThemeMode, ThemeColors> = {
  light: {
    background: '#ffffff',
    surface: '#f5f5f5',
    card: '#ffffff',
    text: '#111111',
    textSecondary: '#444444',
    textMuted: '#888888',
    primary: '#ff6600',
    border: '#e0e0e0',
    headerBackground: '#ff6600',
    headerText: '#ffffff',
  },
  attenuated: {
    background: '#f0f0f0',
    surface: '#e5e5e5',
    card: '#ffffff',
    text: '#222222',
    textSecondary: '#555555',
    textMuted: '#777777',
    primary: '#ff6600',
    border: '#d0d0d0',
    headerBackground: '#ff6600',
    headerText: '#ffffff',
  },
  dark: {
    background: '#111111',
    surface: '#1a1a1a',
    card: '#222222',
    text: '#ffffff',
    textSecondary: '#cccccc',
    textMuted: '#888888',
    primary: '#ff6600',
    border: '#333333',
    headerBackground: '#1a1a1a',
    headerText: '#ffffff',
  },
};

interface ThemeContextType {
  theme: ThemeMode;
  colors: ThemeColors;
  setTheme: (theme: ThemeMode) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'freegamehub-theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('light');

  useEffect(() => {
    AsyncStorage.getItem(THEME_STORAGE_KEY).then((savedTheme) => {
      if (savedTheme && ['light', 'attenuated', 'dark'].includes(savedTheme)) {
        setThemeState(savedTheme as ThemeMode);
      }
    });
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
  };

  const cycleTheme = () => {
    const themes: ThemeMode[] = ['light', 'attenuated', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const colors = THEME_COLORS[theme];

  return (
    <ThemeContext.Provider value={{ theme, colors, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
