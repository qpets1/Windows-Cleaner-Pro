
import React, { useState, useEffect, useCallback } from 'react';
import { SCAN_CATEGORIES } from '../constants';
import { ScanStatus } from '../types';
import type { ScanResults } from '../types';
import { Icon } from './Icon';

const initialResults = SCAN_CATEGORIES.reduce((acc, category) => {
  acc[category.id] = { junkSize: 0, status: ScanStatus.Pending, itemsFound: 0 };
  return acc;
}, {} as ScanResults);

const ScanCategoryItem: React.FC<{
  iconName: string;
  title: string;
  description: string;
  result: { junkSize: number; status: ScanStatus; itemsFound: number };
}> = ({ iconName, title, description, result }) => {
  const getStatusContent = () => {
    switch (result.status) {
      case ScanStatus.Scanning:
        return <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>;
      case ScanStatus.Complete:
        return <span className="text-green-500 font-bold">✓</span>;
      case ScanStatus.Cleaning:
         return <div className="w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>;
      case ScanStatus.Cleaned:
        return <span className="text-gray-400 font-bold">-</span>;
      default:
        return <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 rounded-full"></div>;
    }
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <div className="mr-4 text-blue-500 dark:text-blue-400">{getStatusContent()}</div>
      <Icon name={iconName} className="w-8 h-8 mr-4 text-gray-500 dark:text-gray-400" />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      <div className="text-right">
        <p className={`font-bold text-lg ${result.junkSize > 0 ? 'text-red-500' : 'text-gray-600 dark:text-gray-300'}`}>
          {result.junkSize.toFixed(2)} MB
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{result.itemsFound} файлов</p>
      </div>
    </div>
  );
};

export const ScanView: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [isCleaning, setIsCleaning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [results, setResults] = useState<ScanResults>(initialResults);
  const [totalJunk, setTotalJunk] = useState(0);

  const runScan = useCallback(() => {
    setIsScanning(true);
    setScanComplete(false);
    setResults(initialResults);
    setTotalJunk(0);
    
    let currentTotal = 0;
    
    SCAN_CATEGORIES.forEach((category, index) => {
      setTimeout(() => {
        setResults(prev => ({ ...prev, [category.id]: { ...prev[category.id], status: ScanStatus.Scanning } }));
        
        setTimeout(() => {
          const junkSize = Math.random() * 1500 + 50;
          const itemsFound = Math.floor(Math.random() * 10000 + 100);
          currentTotal += junkSize;

          setResults(prev => ({
            ...prev,
            [category.id]: { junkSize, status: ScanStatus.Complete, itemsFound },
          }));
          setTotalJunk(currentTotal);
          
          if (index === SCAN_CATEGORIES.length - 1) {
            setIsScanning(false);
            setScanComplete(true);
          }
        }, 500 + Math.random() * 500);

      }, index * 1000);
    });
  }, []);

  const runClean = useCallback(() => {
    setIsCleaning(true);
    let cleanedTotal = totalJunk;

    SCAN_CATEGORIES.forEach((category, index) => {
      setTimeout(() => {
        setResults(prev => ({...prev, [category.id]: {...prev[category.id], status: ScanStatus.Cleaning}}));
        const junkToRemove = results[category.id].junkSize;

        setTimeout(() => {
            cleanedTotal -= junkToRemove;
            setTotalJunk(cleanedTotal < 0 ? 0 : cleanedTotal);
            setResults(prev => ({
                ...prev,
                [category.id]: { junkSize: 0, status: ScanStatus.Cleaned, itemsFound: 0 }
            }));

            if (index === SCAN_CATEGORIES.length - 1) {
                setIsCleaning(false);
                setScanComplete(false);
            }
        }, 500 + Math.random() * 300);
      }, index * 800);
    });
  }, [results, totalJunk]);

  const totalJunkGB = (totalJunk / 1024).toFixed(2);
  const buttonDisabled = isScanning || isCleaning;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Сканирование системы</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
                Анализ системы на наличие мусорных файлов для освобождения места и повышения производительности.
            </p>
        </div>
        
        <div className="p-6 flex flex-col md:flex-row items-center justify-between bg-gray-50 dark:bg-gray-800/50">
            <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">Обнаружено мусора:</p>
                <p className={`text-5xl font-bold ${totalJunk > 0 ? 'text-red-500' : 'text-green-500'}`}>
                    {totalJunkGB}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">GB</p>
            </div>
            <div className="flex space-x-4">
                <button 
                    onClick={runScan} 
                    disabled={buttonDisabled}
                    className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-blue-300 dark:disabled:bg-blue-800 disabled:cursor-not-allowed transition-colors duration-300"
                >
                    {isScanning ? 'Сканирование...' : 'Сканировать'}
                </button>
                <button 
                    onClick={runClean} 
                    disabled={buttonDisabled || !scanComplete}
                    className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 disabled:bg-green-300 dark:disabled:bg-green-800 disabled:cursor-not-allowed transition-colors duration-300"
                >
                    {isCleaning ? 'Очистка...' : 'Очистить'}
                </button>
            </div>
        </div>

        <div>
          {SCAN_CATEGORIES.map(cat => (
            <ScanCategoryItem 
              key={cat.id} 
              iconName={cat.id} 
              title={cat.title} 
              description={cat.description}
              result={results[cat.id]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
