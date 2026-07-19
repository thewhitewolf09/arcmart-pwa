'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Star, ChevronRight, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BadgeEarnedCelebration() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center overflow-hidden relative">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-0" />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[800px] h-[800px] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.1)_90deg,transparent_180deg,rgba(255,255,255,0.1)_270deg,transparent_360deg)] z-0 rounded-full"
      />

      <div className="relative z-10 flex flex-col items-center p-6 text-center w-full">
        
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
          className="relative mb-8"
        >
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10">
            <Star className="w-24 h-24 text-yellow-500 fill-yellow-500" />
          </div>
          {/* Pulse effect */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-white rounded-full z-0"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/80 font-bold uppercase tracking-widest text-sm mb-2">New Badge Unlocked!</p>
          <h1 className="text-4xl font-black text-white mb-4 drop-shadow-md">Top Rated Pro</h1>
          <p className="text-white/90 font-medium text-base mb-10 max-w-[280px] mx-auto leading-relaxed">
            Incredible work! You've maintained a 4.8+ rating over your last 20 jobs. Clients love you!
          </p>

          <div className="flex flex-col gap-4 w-full max-w-[300px] mx-auto">
            <button 
              onClick={() => router.push('/pro/profile/badges')}
              className="w-full h-14 bg-white text-primary rounded-full font-black shadow-xl flex items-center justify-center gap-2 hover:bg-surface-variant transition active:scale-95"
            >
              View My Badges <ChevronRight className="w-5 h-5" />
            </button>
            <button className="w-full h-14 bg-black/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold shadow-sm flex items-center justify-center gap-2 hover:bg-black/30 transition active:scale-95">
              <Share2 className="w-5 h-5" /> Share Achievement
            </button>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
