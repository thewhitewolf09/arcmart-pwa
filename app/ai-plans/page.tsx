'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AIPlansLandingPage() {
  const router = useRouter();
  const [prompt, setPrompt] = useState('');

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col pb-safe font-sans relative overflow-x-hidden">
      
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute -top-[20%] -left-[20%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.3, 1] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] bg-secondary/20 rounded-full blur-[100px]"
        />
      </div>

      <header className="px-4 py-4 bg-transparent relative z-20 flex items-center justify-between">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="px-3 py-1 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          <span className="font-label-sm font-bold text-black tracking-widest uppercase">Coming Soon</span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto relative z-10">
        
        {/* Hero Section */}
        <section className="px-6 pt-8 pb-12 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 relative"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-600 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(30,41,59,0.5)]">
              <span className="material-symbols-outlined text-[40px] text-white">auto_awesome</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline-lg font-bold mb-4 leading-tight"
          >
            Design your dream home with <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500">ArcMart AI</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body-lg text-white/70 max-w-[300px]"
          >
            Generate architect-grade floor plans in seconds using just your words.
          </motion.p>
        </section>

        {/* Locked Form Preview (AI-01) */}
        <section className="px-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden shadow-2xl"
          >
            {/* Lock Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
              <span className="material-symbols-outlined text-white/80 text-[32px] mb-2">lock</span>
              <span className="font-label-md font-bold text-white/80 uppercase tracking-widest">Early Access Only</span>
            </div>

            <div className="relative">
              <label className="font-label-md text-white/80 mb-3 block">Describe your plot and requirements:</label>
              <textarea 
                readOnly
                value="A modern 3BHK on a 30x40 east-facing plot with a modular kitchen and a small front garden."
                className="w-full h-32 bg-white/10 border border-white/20 rounded-2xl p-4 font-body-md text-white resize-none"
              />
              <button className="w-full mt-4 bg-white text-black py-4 rounded-xl font-label-lg font-bold flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">magic_button</span>
                Generate Plan
              </button>
            </div>
          </motion.div>
        </section>

        {/* How It Works (AI-02) */}
        <section className="px-6 mb-24">
          <h2 className="font-headline-sm font-bold text-center mb-8">How it will work</h2>
          
          <div className="space-y-8 relative">
            {/* Connecting Line */}
            <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent -z-10"></div>

            {[
              { icon: 'edit_note', title: '1. Describe', desc: 'Tell our AI about your plot size, facing direction, and room requirements.' },
              { icon: 'architecture', title: '2. Generate', desc: 'ArcMart AI instantly generates standard-compliant 2D floor plans.' },
              { icon: 'handshake', title: '3. Build', desc: 'Connect with verified architects to finalize the plan and start building.' }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] shrink-0">
                  <span className="material-symbols-outlined text-black text-[24px]">{step.icon}</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-label-lg font-bold text-white mb-1">{step.title}</h3>
                  <p className="font-body-md text-white/60">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <button 
              onClick={() => router.push('/ai-plans/preview')}
              className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-label-md text-white flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">visibility</span>
              View Sample Plan
            </button>
          </motion.div>
        </section>

      </main>

      {/* Sticky Bottom Action */}
      <div className="p-4 bg-gradient-to-t from-black via-black/90 to-transparent sticky bottom-0 z-30 pt-10 pb-24">
        <button 
          onClick={() => router.push('/ai-plans/joined')}
          className="w-full bg-white text-black py-4 rounded-full font-label-lg font-bold shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-black">notifications_active</span>
          Join the Waitlist
        </button>
      </div>
    </div>
  );
}
