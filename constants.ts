
import type { ScanCategory } from './types';

export const SCAN_CATEGORIES: ScanCategory[] = [
  {
    id: 'system',
    title: 'Системные файлы (System Files)',
    description: 'Временные файлы, кэш обновлений, дампы ошибок'
  },
  {
    id: 'browsers',
    title: 'Браузеры (Browsers)',
    description: 'Кэш, куки, история (Chrome, Firefox, Edge)'
  },
  {
    id: 'apps',
    title: 'Приложения (Applications)',
    description: 'Кэш Discord, Telegram, Office и др.'
  },
  {
    id: 'registry',
    title: 'Реестр (Registry)',
    description: 'Неверные записи, отсутствующие DLL'
  },
];
