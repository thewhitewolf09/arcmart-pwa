'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function WaitlistJoinedPage() {
  const router = useRouter();

  const handleShare = () => {
    const text = `I just joined the waitlist for ArcMart AI Plans! Get early access to generate architectural floor plans using just text. https://arcmart.in/ai-plans`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col pb-safe font-sans relative overflow-hidden">
      
      {/* Confetti / Glow Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-primary/20 rounded-full blur-[100px]"
        />
        
        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: '100vh', 
              x: `${Math.random() * 100}vw`,
              opacity: 1
            }}
            animate={{ 
              y: '-20vh',
              opacity: 0,
              rotate: Math.random() * 360
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
            className="absolute w-2 h-2 bg-white/40 rounded-full blur-[1px]"
          />
        ))}
      </div>

      <header className="px-4 py-4 bg-transparent relative z-20 flex justify-end">
        <button 
          onClick={() => router.push('/discover')}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 text-center -mt-10 pb-24">
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          className="w-32 h-32 bg-gradient-to-br from-[#25D366] to-[#1DA851] rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(37,211,102,0.4)]"
        >
          <span className="material-symbols-outlined text-[64px] text-white">check</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-headline-lg font-bold mb-4"
        >
          You're on the list!
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-body-lg text-white/70 max-w-[300px] mb-12"
        >
          We'll notify you the moment ArcMart AI Plans goes live for early access users.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-sm bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
        >
          <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="material-symbols-outlined text-[#25D366]">bolt</span>
          </div>
          <h3 className="font-label-lg font-bold mb-2">Want it faster?</h3>
          <p className="font-body-sm text-white/60 mb-6">
            Move up the waitlist by sharing with a friend.
          </p>
          
          <button 
            onClick={handleShare}
            className="w-full bg-[#25D366] text-white py-4 rounded-xl font-label-lg font-bold shadow-md shadow-[#25D366]/20 flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[24px]">chat</span>
            Share via WhatsApp
          </button>
        </motion.div>

      </main>

    </div>
  );
}
