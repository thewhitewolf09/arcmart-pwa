'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { X, Check, MapPin, Navigation, IndianRupee, Clock, Zap } from 'lucide-react';

export default function LeadAlertPage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(60);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isAccepted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isAccepted) {
      // Missed lead, redirect back
      router.back();
    }
  }, [timeLeft, isAccepted, router]);

  const handleAccept = () => {
    setIsAccepted(true);
    setTimeout(() => {
      router.push('/pro/leads'); // Redirect to leads dashboard after acceptance
    }, 2000);
  };

  const handleReject = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0f172a] text-white flex flex-col justify-between p-6 overflow-hidden">
      
      {/* Background Radar Animation */}
      {!isAccepted && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <motion.div 
            animate={{ scale: [1, 2, 3], opacity: [1, 0.5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
            className="absolute w-40 h-40 border-[4px] border-primary rounded-full"
          />
          <motion.div 
            animate={{ scale: [1, 2, 3], opacity: [1, 0.5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 0.6 }}
            className="absolute w-40 h-40 border-[4px] border-primary rounded-full"
          />
        </div>
      )}

      {/* Header & Timer */}
      <div className="relative z-10 flex flex-col items-center mt-10">
        {!isAccepted ? (
          <>
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-20 h-20 rounded-full border-4 border-primary flex items-center justify-center mb-4 relative"
            >
              <span className="text-2xl font-black text-primary">{timeLeft}s</span>
              
              {/* Circular progress SVG */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle 
                  cx="50%" cy="50%" r="38"
                  className="fill-none stroke-primary/30 stroke-[4]"
                />
                <circle 
                  cx="50%" cy="50%" r="38"
                  className="fill-none stroke-primary stroke-[4] transition-all duration-1000 ease-linear"
                  strokeDasharray="239"
                  strokeDashoffset={239 - (239 * timeLeft) / 60}
                />
              </svg>
            </motion.div>
            <h1 className="text-2xl font-black uppercase tracking-widest text-primary animate-pulse">
              New Lead Alert
            </h1>
            <p className="text-slate-400 font-bold mt-2">Respond before the timer runs out</p>
          </>
        ) : (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(34,197,94,0.5)]">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-black text-white">Lead Accepted!</h1>
            <p className="text-slate-300 font-bold mt-2 text-center max-w-[250px]">
              ₹50 deducted from your wallet. Redirecting to lead details...
            </p>
          </motion.div>
        )}
      </div>

      {/* Lead Details Card */}
      {!isAccepted && (
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-400 p-0.5">
              <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-800">
                <img src="https://ui-avatars.com/api/?name=Rajesh+K&background=random" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Rajesh K.</h2>
              <div className="flex items-center text-slate-300 text-sm font-semibold">
                <MapPin className="w-3.5 h-3.5 mr-1 text-primary" /> Sector 50, Noida
                <span className="mx-2">•</span>
                <Navigation className="w-3.5 h-3.5 mr-1 text-primary" /> 2.5 km away
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-black/20 rounded-xl p-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Service Required</h3>
              <p className="text-white font-bold text-lg">Bathroom Pipe Leakage Repair</p>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-1 bg-black/20 rounded-xl p-4 flex flex-col items-center justify-center">
                <Clock className="w-6 h-6 text-primary mb-2" />
                <span className="text-xs font-bold text-slate-400 uppercase">When</span>
                <span className="text-white font-bold">Today, 4 PM</span>
              </div>
              <div className="flex-1 bg-black/20 rounded-xl p-4 flex flex-col items-center justify-center">
                <IndianRupee className="w-6 h-6 text-primary mb-2" />
                <span className="text-xs font-bold text-slate-400 uppercase">Budget</span>
                <span className="text-white font-bold">₹500 - ₹800</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-primary font-bold bg-primary/10 py-2 rounded-xl border border-primary/20">
            <Zap className="w-4 h-4" /> Lead Fee: ₹50
          </div>
        </motion.div>
      )}

      {/* Action Buttons */}
      {!isAccepted && (
        <div className="relative z-10 flex gap-4 pb-8">
          <button 
            onClick={handleReject}
            className="flex-1 h-16 rounded-2xl bg-white/10 border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-colors"
          >
            Pass
          </button>
          <button 
            onClick={handleAccept}
            className="flex-[2] h-16 rounded-2xl bg-primary text-on-primary font-black text-xl shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)] hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <Check className="w-6 h-6" strokeWidth={3} /> Accept Lead
          </button>
        </div>
      )}
      
    </div>
  );
}
