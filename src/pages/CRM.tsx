import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Filter, 
  MoreHorizontal, 
  Phone, 
  Mail, 
  Clock,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

// Mock Data
const initialColumns = {
  new: {
    id: 'new',
    title: 'Нові заявки',
    color: 'bg-blue-500',
    items: [
      { id: 1, name: 'Оксана Петренко', source: 'Instagram DM', value: '?', time: '10 хв', tag: 'Запитання' },
      { id: 2, name: 'Ігор Сидоренко', source: 'Lead Form', value: '450 ₴', time: '2 год', tag: 'Замовлення' },
    ]
  },
  contacted: {
    id: 'contacted',
    title: 'В обробці',
    color: 'bg-yellow-500',
    items: [
      { id: 3, name: 'Марина К.', source: 'Website', value: '1200 ₴', time: '1 день', tag: 'Кейтеринг' },
    ]
  },
  won: {
    id: 'won',
    title: 'Успішні угоди',
    color: 'bg-green-500',
    items: [
      { id: 4, name: 'ТОВ "АйТі Спейс"', source: 'Direct', value: '5600 ₴', time: '3 дні', tag: 'Корпоратив' },
      { id: 5, name: 'Олена В.', source: 'Instagram', value: '250 ₴', time: '4 дні', tag: 'Торт' },
    ]
  }
};

export function CRM() {
  const [columns, setColumns] = useState(initialColumns);

  const handleDragStart = (e: React.DragEvent, itemId: number, sourceColId: string) => {
    e.dataTransfer.setData('itemId', itemId.toString());
    e.dataTransfer.setData('sourceColId', sourceColId);
  };

  const handleDrop = (e: React.DragEvent, targetColId: string) => {
    const itemId = parseInt(e.dataTransfer.getData('itemId'));
    const sourceColId = e.dataTransfer.getData('sourceColId');
    
    if (sourceColId === targetColId) return;

    const sourceCol = columns[sourceColId as keyof typeof columns];
    const targetCol = columns[targetColId as keyof typeof columns];
    
    const item = sourceCol.items.find(i => i.id === itemId);
    if (!item) return;

    setColumns({
      ...columns,
      [sourceColId]: {
        ...sourceCol,
        items: sourceCol.items.filter(i => i.id !== itemId)
      },
      [targetColId]: {
        ...targetCol,
        items: [...targetCol.items, item]
      }
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="h-full flex flex-col max-w-7xl mx-auto animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">CRM Ліди</h2>
          <p className="text-zinc-400">Керуй заявками клієнтів з усіх каналів в одному місці</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
           <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />
              <input 
                placeholder="Пошук ліда..." 
                className="w-full bg-[#18181B] border border-white/5 rounded-xl py-2 pl-8 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500/50"
              />
           </div>
           <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
             <Plus className="h-4 w-4 mr-2" /> Новий лід
           </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
         <Card className="bg-[#18181B] border-white/5 rounded-3xl">
            <CardContent className="p-4">
               <div className="text-xs text-zinc-500 uppercase mb-1">Всього лідів</div>
               <div className="text-2xl font-bold text-white">24</div>
               <div className="text-xs text-green-400 mt-1">+4 сьогодні</div>
            </CardContent>
         </Card>
         <Card className="bg-[#18181B] border-white/5 rounded-3xl">
            <CardContent className="p-4">
               <div className="text-xs text-zinc-500 uppercase mb-1">Конверсія</div>
               <div className="text-2xl font-bold text-white">18%</div>
               <div className="text-xs text-zinc-500 mt-1">Середня по ринку: 12%</div>
            </CardContent>
         </Card>
         <Card className="bg-[#18181B] border-white/5 rounded-3xl">
            <CardContent className="p-4">
               <div className="text-xs text-zinc-500 uppercase mb-1">Прогнозований дохід</div>
               <div className="text-2xl font-bold text-white">12,450 ₴</div>
            </CardContent>
         </Card>
         <Card className="bg-[#18181B] border-white/5 rounded-3xl">
            <CardContent className="p-4">
               <div className="text-xs text-zinc-500 uppercase mb-1">Середній чек</div>
               <div className="text-2xl font-bold text-white">520 ₴</div>
            </CardContent>
         </Card>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex gap-6 min-w-[800px] h-full">
          {Object.values(columns).map((col) => (
            <div 
              key={col.id} 
              className="flex-1 flex flex-col bg-[#18181B]/30 border border-white/5 rounded-3xl min-w-[280px]"
              onDrop={(e) => handleDrop(e, col.id)}
              onDragOver={handleDragOver}
            >
              {/* Column Header */}
              <div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#18181B]/50 rounded-t-3xl">
                 <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${col.color}`} />
                    <span className="font-bold text-white">{col.title}</span>
                    <span className="bg-white/5 text-zinc-400 px-2 py-0.5 rounded-full text-xs">{col.items.length}</span>
                 </div>
                 <Button variant="ghost" size="icon" className="h-6 w-6 text-zinc-500 hover:text-white hover:bg-white/5 rounded-lg">
                    <Plus className="h-4 w-4" />
                 </Button>
              </div>

              {/* Column Content */}
              <div className="p-3 flex-1 space-y-3 overflow-y-auto">
                 {col.items.map((item) => (
                   <div 
                     key={item.id}
                     draggable
                     onDragStart={(e) => handleDragStart(e, item.id, col.id)}
                     className="bg-[#18181B] border border-white/5 p-4 rounded-2xl shadow-sm hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-900/10 transition-all cursor-grab active:cursor-grabbing group"
                   >
                      <div className="flex justify-between items-start mb-2">
                         <Badge variant="outline" className="text-[10px] border-white/10 text-zinc-400 uppercase tracking-wider rounded-lg">{item.tag}</Badge>
                         <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-white">
                           <MoreHorizontal className="h-4 w-4" />
                         </Button>
                      </div>
                      
                      <h4 className="font-bold text-white mb-1">{item.name}</h4>
                      <div className="flex items-center text-xs text-zinc-500 mb-3">
                        <span className="capitalize">{item.source}</span>
                        <span className="mx-1">•</span>
                        <Clock className="h-3 w-3 mr-1" />
                        {item.time}
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-white/5">
                         <div className="font-bold text-zinc-200">{item.value}</div>
                         <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-7 w-7 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white rounded-full">
                               <Phone className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-7 w-7 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white rounded-full">
                               <Mail className="h-3 w-3" />
                            </Button>
                         </div>
                      </div>
                   </div>
                 ))}
                 
                 {col.items.length === 0 && (
                   <div className="h-32 border-2 border-dashed border-white/5 rounded-2xl flex items-center justify-center text-zinc-600 text-sm">
                     Перетягніть сюди
                   </div>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}