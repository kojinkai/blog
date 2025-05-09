export interface TextScramblerProps {
  phrases: string[];
  timeout?: number;
}

export interface QueueItem {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
}
