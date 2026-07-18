'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Gift, Copy, Share2, CheckCircle2 } from 'lucide-react';

export default function Referrals() {
  const router = useRouter();

  const handleCopy = () => {
    // navigator.clipboard.writeText('ARCMART-JAI-123');
    alert('Referral code copied!');
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Refer & Earn</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Header Graphic */}
        <div className="bg-primary-container p-8 text-center border-b border-primary/20">
          <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-primary-container shadow-lg relative">
            <Gift className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-xl font-black text-white mb-2">Get 1 Month Free!</h1>
          <p className="text-xs text-white/80 max-w-[250px] mx-auto leading-relaxed">
            Invite another supplier to ArcMart. When they upgrade to a Pro plan, you both get 1 month added to your subscription for free.
          </p>
        </div>

        <div className="p-5">
          {/* Code Section */}
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Your Referral Code</h3>
          <div className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between mb-8">
            <span className="font-mono text-lg font-bold text-on-surface tracking-widest">ARC-JAI-123</span>
            <div className="flex space-x-2">
              <button onClick={handleCopy} className="w-10 h-10 bg-surface-variant rounded-xl flex items-center justify-center text-on-surface hover:bg-outline-variant transition">
                <Copy className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary/20 transition">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* History Section */}
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Your Referrals</h3>
          <div className="space-y-3">
            <div className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-on-surface">RK Hardware Store</p>
                <p className="text-[10px] text-on-surface-variant">Joined Oct 10, 2026</p>
              </div>
              <div className="flex items-center text-[10px] font-bold text-success-dark bg-success-container px-2 py-1 rounded border border-success/20 uppercase tracking-wider">
                <CheckCircle2 className="w-3 h-3 mr-1" /> Reward Claimed
              </div>
            </div>

            <div className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between opacity-70">
              <div>
                <p className="text-sm font-bold text-on-surface">Shiv Timbers</p>
                <p className="text-[10px] text-on-surface-variant">Joined Today</p>
              </div>
              <div className="flex items-center text-[10px] font-bold text-warning-dark bg-warning-container px-2 py-1 rounded border border-warning/20 uppercase tracking-wider">
                Pending Upgrade
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
