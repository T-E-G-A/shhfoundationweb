'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    setIsDark(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleClick = () => {
    alert('Button clicked! Current isDark: ' + isDark);
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      alert('Switched to DARK mode');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      alert('Switched to LIGHT mode');
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="p-2.5 rounded-lg bg-gray-100 dark:bg-[#1A2030] hover:bg-gray-200 dark:hover:bg-[#2A3447] transition-all duration-200 border-4 border-red-500"
      aria-label="Toggle theme"
      style={{ cursor: 'pointer', zIndex: 9999 }}
    >
      <FontAwesomeIcon 
        icon={isDark ? faSun : faMoon} 
        className="text-gray-700 dark:text-[#1FA35C] w-5 h-5"
        style={{ pointerEvents: 'none' }}
      />
    </button>
  );
}
