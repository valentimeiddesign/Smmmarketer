import React, { useState } from 'react';
import { 
  Search, 
  MoreVertical, 
  Phone, 
  Video, 
  Smile, 
  Paperclip, 
  Send, 
  Sparkles,
  Instagram,
  Facebook,
  Check,
  Clock
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';

// Custom TikTok Icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
);

const chats = [
  {
    id: 1,
    user: 'Олена Коваль',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    platform: 'instagram',
    lastMessage: 'Доброго дня! Чи є у вас безлактозне молоко?',
    time: '10 хв',
    unread: 1,
    status: 'new'
  },
  {
    id: 2,
    user: 'Максим Д.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
    platform: 'facebook',
    lastMessage: 'Дякую за швидку доставку!',
    time: '2 год',
    unread: 0,
    status: 'read'
  },
  {
    id: 3,
    user: 'user9921',
    avatar: null,
    platform: 'tiktok',
    lastMessage: 'Ціна?',
    time: '1 день',
    unread: 0,
    status: 'read'
  }
];

export function Inbox() {
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const [replyText, setReplyText] = useState('');

  const aiSuggestions = [
    "Так, звичайно! У нас є вівсяне, мигдалеве та кокосове молоко на вибір. 🥛",
    "Доброго дня! Так, готуємо на будь-якому рослинному молоці без доплати.",
    "Привіт! Так, маємо безлактозне коров'яче та рослинні альтернативи."
  ];

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col lg:flex-row bg-[#18181B] border border-white/5 rounded-3xl overflow-hidden max-w-7xl mx-auto shadow-2xl animate-in fade-in duration-500">
      
      {/* Sidebar List */}
      <div className="w-full lg:w-80 border-r border-white/5 flex flex-col bg-[#0F0F12]">
        <div className="p-4 border-b border-white/5">
          <h2 className="font-bold text-white mb-4">Вхідні повідомлення</h2>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
            <input 
              placeholder="Пошук клієнта..." 
              className="w-full bg-[#18181B] border border-white/5 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors"
            />
          </div>
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            <Badge variant="secondary" className="bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer whitespace-nowrap rounded-lg">Всі</Badge>
            <Badge variant="outline" className="text-zinc-400 border-white/10 cursor-pointer hover:text-white hover:bg-white/5 whitespace-nowrap rounded-lg">Непрочитані</Badge>
            <Badge variant="outline" className="text-zinc-400 border-white/10 cursor-pointer hover:text-white hover:bg-white/5 whitespace-nowrap rounded-lg">Замовлення</Badge>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div 
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-4 border-b border-white/5 cursor-pointer transition-all hover:bg-white/5 ${selectedChat.id === chat.id ? 'bg-[#18181B] border-l-2 border-l-indigo-500' : ''}`}
            >
              <div className="flex gap-3">
                <div className="relative">
                  <Avatar className="ring-2 ring-white/5">
                    <AvatarImage src={chat.avatar || ''} />
                    <AvatarFallback>{chat.user[0]}</AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-1 -right-1 p-1 rounded-full bg-[#0F0F12] border border-[#18181B] flex items-center justify-center shadow-sm`}>
                    {chat.platform === 'instagram' && <Instagram className="h-3 w-3 text-pink-500" />}
                    {chat.platform === 'facebook' && <Facebook className="h-3 w-3 text-blue-500" />}
                    {chat.platform === 'tiktok' && <TikTokIcon className="h-3 w-3 text-white" />}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <span className={`font-medium text-sm ${selectedChat.id === chat.id ? 'text-white' : 'text-zinc-300'}`}>{chat.user}</span>
                    <span className="text-[10px] text-zinc-500">{chat.time}</span>
                  </div>
                  <p className={`text-xs truncate ${chat.unread ? 'text-white font-medium' : 'text-zinc-500'}`}>
                    {chat.lastMessage}
                  </p>
                </div>
                {chat.unread > 0 && (
                  <div className="h-2 w-2 rounded-full bg-indigo-500 mt-2 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-[#0F0F12] relative">
        {/* Chat Header */}
        <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#0F0F12]/80 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 ring-2 ring-white/5">
              <AvatarImage src={selectedChat.avatar || ''} />
              <AvatarFallback>{selectedChat.user[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-white text-sm flex items-center gap-2">
                {selectedChat.user}
                <Badge variant="outline" className="text-[10px] h-4 px-1 text-zinc-400 border-white/10 uppercase rounded-md">{selectedChat.platform}</Badge>
              </div>
              <div className="text-xs text-zinc-500">Онлайн 5 хв тому</div>
            </div>
          </div>
          <div className="flex gap-2 text-zinc-400">
            <Button variant="ghost" size="icon" className="hover:text-white hover:bg-white/5 rounded-lg"><Phone className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="hover:text-white hover:bg-white/5 rounded-lg"><Video className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="hover:text-white hover:bg-white/5 rounded-lg"><MoreVertical className="h-4 w-4" /></Button>
          </div>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex justify-center">
            <span className="text-[10px] text-zinc-500 bg-[#18181B] px-3 py-1 rounded-full border border-white/5">Сьогодні, 10:23</span>
          </div>
          
          {/* Incoming Message */}
          <div className="flex gap-3">
            <Avatar className="h-8 w-8 mt-1 ring-2 ring-white/5">
              <AvatarImage src={selectedChat.avatar || ''} />
              <AvatarFallback>{selectedChat.user[0]}</AvatarFallback>
            </Avatar>
            <div className="max-w-[70%]">
              <div className="bg-[#18181B] border border-white/5 p-4 rounded-2xl rounded-tl-none text-sm text-zinc-200 shadow-sm">
                {selectedChat.lastMessage}
              </div>
              <div className="text-[10px] text-zinc-600 mt-1 ml-1">10:23</div>
            </div>
          </div>

          {/* AI Suggestions Panel */}
          <div className="ml-11 mt-2 space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex items-center gap-2 text-xs text-purple-400 font-medium mb-2">
                <Sparkles className="h-3 w-3" /> AI Варіанти відповідей:
             </div>
             <div className="flex flex-wrap gap-2">
               {aiSuggestions.map((suggestion, i) => (
                 <button 
                    key={i}
                    onClick={() => setReplyText(suggestion)}
                    className="text-left text-xs text-zinc-300 bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 hover:text-purple-200 p-2.5 rounded-xl transition-all max-w-md"
                 >
                   {suggestion}
                 </button>
               ))}
             </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-[#0F0F12] border-t border-white/5">
          <div className="flex gap-2 items-end bg-[#18181B] border border-white/5 rounded-2xl p-2 shadow-sm">
            <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-white h-10 w-10 mb-0.5 rounded-xl hover:bg-white/5">
              <Paperclip className="h-5 w-5" />
            </Button>
            <textarea 
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Напишіть повідомлення..."
              className="flex-1 bg-transparent border-none resize-none focus:ring-0 text-sm text-white p-2.5 max-h-32 min-h-[44px] placeholder:text-zinc-600"
              rows={1}
            />
            <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-white h-10 w-10 mb-0.5 rounded-xl hover:bg-white/5">
              <Smile className="h-5 w-5" />
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white h-10 w-10 mb-0.5 rounded-xl shadow-lg shadow-indigo-900/20 p-0 flex items-center justify-center transition-all hover:scale-105">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar: CRM Info */}
      <div className="w-80 border-l border-white/5 bg-[#0F0F12] hidden xl:flex flex-col p-6">
         <div className="text-center mb-8">
            <div className="relative inline-block">
              <Avatar className="h-24 w-24 mx-auto mb-4 ring-4 ring-[#18181B] shadow-2xl">
                <AvatarImage src={selectedChat.avatar || ''} />
                <AvatarFallback className="text-3xl">{selectedChat.user[0]}</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-4 right-0 p-1.5 rounded-full bg-[#0F0F12] border border-[#18181B] shadow-lg">
                 {selectedChat.platform === 'instagram' && <Instagram className="h-4 w-4 text-pink-500" />}
                 {selectedChat.platform === 'facebook' && <Facebook className="h-4 w-4 text-blue-500" />}
                 {selectedChat.platform === 'tiktok' && <TikTokIcon className="h-4 w-4 text-white" />}
              </div>
            </div>
            <h3 className="font-bold text-white text-lg">{selectedChat.user}</h3>
            <p className="text-zinc-500 text-sm">@helena_koval</p>
         </div>

         <div className="space-y-8">
            <div>
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Статус клієнта</h4>
              <Badge className="bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/20 w-full justify-center py-2 rounded-lg text-sm font-medium">
                Постійний клієнт
              </Badge>
            </div>

            <div>
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Останні замовлення</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#18181B] border border-white/5 hover:border-white/10 transition-colors">
                   <div className="h-10 w-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/5">
                     <Clock className="h-5 w-5 text-zinc-500" />
                   </div>
                   <div>
                     <div className="text-sm font-medium text-zinc-200">Капучино XL</div>
                     <div className="text-[10px] text-zinc-500 mt-0.5">2 дні тому • 85 ₴</div>
                   </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#18181B] border border-white/5 hover:border-white/10 transition-colors">
                   <div className="h-10 w-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/5">
                     <Check className="h-5 w-5 text-zinc-500" />
                   </div>
                   <div>
                     <div className="text-sm font-medium text-zinc-200">Круасан з шоколадом</div>
                     <div className="text-[10px] text-zinc-500 mt-0.5">2 дні тому • 65 ₴</div>
                   </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Нотатки</h4>
              <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500/50"></div>
                <p className="text-xs text-yellow-200/80 italic leading-relaxed">
                  "Любить гарячіше, завжди просить корицю. Алергія на мед."
                </p>
              </div>
            </div>
         </div>
      </div>

    </div>
  );
}