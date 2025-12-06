import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  Mic, 
  MicOff, 
  FileText, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  Loader2,
  StopCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card } from './ui/card';

interface AIAgentProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

type Message = {
  role: 'ai' | 'user';
  text: string;
  type?: 'text' | 'report' | 'task';
  data?: any;
};

export function AIAgent({ isOpen, onClose, initialMessage }: AIAgentProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Привіт! Я Twins AI. Готовий допомогти з маркетингом, звітами або ідеями. Натисніть мікрофон, щоб говорити.' }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Initialize Speech Recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'uk-UA';

        recognitionRef.current.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setInput(transcript);
        };

        recognitionRef.current.onend = () => {
            setIsListening(false);
            // Auto-send if we have content after stopping
            // Note: implementation choice, usually better to let user confirm
        };
    }
  }, []);

  useEffect(() => {
    if (isOpen && initialMessage) {
      handleSend(initialMessage);
    }
  }, [isOpen, initialMessage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      setInput('');
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const processCommand = (text: string) => {
    const lowerText = text.toLowerCase();
    
    // Mock Command Processing Logic
    if (lowerText.includes('звіт') || lowerText.includes('аналіз') || lowerText.includes('статистик')) {
        return {
            text: 'Генерую аналітичний звіт за останній тиждень...',
            action: () => {
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        role: 'ai',
                        text: 'Звіт готовий! Ось ключові показники:',
                        type: 'report',
                        data: {
                            roi: '+24%',
                            leads: 142,
                            spend: '₴12,400',
                            topChannel: 'Instagram Reels'
                        }
                    }]);
                    setIsProcessing(false);
                }, 2000);
            }
        };
    } 
    
    if (lowerText.includes('задач') || lowerText.includes('нагадай')) {
        return {
            text: 'Створюю нове завдання у вашому календарі...',
            action: () => {
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        role: 'ai',
                        text: 'Завдання успішно створено!',
                        type: 'task',
                        data: {
                            title: text.replace(/створи задачу|нагадай/gi, '').trim() || 'Нове маркетингове завдання',
                            time: 'Сьогодні, 14:00'
                        }
                    }]);
                    setIsProcessing(false);
                }, 1500);
            }
        };
    }

    // Default conversational response
    return {
        text: 'Зрозумів. Працюю над цим запитом...',
        action: () => {
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    role: 'ai',
                    text: 'Я проаналізував ваш запит. Ось кілька ідей: спробуйте використати трендовий звук у TikTok для наступного відео, це може підвищити охоплення на 40%.'
                }]);
                setIsProcessing(false);
            }, 1500);
        }
    };
  };

  const handleSend = (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setInput('');
    setIsProcessing(true);

    const command = processCommand(textToSend);
    
    // Immediate acknowledgement
    setTimeout(() => {
        setMessages(prev => [...prev, { role: 'ai', text: command.text }]);
        command.action();
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 right-0 w-full md:w-[450px] bg-[#18181B] border-l border-white/10 shadow-2xl transform transition-transform z-50 flex flex-col">
        
        {/* Header */}
        <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#18181B]">
          <div className="flex items-center gap-3">
             <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center animate-pulse">
                <Sparkles className="h-4 w-4 text-white" />
             </div>
             <div>
                <h3 className="font-bold text-white text-sm">Twins AI Assistant</h3>
                <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Online</span>
                </div>
             </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-zinc-400 hover:text-white">
             <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#0F0F12]/50">
           {messages.map((msg, idx) => (
             <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-in slide-in-from-bottom-2 fade-in duration-300`}>
                <Avatar className={`h-8 w-8 border border-white/5 ${msg.role === 'ai' ? 'bg-indigo-600' : 'bg-zinc-700'}`}>
                   {msg.role === 'ai' ? (
                      <AvatarFallback className="bg-indigo-600 text-white"><Sparkles className="h-4 w-4" /></AvatarFallback>
                   ) : (
                      <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" />
                   )}
                </Avatar>
                
                <div className="flex flex-col gap-2 max-w-[85%]">
                    {/* Bubble */}
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-lg ${
                        msg.role === 'user' 
                        ? 'bg-white text-black rounded-tr-none' 
                        : 'bg-[#27272A] text-zinc-100 rounded-tl-none border border-white/5'
                    }`}>
                        {msg.text}
                    </div>

                    {/* Rich Content: Report */}
                    {msg.type === 'report' && msg.data && (
                        <Card className="bg-[#1F1F22] border-white/5 p-4 mt-1 w-full">
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                                <FileText className="h-4 w-4 text-indigo-400" />
                                <span className="text-xs font-bold text-white uppercase">Звіт згенеровано</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-black/20 p-3 rounded-lg">
                                    <div className="text-[10px] text-zinc-500 mb-1">ROI</div>
                                    <div className="text-lg font-bold text-green-400">{msg.data.roi}</div>
                                </div>
                                <div className="bg-black/20 p-3 rounded-lg">
                                    <div className="text-[10px] text-zinc-500 mb-1">Ліди</div>
                                    <div className="text-lg font-bold text-white">{msg.data.leads}</div>
                                </div>
                                <div className="bg-black/20 p-3 rounded-lg">
                                    <div className="text-[10px] text-zinc-500 mb-1">Витрати</div>
                                    <div className="text-lg font-bold text-white">{msg.data.spend}</div>
                                </div>
                                <div className="bg-black/20 p-3 rounded-lg">
                                    <div className="text-[10px] text-zinc-500 mb-1">Топ канал</div>
                                    <div className="text-xs font-bold text-indigo-300 mt-1">{msg.data.topChannel}</div>
                                </div>
                            </div>
                            <Button size="sm" className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs h-8">
                                Відкрити повний звіт
                            </Button>
                        </Card>
                    )}

                    {/* Rich Content: Task */}
                    {msg.type === 'task' && msg.data && (
                        <Card className="bg-[#1F1F22] border-white/5 p-4 mt-1 w-full flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-medium text-white truncate">{msg.data.title}</h4>
                                <div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-0.5">
                                    <Clock className="h-3 w-3" />
                                    {msg.data.time}
                                </div>
                            </div>
                        </Card>
                    )}
                </div>
             </div>
           ))}
           
           {isProcessing && (
               <div className="flex gap-4">
                   <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                       <Sparkles className="h-4 w-4 text-white" />
                   </div>
                   <div className="bg-[#27272A] border border-white/5 p-4 rounded-2xl rounded-tl-none">
                       <div className="flex gap-1 items-center h-5">
                           <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                           <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                           <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                       </div>
                   </div>
               </div>
           )}
           <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-[#18181B] border-t border-white/5 relative">
           {/* Voice Wave Visualization Overlay */}
           {isListening && (
               <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-t from-[#18181B] to-transparent flex items-end justify-center pb-4 gap-1 z-10">
                   {[...Array(8)].map((_, i) => (
                       <div key={i} className="w-1 bg-red-500 rounded-full animate-pulse" style={{ 
                           height: `${Math.random() * 20 + 10}px`,
                           animationDuration: `${Math.random() * 0.5 + 0.3}s`
                       }} />
                   ))}
                   <span className="ml-2 text-xs text-red-400 font-medium animate-pulse">Слухаю...</span>
               </div>
           )}

           <div className="flex items-center gap-2 bg-[#0F0F12] border border-white/10 rounded-2xl p-2 pr-3 transition-all focus-within:border-indigo-500/50 focus-within:ring-1 focus-within:ring-indigo-500/20">
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={toggleListening}
                className={`h-10 w-10 rounded-xl transition-all duration-300 ${
                    isListening 
                    ? 'bg-red-500/20 text-red-500 hover:bg-red-500/30' 
                    : 'text-zinc-400 hover:text-indigo-400 hover:bg-white/5'
                }`}
              >
                 {isListening ? <StopCircle className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </Button>
              
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isListening ? "Говоріть..." : "Створити звіт..."}
                className="flex-1 bg-transparent border-none text-sm text-white placeholder:text-zinc-600 focus:outline-none h-10 px-2"
              />
              
              <Button 
                size="icon" 
                onClick={() => handleSend()}
                disabled={!input.trim() && !isProcessing}
                className={`h-10 w-10 rounded-xl transition-all ${
                    input.trim() 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                    : 'bg-[#27272A] text-zinc-600'
                }`}
              >
                 {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
           </div>
           
           <div className="mt-3 flex justify-center gap-4">
              <button onClick={() => handleSend('Зроби аналіз конкурентів')} className="text-[10px] text-zinc-500 hover:text-white transition-colors border border-white/5 rounded-full px-3 py-1">
                📊 Аналіз конкурентів
              </button>
              <button onClick={() => handleSend('Придумай ідею для Reels')} className="text-[10px] text-zinc-500 hover:text-white transition-colors border border-white/5 rounded-full px-3 py-1">
                💡 Ідея для Reels
              </button>
           </div>
        </div>

      </div>
    </>
  );
}