import React, { useEffect, useState, useRef } from 'react';
import { 
  MessageSquare, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  AlertCircle,
  CheckCircle2,
  Brain,
  Search
} from 'lucide-react';

type LogType = 'crm' | 'ads' | 'content' | 'system' | 'competitor';

interface Log {
  id: number;
  type: LogType;
  message: string;
  time: string;
  icon: React.ElementType;
  color: string;
}

const initialLogs: Log[] = [
  { id: 1, type: 'crm', message: 'Новий лід: Оксана К. (Instagram DM)', time: 'Зараз', icon: MessageSquare, color: 'text-blue-400' },
  { id: 2, type: 'ads', message: 'Оптимізація бюджету: Кампанія "Ланч" (+15%)', time: '2 хв', icon: Zap, color: 'text-yellow-400' },
  { id: 3, type: 'competitor', message: 'Aroma Kava: Новий пост про осіннє меню', time: '5 хв', icon: Target, color: 'text-red-400' },
  { id: 4, type: 'content', message: 'Авто-постинг: "Ранкова кава" опубліковано', time: '12 хв', icon: CheckCircle2, color: 'text-green-400' },
  { id: 5, type: 'system', message: 'Щотижневий звіт згенеровано', time: '15 хв', icon: Brain, color: 'text-purple-400' },
];

export function LiveFeed() {
  const [logs, setLogs] = useState<Log[]>(initialLogs);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLogVariants = [
        { type: 'crm', message: 'Повернувся старий клієнт: Ігор В.', icon: Users, color: 'text-blue-400' },
        { type: 'ads', message: 'Знайдено дешевший сегмент аудиторії (CPL -12%)', icon: TrendingUp, color: 'text-emerald-400' },
        { type: 'system', message: 'Аналіз трендів TikTok завершено', icon: Search, color: 'text-purple-400' },
        { type: 'content', message: 'AI згенерував 3 ідеї для сторіз', icon: Brain, color: 'text-pink-400' },
      ];

      const randomLog = newLogVariants[Math.floor(Math.random() * newLogVariants.length)];
      
      const newEntry: Log = {
        id: Date.now(),
        type: randomLog.type as LogType,
        message: randomLog.message,
        time: 'Зараз',
        icon: randomLog.icon,
        color: randomLog.color
      };

      setLogs(prev => [newEntry, ...prev].slice(0, 8));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col bg-[#18181B] rounded-3xl border border-white/5 overflow-hidden">
      <div className="p-4 border-b border-white/5 bg-[#18181B] flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
           <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
           </div>
           <h3 className="text-sm font-bold text-white tracking-wide">NEURAL FEED</h3>
        </div>
        <span className="text-[10px] text-zinc-500 font-mono">LIVE</span>
      </div>
      
      <div className="flex-1 overflow-hidden relative p-4">
        <div className="space-y-4 transition-all duration-500 ease-in-out">
          {logs.map((log, index) => (
            <div 
              key={log.id}
              className={`flex items-start gap-3 pb-3 border-b border-white/5 last:border-0 animate-in slide-in-from-top-2 fade-in duration-500 ${index === 0 ? 'opacity-100' : 'opacity-70'}`}
            >
              <div className={`mt-0.5 p-1.5 rounded-lg bg-white/5 ${log.color}`}>
                <log.icon className="h-3.5 w-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                 <p className="text-xs text-zinc-200 font-medium leading-relaxed">{log.message}</p>
                 <p className="text-[10px] text-zinc-600 mt-1 font-mono">{log.time}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient Overlay for fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#18181B] to-transparent pointer-events-none" />
      </div>
    </div>
  );
}