import React from 'react';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Calendar,
  Share2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area
} from 'recharts';

const dataVisits = [
  { name: 'Пн', instagram: 400, website: 240 },
  { name: 'Вт', instagram: 300, website: 139 },
  { name: 'Ср', instagram: 550, website: 380 },
  { name: 'Чт', instagram: 480, website: 320 },
  { name: 'Пт', instagram: 700, website: 450 },
  { name: 'Сб', instagram: 850, website: 520 },
  { name: 'Нд', instagram: 900, website: 580 },
];

const dataAge = [
  { name: '18-24', value: 20 },
  { name: '25-34', value: 45 },
  { name: '35-44', value: 25 },
  { name: '45+', value: 10 },
];

const COLORS = ['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981'];

export function Analytics() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Аналітика</h2>
          <p className="text-zinc-400">Детальний огляд ефективності каналів</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="hidden sm:flex border-white/10 text-zinc-300 hover:bg-white/5 hover:text-white rounded-xl">
            <Calendar className="h-4 w-4 mr-2" />
            Останні 30 днів
          </Button>
          <Button variant="outline" className="border-white/10 text-zinc-300 hover:bg-white/5 hover:text-white rounded-xl">
            <Share2 className="h-4 w-4 mr-2" />
            Експорт
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#18181B] border-white/5 rounded-3xl">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-zinc-400">Загальне охоплення</p>
                <h3 className="text-2xl font-bold text-white mt-2">128.4K</h3>
              </div>
              <Badge variant="secondary" className="bg-green-500/10 text-green-400 rounded-lg border-green-500/20">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +12.5%
              </Badge>
            </div>
            <div className="mt-4 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 w-[70%]"></div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#18181B] border-white/5 rounded-3xl">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-zinc-400">Залученість (ER)</p>
                <h3 className="text-2xl font-bold text-white mt-2">4.8%</h3>
              </div>
              <Badge variant="secondary" className="bg-green-500/10 text-green-400 rounded-lg border-green-500/20">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +0.4%
              </Badge>
            </div>
             <div className="mt-4 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-purple-600 w-[45%]"></div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#18181B] border-white/5 rounded-3xl">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-zinc-400">Кліки на сайт</p>
                <h3 className="text-2xl font-bold text-white mt-2">1,240</h3>
              </div>
              <Badge variant="secondary" className="bg-red-500/10 text-red-400 rounded-lg border-red-500/20">
                <ArrowDownRight className="h-3 w-3 mr-1" /> -2.1%
              </Badge>
            </div>
             <div className="mt-4 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 w-[60%]"></div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#18181B] border-white/5 rounded-3xl">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-zinc-400">Нові підписники</p>
                <h3 className="text-2xl font-bold text-white mt-2">+845</h3>
              </div>
              <Badge variant="secondary" className="bg-green-500/10 text-green-400 rounded-lg border-green-500/20">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +18%
              </Badge>
            </div>
             <div className="mt-4 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[85%]"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-[#18181B] border-white/5 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-white">Динаміка трафіку</CardTitle>
            <CardDescription className="text-zinc-400">Порівняння Instagram та веб-сайту</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataVisits}>
                <defs>
                  <linearGradient id="colorInsta" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorWeb" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#3f3f46" opacity={0.2} />
                <XAxis dataKey="name" stroke="#71717a" tickLine={false} axisLine={false} />
                <YAxis stroke="#71717a" tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="instagram" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorInsta)" strokeWidth={2} />
                <Area type="monotone" dataKey="website" stroke="#3b82f6" fillOpacity={1} fill="url(#colorWeb)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-[#18181B] border-white/5 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-white">Вік аудиторії</CardTitle>
            <CardDescription className="text-zinc-400">Демографія твоїх клієнтів</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataAge}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {dataAge.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ backgroundColor: '#18181b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                   itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              {dataAge.map((entry, index) => (
                <div key={entry.name} className="flex items-center gap-2 text-sm text-zinc-400">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                  {entry.name}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}