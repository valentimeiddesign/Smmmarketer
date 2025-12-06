import React from 'react';
import { 
  BookOpen, 
  Play, 
  Award, 
  Clock, 
  Star, 
  CheckCircle2,
  Lock,
  ArrowRight 
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Progress } from '../components/ui/progress';

const courses = [
  {
    id: 1,
    title: "Основи Twins Marketing OS",
    description: "Швидкий старт: як налаштувати профіль, підключити соцмережі та запустити першу рекламу.",
    duration: "45 хв",
    modules: 5,
    level: "Початковий",
    progress: 100,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
    status: "completed"
  },
  {
    id: 2,
    title: "Майстерність Таргетингу",
    description: "Як знаходити ідеальну аудиторію та знизити вартість ліда (CPL) в 2 рази за допомогою AI.",
    duration: "2.5 год",
    modules: 12,
    level: "Середній",
    progress: 35,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    status: "in-progress"
  },
  {
    id: 3,
    title: "Створення Вірусного Контенту",
    description: "Секрети алгоритмів TikTok та Reels. Як знімати на телефон так, щоб це виглядало дорого.",
    duration: "4 год",
    modules: 8,
    level: "Просунутий",
    progress: 0,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
    status: "locked"
  },
  {
    id: 4,
    title: "Аналітика для Власників",
    description: "Перестаньте зливати бюджет. Вчимося читати графіки та приймати рішення на основі цифр.",
    duration: "1.5 год",
    modules: 6,
    level: "Середній",
    progress: 0,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    status: "locked"
  }
];

export function Academy() {
  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-900/20">
               <Award className="h-6 w-6 text-white" />
            </div>
            Twins Academy
          </h2>
          <p className="text-zinc-400 mt-2 text-lg">Прокачуй навички маркетингу та отримуй сертифікати</p>
        </div>
        
        <Card className="bg-[#18181B] border-zinc-800 md:w-80">
           <CardContent className="p-4 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                 <Award className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                 <div className="text-xs text-zinc-500 uppercase font-bold">Твій Рівень</div>
                 <div className="text-white font-bold text-lg">Маркетолог Lvl. 2</div>
              </div>
           </CardContent>
        </Card>
      </div>

      {/* Featured / Current Lesson */}
      <div className="bg-gradient-to-r from-[#18181B] to-[#0F0F12] rounded-3xl border border-white/10 overflow-hidden relative group">
         <div className="absolute top-0 right-0 w-2/3 h-full bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop')] bg-cover bg-center opacity-20 mask-image-linear-gradient-to-l group-hover:scale-105 transition-transform duration-700"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F12] via-[#0F0F12]/90 to-transparent"></div>
         
         <div className="relative z-10 p-8 md:p-12 max-w-3xl">
            <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 mb-4 hover:bg-indigo-500/30">Продовжити навчання</Badge>
            <h3 className="text-3xl font-bold text-white mb-4">Майстерність Таргетингу: Модуль 4</h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
               Ви зупинилися на темі "Створення Look-alike аудиторій". 
               Цей урок допоможе вам знайти нових клієнтів, схожих на ваших найкращих покупців.
            </p>
            <div className="flex items-center gap-4">
               <Button size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-xl px-8">
                  <Play className="h-5 w-5 mr-2 fill-current" /> Продовжити урок
               </Button>
               <div className="text-sm text-zinc-500 flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Залишилось 15 хв
               </div>
            </div>
         </div>
      </div>

      {/* Courses Grid */}
      <div>
         <h3 className="text-xl font-bold text-white mb-6">Доступні Курси</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
               <Card key={course.id} className={`bg-[#18181B] border-white/5 overflow-hidden group hover:border-white/10 transition-all ${course.status === 'locked' ? 'opacity-60 grayscale-[0.5]' : ''}`}>
                  <div className="h-40 w-full relative overflow-hidden">
                     <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                        {course.status === 'locked' ? (
                           <Lock className="h-10 w-10 text-white/50" />
                        ) : (
                           <Button variant="secondary" className="rounded-full h-12 w-12 p-0">
                              <Play className="h-5 w-5 ml-1" />
                           </Button>
                        )}
                     </div>
                     <Badge className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border-none text-white">
                        {course.level}
                     </Badge>
                  </div>
                  <CardContent className="p-5">
                     <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
                        <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {course.modules} модулів</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {course.duration}</span>
                     </div>
                     <h4 className="font-bold text-white mb-2 line-clamp-1 group-hover:text-indigo-400 transition-colors">{course.title}</h4>
                     <p className="text-xs text-zinc-400 line-clamp-2 mb-4 h-8">
                        {course.description}
                     </p>
                     
                     {course.status !== 'locked' && (
                        <div className="space-y-2">
                           <div className="flex justify-between text-[10px] text-zinc-400">
                              <span>Прогрес</span>
                              <span>{course.progress}%</span>
                           </div>
                           <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                              <div 
                                 className={`h-full rounded-full ${course.progress === 100 ? 'bg-green-500' : 'bg-indigo-500'}`} 
                                 style={{ width: `${course.progress}%` }}
                              />
                           </div>
                        </div>
                     )}
                     
                     {course.status === 'completed' && (
                        <div className="mt-4 flex items-center gap-2 text-xs text-green-400 font-medium">
                           <CheckCircle2 className="h-4 w-4" /> Курс пройдено
                        </div>
                     )}
                  </CardContent>
               </Card>
            ))}
         </div>
      </div>

    </div>
  );
}