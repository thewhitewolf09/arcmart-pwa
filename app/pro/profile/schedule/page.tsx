'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, Check, Save } from 'lucide-react';

export default function AvailabilitySchedule() {
  const router = useRouter();
  const [workingDays, setWorkingDays] = useState(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  
  const allDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const toggleDay = (day: string) => {
    if (workingDays.includes(day)) {
      setWorkingDays(workingDays.filter(d => d !== day));
    } else {
      setWorkingDays([...workingDays, day]);
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Availability</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-8">
        
        {/* Working Days */}
        <section>
          <div className="flex items-center mb-4">
            <Calendar className="w-5 h-5 text-primary mr-2" />
            <h2 className="text-sm font-bold text-on-surface uppercase tracking-widest">Working Days</h2>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {allDays.map(day => {
              const isSelected = workingDays.includes(day);
              return (
                <button
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`py-3 rounded-xl text-xs font-bold transition-all border ${
                    isSelected 
                      ? 'bg-primary text-on-primary border-primary shadow-sm' 
                      : 'bg-surface border-outline-variant text-on-surface-variant hover:bg-surface-variant'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
          <p className="text-[10px] text-on-surface-variant font-semibold mt-3 ml-1">
            Days not selected will be marked as holidays.
          </p>
        </section>

        {/* Working Hours */}
        <section>
          <div className="flex items-center mb-4">
            <Clock className="w-5 h-5 text-secondary mr-2" />
            <h2 className="text-sm font-bold text-on-surface uppercase tracking-widest">Working Hours</h2>
          </div>
          <div className="glass-card border border-outline-variant rounded-2xl p-5 shadow-sm space-y-4">
            
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-on-surface">Start Time</label>
              <select className="bg-surface-variant border border-outline-variant rounded-xl px-4 py-2 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition">
                <option>08:00 AM</option>
                <option selected>09:00 AM</option>
                <option>10:00 AM</option>
              </select>
            </div>

            <div className="border-t border-outline-variant/50 pt-4 flex items-center justify-between">
              <label className="text-sm font-bold text-on-surface">End Time</label>
              <select className="bg-surface-variant border border-outline-variant rounded-xl px-4 py-2 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition">
                <option>05:00 PM</option>
                <option selected>06:00 PM</option>
                <option>07:00 PM</option>
                <option>08:00 PM</option>
              </select>
            </div>

          </div>
        </section>

      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => router.back()}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
        >
          <Save className="w-5 h-5 mr-2" /> Save Schedule
        </button>
      </div>
    </div>
  );
}
