
import React from 'react';

const SettingsSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">{title}</h3>
        <div className="space-y-4">
            {children}
        </div>
    </div>
);

const Toggle: React.FC<{ label: string; description: string; checked: boolean }> = ({ label, description, checked }) => (
    <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
        <div>
            <p className="font-medium text-gray-900 dark:text-gray-100">{label}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        <div className={`relative inline-block w-12 h-6 rounded-full transition-colors duration-300 ${checked ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}>
            <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${checked ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </div>
    </div>
);

export const SettingsView: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Настройки</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Управление параметрами сканирования и работы приложения.
                </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md">
                <SettingsSection title="Общие">
                    <div className="flex items-center justify-between p-4 rounded-lg">
                        <label htmlFor="language" className="font-medium text-gray-900 dark:text-gray-100">Язык интерфейса</label>
                        <select id="language" className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2">
                            <option>Русский (RU)</option>
                            <option>English (EN)</option>
                            <option>Українська (UA)</option>
                        </select>
                    </div>
                    <Toggle label="Темная тема" description="Автоматически на основе системных настроек" checked={window.matchMedia('(prefers-color-scheme: dark)').matches} />
                </SettingsSection>

                <SettingsSection title="Сканирование">
                    <Toggle label="Создавать точку восстановления" description="Перед каждой очисткой для безопасности" checked={true} />
                    <Toggle label="Искать пустые папки" description="Удаление каталогов, не содержащих файлов" checked={false} />
                    <div className="p-4 rounded-lg">
                        <label htmlFor="exceptions" className="font-medium text-gray-900 dark:text-gray-100 block mb-2">Исключения</label>
                        <textarea id="exceptions" rows={3} placeholder="C:\Users\...\MyDocuments&#10;*.log" className="w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2"></textarea>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Каждый путь или маска с новой строки.</p>
                    </div>
                </SettingsSection>
                
                 <div className="mt-8 p-4 text-center bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded-lg">
                    <p><strong>Примечание:</strong> Настройки в этой симуляции не сохраняются и не влияют на процесс сканирования.</p>
                </div>
            </div>
        </div>
    );
};
