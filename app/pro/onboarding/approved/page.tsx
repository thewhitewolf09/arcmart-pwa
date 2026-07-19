'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function OnboardingApproved() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-success/5 justify-center p-5">
      <div className="bg-surface border border-outline-variant rounded-3xl p-8 text-center shadow-xl animate-in zoom-in-95 duration-500 relative overflow-hidden">
        
        {/* Background Decoration */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-success/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="w-24 h-24 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-success/30 relative z-10 animate-bounce">
          <CheckCircle2 className="w-12 h-12 text-success" />
        </div>
        
        <h1 className="text-3xl font-black text-on-surface mb-2 relative z-10">You're Approved!</h1>
        <p className="text-sm text-on-surface-variant mb-8 relative z-10">
          Welcome to ArcMart Pro. Your profile is live and you're ready to start getting jobs.
        </p>

        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 mb-8 text-left flex items-start relative z-10">
          <Zap className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-on-surface mb-1">Go Online to Get Leads</p>
            <p className="text-[10px] text-on-surface-variant font-semibold">
              Tap the toggle on your dashboard to mark yourself as available for work.
            </p>
          </div>
        </div>

        <Link 
          href="/pro"
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center hover:bg-primary/90 transition shadow-lg relative z-10"
        >
          Go to Dashboard <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
        
        {/* Hidden Developer Toggle */}
        <button 
          onClick={() => router.push('/pro/onboarding/rejected')}
          className="w-full mt-4 text-[10px] text-on-surface-variant/30 opacity-0"
        >
          Developer: Jump to Rejected
        </button>
      </div>
    </div>
  );
}
