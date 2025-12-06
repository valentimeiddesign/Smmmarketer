import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  CalendarDays, 
  Megaphone, 
  BarChart3, 
  TrendingUp, 
  Bell, 
  Search, 
  Menu,
  X,
  Settings,
  MessageSquare,
  Users,
  Link,
  Sparkles,
  CheckSquare,
  Video,
  GraduationCap,
  Mic,
  Fingerprint
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Dashboard } from './pages/Dashboard';
import { Content } from './pages/Content';
import { Ads } from './pages/Ads';
import { Analytics } from './pages/Analytics';
import { Trends } from './pages/Trends';
import { Inbox } from './pages/Inbox';
import { Competitors } from './pages/Competitors';
import { CRM } from './pages/CRM';
import { BioLink } from './pages/BioLink';
import { Landing } from './pages/Landing';
import { Academy } from './pages/Academy';
import { BrandDNA } from './pages/BrandDNA';
import { AIAgent } from './components/AIAgent';
import { Onboarding } from './components/Onboarding';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userNiche, setUserNiche] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAIAgentOpen, setIsAIAgentOpen] = useState(false);
  const [aiInitialMessage, setAiInitialMessage] = useState<string | undefined>(undefined);

  const openAIWithContext = (message: string) => {
    setAiInitialMessage(message);
    setIsAIAgentOpen(true);
  };

  // Navigation grouped by section
  const navGroups = [
    {
      title: "ЗАГАЛЬНЕ",
      items: [
        { id: 'dashboard', label: 'Дашборд', icon: LayoutDashboard },
        { id: 'analytics', label: 'Моніторинг', icon: BarChart3 },
        { id: 'content', label: 'Контент', icon: Video },
        { id: 'inbox', label: 'Повідомлення', icon: MessageSquare, badge: 3 },
      ]
    },
    {
      title: "СТРАТЕГІЯ",
      items: [
        { id: 'brand-dna', label: 'Brand DNA', icon: Fingerprint },
        { id: 'tasks', label: 'Завдання', icon: CheckSquare },
        { id: 'academy', label: 'Academy', icon: GraduationCap },
        { id: 'ai-agent', label: 'AI Асистент', icon: Sparkles, action: () => setIsAIAgentOpen(true) },
      ]
    },
    {
      title: "ІНСТРУМЕНТИ",
      items: [
        { id: 'ads', label: 'Реклама', icon: Megaphone },
        { id: 'crm', label: 'CRM', icon: Users },
        { id: 'biolink', label: 'Bio Link', icon: Link },
      ]
    }
  ];

  if (!isAuthenticated) {
    return <Landing onLogin={() => setIsAuthenticated(true)} />;
  }

  // Show Onboarding if user is logged in but hasn't selected a niche
  if (isAuthenticated && !userNiche) {
    return <Onboarding onComplete={(niche) => setUserNiche(niche)} />;
  }

  const renderPage = () => {
    // Pass context handler to dashboard
    if (currentPage === 'dashboard') {
        return <Dashboard onViewChange={setCurrentPage} niche={userNiche || 'business'} onAskAI={openAIWithContext} />;
    }

    switch (currentPage) {
      case 'content': return <Content />;
      case 'ads': return <Ads />;
      case 'analytics': return <Analytics />;
      case 'trends': return <Trends />;
      case 'inbox': return <Inbox />;
      case 'competitors': return <Competitors />;
      case 'crm': return <CRM />;
      case 'biolink': return <BioLink />;
      case 'academy': return <Academy />;
      case 'brand-dna': return <BrandDNA />;
      default: return <Dashboard onViewChange={setCurrentPage} niche={userNiche || 'business'} onAskAI={openAIWithContext} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F12] text-zinc-100 font-sans selection:bg-indigo-500/30 flex overflow-hidden relative">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#0F0F12] border-r border-white/5 transition-transform duration-300 ease-in-out flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo Area */}
        <div className="h-24 flex items-center px-8">
           <div className="flex items-center gap-3">
             <div className="h-8 w-8 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/20">
                <Sparkles className="h-5 w-5 text-white" />
             </div>
             <div>
               <h1 className="font-bold text-lg leading-none">Twins UI</h1>
               <span className="text-[10px] text-zinc-500 font-medium">Marketing OS</span>
             </div>
           </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-6 py-2 space-y-8 custom-scrollbar">
          {navGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-4 px-2">{group.title}</h3>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.action) item.action();
                      else {
                         setCurrentPage(item.id);
                         setIsSidebarOpen(false);
                      }
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group
                      ${currentPage === item.id && !item.action
                        ? 'text-white bg-white/5 shadow-inner' 
                        : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                      }`}
                  >
                    <item.icon 
                      className={`h-5 w-5 transition-colors ${
                         item.id === 'ai-agent' ? 'text-pink-500' : 
                         currentPage === item.id ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-400'
                      }`} 
                    />
                    {item.label}
                    {item.badge && (
                      <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                        {item.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Upgrade Button */}
        <div className="p-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-4 text-center relative overflow-hidden group cursor-pointer">
             <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative z-10">
               <Sparkles className="h-6 w-6 text-white/80 mx-auto mb-2" />
               <h4 className="font-bold text-white mb-1">Оновитись до Pro</h4>
               <p className="text-xs text-white/70 mb-3">Отримайте повний доступ</p>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        
        {/* Header */}
        <header className="h-20 flex items-center justify-between px-8 shrink-0">
           <div className="flex items-center gap-4 lg:hidden">
             <button onClick={() => setIsSidebarOpen(true)} className="text-zinc-400">
               <Menu className="h-6 w-6" />
             </button>
           </div>
           
           <div className="hidden md:block flex-1">
             <div className="text-zinc-500 text-sm font-medium">Twins Marketing OS</div>
           </div>

           <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-[#18181B] text-zinc-400 hover:text-white hover:bg-[#27272A] transition-colors cursor-pointer">
                <Search className="h-4 w-4" />
              </div>

              {/* Date Picker Mock */}
              <div className="hidden md:flex h-10 px-4 items-center gap-2 rounded-full bg-[#18181B] text-zinc-400 text-sm font-medium hover:bg-[#27272A] transition-colors cursor-pointer">
                <CalendarDays className="h-4 w-4" />
                <span>Цей місяць</span>
                <X className="h-3 w-3 ml-1 rotate-45" />
              </div>

              {/* Settings */}
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#18181B] text-zinc-400 hover:text-white hover:bg-[#27272A] transition-colors cursor-pointer">
                <Settings className="h-4 w-4" />
              </div>

              {/* Notifications */}
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#18181B] text-zinc-400 hover:text-white hover:bg-[#27272A] transition-colors cursor-pointer relative">
                <Bell className="h-4 w-4" />
                <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-pink-500 rounded-full border-2 border-[#18181B]" />
              </div>

              {/* Profile */}
              <Avatar className="h-10 w-10 border-2 border-[#18181B] cursor-pointer">
                <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
           </div>
        </header>

        {/* Page Content - Scrollable Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 pt-0">
          {renderPage()}
        </div>

      </main>

      {/* Floating Action Button (FAB) */}
      <button 
        onClick={() => {
            setAiInitialMessage(undefined);
            setIsAIAgentOpen(true);
        }}
        className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-indigo-600 hover:bg-indigo-500 shadow-2xl shadow-indigo-600/40 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-40 group"
      >
         <div className="absolute inset-0 rounded-full bg-indigo-600 animate-ping opacity-20"></div>
         <Sparkles className="h-6 w-6 group-hover:rotate-12 transition-transform" />
      </button>

      {/* AI Agent Modal */}
      <AIAgent 
        isOpen={isAIAgentOpen} 
        onClose={() => setIsAIAgentOpen(false)} 
        initialMessage={aiInitialMessage}
      />

    </div>
  );
}

export default App;