import React from 'react';
import { 
  TrendingUp, 
  Play, 
  Music2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Share2
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export function Trends() {
  const trends = [
    {
      id: 1,
      title: "ASMR Приготування",
      platform: "TikTok / Reels",
      views: "2.4M",
      relevance: "Висока",
      risk: "Безпечне",
      description: "Відео без музики, тільки звуки процесу: молоття кави, шум пари, лід у склянці.",
      adaptation: "Зніми приготування фірмового лате. Зосередься на звуках: наливання молока, дзвін ложечки.",
      audio: "Original Audio - Cafe Vibes",
      tags: ["#asmr", "#coffee", "#relax"]
    },
    {
      id: 2,
      title: "POV: Ти знайшов ідеальне місце",
      platform: "Instagram Reels",
      views: "850K",
      relevance: "Середня",
      risk: "Безпечне",
      description: "Камера 'від першої особи' заходить у заклад, показує інтер'єр та затишний куточок.",
      adaptation: "Пройди від входу до столика біля вікна. Текст на екрані: 'Коли нарешті знайшов де попрацювати в тиші'.",
      audio: "Jazzy Lo-Fi Beat",
      tags: ["#workplace", "#cozy", "#pov"]
    },
    {
      id: 3,
      title: "Звук 'Capybara'",
      platform: "TikTok",
      views: "15M",
      relevance: "Низька",
      risk: "Специфічне",
      description: "Вірусна пісня про капібару. Використовується в кумедних ситуаціях.",
      adaptation: "Можна показати баристу, який дуже повільно робить каву з підписом 'Мій стан у понеділок'.",
      audio: "Capybara Song",
      tags: ["#funny", "#monday"]
    }
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-20 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-purple-500" />
            Радар Трендів
          </h2>
          <p className="text-zinc-400">Моніторинг вірусного контенту, адаптованого для твого бізнесу</p>
        </div>
        <Button variant="outline" className="border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl">
          <Sparkles className="h-4 w-4 mr-2 text-purple-500" />
          Оновити стрічку
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Trend Feed */}
        <div className="lg:col-span-2 space-y-6">
          {trends.map((trend) => (
            <Card key={trend.id} className="bg-[#18181B] border-white/5 overflow-hidden hover:border-white/10 transition-all group rounded-3xl">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  {/* Visual Preview (Mock) */}
                  <div className="sm:w-48 h-48 sm:h-auto bg-zinc-800 relative flex items-center justify-center flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Play className="h-12 w-12 text-white opacity-80 group-hover:scale-110 transition-transform" />
                    <Badge className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-md border-none text-white rounded-lg">
                      {trend.views} переглядів
                    </Badge>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="border-purple-500/30 text-purple-400 bg-purple-500/10 rounded-lg">
                            {trend.platform}
                          </Badge>
                          {trend.relevance === 'Висока' && (
                            <span className="text-xs text-green-400 flex items-center gap-1 font-medium">
                              <CheckCircle2 className="h-3 w-3" /> Висока відповідність
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white">{trend.title}</h3>
                      </div>
                      <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-white hover:bg-white/5 rounded-lg">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                      {trend.description}
                    </p>

                    <div className="bg-[#0F0F12] rounded-xl p-4 border border-white/5 mb-4">
                      <div className="flex items-center gap-2 mb-2 text-sm font-medium text-blue-400">
                        <Sparkles className="h-3 w-3" />
                        AI Адаптація для тебе:
                      </div>
                      <p className="text-zinc-300 text-sm italic">
                        "{trend.adaptation}"
                      </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <Music2 className="h-3 w-3" />
                        {trend.audio}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-white/10 hover:bg-white/5 text-zinc-300 rounded-xl">
                          Відкласти
                        </Button>
                        <Button size="sm" className="bg-white text-black hover:bg-zinc-200 rounded-xl">
                          Використати ідею <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20 rounded-3xl">
            <CardContent className="p-6">
              <h3 className="font-semibold text-white mb-2">Твоя ніша: Кав'ярні</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Зараз у тренді "slow content" та естетика затишку. Аудиторія втомилася від швидкого монтажу.
              </p>
              <div className="space-y-2">
                <div className="text-xs font-medium text-zinc-500 uppercase">Топ хештеги тижня</div>
                <div className="flex flex-wrap gap-2">
                   {['#cozyvibes', '#latteart', '#autumnmood', '#coffeeplace'].map(tag => (
                     <Badge key={tag} variant="secondary" className="bg-[#18181B] text-zinc-300 hover:bg-[#27272A] cursor-pointer border border-white/5 rounded-lg">
                       {tag}
                     </Badge>
                   ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#18181B] border-white/5 rounded-3xl">
            <CardContent className="p-6">
              <h3 className="font-semibold text-white mb-4">Моніторинг конкурентів</h3>
              <div className="space-y-4">
                {[
                  { name: "Aroma Kava", action: "Запустили осіннє меню", time: "2 год. тому" },
                  { name: "Lviv Croissants", action: "Відео набрало 100K", time: "5 год. тому" },
                  { name: "My Coffee", action: "Новий розіграш", time: "1 день тому" }
                ].map((comp, i) => (
                  <div key={i} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                    <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">
                      {comp.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-200">{comp.name}</div>
                      <div className="text-xs text-zinc-400">{comp.action}</div>
                      <div className="text-[10px] text-zinc-600 mt-1">{comp.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}