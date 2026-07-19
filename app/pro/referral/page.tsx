'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Gift, Share2, Copy, CheckCircle2 } from 'lucide-react';

export default function ReferralProgram() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const referralCode = 'ARCMART-PRO-9X2V';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-primary/5">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Refer & Earn</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Header Illustration Area */}
        <div className="bg-primary pt-12 pb-8 px-6 text-center text-white relative overflow-hidden rounded-b-[40px] shadow-lg">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Gift className="w-40 h-40 transform rotate-12 translate-x-8 -translate-y-8" />
          </div>
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/30 relative z-10">
            <Gift className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-black mb-2 relative z-10">Get ₹500 Free!</h1>
          <p className="text-white/80 text-sm font-semibold relative z-10 max-w-xs mx-auto">
            Refer another professional to ArcMart. When they complete their first job, you both get ₹500 added to your wallets.
          </p>
        </div>

        <div className="p-5 flex-1 mt-4 space-y-6">
          
          <div className="bg-surface border border-outline-variant rounded-3xl p-6 shadow-sm text-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Your Referral Code</h3>
            
            <div className="flex items-center justify-center bg-surface-variant rounded-xl p-4 mb-4 border border-outline-variant border-dashed">
              <span className="font-mono text-xl font-black text-primary tracking-wider">{referralCode}</span>
            </div>

            <div className="flex space-x-3">
              <button 
                onClick={handleCopy}
                className="flex-1 py-3 bg-primary/10 text-primary font-bold rounded-xl flex items-center justify-center hover:bg-primary/20 transition"
              >
                {copied ? <CheckCircle2 className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <button className="flex-1 py-3 bg-primary text-white font-bold rounded-xl flex items-center justify-center hover:bg-primary/90 transition shadow-md shadow-primary/30">
                <Share2 className="w-5 h-5 mr-2" /> Share
              </button>
            </div>
          </div>

          <div className="px-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">How it works</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-black mr-3 shrink-0">1</div>
                <p className="text-sm font-semibold text-on-surface">Share your code with a plumber, electrician, or any pro.</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-black mr-3 shrink-0">2</div>
                <p className="text-sm font-semibold text-on-surface">They sign up and enter your code during onboarding.</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-black mr-3 shrink-0">3</div>
                <p className="text-sm font-semibold text-on-surface">Once they finish their first job, both of you get ₹500 in your wallet instantly.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
