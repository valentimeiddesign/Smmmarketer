import React, { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, User, Bot, ArrowRight, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

interface OnboardingProps {
  onComplete: (niche: string) => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: 'Привіт! Я Twins AI. 👋' },
    { role: 'ai', text: 'Я допоможу налаштувати платформу ідеально під ваш бізнес. Скажіть, чим ви займаєтесь? (наприклад: "У мене кав\'ярня" або "Я продаю одяг в Instagram")' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [phase, setPhase] = useState<'chat' | 'analyzing' | 'done'>('chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      let niche = 'business';
      let response = '';

      const lowerInput = userMsg.toLowerCase();
      if (lowerInput.includes('кав') || lowerInput.includes('ресторан') || lowerInput.includes('їжа') || lowerInput.includes('бар')) {
        niche = 'cafe';
        response = 'Чудово! Гастро-бізнес має свою специфіку. Я налаштую для вас моніторинг локальних конкурентів, меню-аналітику та відгуки.';
      } else if (lowerInput.includes('магазин') || lowerInput.includes('товар') || lowerInput.includes('одяг') || lowerInput.includes('shop')) {
        niche = 'ecommerce';
        response = 'Зрозумів. E-commerce. Вам важливі ROAS, конверсії та покинуті кошики. Вмикаю модуль товарної аналітики.';
      } else if (lowerInput.includes('блог') || lowerInput.includes('smm') || lowerInput.includes('інфлюенс')) {
        niche = 'influencer';
        response = 'Супер. Для блогерів та SMM головне — охоплення та ER. Активую розширену статистику Reels та TikTok.';
      } else {
        niche = 'business';
        response = 'Прийнято. Налаштовую універсальний бізнес-дашборд для моніторингу маркетингу та продажів.';
      }

      setMessages(prev => [...prev, { role: 'ai', text: response }]);
      setIsTyping(false);

      setTimeout(() => {
        setPhase('analyzing');
        setTimeout(() => {
           onComplete(niche);
        }, 3000);
      }, 1500);

    }, 1500);
  };

  if (phase === 'analyzing') {
    return (
      <div className="fixed inset-0 bg-[#0F0F12] z-50 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
         <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 border-t-4 border-indigo-500 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-r-4 border-purple-500 rounded-full animate-spin [animation-direction:reverse]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <Sparkles className="h-8 w-8 text-white animate-pulse" />
            </div>
         </div>
         <h2 className="text-2xl font-bold text-white mb-2">Адаптуємо Twins під ваш бізнес...</h2>
         <div className="space-y-2 text-zinc-500 text-sm font-mono">
            <p className="animate-in slide-in-from-bottom-2 fade-in duration-500 delay-75 flex items-center justify-center gap-2">
               <Check className="h-3 w-3 text-green-500" /> Аналіз ніші
            </p>
            <p className="animate-in slide-in-from-bottom-2 fade-in duration-500 delay-300 flex items-center justify-center gap-2">
               <Check className="h-3 w-3 text-green-500" /> Налаштування дашборду
            </p>
            <p className="animate-in slide-in-from-bottom-2 fade-in duration-500 delay-700 flex items-center justify-center gap-2">
               <Check className="h-3 w-3 text-green-500" /> Підключення шаблонів
            </p>
         </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#0F0F12] z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-[#18181B] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-white/5 bg-[#18181B] flex items-center gap-3">
           <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-900/20">
              <Sparkles className="h-5 w-5 text-white" />
           </div>
           <div>
              <h3 className="font-bold text-white">Налаштування Простору</h3>
              <p className="text-xs text-zinc-400">AI Assistant</p>
           </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#0F0F12]/50">
           {messages.map((msg, i) => (
             <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <Avatar className={`h-8 w-8 ${msg.role === 'ai' ? 'bg-indigo-600' : 'bg-zinc-700'}`}>
                   {msg.role === 'ai' ? (
                      <div className="h-full w-full bg-indigo-600 flex items-center justify-center"><Bot className="h-4 w-4 text-white" /></div>
                   ) : (
                      <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
                   )}
                </Avatar>
                <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                   msg.role === 'user' 
                   ? 'bg-white text-black rounded-tr-none' 
                   : 'bg-[#27272A] text-zinc-100 rounded-tl-none border border-white/5'
                }`}>
                   {msg.text}
                </div>
             </div>
           ))}
           {isTyping && (
             <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center"><Bot className="h-4 w-4 text-white" /></div>
                <div className="bg-[#27272A] border border-white/5 p-4 rounded-2xl rounded-tl-none flex gap-1">
                   <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                   <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                   <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
             </div>
           )}
           <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-[#18181B] border-t border-white/5">
           <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Напишіть про ваш бізнес..."
                className="flex-1 bg-[#0F0F12] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-zinc-600"
                autoFocus
              />
              <Button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-white text-black hover:bg-zinc-200 rounded-xl px-4"
              >
                 <ArrowRight className="h-5 w-5" />
              </Button>
           </div>
           <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
              {['☕️ Кав\'ярня', '🛍 Магазин одягу', '📱 SMM Агенція', '🍔 Доставка їжі'].map(tag => (
                 <button 
                   key={tag}
                   onClick={() => setInput(tag)}
                   className="whitespace-nowrap px-3 py-1.5 bg-[#27272A] hover:bg-[#323238] border border-white/5 rounded-lg text-xs text-zinc-400 hover:text-white transition-colors"
                 >
                    {tag}
                 </button>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}