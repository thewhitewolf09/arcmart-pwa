'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Clock, MessageCircle, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function OnboardingPending() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg px-4 py-4 flex items-center justify-between">
        <span className="font-bold text-on-surface tracking-wide">ArcMart Pro</span>
        <button className="p-2 -mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <LogOut className="w-5 h-5 text-on-surface-variant" />
        </button>
      </div>

      <div className="flex-1 p-5 flex flex-col items-center justify-center text-center -mt-16">
        
        <div className="w-24 h-24 bg-secondary-container/30 rounded-full flex items-center justify-center mb-6 relative animate-pulse">
          <div className="absolute inset-0 border-4 border-secondary/20 rounded-full border-t-secondary animate-spin"></div>
          <Clock className="w-10 h-10 text-secondary" />
        </div>
        
        <h1 className="text-2xl font-black text-on-surface mb-3">Profile Under Review</h1>
        <p className="text-sm text-on-surface-variant mb-8 leading-relaxed px-4">
          Thanks for joining ArcMart! Our team is currently verifying your details. This usually takes less than <strong>24 hours</strong>.
        </p>

        <div className="glass-card border border-outline-variant rounded-2xl p-4 w-full text-left bg-surface-variant/30 flex items-start mb-8">
          <MessageCircle className="w-5 h-5 text-success mr-3 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-on-surface mb-1">WhatsApp Notification</p>
            <p className="text-[10px] text-on-surface-variant font-semibold">
              We'll send you a message on WhatsApp as soon as your profile is approved.
            </p>
          </div>
        </div>

      </div>

      {/* Action Area */}
      <div className="p-5 pb-safe w-full">
        <button 
          onClick={() => router.push('/pro/onboarding/approved')}
          className="w-full py-4 bg-surface border border-outline-variant text-on-surface font-bold rounded-xl flex items-center justify-center shadow-sm hover:bg-surface-variant transition text-xs opacity-0"
        >
          Developer: Jump to Approved
        </button>
      </div>
    </div>
  );
}
