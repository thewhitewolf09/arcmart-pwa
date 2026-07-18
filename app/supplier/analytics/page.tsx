'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useMockStore } from '../../../store/mockStore';
import { TrendingUp, Users, Eye, ArrowUpRight, BarChart3, PieChart, Activity, Info } from 'lucide-react';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { Footer } from '../../../components/ui/Footer';

const VIEWS_DATA = [
  { day: '01', views: 45, prevViews: 30 },
  { day: '05', views: 52, prevViews: 38 },
  { day: '10', views: 38, prevViews: 42 },
  { day: '15', views: 65, prevViews: 45 },
  { day: '20', views: 85, prevViews: 50 },
  { day: '25', views: 72, prevViews: 55 },
  { day: '30', views: 90, prevViews: 60 },
];

const LEADS_DATA = [
  { week: 'W1', leads: 8 },
  { week: 'W2', leads: 12 },
  { week: 'W3', leads: 10 },
  { week: 'W4', leads: 15 },
];

export default function SupplierAnalytics() {
  const router = useRouter();
  const { user } = useMockStore();

  if (!user) {
    router.push('/auth');
    return null;
  }

  return (
    <div className="flex-1 flex flex-col p-5 pb-24 bg-surface min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 pt-2">
        <div>
          <span className="text-[10px] text-on-surface-variant uppercase tracking-widest block font-semibold mb-1">
            Performance
          </span>
          <h1 className="text-2xl font-bold text-on-surface tracking-tight">Analytics</h1>
        </div>
        <button className="px-4 py-2 rounded-lg bg-surface-variant text-on-surface border border-outline-variant text-xs font-bold shadow-sm">
          This Month
        </button>
      </div>

      {/* Main KPIs */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="glass-card rounded-2xl p-5 border border-outline-variant shadow-sm relative overflow-hidden">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
            <Eye className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-bold text-on-surface mb-1">1,248</h3>
          <p className="text-xs text-on-surface-variant font-semibold">Profile Views</p>
          <div className="absolute top-5 right-5 flex items-center text-[10px] font-bold text-success bg-success/10 px-2 py-1 rounded">
            <ArrowUpRight className="w-3 h-3 mr-0.5" /> 12%
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-outline-variant shadow-sm relative overflow-hidden">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary mb-3">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-bold text-on-surface mb-1">45</h3>
          <p className="text-xs text-on-surface-variant font-semibold">Total Leads</p>
          <div className="absolute top-5 right-5 flex items-center text-[10px] font-bold text-success bg-success/10 px-2 py-1 rounded">
            <ArrowUpRight className="w-3 h-3 mr-0.5" /> 8%
          </div>
        </div>
      </div>

      {/* Conversion Rate Card */}
      <div className="glass-card rounded-2xl p-5 border border-outline-variant mb-8 shadow-sm bg-gradient-to-br from-[#0d1c32]/5 to-transparent">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-bold text-sm text-on-surface">Conversion Rate</h3>
            <p className="text-[11px] text-on-surface-variant">Leads turned into orders</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#0d1c32] flex items-center justify-center text-white shadow-lg shadow-[#0d1c32]/30">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>
        
        <div className="flex items-end space-x-2 mb-2">
          <span className="text-4xl font-bold text-[#0d1c32] tracking-tight">22.4%</span>
          <span className="text-sm font-semibold text-success flex items-center pb-1">
            <ArrowUpRight className="w-4 h-4 mr-1" /> +2.1%
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-2 bg-outline-variant rounded-full overflow-hidden mt-4">
          <div className="h-full bg-[#0d1c32] rounded-full relative" style={{ width: '22.4%' }}>
            <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent"></div>
          </div>
        </div>
        <div className="flex justify-between mt-2 text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider">
          <span>0%</span>
          <span>Target: 25%</span>
        </div>
      </div>

      {/* SUP-11 Views Chart */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Activity className="w-4 h-4 text-primary mr-2" />
            <h3 className="font-bold text-sm text-on-surface uppercase tracking-wider">Profile Views (30 Days)</h3>
          </div>
          <div className="flex items-center space-x-3 text-[10px] font-bold uppercase">
            <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-primary mr-1"></div>Current</span>
            <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-outline-variant mr-1"></div>Prev</span>
          </div>
        </div>
        
        <div className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={VIEWS_DATA} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e1e3e4" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#75777e' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#75777e' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: '1px solid #c5c6cd', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '12px', fontWeight: 'bold' }}
                cursor={{ stroke: '#e1e3e4', strokeWidth: 2 }}
              />
              <Line type="monotone" dataKey="views" name="Current" stroke="#0d1c32" strokeWidth={3} dot={{ r: 4, fill: '#0d1c32', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="prevViews" name="Previous" stroke="#c5c6cd" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* SUP-12 Leads Chart */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <BarChart3 className="w-4 h-4 text-secondary mr-2" />
          <h3 className="font-bold text-sm text-on-surface uppercase tracking-wider">Weekly Leads Generated</h3>
        </div>
        
        <div className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={LEADS_DATA} margin={{ top: 10, right: 10, left: -25, bottom: 0 }} barSize={32}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e1e3e4" />
              <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#75777e' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#75777e' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: '1px solid #c5c6cd', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '12px', fontWeight: 'bold' }}
                cursor={{ fill: '#f3f4f5' }}
              />
              <Bar dataKey="leads" name="Leads" fill="#505f76" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* SUP-13 Category Performance */}
      <div className="mb-6">
        <div className="flex justify-between items-end mb-4">
          <div className="flex items-center">
            <PieChart className="w-4 h-4 text-[#0d1c32] mr-2" />
            <h3 className="font-bold text-sm text-on-surface uppercase tracking-wider">Top Categories by Leads</h3>
          </div>
          <Info className="w-4 h-4 text-outline" />
        </div>
        
        <div className="glass-card rounded-2xl p-5 border border-outline-variant shadow-sm space-y-6">
          {/* Item 1 */}
          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-bold text-on-surface">Floor Tiles</span>
              <span className="text-xs font-bold text-[#0d1c32] bg-[#0d1c32]/10 px-2 py-1 rounded">29 Leads (65%)</span>
            </div>
            <div className="w-full h-2 bg-outline-variant rounded-full overflow-hidden">
              <div className="h-full bg-[#0d1c32] rounded-full relative" style={{ width: '65%' }}>
                <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-white/20 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Item 2 */}
          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-bold text-on-surface">Wall Tiles</span>
              <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded">9 Leads (20%)</span>
            </div>
            <div className="w-full h-2 bg-outline-variant rounded-full overflow-hidden">
              <div className="h-full bg-secondary rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
          
          {/* Item 3 */}
          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-bold text-on-surface">Granite Slabs</span>
              <span className="text-xs font-bold text-on-surface-variant bg-surface-variant px-2 py-1 rounded border border-outline-variant">6 Leads (15%)</span>
            </div>
            <div className="w-full h-2 bg-outline-variant rounded-full overflow-hidden">
              <div className="h-full bg-outline rounded-full" style={{ width: '15%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
