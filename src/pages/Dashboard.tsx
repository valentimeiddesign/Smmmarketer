import React, { useState } from 'react';
import { LiveFeed } from '../components/LiveFeed';
import { 
  TrendingUp, 
  Users, 
  Clock,
  ArrowUpRight,
  Plus,
  BookOpen,
  GraduationCap,
  AlertCircle,
  Sparkles,
  ShoppingBag,
  Coffee,
  Zap,
  AreaChart,
  Brain
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Slider } from '../components/ui/slider';
import { BarChart, Bar, Cell, ResponsiveContainer, AreaChart as RechartsAreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

// Define niche-specific configurations
const nicheConfig: Record<string, any> = {
  ecommerce: {
    mainStat: { label: 'Замовлення', value: '1,284', subtext: '+12% конверсія', icon: ShoppingBag, color: 'text-blue-400' },
    cards: [
      { label: 'Продажі', value: '₴420K', sub: '+18% ріст', icon: TrendingUp, color: 'text-green-400' },
      { label: 'Покинуті', value: '12%', sub: '-3.2% покращ.', icon: AlertCircle, color: 'text-orange-400' },
      { label: 'ROAS', value: '4.2x', sub: 'Висока ефект.', icon: Zap, color: 'text-purple-400' },
      { label: 'Клієнти', value: '840', sub: '32 нових', icon: Users, color: 'text-blue-400' },
    ],
    secondaryStat: { label: 'Нові Клієнти', value: '128' }
  },
  cafe: {
    mainStat: { label: 'Відвідувачі', value: '4,892', subtext: '+8% трафік', icon: Coffee, color: 'text-orange-400' },
    cards: [
      { label: 'Сер. Чек', value: '₴185', sub: '+15 грн', icon: BookOpen, color: 'text-green-400' },
      { label: 'Відгуки', value: '4.9', sub: '28 нових', icon: Sparkles, color: 'text-yellow-400' },
      { label: 'Столики', value: '82%', sub: 'Завантаженість', icon: Users, color: 'text-blue-400' },
      { label: 'Доставка', value: '145', sub: 'Замовлень', icon: Clock, color: 'text-purple-400' },
    ],
    secondaryStat: { label: 'Бронювання', value: '42' }
  },
  influencer: {
    mainStat: { label: 'Підписники', value: '16,892', subtext: 'Загальне охоплення', icon: Users, color: 'text-pink-400' },
    cards: [
      { label: 'Пости', value: '282', sub: '+38% ріст', icon: BookOpen, color: 'text-green-400' },
      { label: 'Сторіз', value: '3.78', sub: 'Середнє/день', icon: GraduationCap, color: 'text-purple-400' },
      { label: 'Час', value: '4.8г', sub: 'Активність', icon: Clock, color: 'text-green-400' },
      { label: 'Залучення', value: '9.8%', sub: 'Високий ER', icon: AlertCircle, color: 'text-orange-400' },
    ],
    secondaryStat: { label: 'Нові ліди', value: '1,302' }
  },
  business: { // Default fallback
    mainStat: { label: 'Клієнти', value: '892', subtext: 'Активна база', icon: Users, color: 'text-indigo-400' },
    cards: [
      { label: 'Угоди', value: '24', sub: 'В роботі', icon: BookOpen, color: 'text-green-400' },
      { label: 'Дзвінки', value: '182', sub: 'За тиждень', icon: GraduationCap, color: 'text-purple-400' },
      { label: 'Зустрічі', value: '12', sub: 'Заплановано', icon: Clock, color: 'text-green-400' },
      { label: 'Конверсія', value: '22%', sub: '+2% ріст', icon: AlertCircle, color: 'text-orange-400' },
    ],
    secondaryStat: { label: 'Заявки', value: '45' }
  }
};

const weeklyData = [
  { name: 'Пн', value: 20, intensity: 1 },
  { name: 'Вт', value: 45, intensity: 2 },
  { name: 'Ср', value: 30, intensity: 1 },
  { name: 'Чт', value: 80, intensity: 3 },
  { name: 'Пт', value: 55, intensity: 2 },
  { name: 'Сб', value: 90, intensity: 3 },
  { name: 'Нд', value: 40, intensity: 2 },
];

// Predictive Data Generator
const generatePrediction = (boost: number) => {
    const baseData = [
        { name: 'Тиждень 1', organic: 120, boosted: 120 },
        { name: 'Тиждень 2', organic: 132, boosted: 140 },
        { name: 'Тиждень 3', organic: 125, boosted: 155 },
        { name: 'Тиждень 4', organic: 140, boosted: 180 },
    ];
    
    // Apply boost multiplier
    return baseData.map(d => ({
        ...d,
        boosted: Math.round(d.organic * (1 + (boost / 100) * 1.5))
    }));
};

interface DashboardProps {
  onViewChange: (view: string) => void;
  niche?: string;
  onAskAI: (message: string) => void;
}

export function Dashboard({ onViewChange, niche = 'business', onAskAI }: DashboardProps) {
  const config = nicheConfig[niche] || nicheConfig['business'];
  const [adBudget, setAdBudget] = useState([0]);
  const predictionData = generatePrediction(adBudget[0]);

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Greeting */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-medium text-white mb-1">Вітаю, Максим!</h1>
          <p className="text-2xl text-zinc-400 font-light">
             {niche === 'cafe' ? 'Час варити найкращу каву? ☕️' :
              niche === 'ecommerce' ? 'Готові підняти продажі? 🚀' :
              niche === 'influencer' ? 'Ваша аудиторія чекає! 📸' :
              'Готові підкорювати нові вершини?'}
          </p>
        </div>
        <div className="hidden md:block">
           <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              {niche === 'cafe' ? 'Режим: HoReCa' :
               niche === 'ecommerce' ? 'Режим: E-Commerce' :
               niche === 'influencer' ? 'Режим: Creator' : 'Режим: Business'}
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        
        {/* Left Column */}
        <div className="xl:col-span-1 flex flex-col gap-6">
          {/* Dynamic Main Stat Card */}
          <Card className="bg-[#18181B] border-none rounded-3xl overflow-hidden h-[280px] relative group">
             <CardContent className="p-6 flex flex-col h-full justify-between relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 bg-[#27272A] px-3 py-1.5 rounded-full">
                     <config.mainStat.icon className="h-4 w-4 text-white" />
                     <span className="text-xs font-medium text-white">{config.mainStat.label}</span>
                  </div>
                  <div className="text-xs text-zinc-500 cursor-pointer hover:text-white transition-colors">Всі канали</div>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-white mb-1">{config.mainStat.value}</div>
                  <div className="text-xs text-zinc-500">{config.mainStat.subtext}</div>
                </div>

                <div className="mt-auto h-[100px] w-full">
                   <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={weeklyData}>
                       <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                         {weeklyData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.intensity === 3 ? '#8B5CF6' : entry.intensity === 2 ? '#8B5CF680' : '#27272A'} />
                         ))}
                       </Bar>
                     </BarChart>
                   </ResponsiveContainer>
                </div>

                {/* Dynamic Floating Badge */}
                <div className="absolute bottom-20 right-6 bg-[#27272A] px-3 py-2 rounded-xl border border-zinc-800/50 shadow-xl backdrop-blur-md">
                   <div className="flex items-center gap-2 mb-1">
                     <div className="h-2 w-2 bg-indigo-500 rounded-full"></div>
                     <span className="text-[10px] text-zinc-400">{config.secondaryStat.label}</span>
                   </div>
                   <div className="text-lg font-bold text-white">{config.secondaryStat.value}</div>
                </div>
             </CardContent>
          </Card>

          {/* 4 Dynamic Small Stat Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
             {config.cards.map((card: any, i: number) => (
               <div key={i} className="bg-[#18181B] rounded-3xl p-5 flex flex-col justify-between h-[140px] hover:bg-[#1F1F22] transition-colors group cursor-pointer">
                 <div className="flex justify-between items-start">
                   <div className="flex items-center gap-2">
                     <div className="h-8 w-8 rounded-full bg-[#27272A] flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                       <card.icon className="h-4 w-4" />
                     </div>
                     <span className="text-xs font-medium text-zinc-400 group-hover:text-white">{card.label}</span>
                   </div>
                 </div>
                 <div>
                   <div className="text-2xl font-bold text-white">{card.value}</div>
                   <div className={`text-[10px] mt-1 ${card.color}`}>{card.sub}</div>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* Middle Column */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          
          {/* PREDICTIVE ENGINE WIDGET (New Module) */}
          <Card className="bg-gradient-to-b from-[#18181B] to-[#0F0F12] border-white/10 rounded-3xl overflow-hidden relative">
             {/* Abstract background glow */}
             <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1000&auto=format&fit=crop&q=60')] opacity-5 bg-cover bg-center mix-blend-overlay pointer-events-none"></div>
             
             <CardHeader className="pb-2 relative z-10 flex flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                   <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-indigo-400" />
                   </div>
                   <div>
                      <CardTitle className="text-lg font-bold text-white">Predictive Engine</CardTitle>
                      <p className="text-xs text-zinc-500">Симуляція росту "What-If"</p>
                   </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[10px] text-indigo-300 uppercase font-bold tracking-wider">
                   <Sparkles className="h-3 w-3" /> AI Powered
                </div>
             </CardHeader>
             
             <CardContent className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8">
                   {/* Chart Area */}
                   <div className="h-[200px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                         <RechartsAreaChart data={predictionData}>
                            <defs>
                               <linearGradient id="colorBoost" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                               </linearGradient>
                               <linearGradient id="colorOrg" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#71717A" stopOpacity={0.3}/>
                                  <stop offset="95%" stopColor="#71717A" stopOpacity={0}/>
                               </linearGradient>
                            </defs>
                            <XAxis dataKey="name" hide />
                            <YAxis hide />
                            <Tooltip 
                               contentStyle={{ backgroundColor: '#18181B', borderColor: '#27272A', borderRadius: '12px' }}
                               itemStyle={{ color: '#fff', fontSize: '12px' }}
                            />
                            <Area 
                               type="monotone" 
                               dataKey="boosted" 
                               stroke="#8B5CF6" 
                               fillOpacity={1} 
                               fill="url(#colorBoost)" 
                               strokeWidth={2}
                               name="Прогноз"
                            />
                            <Area 
                               type="monotone" 
                               dataKey="organic" 
                               stroke="#52525B" 
                               fillOpacity={1} 
                               fill="url(#colorOrg)" 
                               strokeWidth={2} 
                               strokeDasharray="5 5"
                               name="Поточний"
                            />
                         </RechartsAreaChart>
                      </ResponsiveContainer>
                   </div>

                   {/* Controls Area */}
                   <div className="flex flex-col justify-center space-y-6">
                      <div className="space-y-3">
                         <div className="flex justify-between items-center">
                            <span className="text-sm text-zinc-400 font-medium">Додатковий бюджет</span>
                            <span className="text-lg font-bold text-white flex items-baseline gap-1">
                               +${adBudget[0]}
                               <span className="text-xs text-zinc-500 font-normal">/тиждень</span>
                            </span>
                         </div>
                         <Slider 
                            value={adBudget} 
                            onValueChange={setAdBudget} 
                            max={500} 
                            step={10} 
                            className="py-2"
                         />
                         <p className="text-xs text-zinc-500">
                            Потягніть, щоб побачити вплив на ліди
                         </p>
                      </div>

                      <div className="bg-[#27272A]/50 rounded-xl p-4 border border-white/5">
                         <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-zinc-400">Прогнозований ріст</span>
                            <span className="text-xs text-green-400 font-bold flex items-center gap-1">
                               <TrendingUp className="h-3 w-3" />
                               +{Math.round(adBudget[0] * 1.2)}%
                            </span>
                         </div>
                         <div className="text-2xl font-bold text-white mb-2">
                            {Math.round(142 + (adBudget[0] * 0.8))} <span className="text-sm text-zinc-500 font-normal">лідів</span>
                         </div>
                         <Button 
                            size="sm" 
                            className="w-full bg-white text-black hover:bg-zinc-200 h-8 text-xs font-medium rounded-lg"
                            onClick={() => onAskAI(`Запусти кампанію з бюджетом $${adBudget[0]} для отримання ${Math.round(142 + (adBudget[0] * 0.8))} лідів`)}
                         >
                            Застосувати стратегію
                         </Button>
                      </div>
                   </div>
                </div>
             </CardContent>
          </Card>

          {/* Hero Banner (Smaller version now) */}
          <div className="bg-gradient-to-b from-[#0f0f13] to-[#18181b] border border-white/5 rounded-3xl p-6 flex items-center justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
             <div className="relative z-10 max-w-md">
                <h3 className="text-xl font-bold text-white mb-1">Інсайт дня 💡</h3>
                <p className="text-zinc-400 text-sm">
                  Ваш конкурент запустив акцію "1+1". Ми підготували шаблон сторіз для відповіді.
                </p>
             </div>
             <Button variant="secondary" className="relative z-10 shrink-0" onClick={() => onAskAI('Покажи шаблон сторіз для акції')}>
                Переглянути
             </Button>
          </div>

        </div>

        {/* Right Column */}
        <div className="xl:col-span-1 flex flex-col gap-6">
           {/* Live Neural Feed */}
           <div className="h-[320px]">
              <LiveFeed />
           </div>

           {/* Calendar Widget */}
           <div className="bg-[#18181B] rounded-3xl p-6">
              <div className="flex items-center justify-between mb-6">
                 <span className="text-sm font-semibold text-white">Листопад 2025</span>
                 <div className="flex gap-1">
                   <ArrowUpRight className="h-4 w-4 text-zinc-500" />
                 </div>
              </div>
              
              <div className="grid grid-cols-7 text-center gap-y-4 text-xs mb-2">
                 {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'].map(d => (
                   <div key={d} className="text-zinc-500">{d}</div>
                 ))}
              </div>
              <div className="grid grid-cols-7 text-center gap-y-4 text-xs font-medium">
                 {[27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9].slice(0, 14).map((d, i) => (
                   <div 
                     key={i} 
                     className={`
                       h-8 w-8 flex items-center justify-center rounded-full mx-auto cursor-pointer transition-all
                       ${d === 30 
                         ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/50' 
                         : 'text-zinc-400 hover:bg-[#27272A] hover:text-white'}
                     `}
                   >
                     {d}
                   </div>
                 ))}
              </div>
           </div>

           {/* Create Activity Button */}
           <Button 
             onClick={() => onAskAI('Допоможи створити нове завдання')}
             className="w-full h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30 border border-indigo-500/30 text-indigo-300 rounded-2xl"
           >
              <Plus className="h-4 w-4 mr-2" /> Нове Завдання
           </Button>
        </div>

      </div>
    </div>
  );
}