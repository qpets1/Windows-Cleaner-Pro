
export type ViewType = 'scan' | 'optimize' | 'tools' | 'settings';

export enum ScanStatus {
  Pending = 'pending',
  Scanning = 'scanning',
  Complete = 'complete',
  Cleaning = 'cleaning',
  Cleaned = 'cleaned'
}

export interface ScanCategory {
  id: string;
  title: string;
  description: string;
}

export interface ScanResult {
  junkSize: number; // in MB
  status: ScanStatus;
  itemsFound: number;
}

export type ScanResults = Record<string, ScanResult>;
