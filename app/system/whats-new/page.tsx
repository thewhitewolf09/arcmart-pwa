'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Zap, ShieldCheck, Check, ArrowRight } from 'lucide-react';

export default function WhatsNewScreen() {
  const router = useRouter();

  const updates = [
    {
      title: 'Lightning Fast Search',
      description: 'We\'ve completely rewritten our search engine. Finding properties and pros is now 3x faster.',
      icon: <Zap className="w-6 h-6 text-secondary" />,
      bg: 'bg-secondary/10'
    },
    {
      title: 'Consultant Verification',
      description: 'You can now verify RERA numbers directly on consultant profiles for extra peace of mind.',
      icon: <ShieldCheck className="w-6 h-6 text-success" />,
      bg: 'bg-success/10'
    },
    {
      title: 'Dark Mode Support',
      description: 'Browsing at night? ArcMart now respects your system\'s dark mode settings natively.',
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      bg: 'bg-primary/10'
    }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="flex-1 p-6 space-y-8 pb-32 pt-16">
        
        <div className="text-center">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            Version 2.4.0
          </div>
          <h1 className="text-4xl font-black text-on-surface mb-3 leading-tight">What's New in ArcMart</h1>
          <p className="text-on-surface-variant font-medium leading-relaxed max-w-[280px] mx-auto text-sm">
            We've made some exciting improvements based on your feedback.
          </p>
        </div>

        <div className="space-y-6 mt-8">
          {updates.map((update, idx) => (
            <div key={idx} className="flex items-start">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mr-4 ${update.bg}`}>
                {update.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-1">{update.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{update.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => router.push('/discover')}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
        >
          Continue to App <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}
