
import React from 'react';
import { Icon } from './Icon';
import type { ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

const NavItem: React.FC<{
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full px-4 py-3 text-left transition-colors duration-200 ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      <Icon name={icon} className="w-6 h-6 mr-4" />
      <span className="font-medium">{label}</span>
    </button>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const navItems: { id: ViewType; label: string; icon: string }[] = [
    { id: 'scan', label: 'Сканирование', icon: 'scan' },
    { id: 'optimize', label: 'Оптимизация', icon: 'optimize' },
    { id: 'tools', label: 'Инструменты', icon: 'tools' },
    { id: 'settings', label: 'Настройки', icon: 'settings' },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <h2 className="text-2xl font-bold tracking-wider">
          WCP
        </h2>
      </div>
      <nav className="flex-1 py-4">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={currentView === item.id}
            onClick={() => setView(item.id)}
          />
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">Версия 1.0.0 (симуляция)</p>
      </div>
    </aside>
  );
};
