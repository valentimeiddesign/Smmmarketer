import React, { useState } from 'react';
import { 
  PlayCircle, 
  PauseCircle, 
  CreditCard,
  MoreHorizontal,
  AlertCircle,
  Plus,
  X,
  Sparkles,
  Users,
  Image as ImageIcon,
  MousePointerClick,
  Target
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export function Ads() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [createStep, setCreateStep] = useState(1); // 1: Goal, 2: Audience, 3: Creative
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      title: 'Ланч-меню: Круасани',
      status: 'active',
      goal: 'Трафік',
      audience: 'Локальні 2км, 18-35',
      budget: '200',
      spent: '1,200',
      ctr: '2.4%',
      result: '85 кліків',
      roi: 'Чудово',
      roiColor: 'text-green-400',
      img: 'https://images.unsplash.com/photo-1698899720612-dcbf89481ace?w=300&h=300&fit=crop',
      type: 'Feed • Stories'
    },
    {
      id: 2,
      title: 'Вечірня атмосфера',
      status: 'paused',
      goal: 'Охоплення',
      audience: 'Інтереси "Кава", "Книги"',
      budget: '150',
      spent: '450',
      ctr: '1.1%',
      result: '1,200 переглядів',
      roi: 'Середньо',
      roiColor: 'text-yellow-400',
      img: 'https://images.unsplash.com/photo-1684006997322-6a5128f44816?w=300&h=300&fit=crop',
      type: 'Reels'
    }
  ]);

  const toggleCampaign = (id: number) => {
    setCampaigns(campaigns.map(c => 
      c.id === id 
        ? { ...c, status: c.status === 'active' ? 'paused' : 'active' } 
        : c
    ));
  };

  // Render Create Campaign Modal Content
  const renderCreateStep = () => {
    switch(createStep) {
      case 1:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-lg font-medium text-white mb-4">Крок 1: Оберіть ціль кампанії</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Продажі', 'Трафік', 'Впізнаваність'].map((goal) => (
                <div key={goal} onClick={() => setCreateStep(2)} className="cursor-pointer bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-indigo-500 hover:bg-indigo-900/10 transition-all group">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {goal === 'Продажі' && <Target className="h-5 w-5" />}
                    {goal === 'Трафік' && <MousePointerClick className="h-5 w-5" />}
                    {goal === 'Впізнаваність' && <Users className="h-5 w-5" />}
                  </div>
                  <h4 className="font-bold text-white">{goal}</h4>
                  <p className="text-xs text-zinc-500 mt-1">Оптимізація під {goal.toLowerCase()}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-lg font-medium text-white mb-2">Крок 2: AI Таргетинг</h3>
            
            <div className="bg-zinc-900 border border-white/10 p-4 rounded-xl space-y-4">
              <div>
                <label className="text-xs text-zinc-500 uppercase font-bold">Опишіть ідеального клієнта</label>
                <div className="flex gap-2 mt-2">
                   <input className="flex-1 bg-zinc-950 border border-white/10 rounded-lg p-2 text-sm text-white focus:outline-none focus:border-indigo-500" placeholder="Наприклад: Студенти, люблять лате..." defaultValue="Любителі кави, працюють віддалено" />
                   <Button size="sm" className="bg-purple-600 hover:bg-purple-700 rounded-lg"><Sparkles className="h-4 w-4" /></Button>
                </div>
              </div>

              <div className="p-3 bg-purple-900/10 border border-purple-500/20 rounded-lg">
                 <div className="flex items-center gap-2 mb-2 text-purple-400 text-sm font-bold">
                    <Sparkles className="h-4 w-4" /> AI Рекомендація:
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {['Coffee lovers', 'Starbucks', 'Remote work', 'Freelancer', 'Age: 18-34', 'Kyiv +5km'].map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 cursor-pointer border-purple-500/10">
                        {tag}
                      </Badge>
                    ))}
                 </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-4">
               <Button variant="outline" onClick={() => setCreateStep(1)} className="rounded-xl border-white/10 text-white hover:bg-white/5">Назад</Button>
               <Button onClick={() => setCreateStep(3)} className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl">Далі</Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
             <h3 className="text-lg font-medium text-white mb-2">Крок 3: Креативи</h3>
             <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center p-8 hover:border-white/30 cursor-pointer transition-colors group">
                   <ImageIcon className="h-8 w-8 text-zinc-500 mb-2 group-hover:text-white" />
                   <span className="text-sm text-zinc-400">Завантажити фото</span>
                </div>
                <div className="border border-white/10 bg-zinc-900 rounded-xl p-2 relative group cursor-pointer ring-2 ring-indigo-500">
                   <div className="absolute top-2 right-2 bg-green-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                     AI Score: 9.8
                   </div>
                   <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=300&h=300&fit=crop" className="w-full h-32 object-cover rounded-lg opacity-80 group-hover:opacity-100" />
                   <div className="mt-2 text-xs text-center text-zinc-300">Кава на столі</div>
                </div>
             </div>
             
             <div className="bg-zinc-900 p-3 rounded-lg border border-white/10">
                <label className="text-xs text-zinc-500 uppercase font-bold">Рекламний текст (AI)</label>
                <p className="text-sm text-zinc-300 mt-1 italic">
                   "Твій ідеальний ранок починається тут. Замовляй каву з собою та отримуй круасан у подарунок! 🥐☕️"
                </p>
             </div>

             <div className="flex justify-end gap-2 mt-4">
               <Button variant="outline" onClick={() => setCreateStep(2)} className="rounded-xl border-white/10 text-white hover:bg-white/5">Назад</Button>
               <Button onClick={() => {setIsCreateModalOpen(false); setCreateStep(1)}} className="bg-green-600 hover:bg-green-500 text-white rounded-xl">🚀 Запустити кампанію</Button>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-20 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
         <div>
           <h2 className="text-2xl font-bold text-white">Рекламний Кабінет</h2>
           <p className="text-zinc-400">Керування Meta Ads (Facebook & Instagram)</p>
         </div>
         <div className="flex gap-3">
           <Card className="bg-[#18181B] shadow-sm border-white/5 p-2 flex items-center gap-3 px-4 rounded-xl">
              <CreditCard className="h-4 w-4 text-zinc-500" />
              <span className="text-sm font-medium text-zinc-200">Баланс: 4,200 ₴</span>
           </Card>
           <Button 
             onClick={() => setIsCreateModalOpen(true)}
             className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-900/20 rounded-xl"
           >
             <Plus className="h-4 w-4 mr-2" />
             Створити кампанію
           </Button>
         </div>
      </div>

      {/* Advanced Analytics Chart */}
      <div className="flex flex-col gap-6">
         {/* Top Stats Grid */}
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-[#18181B] border-white/5 rounded-3xl">
               <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                     <div>
                        <p className="text-xs font-medium text-zinc-500 uppercase">Витрати</p>
                        <h3 className="text-2xl font-bold text-white mt-2">4,200 ₴</h3>
                     </div>
                     <div className="p-2 bg-zinc-800 rounded-xl"><CreditCard className="h-4 w-4 text-zinc-400"/></div>
                  </div>
               </CardContent>
            </Card>
            
            <Card className="bg-[#18181B] border-white/5 rounded-3xl">
               <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                     <div>
                        <p className="text-xs font-medium text-zinc-500 uppercase">Покази</p>
                        <h3 className="text-2xl font-bold text-white mt-2">45.2k</h3>
                     </div>
                     <div className="p-2 bg-zinc-800 rounded-xl"><Sparkles className="h-4 w-4 text-blue-400"/></div>
                  </div>
               </CardContent>
            </Card>

            <Card className="bg-[#18181B] border-white/5 rounded-3xl">
               <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                     <div>
                        <p className="text-xs font-medium text-zinc-500 uppercase">Ліди</p>
                        <h3 className="text-2xl font-bold text-white mt-2">450</h3>
                     </div>
                     <div className="p-2 bg-zinc-800 rounded-xl"><Users className="h-4 w-4 text-green-400"/></div>
                  </div>
               </CardContent>
            </Card>

            <Card className="bg-[#18181B] border-white/5 rounded-3xl">
               <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                     <div>
                        <p className="text-xs font-medium text-zinc-500 uppercase">Кліки</p>
                        <h3 className="text-2xl font-bold text-white mt-2">3,200</h3>
                     </div>
                     <div className="p-2 bg-zinc-800 rounded-xl"><MousePointerClick className="h-4 w-4 text-purple-400"/></div>
                  </div>
               </CardContent>
            </Card>
         </div>

         {/* Social Media Breakdown Table */}
         <Card className="bg-[#18181B] border-white/5 rounded-3xl">
            <CardHeader>
               <CardTitle className="text-white">Деталізація по каналах</CardTitle>
               <CardDescription className="text-zinc-500">Порівняння ефективності соціальних мереж</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="relative overflow-x-auto">
                  <div className="grid grid-cols-4 gap-4 min-w-[600px] text-sm">
                     {/* Header Row */}
                     <div className="font-medium text-zinc-500 pb-4 border-b border-zinc-800">Метрика</div>
                     <div className="font-bold text-white pb-4 border-b border-zinc-800 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-pink-500"></div> Instagram
                     </div>
                     <div className="font-bold text-white pb-4 border-b border-zinc-800 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div> Facebook
                     </div>
                     <div className="font-bold text-white pb-4 border-b border-zinc-800 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-white"></div> TikTok
                     </div>

                     {/* Data Rows */}
                     <div className="text-zinc-400 py-3 border-b border-zinc-800/50">Витрати</div>
                     <div className="text-white py-3 border-b border-zinc-800/50">2,800 ₴</div>
                     <div className="text-white py-3 border-b border-zinc-800/50">1,100 ₴</div>
                     <div className="text-white py-3 border-b border-zinc-800/50">300 ₴</div>

                     <div className="text-zinc-400 py-3 border-b border-zinc-800/50">Охоплення</div>
                     <div className="text-white py-3 border-b border-zinc-800/50">25,000</div>
                     <div className="text-white py-3 border-b border-zinc-800/50">12,000</div>
                     <div className="text-white py-3 border-b border-zinc-800/50">8,200</div>
                     
                     <div className="text-zinc-400 py-3 border-b border-zinc-800/50">Повідомлення</div>
                     <div className="text-white py-3 border-b border-zinc-800/50">85</div>
                     <div className="text-white py-3 border-b border-zinc-800/50">32</div>
                     <div className="text-white py-3 border-b border-zinc-800/50">11</div>

                     <div className="text-zinc-400 py-3 border-b border-zinc-800/50">Приріст підписників</div>
                     <div className="text-green-400 py-3 border-b border-zinc-800/50">+840</div>
                     <div className="text-green-400 py-3 border-b border-zinc-800/50">+120</div>
                     <div className="text-green-400 py-3 border-b border-zinc-800/50">+240</div>

                     <div className="text-zinc-400 py-3">Ціна ліда (CPL)</div>
                     <div className="font-bold text-white py-3">32 ₴</div>
                     <div className="font-bold text-white py-3">55 ₴</div>
                     <div className="font-bold text-white py-3">85 ₴</div>
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>

      {/* Active Campaigns */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg text-zinc-200">Активні кампанії</h3>
        
        {campaigns.map((campaign) => (
          <div 
            key={campaign.id}
            className={`bg-[#18181B] border rounded-3xl p-4 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm transition-all duration-300 ${
              campaign.status === 'active' ? 'border-white/10 shadow-lg shadow-black/50' : 'border-white/5 opacity-60 grayscale'
            }`}
          >
            <div className="h-24 w-full md:w-32 flex-shrink-0 relative rounded-xl overflow-hidden bg-zinc-800">
              <img src={campaign.img} className="h-full w-full object-cover" alt="Ad" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm text-white text-[10px] px-2 py-1 truncate border-t border-white/10">
                {campaign.type}
              </div>
            </div>
            
            <div className="flex-1 min-w-0 w-full">
              <div className="flex items-center justify-between md:justify-start gap-2 mb-2">
                <h4 className="font-semibold text-white text-lg md:text-base">{campaign.title}</h4>
                {campaign.status === 'active' ? (
                   <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 gap-1 border border-emerald-500/20 rounded-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Активна
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="bg-zinc-800 text-zinc-400 hover:bg-zinc-800 border border-zinc-700 rounded-lg">
                    Призупинена
                  </Badge>
                )}
              </div>
              <p className="text-sm text-zinc-400 mb-4 md:mb-3">
                Ціль: <span className="text-zinc-300">{campaign.goal}</span> • Аудиторія: <span className="text-zinc-300">{campaign.audience}</span>
              </p>
              
              <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-3 md:pt-0 md:border-t-0 md:w-2/3">
                <div>
                  <div className="text-xs text-zinc-500">Витрачено</div>
                  <div className="font-medium text-zinc-200">{campaign.spent} ₴</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-500">CTR</div>
                  <div className="font-medium text-zinc-200">{campaign.ctr}</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-500">Результат</div>
                  <div className="font-medium text-zinc-200">{campaign.result}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full md:w-auto gap-4 mt-2 md:mt-0">
               {campaign.status === 'active' && (
                 <div className="text-left md:text-right flex-1 md:flex-none">
                   <div className={`text-sm font-medium ${campaign.roiColor}`}>{campaign.roi} ROI</div>
                   <div className="text-xs text-zinc-500">AI Score: 9/10</div>
                 </div>
               )}
               
               <div className="flex gap-2">
                 <Button 
                    size="icon" 
                    variant="ghost" 
                    className={`h-10 w-10 rounded-full ${campaign.status === 'active' ? 'text-zinc-400 hover:text-yellow-400 hover:bg-yellow-400/10' : 'text-zinc-400 hover:text-green-400 hover:bg-green-400/10'}`}
                    onClick={() => toggleCampaign(campaign.id)}
                  >
                   {campaign.status === 'active' ? <PauseCircle className="h-6 w-6" /> : <PlayCircle className="h-6 w-6" />}
                 </Button>
                 <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full text-zinc-400 hover:text-white hover:bg-white/5">
                   <MoreHorizontal className="h-5 w-5" />
                 </Button>
               </div>
            </div>
          </div>
        ))}
        
        {/* Add new placeholder */}
        <div 
          onClick={() => setIsCreateModalOpen(true)}
          className="border-2 border-dashed border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-zinc-500 hover:border-white/20 hover:text-zinc-300 hover:bg-white/5 transition-all cursor-pointer gap-2 group"
        >
           <div className="h-12 w-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
             <Plus className="h-6 w-6" />
           </div>
           <span className="font-medium">Створити нову кампанію</span>
        </div>
      </div>

      {/* AI Suggestion Card */}
      <div className="mt-8 p-4 border border-indigo-500/30 bg-indigo-500/5 rounded-2xl flex items-start gap-4">
        <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/20">
          <AlertCircle className="h-5 w-5 text-white" />
        </div>
        <div>
          <h4 className="font-medium text-indigo-100 mb-1">Порада AI</h4>
          <p className="text-sm text-indigo-200/70 mb-3">
            Кампанія "Ланч-меню" має високий CTR (2.4%). Рекомендуємо збільшити бюджет на 20% для масштабування результатів.
          </p>
          <Button size="sm" className="bg-indigo-600 text-white hover:bg-indigo-500 border-none rounded-lg">
            Застосувати зміни
          </Button>
        </div>
      </div>

      {/* Create Modal Overlay */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
           <div className="bg-[#0F0F12] border border-white/10 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#0F0F12]">
                 <h3 className="font-bold text-white flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-purple-500" /> 
                    Створення кампанії (AI)
                 </h3>
                 <Button variant="ghost" size="icon" onClick={() => setIsCreateModalOpen(false)} className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg">
                    <X className="h-4 w-4" />
                 </Button>
              </div>
              
              <div className="p-6 overflow-y-auto flex-1">
                 {/* Steps Indicator */}
                 <div className="flex items-center gap-2 mb-6 justify-center">
                    <div className={`h-2 w-8 rounded-full transition-colors ${createStep >= 1 ? 'bg-indigo-500' : 'bg-zinc-800'}`} />
                    <div className={`h-2 w-8 rounded-full transition-colors ${createStep >= 2 ? 'bg-indigo-500' : 'bg-zinc-800'}`} />
                    <div className={`h-2 w-8 rounded-full transition-colors ${createStep >= 3 ? 'bg-indigo-500' : 'bg-zinc-800'}`} />
                 </div>
                 
                 {renderCreateStep()}
              </div>
           </div>
        </div>
      )}

    </div>
  );
}