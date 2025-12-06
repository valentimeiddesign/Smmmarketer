import React from 'react';
import { 
  Plus, 
  MessageCircle, 
  Eye,
  MoreHorizontal,
  Globe,
  Instagram,
  Target,
  Sparkles
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Mock Data
const competitors = [
  {
    id: 1,
    name: 'Aroma Kava',
    handle: '@aromakava.ua',
    platform: 'instagram',
    followers: '125K',
    growth: '+2.4%',
    engagement: '3.8%',
    postsPerWeek: 5,
    topPost: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'Lviv Croissants',
    handle: '@lvivcroissants',
    platform: 'tiktok',
    followers: '85K',
    growth: '+12%',
    engagement: '8.5%',
    postsPerWeek: 8,
    topPost: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'EspressoHolic',
    handle: '@espresso_holic',
    platform: 'instagram',
    followers: '12K',
    growth: '-0.5%',
    engagement: '4.2%',
    postsPerWeek: 3,
    topPost: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=100&h=100&fit=crop'
  }
];

const comparisonData = [
  { name: 'Пн', Ви: 120, Aroma: 450, Lviv: 300 },
  { name: 'Вт', Ви: 150, Aroma: 480, Lviv: 320 },
  { name: 'Ср', Ви: 180, Aroma: 500, Lviv: 450 },
  { name: 'Чт', Ви: 220, Aroma: 470, Lviv: 380 },
  { name: 'Пт', Ви: 300, Aroma: 600, Lviv: 550 },
  { name: 'Сб', Ви: 350, Aroma: 750, Lviv: 680 },
  { name: 'Нд', Ви: 400, Aroma: 800, Lviv: 700 },
];

export function Competitors() {
  return (
    <div className="max-w-6xl mx-auto pb-20 space-y-6 animate-in fade-in duration-500">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h2 className="text-2xl font-bold text-white flex items-center gap-2">
             <Target className="h-6 w-6 text-red-500" />
             Шпигун за Конкурентами
           </h2>
           <p className="text-zinc-400">Аналізуй стратегії лідерів ринку та адаптуй їх для себе</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/20 rounded-xl">
           <Plus className="h-4 w-4 mr-2" /> Додати конкурента
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Comparison Chart */}
        <Card className="lg:col-span-2 bg-[#18181B] border-white/5 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-white">Частка голосу (Share of Voice)</CardTitle>
            <CardDescription className="text-zinc-500">Порівняння активності (лайки + коментарі) за тиждень</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={comparisonData}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                 <XAxis dataKey="name" stroke="#71717a" axisLine={false} tickLine={false} />
                 <YAxis stroke="#71717a" axisLine={false} tickLine={false} />
                 <Tooltip 
                   contentStyle={{ backgroundColor: '#18181b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                   cursor={{fill: 'rgba(255,255,255,0.05)'}}
                 />
                 <Legend />
                 <Bar dataKey="Ви" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                 <Bar dataKey="Aroma" fill="#ef4444" radius={[4, 4, 0, 0]} />
                 <Bar dataKey="Lviv" fill="#f59e0b" radius={[4, 4, 0, 0]} />
               </BarChart>
             </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20 rounded-3xl">
          <CardHeader>
            <div className="flex items-center gap-2 mb-1">
               <Badge variant="outline" className="border-purple-500/50 text-purple-400 bg-purple-500/10 rounded-lg gap-1">
                  <Sparkles className="h-3 w-3" /> AI Аналіз
               </Badge>
            </div>
            <CardTitle className="text-white text-lg">Інсайти тижня</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="p-4 rounded-xl bg-[#18181B]/50 border border-white/5">
                <h4 className="text-sm font-medium text-white mb-1">🔥 Трендова тема</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                   Конкуренти активно постять про "Осіннє меню". Тобі варто запустити свій варіант гарбузового лате.
                </p>
             </div>
             <div className="p-4 rounded-xl bg-[#18181B]/50 border border-white/5">
                <h4 className="text-sm font-medium text-white mb-1">⏰ Час публікації</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                   Aroma Kava отримує пік активності о 09:00. Спробуй запостити о 08:45, щоб перехопити увагу.
                </p>
             </div>
             <Button variant="outline" className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:text-white rounded-xl">
               Згенерувати контент-план
             </Button>
          </CardContent>
        </Card>

      </div>

      {/* Competitors List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {competitors.map(comp => (
           <Card key={comp.id} className="bg-[#18181B] border-white/5 hover:border-white/10 transition-all rounded-3xl group">
             <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-lg text-white overflow-hidden">
                         {comp.name[0]}
                      </div>
                      <div>
                         <h3 className="font-bold text-white">{comp.name}</h3>
                         <div className="flex items-center gap-1 text-xs text-zinc-500">
                            {comp.platform === 'instagram' ? <Instagram className="h-3 w-3" /> : <Globe className="h-3 w-3" />}
                            {comp.handle}
                         </div>
                      </div>
                   </div>
                   <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-white hover:bg-white/5 rounded-lg">
                      <MoreHorizontal className="h-4 w-4" />
                   </Button>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-y border-white/5">
                   <div className="text-center border-r border-white/5">
                      <div className="text-lg font-bold text-white">{comp.followers}</div>
                      <div className="text-[10px] text-zinc-500 uppercase">Підписники</div>
                   </div>
                   <div className="text-center border-r border-white/5">
                      <div className={`text-lg font-bold ${comp.growth.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{comp.growth}</div>
                      <div className="text-[10px] text-zinc-500 uppercase">Ріст</div>
                   </div>
                   <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">{comp.engagement}</div>
                      <div className="text-[10px] text-zinc-500 uppercase">ER</div>
                   </div>
                </div>

                <div>
                   <div className="text-xs font-medium text-zinc-500 mb-2 uppercase flex justify-between items-center">
                      Топ пост тижня
                      <span className="text-zinc-600">{comp.postsPerWeek} постів/тижд</span>
                   </div>
                   <div className="flex gap-3 items-center bg-[#0F0F12] p-2 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                      <img src={comp.topPost} className="h-12 w-12 rounded-lg object-cover" alt="" />
                      <div className="flex-1 min-w-0">
                         <div className="text-xs text-zinc-300 truncate">"Затишок у кожній деталі..."</div>
                         <div className="flex gap-3 mt-1">
                            <span className="text-[10px] text-zinc-500 flex items-center gap-1"><Eye className="h-3 w-3" /> 12K</span>
                            <span className="text-[10px] text-zinc-500 flex items-center gap-1"><MessageCircle className="h-3 w-3" /> 45</span>
                         </div>
                      </div>
                   </div>
                </div>
             </CardContent>
           </Card>
         ))}
      </div>
    </div>
  );
}