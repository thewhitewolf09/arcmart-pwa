'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Phone, X, MapPin, Wallet, Calendar } from 'lucide-react';

export default function IncomingLead() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleAccept = () => {
    router.push('/pro/leads/L-1005');
  };

  const handleDecline = () => {
    router.push('/pro');
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[#0a1128] text-white relative overflow-hidden">
      
      {/* Animated Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-30">
        <div className="w-[300px] h-[300px] rounded-full border border-success/30 animate-[ping_3s_ease-out_infinite]"></div>
        <div className="w-[400px] h-[400px] rounded-full border border-success/20 animate-[ping_3s_ease-out_infinite_0.5s] absolute"></div>
        <div className="w-[500px] h-[500px] rounded-full border border-success/10 animate-[ping_3s_ease-out_infinite_1s] absolute"></div>
      </div>

      <div className="flex-1 flex flex-col items-center pt-20 px-6 relative z-10">
        <h1 className="text-xl font-bold text-success animate-pulse tracking-widest uppercase mb-8">New Job Match</h1>
        
        <div className="w-24 h-24 bg-success/20 rounded-full flex items-center justify-center mb-6 border-2 border-success shadow-[0_0_30px_rgba(37,211,102,0.4)]">
          <Phone className="w-10 h-10 text-success animate-bounce" />
        </div>

        <h2 className="text-2xl font-black text-center leading-tight mb-2">Bathroom Renovation</h2>
        <p className="text-on-surface-variant text-center mb-8">Complete tiling & plumbing work</p>

        <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md space-y-4">
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-on-surface-variant mr-3 shrink-0" />
            <div>
              <p className="text-sm font-bold">Sector 50, Noida</p>
              <p className="text-xs text-on-surface-variant">3.5 km away</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Wallet className="w-5 h-5 text-on-surface-variant mr-3 shrink-0" />
            <div>
              <p className="text-sm font-bold">₹85,000 - ₹1,20,000</p>
              <p className="text-xs text-on-surface-variant">Estimated Budget</p>
            </div>
          </div>

          <div className="flex items-start">
            <Calendar className="w-5 h-5 text-on-surface-variant mr-3 shrink-0" />
            <div>
              <p className="text-sm font-bold">Start Within 1 Week</p>
              <p className="text-xs text-on-surface-variant">Timeline</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs text-on-surface-variant text-center uppercase tracking-widest font-bold mb-2">Expires In</p>
          <div className="text-4xl font-black tracking-widest text-center tabular-nums">
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      <div className="p-6 pb-12 flex justify-between items-center w-full max-w-sm mx-auto relative z-10 space-x-6">
        <button 
          onClick={handleDecline}
          className="w-16 h-16 rounded-full bg-error/20 border-2 border-error flex items-center justify-center text-error hover:bg-error hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <button 
          onClick={handleAccept}
          className="flex-1 h-16 rounded-full bg-success text-white font-bold text-lg shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:bg-success-dark transition-colors"
        >
          <Phone className="w-5 h-5 mr-2" /> Connect Now
        </button>
      </div>

    </div>
  );
}
