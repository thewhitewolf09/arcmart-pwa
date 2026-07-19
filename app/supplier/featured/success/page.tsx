'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedSuccess() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-success/5 justify-center p-5">
      <div className="bg-surface border border-outline-variant rounded-3xl p-8 text-center shadow-xl animate-in zoom-in-95 duration-500 relative overflow-hidden">
        
        {/* Background Decoration */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-warning/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-success/20 rounded-full blur-2xl"></div>

        <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-success/30 relative z-10 animate-bounce">
          <CheckCircle2 className="w-10 h-10 text-success" />
        </div>
        
        <h1 className="text-2xl font-black text-on-surface mb-2 relative z-10">You're Featured!</h1>
        <p className="text-sm text-on-surface-variant mb-6 relative z-10 leading-relaxed">
          Your payment was successful. Your listing is now pinned to the top 3 spots in your selected zone.
        </p>

        <div className="bg-warning/10 border border-warning/20 rounded-2xl p-4 mb-8 text-left flex items-center justify-between relative z-10">
          <div>
            <p className="text-[10px] font-bold text-warning-dark uppercase tracking-widest mb-1">Active Zone</p>
            <p className="text-sm font-black text-on-surface">Noida Sector 150</p>
            <p className="text-xs text-on-surface-variant mt-0.5">PIN: 201310</p>
          </div>
          <Star className="w-8 h-8 text-warning-dark shrink-0" />
        </div>

        <Link 
          href="/supplier"
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center hover:bg-primary/90 transition shadow-lg relative z-10"
        >
          Return to Dashboard <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}
