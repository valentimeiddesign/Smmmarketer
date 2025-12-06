import React, { useState } from 'react';
import { 
  Smartphone, 
  Plus, 
  Trash2, 
  GripVertical, 
  Layout, 
  Palette, 
  Share2,
  Eye,
  Check,
  Image as ImageIcon,
  Type
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

// Initial state
const initialLinks = [
  { id: 1, title: 'Наше Меню', url: 'https://menu.com', active: true },
  { id: 2, title: 'Забронювати стіл', url: 'https://booking.com', active: true },
  { id: 3, title: 'Написати нам', url: 'https://t.me/coffee', active: true }
];

export function BioLink() {
  const [links, setLinks] = useState(initialLinks);
  const [profileName, setProfileName] = useState('Coffee Point');
  const [profileDesc, setProfileDesc] = useState('Найкраща кава у твоєму місті ☕️');
  const [activeTab, setActiveTab] = useState<'links' | 'design'>('links');
  const [selectedTheme, setSelectedTheme] = useState('dark');

  const addLink = () => {
    const newLink = {
      id: Date.now(),
      title: 'Нове посилання',
      url: 'https://',
      active: true
    };
    setLinks([...links, newLink]);
  };

  const updateLink = (id: number, key: string, value: string) => {
    setLinks(links.map(l => l.id === id ? { ...l, [key]: value } : l));
  };

  const removeLink = (id: number) => {
    setLinks(links.filter(l => l.id !== id));
  };

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto animate-in fade-in duration-500 pb-10">
      
      {/* Left: Editor Panel */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#18181B] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Toolbar */}
        <div className="h-16 border-b border-white/5 flex items-center px-6 gap-6 bg-[#18181B]">
          <button 
            onClick={() => setActiveTab('links')}
            className={`flex items-center gap-2 text-sm font-medium h-full border-b-2 transition-all px-2 ${activeTab === 'links' ? 'border-purple-500 text-white' : 'border-transparent text-zinc-400 hover:text-white'}`}
          >
            <Layout className="h-4 w-4" /> Посилання
          </button>
          <button 
            onClick={() => setActiveTab('design')}
            className={`flex items-center gap-2 text-sm font-medium h-full border-b-2 transition-all px-2 ${activeTab === 'design' ? 'border-purple-500 text-white' : 'border-transparent text-zinc-400 hover:text-white'}`}
          >
            <Palette className="h-4 w-4" /> Дизайн
          </button>
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm" variant="outline" className="hidden sm:flex border-white/10 text-zinc-300 hover:bg-white/5 hover:text-white rounded-xl">
              <Eye className="h-4 w-4 mr-2" /> Попередній перегляд
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg shadow-purple-900/20">
              <Share2 className="h-4 w-4 mr-2" /> Опублікувати
            </Button>
          </div>
        </div>

        {/* Editor Content */}
        <div className="flex-1 overflow-y-auto p-6">
          
          {activeTab === 'links' ? (
            <div className="space-y-8 max-w-2xl mx-auto">
              {/* Profile Section */}
              <div className="bg-[#0F0F12] border border-white/5 p-6 rounded-3xl space-y-4">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Type className="h-4 w-4 text-purple-500" /> Профіль
                </h3>
                <div className="flex gap-4 items-start">
                   <div className="h-20 w-20 bg-zinc-800 rounded-full flex items-center justify-center border-2 border-dashed border-zinc-700 cursor-pointer hover:border-zinc-500 transition-colors shrink-0 overflow-hidden">
                      {/* Mock Upload */}
                      <div className="w-full h-full flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 transition-colors">
                         <ImageIcon className="h-6 w-6 text-zinc-500" />
                      </div>
                   </div>
                   <div className="flex-1 space-y-3">
                      <input 
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl p-2.5 text-white text-sm focus:border-purple-500 focus:outline-none placeholder:text-zinc-600 transition-colors"
                        placeholder="Назва профілю"
                      />
                      <textarea 
                        value={profileDesc}
                        onChange={(e) => setProfileDesc(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl p-2.5 text-white text-sm focus:border-purple-500 focus:outline-none resize-none placeholder:text-zinc-600 transition-colors"
                        placeholder="Опис профілю"
                        rows={2}
                      />
                   </div>
                </div>
              </div>

              {/* Links Section */}
              <div className="space-y-4">
                 <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white">Кнопки</h3>
                    <Button size="sm" onClick={addLink} className="bg-white/5 hover:bg-white/10 text-white border border-white/5 rounded-xl">
                      <Plus className="h-4 w-4 mr-2" /> Додати кнопку
                    </Button>
                 </div>
                 
                 <div className="space-y-3">
                   {links.map((link) => (
                     <div key={link.id} className="bg-[#0F0F12] border border-white/5 rounded-2xl p-4 flex gap-4 group hover:border-white/10 transition-all animate-in slide-in-from-bottom-2 duration-300 shadow-sm">
                        <div className="mt-3 text-zinc-600 cursor-grab active:cursor-grabbing hover:text-zinc-400">
                           <GripVertical className="h-5 w-5" />
                        </div>
                        <div className="flex-1 space-y-3">
                           <div className="flex items-center justify-between">
                              <input 
                                value={link.title}
                                onChange={(e) => updateLink(link.id, 'title', e.target.value)}
                                className="bg-transparent font-medium text-white focus:outline-none w-full placeholder:text-zinc-600"
                                placeholder="Назва кнопки"
                              />
                              <div className="flex items-center gap-2">
                                 <button 
                                   onClick={() => updateLink(link.id, 'active', (!link.active).toString())}
                                   className={`w-9 h-5 rounded-full relative transition-colors ${link.active ? 'bg-green-500' : 'bg-zinc-700'}`}
                                 >
                                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all shadow-sm ${link.active ? 'left-5' : 'left-1'}`} />
                                 </button>
                                 <Button variant="ghost" size="icon" onClick={() => removeLink(link.id)} className="h-8 w-8 text-zinc-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg">
                                    <Trash2 className="h-4 w-4" />
                                 </Button>
                              </div>
                           </div>
                           <input 
                              value={link.url}
                              onChange={(e) => updateLink(link.id, 'url', e.target.value)}
                              className="w-full bg-zinc-900/50 border border-white/5 rounded-lg px-3 py-2 text-xs text-zinc-300 focus:border-purple-500 focus:outline-none transition-colors"
                              placeholder="https://"
                           />
                        </div>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8 max-w-2xl mx-auto">
               <div className="grid grid-cols-2 gap-4">
                  {['dark', 'light', 'blue', 'purple'].map(theme => (
                    <div 
                      key={theme} 
                      onClick={() => setSelectedTheme(theme)}
                      className={`aspect-video rounded-2xl border-2 cursor-pointer relative overflow-hidden transition-all ${selectedTheme === theme ? 'border-purple-500 ring-4 ring-purple-500/20' : 'border-white/5 hover:border-white/20'}`}
                    >
                       <div className={`absolute inset-0 ${
                         theme === 'dark' ? 'bg-zinc-950' : 
                         theme === 'light' ? 'bg-white' : 
                         theme === 'blue' ? 'bg-blue-950' : 'bg-purple-950'
                       }`} />
                       <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 opacity-50 pointer-events-none">
                          <div className={`w-8 h-8 rounded-full ${theme === 'light' ? 'bg-zinc-200' : 'bg-zinc-800'}`} />
                          <div className={`w-20 h-2 rounded ${theme === 'light' ? 'bg-zinc-200' : 'bg-zinc-800'}`} />
                          <div className={`w-24 h-6 rounded ${theme === 'light' ? 'bg-zinc-200' : 'bg-zinc-800'}`} />
                       </div>
                       {selectedTheme === theme && (
                         <div className="absolute top-3 right-3 bg-purple-500 rounded-full p-1 text-white shadow-lg animate-in zoom-in duration-200">
                            <Check className="h-3 w-3" />
                         </div>
                       )}
                       <div className="absolute bottom-3 left-3 text-xs font-medium text-zinc-500 capitalize bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/5">
                         {theme}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          )}

        </div>
      </div>

      {/* Right: Phone Preview */}
      <div className="w-full lg:w-[400px] flex items-center justify-center p-6 bg-[#18181B]/30 border border-white/5 rounded-3xl relative hidden lg:flex">
        <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none rounded-3xl" />
        
        <div className="w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-[#18181B] shadow-2xl relative overflow-hidden ring-1 ring-white/10">
           {/* Notch */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#18181B] rounded-b-2xl z-20" />
           
           {/* Screen Content */}
           <div className={`w-full h-full overflow-y-auto no-scrollbar pt-12 px-6 pb-8 flex flex-col items-center transition-colors duration-500 ${
              selectedTheme === 'light' ? 'bg-white text-black' : 
              selectedTheme === 'blue' ? 'bg-gradient-to-b from-[#0f172a] to-black text-white' :
              selectedTheme === 'purple' ? 'bg-gradient-to-b from-[#2e1065] to-black text-white' :
              'bg-[#09090b] text-white'
           }`}>
              
              {/* Profile Header */}
              <div className="flex flex-col items-center mb-8 text-center w-full animate-in fade-in slide-in-from-top-4 duration-500">
                 <div className="w-24 h-24 bg-zinc-800 rounded-full mb-4 overflow-hidden shadow-lg ring-2 ring-white/10">
                    {/* Mock Avatar */}
                    <div className="w-full h-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-3xl font-bold text-white">
                      {profileName[0]}
                    </div>
                 </div>
                 <h2 className="text-xl font-bold mb-2 tracking-tight">{profileName}</h2>
                 <p className={`text-sm text-center leading-relaxed max-w-[80%] ${selectedTheme === 'light' ? 'text-zinc-600' : 'text-zinc-400'}`}>
                   {profileDesc}
                 </p>
              </div>

              {/* Links List */}
              <div className="w-full space-y-3 flex-1">
                 {links.filter(l => l.active).map((link, i) => (
                   <a 
                     key={link.id} 
                     href="#" 
                     className={`block w-full py-4 px-6 rounded-2xl text-center font-medium text-sm transition-all hover:scale-[1.02] active:scale-95 animate-in slide-in-from-bottom-4 duration-500 ${
                       selectedTheme === 'light' 
                         ? 'bg-zinc-100 text-black hover:bg-zinc-200 shadow-sm border border-zinc-200' 
                         : 'bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-white/10 shadow-lg'
                     }`}
                     style={{ animationDelay: `${i * 100}ms` }}
                   >
                     {link.title}
                   </a>
                 ))}
              </div>

              {/* Footer Branding */}
              <div className="mt-8 pt-8 opacity-30 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-1.5">
                 <div className="w-3 h-3 rounded-full bg-current" /> Twins UI
              </div>
           </div>
        </div>
      </div>

    </div>
  );
}