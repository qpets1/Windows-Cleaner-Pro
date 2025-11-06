
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ScanView } from './components/ScanView';
import { OptimizeView } from './components/OptimizeView';
import { ToolsView } from './components/ToolsView';
import { SettingsView } from './components/SettingsView';
import type { ViewType } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('scan');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderView = () => {
    switch (view) {
      case 'scan':
        return <ScanView />;
      case 'optimize':
        return <OptimizeView />;
      case 'tools':
        return <ToolsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <ScanView />;
    }
  };

  return (
    <div className="flex h-screen font-sans text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900">
      <Sidebar currentView={view} setView={setView} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header 
          isDarkMode={isDarkMode} 
          toggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
        />
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
