import React, { useState } from 'react';
import { 
  Fingerprint, 
  Scan, 
  Palette, 
  Type, 
  Users, 
  Globe, 
  Sparkles, 
  RefreshCw,
  Share2,
  ShieldCheck,
  Zap,
  BrainCircuit
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

// Mock Data for Tone of Voice
const toneData = [
  { subject: 'Дружній', A: 120, fullMark: 150 },
  { subject: 'Експертний', A: 98, fullMark: 150 },
  { subject: 'Гумористичний', A: 86, fullMark: 150 },
  { subject: 'Лаконічний', A: 99, fullMark: 150 },
  { subject: 'Емоційний', A: 85, fullMark: 150 },
  { subject: 'Формальний', A: 40, fullMark: 150 },
];

export function BrandDNA() {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-8 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-900/20">
               <Fingerprint className="h-6 w-6 text-white" />
            </div>
            Brand DNA & AI Twin
          </h2>
          <p className="text-zinc-400 mt-2 text-lg">Цифровий зліпок вашого бізнесу. AI використовує це для генерації контенту.</p>
        </div>
        
        <Button 
          onClick={handleScan}
          disabled={isScanning}
          size="lg" 
          className="bg-white text-black hover:bg-zinc-200 rounded-xl shadow-xl shadow-white/5"
        >
           {isScanning ? (
             <>
               <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> Сканування соцмереж...
             </>
           ) : (
             <>
               <Scan className="h-4 w-4 mr-2" /> Оновити Профіль Бренду
             </>
           )}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Identity Core */}
        <div className="lg:col-span-1 space-y-6">
           {/* Brand Card */}
           <Card className="bg-[#18181B] border-zinc-800 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Fingerprint className="h-32 w-32 text-indigo-500" />
              </div>
              <CardHeader>
                 <CardTitle className="text-zinc-400 text-xs uppercase tracking-wider font-semibold flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" /> Верифікований профіль
                 </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                 <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-full border-4 border-[#27272A] shadow-xl overflow-hidden bg-black">
                       <img src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=200&h=200&fit=crop" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <h3 className="text-2xl font-bold text-white">Lviv Croissants</h3>
                       <p className="text-zinc-500 text-sm">Cafe & Bakery Network</p>
                    </div>
                 </div>
                 
                 <div className="space-y-3 pt-2">
                    <div className="flex justify-between text-sm">
                       <span className="text-zinc-500">Архетип:</span>
                       <span className="text-white font-medium">Творець / Друг</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-zinc-500">Слоган:</span>
                       <span className="text-white font-medium">Смак твого міста</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-zinc-500">Рік заснування:</span>
                       <span className="text-white font-medium">2015</span>
                    </div>
                 </div>

                 {/* Colors */}
                 <div>
                    <label className="text-xs text-zinc-500 uppercase font-bold mb-3 block">Палітра Бренду</label>
                    <div className="flex gap-3">
                       <div className="h-10 w-10 rounded-xl bg-[#F59E0B] shadow-lg cursor-pointer hover:scale-110 transition-transform" title="#F59E0B"></div>
                       <div className="h-10 w-10 rounded-xl bg-[#3E2723] shadow-lg cursor-pointer hover:scale-110 transition-transform" title="#3E2723"></div>
                       <div className="h-10 w-10 rounded-xl bg-[#FFF3E0] shadow-lg cursor-pointer hover:scale-110 transition-transform" title="#FFF3E0"></div>
                       <div className="h-10 w-10 rounded-xl border-2 border-dashed border-zinc-700 flex items-center justify-center text-zinc-600 hover:text-white hover:border-white transition-colors cursor-pointer">
                          <PlusIcon />
                       </div>
                    </div>
                 </div>
              </CardContent>
           </Card>

           {/* Audience Persona */}
           <Card className="bg-[#18181B] border-zinc-800">
              <CardHeader>
                 <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-400" />
                    <span className="text-white">Портрет Аудиторії</span>
                 </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="p-4 bg-[#27272A] rounded-2xl border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="h-10 w-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold">Ж</div>
                       <div>
                          <div className="text-white font-bold">Анна, 26 років</div>
                          <div className="text-xs text-zinc-500">SMM-менеджер, фрілансер</div>
                       </div>
                    </div>
                    <p className="text-sm text-zinc-400 italic">"Шукаю затишне місце з розетками та смачною кавою, щоб попрацювати 2-3 години."</p>
                    <div className="mt-3 flex gap-2 flex-wrap">
                       <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">Wi-Fi</Badge>
                       <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">Естетика</Badge>
                       <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">Альтернативне молоко</Badge>
                    </div>
                 </div>
                 
                 <Button variant="outline" className="w-full border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800">
                    Додати персону
                 </Button>
              </CardContent>
           </Card>
        </div>

        {/* Middle & Right: Visualization & Values */}
        <div className="lg:col-span-2 space-y-6">
           
           {/* Tone of Voice Radar */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#18181B] border-zinc-800 h-[340px]">
                 <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                       <Type className="h-5 w-5 text-indigo-400" />
                       <span className="text-white">Tone of Voice</span>
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="h-[250px] w-full flex items-center justify-center -ml-4">
                    <ResponsiveContainer width="100%" height="100%">
                       <RadarChart cx="50%" cy="50%" outerRadius="80%" data={toneData}>
                          <PolarGrid stroke="#3F3F46" />
                          <PolarAngleAxis dataKey="subject" tick={{ fill: '#A1A1AA', fontSize: 12 }} />
                          <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                          <Radar
                             name="Brand"
                             dataKey="A"
                             stroke="#8B5CF6"
                             strokeWidth={3}
                             fill="#8B5CF6"
                             fillOpacity={0.4}
                          />
                       </RadarChart>
                    </ResponsiveContainer>
                 </CardContent>
              </Card>

              {/* Core Values */}
              <Card className="bg-[#18181B] border-zinc-800 h-[340px]">
                 <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                       <Sparkles className="h-5 w-5 text-yellow-400" />
                       <span className="text-white">Цінності Бренду</span>
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <div className="space-y-2">
                       <div className="flex justify-between text-sm text-zinc-400">
                          <span>Якість продукту</span>
                          <span>98%</span>
                       </div>
                       <Progress value={98} className="h-2 bg-zinc-800" indicatorClassName="bg-gradient-to-r from-yellow-500 to-orange-500" />
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-sm text-zinc-400">
                          <span>Швидкість сервісу</span>
                          <span>85%</span>
                       </div>
                       <Progress value={85} className="h-2 bg-zinc-800" indicatorClassName="bg-gradient-to-r from-blue-500 to-cyan-500" />
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-sm text-zinc-400">
                          <span>Екологічність</span>
                          <span>60%</span>
                       </div>
                       <Progress value={60} className="h-2 bg-zinc-800" indicatorClassName="bg-gradient-to-r from-green-500 to-emerald-500" />
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-sm text-zinc-400">
                          <span>Інноваційність</span>
                          <span>75%</span>
                       </div>
                       <Progress value={75} className="h-2 bg-zinc-800" indicatorClassName="bg-gradient-to-r from-purple-500 to-pink-500" />
                    </div>
                 </CardContent>
              </Card>
           </div>

           {/* AI Knowledge Base Status */}
           <Card className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border-indigo-500/20">
              <CardContent className="p-6 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                       <BrainCircuit className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                       <h3 className="text-lg font-bold text-white">AI Twin Навчається</h3>
                       <p className="text-zinc-400 text-sm">Проаналізовано 1,204 пости, 8,500 коментарів та 450 відгуків.</p>
                    </div>
                 </div>
                 <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1">
                    Синхронізовано
                 </Badge>
              </CardContent>
           </Card>

           {/* Content Examples generated by DNA */}
           <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#27272A] border border-white/5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                 <div className="text-[10px] uppercase text-zinc-500 font-bold mb-2 flex items-center gap-1">
                    <Instagram className="h-3 w-3" /> Instagram Caption Style
                 </div>
                 <p className="text-sm text-zinc-300 leading-relaxed">
                    "Ранок починається не з кави, а з... хоча ні, таки з кави! 😉 Забігай за своєю порцією натхнення."
                 </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#27272A] border border-white/5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                 <div className="text-[10px] uppercase text-zinc-500 font-bold mb-2 flex items-center gap-1">
                    <Zap className="h-3 w-3" /> Ad Headline Style
                 </div>
                 <p className="text-sm text-zinc-300 leading-relaxed font-bold">
                    Твій ідеальний круасан вже чекає. Знижка -20% на доставку до 12:00! 🥐🚀
                 </p>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function Instagram({ className }: { className?: string }) {
   return (
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
   )
}