'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, ArrowUpCircle, ShieldCheck, Zap, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LevelUpCelebration() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center overflow-hidden relative">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-primary/20 to-transparent"></div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-[100px] -right-[200px] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 flex flex-col p-6 w-full max-w-md mx-auto pt-20">
        
        {/* Main Icon & Title */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center shadow-xl relative z-10 mb-6 border-4 border-primary/20"
          >
            <ArrowUpCircle className="w-16 h-16 text-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-primary font-black uppercase tracking-widest text-sm mb-2">Level Up!</p>
            <h1 className="text-4xl font-black text-on-surface mb-4">Professional</h1>
            <p className="text-on-surface-variant font-medium text-sm mx-auto leading-relaxed max-w-[280px]">
              You have completed 50 jobs and maintained a 4.5+ rating. You are now officially a Professional tier partner.
            </p>
          </motion.div>
        </div>
        
        {/* Unlocked Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full space-y-4 mb-10"
        >
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1 text-center">New Features Unlocked</h3>
          
          <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-4 flex gap-4 items-start shadow-sm">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-on-surface mb-1">Premium Leads</h4>
              <p className="text-xs text-on-surface-variant font-medium">Get notified about high-value jobs 15 minutes before Novice pros.</p>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-4 flex gap-4 items-start shadow-sm">
            <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center shrink-0">
              <Wallet className="w-5 h-5 text-success-dark" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-on-surface mb-1">Lower Platform Fee</h4>
              <p className="text-xs text-on-surface-variant font-medium">Your platform commission is reduced from 10% to 8% per job.</p>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-4 flex gap-4 items-start shadow-sm">
            <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-on-surface mb-1">Priority Support</h4>
              <p className="text-xs text-on-surface-variant font-medium">Your support tickets are now routed to our priority resolution queue.</p>
            </div>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-auto pb-safe"
        >
          <button 
            onClick={() => router.push('/pro/profile')}
            className="w-full h-14 bg-primary text-white rounded-full font-black shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:bg-primary-dark transition active:scale-95"
          >
            Continue to Profile <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
        
      </div>
    </div>
  );
}
