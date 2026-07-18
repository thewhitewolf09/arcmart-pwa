'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, Plus, CalendarX2 } from 'lucide-react';

type DaySchedule = {
  day: string;
  isOpen: boolean;
  openTime: string;
  closeTime: string;
};

const INITIAL_SCHEDULE: DaySchedule[] = [
  { day: 'Monday', isOpen: true, openTime: '10:00 AM', closeTime: '08:00 PM' },
  { day: 'Tuesday', isOpen: true, openTime: '10:00 AM', closeTime: '08:00 PM' },
  { day: 'Wednesday', isOpen: true, openTime: '10:00 AM', closeTime: '08:00 PM' },
  { day: 'Thursday', isOpen: true, openTime: '10:00 AM', closeTime: '08:00 PM' },
  { day: 'Friday', isOpen: true, openTime: '10:00 AM', closeTime: '08:00 PM' },
  { day: 'Saturday', isOpen: true, openTime: '10:00 AM', closeTime: '08:00 PM' },
  { day: 'Sunday', isOpen: false, openTime: '10:00 AM', closeTime: '08:00 PM' },
];

const TIME_OPTIONS = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM'
];

export default function EditHours() {
  const router = useRouter();
  const [schedule, setSchedule] = useState<DaySchedule[]>(INITIAL_SCHEDULE);

  const toggleDay = (index: number) => {
    const newSchedule = [...schedule];
    newSchedule[index].isOpen = !newSchedule[index].isOpen;
    setSchedule(newSchedule);
  };

  const updateTime = (index: number, field: 'openTime' | 'closeTime', value: string) => {
    const newSchedule = [...schedule];
    newSchedule[index][field] = value;
    setSchedule(newSchedule);
  };

  const handleSave = () => {
    // Save logic
    router.back();
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Working Hours</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
          Set your regular operating hours. This lets customers know when they can visit your store or expect a reply.
        </p>

        {/* Weekly Schedule */}
        <div className="glass-card rounded-2xl border border-outline-variant shadow-sm overflow-hidden divide-y divide-outline-variant/50 mb-8">
          {schedule.map((item, index) => (
            <div key={item.day} className={`p-4 transition ${item.isOpen ? 'bg-surface' : 'bg-surface-variant/30'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className={`font-bold text-sm ${item.isOpen ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                  {item.day}
                </span>
                
                {/* Custom Toggle Switch */}
                <button 
                  onClick={() => toggleDay(index)}
                  className={`w-11 h-6 rounded-full relative transition-colors duration-300 ${item.isOpen ? 'bg-primary' : 'bg-outline-variant'}`}
                >
                  <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${item.isOpen ? 'left-6' : 'left-1'}`} />
                </button>
              </div>

              {item.isOpen ? (
                <div className="flex items-center space-x-3">
                  <select 
                    value={item.openTime}
                    onChange={(e) => updateTime(index, 'openTime', e.target.value)}
                    className="flex-1 px-3 py-2 bg-transparent border border-outline-variant rounded-lg text-xs font-bold text-on-surface focus:outline-none focus:border-primary appearance-none"
                  >
                    {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <span className="text-on-surface-variant font-bold text-xs">to</span>
                  <select 
                    value={item.closeTime}
                    onChange={(e) => updateTime(index, 'closeTime', e.target.value)}
                    className="flex-1 px-3 py-2 bg-transparent border border-outline-variant rounded-lg text-xs font-bold text-on-surface focus:outline-none focus:border-primary appearance-none"
                  >
                    {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              ) : (
                <div className="text-xs text-on-surface-variant font-semibold">Closed</div>
              )}
            </div>
          ))}
        </div>

        {/* Holiday Closures */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Upcoming Closures</h3>
          <div className="glass-card rounded-2xl border border-outline-variant shadow-sm overflow-hidden p-4">
            <div className="flex items-center justify-between mb-4 border-b border-outline-variant/50 pb-3">
              <div className="flex items-center">
                <CalendarX2 className="w-5 h-5 text-on-surface-variant mr-2" />
                <span className="text-sm font-bold text-on-surface">Diwali</span>
              </div>
              <span className="text-xs font-semibold text-on-surface-variant bg-surface-variant px-2 py-1 rounded">Oct 31, 2026</span>
            </div>
            
            <button className="w-full py-3 rounded-xl border border-dashed border-outline-variant text-on-surface-variant font-bold text-sm hover:bg-surface-variant hover:text-on-surface transition flex justify-center items-center">
              <Plus className="w-4 h-4 mr-1" /> Add Holiday Closure
            </button>
          </div>
        </div>

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={handleSave}
          className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          <Check className="w-5 h-5 mr-2" /> Save Working Hours
        </button>
      </div>
    </div>
  );
}
