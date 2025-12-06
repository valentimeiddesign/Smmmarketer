import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  Image as ImageIcon,
  Wand2,
  Sparkles,
  Instagram,
  Facebook,
  Target,
  Hash,
  Rocket,
  Zap,
  CheckCircle2,
  MousePointerClick,
  Eye,
  MoreHorizontal
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { cn } from '../components/ui/utils';
import { Switch } from '../components/ui/switch';
import { Slider } from '../components/ui/slider';

// Custom TikTok Icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="12" 
    height="12" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Mock Data Generator
const generateDays = () => {
  const days = [];
  for (let i = 1; i <= 30; i++) {
    days.push({ date: i, posts: [] });
  }
  
  // Add some mock posts
  days[1].posts = [{ 
    id: 1, 
    type: 'reel', 
    platform: 'instagram',
    goal: 'commercial',
    title: 'Процес приготування', 
    status: 'published',
    isPromoted: true,
    adBudget: 50, // $
    adReach: '12.4k',
    image: 'https://images.unsplash.com/photo-1750658403468-5ad4e41104f3?w=300&h=300&fit=crop' 
  }];
  
  days[3].posts = [{ 
    id: 2, 
    type: 'story', 
    platform: 'instagram',
    goal: 'engagement',
    title: 'Опитування: Десерт', 
    status: 'scheduled',
    isPromoted: false
  }];
  
  days[4].posts = [{ 
    id: 3, 
    type: 'post', 
    platform: 'facebook',
    goal: 'info',
    title: 'Нове Меню', 
    status: 'draft',
    isPromoted: false,
    image: 'https://images.unsplash.com/photo-1698899720612-dcbf89481ace?w=300&h=300&fit=crop' 
  }];
  
  days[6].posts = [{ 
    id: 4, 
    type: 'post', 
    platform: 'instagram',
    goal: 'engagement',
    title: 'Фото інтер\'єру', 
    status: 'idea',
    isPromoted: true,
    adBudget: 20,
    adReach: '5.1k',
    image: 'https://images.unsplash.com/photo-1684006997322-6a5128f44816?w=300&h=300&fit=crop' 
  }];

   days[8].posts = [{ 
    id: 5, 
    type: 'reel', 
    platform: 'tiktok',
    goal: 'viral',
    title: 'ASMR Звуки', 
    status: 'scheduled',
    isPromoted: false,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=300&fit=crop' 
  }];
  
  return days;
};

const PostCard = ({ post, onClick }: { post: any, onClick: () => void }) => {
  const getStatusColor = () => {
    switch (post.status) {
      case 'published': return 'bg-[#18181B] border-green-900/50';
      case 'scheduled': return 'bg-[#18181B] border-indigo-900/50';
      case 'draft': return 'bg-[#18181B] border-yellow-900/50';
      default: return 'bg-[#18181B] border-white/10 border-dashed';
    }
  };

  const getGoalColor = () => {
    switch (post.goal) {
      case 'commercial': return 'bg-emerald-500';
      case 'info': return 'bg-indigo-500';
      case 'viral': return 'bg-purple-500';
      case 'engagement': return 'bg-pink-500';
      default: return 'bg-zinc-500';
    }
  };

  const getPlatformIcon = () => {
    switch (post.platform) {
      case 'instagram': return <Instagram className="h-3 w-3 text-pink-500" />;
      case 'facebook': return <Facebook className="h-3 w-3 text-indigo-500" />;
      case 'tiktok': return <TikTokIcon className="h-3 w-3 text-white" />;
      default: return <Target className="h-3 w-3 text-zinc-500" />;
    }
  };

  return (
    <div 
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className={`p-2 rounded-xl border text-xs mb-2 cursor-pointer hover:bg-white/5 transition-all group relative overflow-hidden ${getStatusColor()}`}
    >
      {/* Goal Strip */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${getGoalColor()}`} />
      
      {/* Promoted Glow */}
      {post.isPromoted && (
          <div className="absolute inset-0 border-2 border-indigo-500/30 rounded-xl animate-pulse pointer-events-none" />
      )}

      <div className="flex items-center justify-between mb-1 pl-2">
        <span className="capitalize font-semibold flex items-center gap-1 text-zinc-400">
           {getPlatformIcon()}
           <span className="text-[10px] uppercase">{post.type}</span>
        </span>
        <div className="flex items-center gap-1">
            {/* Promotion Icon */}
            {post.isPromoted && (
                <div className="h-4 w-4 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <Rocket className="h-2.5 w-2.5 text-indigo-400" />
                </div>
            )}
            {/* Goal Dot for quick visual */}
            <div className={`h-1.5 w-1.5 rounded-full ${getGoalColor()} opacity-50`} title={`Ціль: ${post.goal}`} />
        </div>
      </div>
      <div className="font-medium truncate text-zinc-200 pl-2">{post.title}</div>
      {post.isPromoted && post.adReach && (
          <div className="pl-2 mt-1 text-[9px] text-indigo-300 flex items-center gap-1">
              <Eye className="h-2.5 w-2.5" /> {post.adReach}
          </div>
      )}
      {post.image && (
        <div className="mt-2 pl-2">
           <img src={post.image} alt="" className="w-full h-16 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
        </div>
      )}
    </div>
  );
};

export function Content() {
  const [days, setDays] = useState(generateDays());
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [filterPlatform, setFilterPlatform] = useState('all');
  
  // Promotion State for Modal
  const [promoBudget, setPromoBudget] = useState([20]);
  const [promoDays, setPromoDays] = useState([5]);
  
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

  useEffect(() => {
      if (selectedPost) {
          setPromoBudget([selectedPost.adBudget || 20]);
          setPromoDays([5]); // Default
      }
  }, [selectedPost]);

  const handleDayClick = (dayIndex: number) => {
    const newPost = { 
      id: Date.now(), 
      type: 'post', 
      platform: 'instagram',
      goal: 'info',
      title: 'Новий пост', 
      status: 'draft',
      isPromoted: false
    };
    
    const newDays = [...days];
    newDays[dayIndex].posts.push(newPost);
    setDays(newDays);
    
    setSelectedPost(newPost);
    setGeneratedContent('');
  };

  const handleAutoSchedule = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      const newDays = [...days];
      if (!newDays[10].posts.find(p => p.title === 'Звуки кав\'ярні')) {
         newDays[10].posts.push({ id: 5, type: 'reel', platform: 'tiktok', goal: 'viral', title: 'Звуки кав\'ярні', status: 'idea', isPromoted: false });
      }
      if (!newDays[12].posts.find(p => p.title === 'Акція: 1+1')) {
         newDays[12].posts.push({ id: 6, type: 'post', platform: 'facebook', goal: 'commercial', title: 'Акція: 1+1', status: 'idea', isPromoted: true, adBudget: 15, adReach: '3.2k' });
      }
      setDays(newDays);
    }, 1500);
  };

  const handleGenerateText = () => {
    setGeneratedContent('Думаю...');
    setTimeout(() => {
      setGeneratedContent("☕ Відчуй магію ранку зі свіжообсмаженою кавою! \n\nКожна філіжанка — це маленька подорож. Сьогодні рекомендуємо наш фірмовий капучино з ноткою карамелі.\n\n📍 Чекаємо на тебе за адресою вул. Хрещатик 10\n\n#кава #ранок #київ #кавярня");
    }, 1000);
  };

  const togglePromotion = () => {
      if (!selectedPost) return;
      const updatedPost = { 
          ...selectedPost, 
          isPromoted: !selectedPost.isPromoted,
          adBudget: !selectedPost.isPromoted ? promoBudget[0] : undefined,
          adReach: !selectedPost.isPromoted ? `${(promoBudget[0] * 250).toLocaleString()}` : undefined
      };
      
      // Update in local list (simplified for demo)
      const newDays = days.map(d => ({
          ...d,
          posts: d.posts.map(p => p.id === updatedPost.id ? updatedPost : p)
      }));
      setDays(newDays);
      setSelectedPost(updatedPost);
  };

  const filteredDays = days.map(day => ({
    ...day,
    posts: day.posts.filter(post => filterPlatform === 'all' || post.platform === filterPlatform)
  }));

  return (
    <div className="h-full flex flex-col max-w-6xl mx-auto w-full pb-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          {/* Date Nav */}
          <div className="flex items-center bg-[#18181B] border border-white/5 rounded-xl p-1 shadow-sm">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="px-4 font-medium text-sm text-zinc-200">Листопад 2025</span>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Platform Filter */}
          <div className="flex gap-1 bg-[#18181B] p-1 rounded-xl border border-white/5">
            <button 
              onClick={() => setFilterPlatform('all')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${filterPlatform === 'all' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'}`}
            >
              Всі
            </button>
            <button 
              onClick={() => setFilterPlatform('instagram')}
              className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${filterPlatform === 'instagram' ? 'bg-pink-500/10 text-pink-400' : 'text-zinc-500 hover:text-pink-400'}`}
              title="Instagram"
            >
              <Instagram className="h-3.5 w-3.5" />
            </button>
            <button 
              onClick={() => setFilterPlatform('facebook')}
              className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${filterPlatform === 'facebook' ? 'bg-indigo-500/10 text-indigo-400' : 'text-zinc-500 hover:text-indigo-400'}`}
              title="Facebook"
            >
              <Facebook className="h-3.5 w-3.5" />
            </button>
            <button 
              onClick={() => setFilterPlatform('tiktok')}
              className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${filterPlatform === 'tiktok' ? 'bg-cyan-500/10 text-cyan-400' : 'text-zinc-500 hover:text-cyan-400'}`}
              title="TikTok"
            >
              <TikTokIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto justify-end">
          {/* Legend */}
          <div className="hidden lg:flex items-center gap-3 text-[10px] text-zinc-500 mr-2">
            <div className="flex items-center gap-1"><Rocket className="h-3 w-3 text-indigo-400" /> Просування</div>
            <div className="w-px h-3 bg-white/10 mx-1" />
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Продаж</div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-indigo-500" /> Інфо</div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-500" /> Віральні</div>
          </div>

          <Button 
            className="gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white transition-all shadow-lg shadow-indigo-900/20 rounded-xl"
            onClick={handleAutoSchedule}
            disabled={isGenerating}
          >
            {isGenerating ? <Sparkles className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
            {isGenerating ? 'Планування...' : 'Авто-заповнення'}
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-[#18181B] border border-white/5 rounded-3xl shadow-sm flex-1 flex flex-col overflow-hidden min-h-[600px]">
        {/* Header Row */}
        <div className="grid grid-cols-7 border-b border-white/5 bg-[#18181B]">
          {weekDays.map((day) => (
            <div key={day} className="p-3 text-center text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              {day}
            </div>
          ))}
        </div>
        
        {/* Days Grid */}
        <div className="grid grid-cols-7 grid-rows-5 flex-1">
          {filteredDays.map((day, i) => (
            <div 
              key={i} 
              onClick={() => handleDayClick(i)}
              className={`border-b border-r border-white/5 p-2 relative group hover:bg-white/5 transition-colors cursor-pointer ${i % 7 === 6 ? 'border-r-0' : ''}`}
            >
               <div className="flex items-center justify-between mb-2">
                  <span className={cn(
                    "text-sm font-medium h-6 w-6 flex items-center justify-center rounded-full transition-colors",
                    i === 4 ? "bg-indigo-600 text-white" : "text-zinc-500 group-hover:text-zinc-300"
                  )}>
                    {day.date}
                  </span>
                  <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg">
                    <Plus className="h-3 w-3" />
                  </Button>
               </div>
               
               <div className="space-y-1">
                 {day.posts.map((post, idx) => (
                   <PostCard key={idx} post={post} onClick={() => setSelectedPost(post)} />
                 ))}
                 {day.posts.length === 0 && (
                    <div className="h-full min-h-[40px]" />
                 )}
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Post Modal (Overlay) */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setSelectedPost(null)}>
           <Card className="w-full max-w-5xl bg-[#18181B] border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row h-[85vh] md:h-[650px] rounded-3xl" onClick={e => e.stopPropagation()}>
             
             {/* Left: Editor */}
             <div className="flex-1 flex flex-col p-6 border-b md:border-b-0 md:border-r border-white/5 overflow-y-auto custom-scrollbar">
               <div className="flex items-center justify-between mb-6">
                 <div className="flex items-center gap-3">
                   {/* Platform Selector Mock */}
                   <div className="p-2 bg-zinc-900 rounded-xl border border-white/5">
                      {selectedPost.platform === 'instagram' && <Instagram className="h-5 w-5 text-pink-500" />}
                      {selectedPost.platform === 'facebook' && <Facebook className="h-5 w-5 text-indigo-500" />}
                      {selectedPost.platform === 'tiktok' && <TikTokIcon className="h-5 w-5 text-white" />}
                   </div>
                   <h3 className="text-xl font-bold text-white truncate max-w-[200px]">{selectedPost.title}</h3>
                 </div>
                 <div className="flex gap-2">
                    {selectedPost.isPromoted && (
                        <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 flex gap-1 items-center px-2">
                            <Rocket className="h-3 w-3" /> Ads On
                        </Badge>
                    )}
                    <Badge variant="outline" className="border-white/10 text-zinc-400 cursor-pointer hover:text-white uppercase text-[10px] rounded-lg">
                      {selectedPost.type}
                    </Badge>
                    <Badge className={`uppercase text-[10px] rounded-lg ${
                      selectedPost.goal === 'commercial' ? 'bg-emerald-600' : 
                      selectedPost.goal === 'info' ? 'bg-indigo-600' : 'bg-purple-600'
                    }`}>
                      {selectedPost.goal === 'commercial' ? 'Продаж' : selectedPost.goal === 'info' ? 'Інфо' : 'Віральні'}
                    </Badge>
                 </div>
               </div>

               <div className="space-y-6 flex-1">
                  <div className="flex gap-4">
                     <div className="w-24 h-24 bg-zinc-900 rounded-xl border border-white/5 flex items-center justify-center cursor-pointer hover:border-white/20 transition-colors flex-shrink-0">
                        {selectedPost.image ? (
                          <img src={selectedPost.image} className="w-full h-full object-cover rounded-xl" />
                        ) : (
                          <ImageIcon className="h-8 w-8 text-zinc-600" />
                        )}
                     </div>
                     <div className="flex-1">
                        <label className="text-xs font-medium text-zinc-500 uppercase mb-2 block">Параметри публікації</label>
                        <div className="flex gap-2 mb-3">
                          <Button variant="outline" size="sm" className="border-white/10 text-zinc-300 text-xs h-8 flex-1 rounded-lg hover:bg-white/5">
                            Змінити медіа
                          </Button>
                          <Button variant="outline" size="sm" className="border-white/10 text-zinc-300 text-xs h-8 gap-1 flex-1 rounded-lg hover:bg-white/5">
                            <Sparkles className="h-3 w-3 text-purple-500" /> AI Покращення
                          </Button>
                        </div>
                        <div className="flex gap-2">
                           <div className="flex-1 bg-zinc-900 border border-white/5 rounded-lg px-2 py-1.5 text-xs text-zinc-400 flex items-center gap-2">
                             <Target className="h-3 w-3" />
                             <span>Ціль: {selectedPost.goal}</span>
                           </div>
                           <div className="flex-1 bg-zinc-900 border border-white/5 rounded-lg px-2 py-1.5 text-xs text-zinc-400 flex items-center gap-2">
                             <Hash className="h-3 w-3" />
                             <span>Теги: кава, ранок</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                     <div className="flex justify-between mb-2">
                        <label className="text-xs font-medium text-zinc-500 uppercase">Текст публікації</label>
                        <button 
                          onClick={handleGenerateText}
                          className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                        >
                          <Wand2 className="h-3 w-3" /> Згенерувати текст
                        </button>
                     </div>
                     <textarea 
                        className="w-full h-[120px] bg-zinc-900 rounded-xl border border-white/5 p-4 text-zinc-200 focus:outline-none focus:border-indigo-600/50 focus:ring-1 focus:ring-indigo-600/50 transition-colors resize-none text-sm leading-relaxed placeholder:text-zinc-700"
                        placeholder="Напиши текст поста тут..."
                        value={generatedContent || "Опис твого поста..."}
                        onChange={(e) => setGeneratedContent(e.target.value)}
                     />
                  </div>

                  {/* ADS SECTION */}
                  <div className={`p-4 rounded-2xl border transition-all duration-300 ${
                      selectedPost.isPromoted 
                      ? 'bg-indigo-500/10 border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.1)]' 
                      : 'bg-zinc-900/50 border-white/5 hover:bg-zinc-900'
                  }`}>
                      <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                              <div className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors ${selectedPost.isPromoted ? 'bg-indigo-500 text-white' : 'bg-zinc-800 text-zinc-500'}`}>
                                  <Rocket className="h-4 w-4" />
                              </div>
                              <div>
                                  <h4 className="text-sm font-bold text-white">Просувати публікацію</h4>
                                  <p className="text-[10px] text-zinc-500">Запустіть рекламу в один клік</p>
                              </div>
                          </div>
                          <Switch 
                            checked={selectedPost.isPromoted}
                            onCheckedChange={togglePromotion}
                          />
                      </div>
                      
                      {selectedPost.isPromoted && (
                          <div className="space-y-4 animate-in slide-in-from-top-2 fade-in">
                              <div className="grid grid-cols-2 gap-4">
                                  <div>
                                      <label className="text-[10px] text-zinc-500 uppercase mb-1.5 block flex justify-between">
                                          <span>Бюджет (USD)</span>
                                          <span className="text-white font-bold">${promoBudget[0]}</span>
                                      </label>
                                      <Slider 
                                        value={promoBudget} 
                                        onValueChange={setPromoBudget}
                                        max={500} 
                                        step={5} 
                                        className="py-2"
                                      />
                                  </div>
                                  <div>
                                      <label className="text-[10px] text-zinc-500 uppercase mb-1.5 block flex justify-between">
                                          <span>Тривалість (Днів)</span>
                                          <span className="text-white font-bold">{promoDays[0]} днів</span>
                                      </label>
                                      <Slider 
                                        value={promoDays} 
                                        onValueChange={setPromoDays}
                                        max={30} 
                                        step={1} 
                                        className="py-2"
                                      />
                                  </div>
                              </div>
                              
                              <div className="bg-black/20 rounded-xl p-3 flex items-center justify-between border border-white/5">
                                  <div className="flex items-center gap-2">
                                      <Zap className="h-4 w-4 text-yellow-400" />
                                      <span className="text-xs text-zinc-300">Очікуване охоплення:</span>
                                  </div>
                                  <span className="text-sm font-bold text-white">
                                      ~{(promoBudget[0] * 250).toLocaleString()} людей
                                  </span>
                              </div>
                          </div>
                      )}
                  </div>
               </div>
               
               <div className="mt-6 flex gap-3">
                 <Button className="flex-1 bg-white text-black hover:bg-zinc-200 rounded-xl font-semibold">
                    Зберегти
                 </Button>
                 <Button variant="outline" className="border-white/10 text-zinc-300 hover:bg-white/5 hover:text-white rounded-xl" onClick={() => setSelectedPost(null)}>
                    Скасувати
                 </Button>
               </div>
             </div>

             {/* Right: Preview */}
             <div className="hidden lg:flex w-[350px] bg-[#0F0F12] p-6 flex-col items-center justify-center border-l border-white/5">
                <div className="mb-4 text-xs text-zinc-500 uppercase tracking-wider font-semibold">Попередній перегляд ({selectedPost.platform})</div>
                
                {/* Phone Mockup */}
                <div className="w-[280px] bg-black rounded-[2.5rem] border-4 border-zinc-800 overflow-hidden shadow-2xl relative">
                   {/* Notch */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-zinc-800 rounded-b-lg z-10" />
                   
                   {/* Content */}
                   <div className="h-[500px] bg-white flex flex-col">
                      <div className="h-8 bg-white border-b flex items-center justify-center text-[10px] font-bold text-black capitalize">{selectedPost.platform}</div>
                      <div className="p-2 flex items-center gap-2 justify-between">
                         <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-zinc-200" />
                            <div className="text-[10px] font-bold text-black flex flex-col leading-tight">
                                <span>vasha_kavyarnya</span>
                                {selectedPost.isPromoted && (
                                    <span className="text-[8px] font-normal text-zinc-500">Sponsored</span>
                                )}
                            </div>
                         </div>
                         <MoreHorizontal className="h-4 w-4 text-black" />
                      </div>
                      <div className="aspect-square bg-zinc-100 flex items-center justify-center overflow-hidden relative">
                         {selectedPost.image ? (
                           <img src={selectedPost.image} className="w-full h-full object-cover" />
                         ) : (
                           <ImageIcon className="h-8 w-8 text-zinc-300" />
                         )}
                         
                         {/* Platform Overlay UI Mock */}
                         {selectedPost.platform === 'tiktok' && (
                           <div className="absolute right-2 bottom-10 flex flex-col gap-2 text-white text-[10px] items-center">
                              <div className="w-6 h-6 bg-white/20 rounded-full" />
                              <div className="w-6 h-6 bg-white/20 rounded-full" />
                              <div className="w-6 h-6 bg-white/20 rounded-full" />
                           </div>
                         )}

                         {selectedPost.isPromoted && (
                             <div className="absolute bottom-0 left-0 right-0 bg-blue-500 text-white text-[10px] font-bold py-1.5 px-3 flex justify-between items-center">
                                 <span>Learn More</span>
                                 <ChevronRight className="h-3 w-3" />
                             </div>
                         )}
                      </div>
                      <div className="p-2 text-[10px] space-y-1 text-black">
                         <div className="flex gap-3 py-1">
                             <div className="h-5 w-5 rounded-full border border-black block" /> 
                             <div className="h-5 w-5 rounded-full border border-black block" />
                             <div className="h-5 w-5 rounded-full border border-black block" />
                         </div>
                         <div className="font-bold">Вподобали user123 та інші</div>
                         <div>
                           <span className="font-bold">vasha_kavyarnya</span> {generatedContent || "Опис твого поста..."}
                         </div>
                      </div>
                   </div>
                </div>
             </div>

           </Card>
        </div>
      )}
    </div>
  );
}