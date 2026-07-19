'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Gift, Share2, Copy, CheckCircle2, Users } from 'lucide-react';

export default function ConsultantReferral() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const referralCode = 'ARCMART-CONS-8492';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">Refer & Earn</span>
      </div>

      <div className="flex-1 pb-32">
        {/* Hero Section */}
        <div className="bg-primary pt-8 pb-12 px-6 rounded-b-[40px] text-center text-white relative shadow-lg overflow-hidden">
          <div className="absolute top-4 right-4 opacity-10">
            <Gift className="w-32 h-32 transform rotate-12" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/30">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-black mb-2 relative z-10">Get 10 Free Leads!</h1>
            <p className="text-sm font-medium text-white/90 max-w-[260px] mx-auto leading-relaxed">
              Refer another real estate consultant to ArcMart and both of you get 10 free leads when they complete verification.
            </p>
          </div>
        </div>

        <div className="px-5 -mt-8 relative z-10 space-y-6">
          {/* Share Code Card */}
          <div className="bg-surface border border-outline-variant rounded-3xl p-6 shadow-xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Your Referral Code</p>
            <div 
              onClick={copyToClipboard}
              className="bg-surface-dim border-2 border-dashed border-outline-variant rounded-2xl py-4 flex items-center justify-center cursor-pointer hover:border-primary/50 transition mb-4"
            >
              <span className="text-2xl font-black tracking-widest text-primary mr-3">{referralCode}</span>
              {copied ? <CheckCircle2 className="w-5 h-5 text-success" /> : <Copy className="w-5 h-5 text-on-surface-variant" />}
            </div>
            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition">
              <Share2 className="w-5 h-5 mr-2" /> Share via WhatsApp
            </button>
          </div>

          {/* How it works */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">How it works</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-3">
                  <span className="font-black text-primary text-sm">1</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Share Code</p>
                  <p className="text-xs text-on-surface-variant">Share your unique code with other agents.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-3">
                  <span className="font-black text-primary text-sm">2</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">They Register</p>
                  <p className="text-xs text-on-surface-variant">They sign up using your code and verify their profile.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-3">
                  <span className="font-black text-primary text-sm">3</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Get Free Leads</p>
                  <p className="text-xs text-on-surface-variant">Both of you receive 10 free leads immediately.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
