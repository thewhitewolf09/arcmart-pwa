'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, PlayCircle, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function ReactivateSubscription() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState('pro');

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">Reactivate Listing</span>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-6">
        
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-success/20">
            <PlayCircle className="w-10 h-10 text-success" />
          </div>
          <h1 className="text-2xl font-black text-on-surface mb-2">Welcome Back!</h1>
          <p className="text-sm text-on-surface-variant max-w-[280px] mx-auto">
            Your listing is currently paused. Choose a plan to reactivate your profile and start getting leads again.
          </p>
        </div>

        {/* Plan Selection */}
        <div className="space-y-4">
          
          <div 
            onClick={() => setSelectedPlan('basic')}
            className={`border-2 rounded-2xl p-5 cursor-pointer transition-all ${
              selectedPlan === 'basic' ? 'border-primary bg-primary/5 shadow-md' : 'border-outline-variant bg-surface hover:border-primary/30'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-on-surface">Basic Plan</h3>
              <span className="font-black text-lg text-primary">₹1,999<span className="text-xs font-normal text-on-surface-variant">/mo</span></span>
            </div>
            <ul className="text-xs font-medium text-on-surface-variant space-y-1">
              <li className="flex items-center"><ShieldCheck className="w-3 h-3 text-success mr-2" /> Basic catalogue listing</li>
              <li className="flex items-center"><ShieldCheck className="w-3 h-3 text-success mr-2" /> Receive direct inquiries</li>
            </ul>
          </div>

          <div 
            onClick={() => setSelectedPlan('pro')}
            className={`border-2 rounded-2xl p-5 cursor-pointer transition-all relative overflow-hidden ${
              selectedPlan === 'pro' ? 'border-primary bg-primary/5 shadow-md' : 'border-outline-variant bg-surface hover:border-primary/30'
            }`}
          >
            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-bl-lg">
              Most Popular
            </div>
            <div className="flex justify-between items-start mb-2 mt-2">
              <h3 className="font-bold text-lg text-on-surface">Pro Plan</h3>
              <span className="font-black text-lg text-primary">₹4,999<span className="text-xs font-normal text-on-surface-variant">/mo</span></span>
            </div>
            <ul className="text-xs font-medium text-on-surface-variant space-y-1">
              <li className="flex items-center"><Zap className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-2" /> Priority ranking in search</li>
              <li className="flex items-center"><ShieldCheck className="w-3 h-3 text-success mr-2" /> Unlimited product listings</li>
              <li className="flex items-center"><ShieldCheck className="w-3 h-3 text-success mr-2" /> Detailed analytics dashboard</li>
            </ul>
          </div>

        </div>

      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <Link 
          href={`/supplier/subscription/checkout?plan=${selectedPlan}`}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
        >
          Continue to Payment
        </Link>
      </div>
    </div>
  );
}
