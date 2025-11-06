
import React from 'react';
import { Icon } from './Icon';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="flex-shrink-0 flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-semibold">
        <span className="text-blue-600 dark:text-blue-400">Windows</span>
        <span className="text-gray-700 dark:text-gray-300"> Cleaner Pro</span>
      </h1>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle Dark Mode"
      >
        <Icon name={isDarkMode ? 'sun' : 'moon'} className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>
    </header>
  );
};
