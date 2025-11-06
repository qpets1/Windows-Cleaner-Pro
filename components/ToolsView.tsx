
import React from 'react';
import { Icon } from './Icon';

const ToolCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full mb-4">
            <Icon name={icon} className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm flex-grow">{description}</p>
        <button disabled className="mt-4 px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md cursor-not-allowed">
            Запустить
        </button>
    </div>
);

export const ToolsView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
       <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Инструменты</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
            Дополнительные утилиты для анализа и управления системой.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ToolCard 
            icon="scan"
            title="Анализ диска"
            description="Визуализация использования дискового пространства (аналог WinDirStat)."
        />
        <ToolCard 
            icon="apps"
            title="Поиск дубликатов"
            description="Находит и удаляет дублирующиеся файлы для освобождения места."
        />
         <ToolCard 
            icon="tools"
            title="Поиск больших файлов"
            description="Быстро находит файлы размером более 1 ГБ."
        />
        <ToolCard 
            icon="settings"
            title="Менеджер автозагрузки"
            description="Управление программами, запускающимися вместе с Windows."
        />
         <ToolCard 
            icon="optimize"
            title="Планировщик задач"
            description="Настройка автоматической очистки по расписанию."
        />
        <ToolCard 
            icon="system"
            title="Восстановление системы"
            description="Управление точками восстановления Windows."
        />
      </div>
        <div className="mt-8 p-4 text-center bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded-lg">
        <p><strong>Примечание:</strong> Это симуляция. Инструменты в веб-приложении неактивны.</p>
      </div>
    </div>
  );
};
