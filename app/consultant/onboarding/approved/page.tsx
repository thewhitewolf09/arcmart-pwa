'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ConsultantApproved() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
        
        <div className={`transition-all duration-1000 transform ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-success" />
          </div>
          
          <h1 className="text-3xl font-black text-on-surface mb-2">Profile Approved!</h1>
          <p className="text-on-surface-variant font-medium leading-relaxed max-w-[280px] mx-auto">
            Welcome to ArcMart! Your consultant profile is now live and you can start accepting real estate leads.
          </p>
        </div>

        <div className={`w-full max-w-sm glass-card border border-outline-variant rounded-2xl p-5 text-left transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Welcome Offer</h3>
            <span className="bg-success/10 text-success text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-sm">Active</span>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 bg-success/20 rounded-xl flex items-center justify-center mr-3 mt-1 shrink-0">
              <Zap className="w-5 h-5 text-success fill-success" />
            </div>
            <div>
              <p className="font-bold text-on-surface">5 Free Leads Credited</p>
              <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
                We've added 5 free leads to your wallet to help you get started. No payment required until you use them up!
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant z-30">
        <Link 
          href="/consultant"
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
        >
          Go to Dashboard <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}
