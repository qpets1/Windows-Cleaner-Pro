
import React from 'react';
import { Icon } from './Icon';

const FeatureCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-start space-x-4">
        <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
            <Icon name={icon} className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
            <button disabled className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 cursor-not-allowed opacity-50">Выполнить (недоступно)</button>
        </div>
    </div>
);

export const OptimizeView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Оптимизация системы</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
            Инструменты для ускорения загрузки и повышения общей производительности Windows.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard 
            icon="optimize" 
            title="Дефрагментация реестра" 
            description="Упорядочивание записей реестра для ускорения доступа." 
        />
        <FeatureCard 
            icon="settings" 
            title="Оптимизация файла подкачки" 
            description="Настройка виртуальной памяти для лучшей производительности." 
        />
        <FeatureCard 
            icon="scan" 
            title="Отключение ненужных служб" 
            description="Анализ и отключение служб, потребляющих ресурсы." 
        />
        <FeatureCard 
            icon="apps" 
            title="Очистка RAM" 
            description="Освобождение оперативной памяти от неиспользуемых процессов." 
        />
      </div>
       <div className="mt-8 p-4 text-center bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded-lg">
        <p><strong>Примечание:</strong> Это симуляция. Функции оптимизации в веб-приложении не выполняются.</p>
      </div>
    </div>
  );
};
