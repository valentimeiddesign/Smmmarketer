import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  PlayCircle,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MessageCircle,
  BarChart3,
  Rocket,
  Zap,
  Search,
  Menu,
  X,
  Bot,
  Target,
  TrendingUp,
  Users,
  ShieldCheck,
  CreditCard,
  HelpCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function Landing({ onLogin }: { onLogin: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030014] text-white font-sans overflow-x-hidden selection:bg-indigo-500/30">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#030014]/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
             {/* Logo */}
            <div className="h-8 w-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">Twins</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center bg-white/5 rounded-full px-6 py-2 border border-white/5 backdrop-blur-lg">
            <a href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-4">Можливості</a>
            <a href="#how-it-works" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-4">Як це працює</a>
            <a href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-4">Тарифи</a>
            <a href="#faq" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-4">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={onLogin} className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              Увійти
            </button>
            <Button onClick={onLogin} className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 shadow-lg shadow-indigo-600/20 border-0">
              Почати
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-zinc-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#030014] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
             <a href="#features" className="text-lg font-medium text-zinc-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Можливості</a>
             <a href="#how-it-works" className="text-lg font-medium text-zinc-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Як це працює</a>
             <a href="#pricing" className="text-lg font-medium text-zinc-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Тарифи</a>
             <div className="h-px bg-white/10 my-2" />
             <button onClick={onLogin} className="text-left text-lg font-medium text-white">Увійти</button>
             <Button onClick={onLogin} className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-full">Почати безкоштовно</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 opacity-60 mix-blend-screen pointer-events-none" />
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] -z-10 opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            AI Update 2.0 вже доступний
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-400 max-w-5xl mx-auto">
            Твій SMM-менеджер, <br /> який ніколи не спить
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Заміни агентство за $500 на AI-систему за $19/міс. Twins створює контент, веде соцмережі та запускає рекламу на автопілоті.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button onClick={onLogin} size="lg" className="h-12 px-8 text-base bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_30px_-10px_rgba(79,70,229,0.6)] hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.8)] rounded-full w-full sm:w-auto transition-all duration-300 border border-indigo-500/50">
              Спробувати безкоштовно
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base border-zinc-800 bg-black/20 hover:bg-white/5 text-zinc-300 hover:text-white rounded-full w-full sm:w-auto backdrop-blur-sm group">
              Дивитися демо <PlayCircle className="ml-2 h-4 w-4 group-hover:text-indigo-400 transition-colors" />
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent z-20 h-full w-full bottom-0 pointer-events-none" />
            <div className="relative rounded-xl border border-white/10 bg-[#0f0f16]/80 backdrop-blur-sm p-1 shadow-2xl overflow-hidden ring-1 ring-white/5">
               <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                alt="Dashboard" 
                className="rounded-lg w-full opacity-90 saturate-[1.1]"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-10 left-10 hidden md:block bg-[#1a1a24]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-1000 delay-500">
                 <div className="flex items-center gap-3">
                   <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                     <TrendingUp className="h-5 w-5" />
                   </div>
                   <div>
                     <div className="text-xs text-zinc-400">Приріст підписників</div>
                     <div className="text-lg font-bold text-white">+1,240</div>
                   </div>
                 </div>
              </div>

               <div className="absolute bottom-20 right-10 hidden md:block bg-[#1a1a24]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-1000 delay-700">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                     <Bot className="h-4 w-4" />
                   </div>
                   <span className="text-sm font-medium text-white">AI Assistant</span>
                 </div>
                 <div className="bg-black/40 rounded-lg p-2 text-xs text-zinc-300 max-w-[200px]">
                   Створив план контенту на наступний тиждень. Затвердити?
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-10 border-y border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-zinc-500 mb-8 font-medium">INTEGRATED WITH TOP PLATFORMS</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100 duration-500">
            <div className="flex items-center gap-2 text-xl font-bold font-mono"><Instagram className="h-6 w-6" /> Instagram</div>
            <div className="flex items-center gap-2 text-xl font-bold font-mono"><Facebook className="h-6 w-6" /> Facebook</div>
            <div className="flex items-center gap-2 text-xl font-bold font-mono"><Linkedin className="h-6 w-6" /> LinkedIn</div>
            <div className="flex items-center gap-2 text-xl font-bold font-mono"><Youtube className="h-6 w-6" /> YouTube</div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className="py-32 relative">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
           <div className="mb-20 max-w-3xl">
             <div className="text-indigo-500 font-semibold tracking-wider uppercase text-sm mb-4">Можливості</div>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
               Менше рутини. <br/> 
               <span className="text-zinc-500">Більше результатів.</span>
             </h2>
             <p className="text-xl text-zinc-400 leading-relaxed">
               Twins автоматизує 90% рутинних завдань маркетолога, дозволяючи вам зосередитися на стратегії та розвитку бізнесу.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 - AI Content */}
              <div className="col-span-1 md:col-span-2 bg-[#0f0f16] border border-white/10 rounded-3xl p-8 hover:border-indigo-500/30 transition-colors group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -z-10 transition-opacity opacity-0 group-hover:opacity-100" />
                
                <div className="flex flex-col h-full justify-between">
                  <div className="mb-8 relative">
                     {/* Mock UI */}
                     <div className="bg-[#1a1a24] border border-white/5 rounded-xl p-4 max-w-md shadow-xl">
                       <div className="flex items-center gap-3 mb-4">
                         <div className="h-2 w-2 rounded-full bg-red-500" />
                         <div className="h-2 w-2 rounded-full bg-yellow-500" />
                         <div className="h-2 w-2 rounded-full bg-green-500" />
                       </div>
                       <div className="space-y-3">
                         <div className="flex gap-3">
                           <div className="h-8 w-8 rounded bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                             <Bot className="h-4 w-4 text-indigo-400" />
                           </div>
                           <div className="flex-1 bg-black/30 rounded p-3 text-xs text-zinc-300 leading-relaxed">
                             <span className="text-indigo-300 font-medium block mb-1">Generative AI</span>
                             Згенеруй 5 ідей для Reels про кав'ярню восени...
                           </div>
                         </div>
                         <div className="flex gap-3 flex-row-reverse">
                            <div className="flex-1 bg-indigo-600/20 rounded p-3 text-xs text-white leading-relaxed border border-indigo-500/20">
                              <span className="text-indigo-300 font-medium block mb-1">Result</span>
                              1. "Затишок з кавою": зйомка пари, що п'є лате біля вікна... <br/>
                              2. "ASMR приготування": звуки помелу кави та збивання молока...
                           </div>
                         </div>
                         <div className="flex items-center gap-2 mt-2">
                            <div className="h-8 flex-1 bg-black/50 rounded-lg border border-white/5 px-3 flex items-center text-xs text-zinc-500">
                              Напиши промпт...
                            </div>
                            <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                              <ArrowRight className="h-4 w-4 text-white" />
                            </div>
                         </div>
                       </div>
                     </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Генератор Контенту</h3>
                    <p className="text-zinc-400">Створюй пости, Stories та сценарії для Reels за секунди. AI адаптує тон голосу під твій бренд.</p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Auto Ads */}
              <div className="col-span-1 bg-[#0f0f16] border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-colors group relative overflow-hidden">
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10 transition-opacity opacity-0 group-hover:opacity-100" />
                 
                 <div className="flex flex-col h-full">
                   <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-6 mb-8 flex items-center justify-center aspect-square relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                      <Rocket className="h-20 w-20 text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                      
                      {/* Floating stats */}
                      <div className="absolute bottom-4 left-4 bg-black/80 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-green-400 font-bold flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" /> ROI +320%
                      </div>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Авто-Реклама</h3>
                   <p className="text-zinc-400">Запуск та оптимізація таргетованої реклами без складних налаштувань.</p>
                 </div>
              </div>

              {/* Card 3 - Analytics */}
              <div className="col-span-1 bg-[#0f0f16] border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-colors group overflow-hidden relative">
                 <div className="flex flex-col h-full">
                   <div className="bg-[#1a1a24] border border-white/5 rounded-xl p-1 mb-8 overflow-hidden">
                      <div className="bg-black/40 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                           <span className="text-xs text-zinc-400">Всього лідів</span>
                           <span className="text-xs text-green-400">+12%</span>
                        </div>
                        <div className="flex items-end gap-1 h-24 items-end">
                          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="flex-1 bg-blue-600/80 hover:bg-blue-500 transition-colors rounded-t-sm" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                      </div>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Аналітика 360°</h3>
                   <p className="text-zinc-400">Всі метрики в одному вікні. Зрозумілі звіти, які не потрібно розшифровувати.</p>
                 </div>
              </div>

              {/* Card 4 - Integrations */}
              <div className="col-span-1 md:col-span-2 bg-[#0f0f16] border border-white/10 rounded-3xl p-8 hover:border-green-500/30 transition-colors group overflow-hidden relative">
                 <div className="flex flex-col md:flex-row items-center justify-between h-full gap-8">
                   <div className="flex-1">
                     <h3 className="text-2xl font-bold text-white mb-2">Інтеграції</h3>
                     <p className="text-zinc-400 mb-6">Підключи свої улюблені платформи в один клік. Instagram, TikTok, Facebook, Shopify та інші.</p>
                     
                     <div className="flex flex-wrap gap-3">
                       {['Instagram', 'TikTok', 'Shopify', 'Slack', 'Gmail'].map(app => (
                         <span key={app} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">
                           {app}
                         </span>
                       ))}
                     </div>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4 relative">
                      <div className="bg-[#1a1a24] p-4 rounded-2xl border border-white/5 flex items-center justify-center w-20 h-20 animate-pulse">
                        <Instagram className="h-8 w-8 text-pink-500" />
                      </div>
                      <div className="bg-[#1a1a24] p-4 rounded-2xl border border-white/5 flex items-center justify-center w-20 h-20 mt-8">
                        <Facebook className="h-8 w-8 text-blue-500" />
                      </div>
                      <div className="bg-[#1a1a24] p-4 rounded-2xl border border-white/5 flex items-center justify-center w-20 h-20 -mt-8">
                         <Zap className="h-8 w-8 text-yellow-500" />
                      </div>
                      <div className="bg-[#1a1a24] p-4 rounded-2xl border border-white/5 flex items-center justify-center w-20 h-20">
                        <Search className="h-8 w-8 text-white" />
                      </div>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section id="how-it-works" className="py-20 bg-black/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-16">Запуск за 3 кроки</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent border-t border-dashed border-white/20 z-0" />

             {[
               { num: 1, title: "Підключи акаунти", desc: "Додай свої профілі соцмереж безпечно через офіційні API." },
               { num: 2, title: "Обери нішу", desc: "AI проаналізує твій бізнес та конкурентів для побудови стратегії." },
               { num: 3, title: "Отримуй результати", desc: "Затверджуй контент та спостерігай за ростом охоплень." }
             ].map((step, i) => (
               <div key={i} className="relative z-10 flex flex-col items-center">
                 <div className="w-24 h-24 bg-[#0f0f16] border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-2xl relative group hover:border-indigo-500 transition-colors">
                   <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                   <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-500 font-mono">
                     {step.num}
                   </span>
                 </div>
                 <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                 <p className="text-zinc-400 max-w-xs mx-auto leading-relaxed text-sm">
                   {step.desc}
                 </p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Команди, що обрали Twins</h2>
             <p className="text-zinc-400">Вже понад 1000+ бізнесів автоматизували свій маркетинг.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { name: "Олена К.", role: "Власниця Showroom", text: "Раніше я витрачала 3 години на день на пости. Тепер це займає 15 хвилин на тиждень.", stars: 5 },
               { name: "Максим Д.", role: "Маркетолог", text: "Twins замінив нам копірайтера та таргетолога. ROI виріс на 45% за перший місяць.", stars: 5 },
               { name: "Анна С.", role: "Блогер", text: "Найкращий інструмент для планування стрічки. Дуже зручно бачити як буде виглядати профіль.", stars: 5 }
             ].map((review, i) => (
               <div key={i} className="bg-[#0f0f16] border border-white/5 p-8 rounded-2xl flex flex-col hover:bg-white/5 transition-colors">
                  <div className="flex gap-1 mb-4 text-yellow-500">
                    {[...Array(review.stars)].map((_, i) => <Sparkles key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />)}
                  </div>
                  <p className="text-zinc-300 mb-6 flex-1 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-3 mt-auto border-t border-white/5 pt-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-white font-bold text-sm">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{review.name}</div>
                      <div className="text-xs text-zinc-500">{review.role}</div>
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 relative">
         <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Тарифи для будь-якого розміру</h2>
             <p className="text-zinc-400">Прозорі ціни без прихованих платежів.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
              {/* Free */}
              <div className="bg-[#0f0f16] border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="text-4xl font-bold mb-4">$19<span className="text-lg text-zinc-500 font-normal">/міс</span></div>
                <p className="text-sm text-zinc-500 mb-6">Ідеально для старту.</p>
                <Button onClick={onLogin} variant="outline" className="w-full mb-8 border-zinc-700 hover:bg-zinc-800 text-white">Спробувати</Button>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-600" /> 1 Бренд</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-600" /> 5 AI постів/міс</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-600" /> Базова аналітика</li>
                </ul>
              </div>

              {/* Pro */}
              <div className="bg-[#0f0f16] border-2 border-indigo-500 rounded-2xl p-8 relative transform scale-105 shadow-2xl shadow-indigo-900/20 z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Найпопулярніший
                </div>
                <h3 className="text-xl font-bold mb-2 text-indigo-400">Growth</h3>
                <div className="text-4xl font-bold mb-4">$29<span className="text-lg text-zinc-500 font-normal">/міс</span></div>
                <p className="text-sm text-zinc-500 mb-6">Для активного росту.</p>
                <Button onClick={onLogin} className="w-full mb-8 bg-indigo-600 hover:bg-indigo-500 text-white">Обрати цей план</Button>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-400" /> 3 Бренди</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-400" /> Безліміт AI постів</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-400" /> Авто-публікація</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-400" /> AI Генерація картинок</li>
                </ul>
              </div>

              {/* Business */}
              <div className="bg-[#0f0f16] border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-2">Business</h3>
                <div className="text-4xl font-bold mb-4">$49<span className="text-lg text-zinc-500 font-normal">/міс</span></div>
                <p className="text-sm text-zinc-500 mb-6">Для агенцій та команд.</p>
                <Button onClick={onLogin} variant="outline" className="w-full mb-8 border-zinc-700 hover:bg-zinc-800 text-white">Спробувати</Button>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-600" /> 10 Брендів</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-600" /> Командний доступ</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-600" /> API Доступ</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-600" /> Пріоритетна підтримка</li>
                </ul>
              </div>
           </div>
         </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Часті запитання</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-white/10 rounded-xl px-6 bg-[#0f0f16] data-[state=open]:border-indigo-500/30">
            <AccordionTrigger className="text-lg font-medium hover:no-underline text-zinc-200 hover:text-white">
              Скільки часу займає налаштування?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 leading-relaxed">
              Менше 5 хвилин. Вам потрібно лише підключити свої соціальні мережі, і Twins автоматично проаналізує ваш профіль та створить контент-план.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border border-white/10 rounded-xl px-6 bg-[#0f0f16] data-[state=open]:border-indigo-500/30">
            <AccordionTrigger className="text-lg font-medium hover:no-underline text-zinc-200 hover:text-white">
              Чи безпечні мої дані?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 leading-relaxed">
              Так, ми використовуємо офіційні API Facebook, Instagram та TikTok. Ми не зберігаємо ваші паролі, а лише токени доступу, які ви можете відкликати в будь-який момент.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border border-white/10 rounded-xl px-6 bg-[#0f0f16] data-[state=open]:border-indigo-500/30">
            <AccordionTrigger className="text-lg font-medium hover:no-underline text-zinc-200 hover:text-white">
              Чи можу я скасувати підписку?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 leading-relaxed">
              Так, ви можете скасувати підписку в будь-який час в налаштуваннях акаунту. Ніяких прихованих умов.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30 -z-10" />
          <div className="bg-[#0a0a0f] border border-white/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
             {/* Glow effect */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-900/20 rounded-full blur-3xl -z-10 pointer-events-none" />
             
             <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
               Готовий спробувати Twins?
             </h2>
             <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
               Приєднуйся до тисяч маркетологів, які вже економлять свій час.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Button onClick={onLogin} className="h-14 px-10 text-lg bg-white text-black hover:bg-zinc-200 rounded-full font-bold shadow-xl">
                 Почати безкоштовно
               </Button>
             </div>
             
             <p className="mt-6 text-sm text-zinc-600">
               7 днів безкоштовно • Кредитна картка не потрібна
             </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#030014] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-indigo-500" />
                <span className="font-bold text-xl">Twins</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                AI-платформа для автоматизації маркетингу. Створюй, плануй та аналізуй в одному місці.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Продукт</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">Можливості</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Інтеграції</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тарифи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оновлення</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Ресурси</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Спільнота</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Довідка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Компанія</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">Про нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кар'єра</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакти</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-600 text-sm">
              © 2025 Twins Inc. All rights reserved.
            </div>
            <div className="flex gap-8 text-sm text-zinc-600">
              <a href="#" className="hover:text-zinc-400">Terms</a>
              <a href="#" className="hover:text-zinc-400">Privacy</a>
              <a href="#" className="hover:text-zinc-400">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}