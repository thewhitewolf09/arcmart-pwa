'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, Wrench, Shield, Check, Flame, Award } from 'lucide-react';
import { useMockStore } from '../../store/mockStore';

export default function ProfessionalDashboard() {
  const router = useRouter();
  const { user, logout } = useMockStore();
  const [online, setOnline] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/auth');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/auth');
  };

  return (
    <div className="flex-1 flex flex-col p-5 pb-24 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-accent-amber/15 flex items-center justify-center text-accent-amber">
            <Wrench className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-semibold">Worker Console</span>
            <span className="text-xs font-bold text-brand-navy">Ramesh Kumar</span>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="p-2 rounded-full bg-gray-100 border border-gray-200 hover:bg-red-50 hover:text-red-500 text-gray-500 transition"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>

      {/* Online Toggle */}
      <div className="glass-card rounded-card p-4 border border-accent-amber/35 flex justify-between items-center mb-6">
        <div>
          <h3 className="font-bold text-sm text-brand-navy">Duty Status</h3>
          <p className="text-[10px] text-gray-600">Available for immediate WhatsApp bookings near Sector 18</p>
        </div>
        <button
          onClick={() => setOnline(!online)}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            online 
              ? 'bg-green-550 text-green-600 bg-green-50 border border-green-200' 
              : 'bg-gray-100 text-gray-400 border border-gray-200'
          }`}
        >
          {online ? '● On Duty' : '○ Off Duty'}
        </button>
      </div>

      {/* Micro-gamification: Response streak */}
      <div className="glass-card rounded-card p-4 border border-gray-200 bg-gradient-to-r from-accent-amber/5 to-accent-gold/5 flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-accent-amber/15 flex items-center justify-center text-accent-amber">
            <Flame className="w-5 h-5 fill-accent-amber" />
          </div>
          <div>
            <h4 className="font-bold text-xs text-brand-navy">Response Streak: 12 Days</h4>
            <p className="text-[9px] text-gray-600">Top 5% speed in Noida Atta Market!</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 bg-accent-gold/15 text-accent-gold border border-accent-gold/25 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
          <Award className="w-3 h-3" />
          <span>Gold Tier</span>
        </div>
      </div>

      {/* Bookings */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Active Job Bookings</h3>
        <div className="space-y-3">
          <div className="glass-card rounded-card p-4 border border-gray-200 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-sm text-brand-navy">Fix Kitchen Drainage Line</h4>
                <p className="text-[10px] text-gray-500">Booked by Rohit V. • Noida Sector 18</p>
              </div>
              <span className="text-[9px] font-bold bg-green-50 text-green-600 border border-green-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Confirmed
              </span>
            </div>
            <div className="text-xs text-gray-600 leading-normal border-l-2 border-accent-amber pl-3.5 space-y-1">
              <div><strong>Task:</strong> Clear main pipeline block. Install trap filters.</div>
              <div><strong>Time:</strong> Today, 4:30 PM</div>
            </div>
            <div className="pt-2 flex space-x-2">
              <button className="flex-grow bg-accent-amber hover:bg-accent-amber/95 text-white font-bold text-xs py-2 px-3 rounded-lg transition active:scale-95">
                Complete Job
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
