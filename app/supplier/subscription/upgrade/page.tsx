'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, X, Shield, Zap, Crown } from 'lucide-react';
import Link from 'next/link';

type Plan = {
  id: string;
  name: string;
  price: string;
  icon: React.ElementType;
  popular?: boolean;
};

const PLANS: Plan[] = [
  { id: 'basic', name: 'Basic', price: '₹1,999', icon: Shield },
  { id: 'pro', name: 'Pro', price: '₹4,999', icon: Zap, popular: true },
  { id: 'elite', name: 'Elite', price: '₹9,999', icon: Crown },
];

export default function UpgradePlan() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Upgrade Plan</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        
        {/* Header */}
        <div className="p-6 text-center">
          <h1 className="text-2xl font-black text-on-surface mb-2 tracking-tight">Scale Your Business</h1>
          <p className="text-sm text-on-surface-variant">Choose the perfect plan to get more leads and reach homeowners directly.</p>
        </div>

        {/* Pricing Cards (SUP-29) */}
        <div className="px-5 space-y-4 mb-10">
          {PLANS.map(plan => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === plan.id;
            
            return (
              <div 
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative rounded-2xl border-2 transition-all cursor-pointer overflow-hidden p-5 ${
                  isSelected 
                    ? 'border-primary bg-primary/5 shadow-md scale-[1.02]' 
                    : 'border-outline-variant glass-card hover:bg-surface-variant'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-on-primary text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${isSelected ? 'bg-primary/20 text-primary' : 'bg-surface-variant text-on-surface-variant border border-outline-variant'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-on-surface">{plan.name}</h3>
                      <p className="text-sm font-black text-on-surface">
                        {plan.price} <span className="text-xs font-semibold text-on-surface-variant">/ month</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-primary bg-primary' : 'border-outline-variant'}`}>
                    {isSelected && <Check className="w-4 h-4 text-white" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison (SUP-30) */}
        <div className="px-5 mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4 text-center">Compare Plans</h3>
          
          <div className="glass-card rounded-2xl border border-outline-variant shadow-sm overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-4 border-b border-outline-variant bg-surface-variant/50 p-3">
              <div className="col-span-1"></div>
              <div className="col-span-1 text-center text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Basic</div>
              <div className="col-span-1 text-center text-[10px] font-bold uppercase tracking-wider text-primary">Pro</div>
              <div className="col-span-1 text-center text-[10px] font-bold uppercase tracking-wider text-secondary-dark">Elite</div>
            </div>

            {/* Feature Rows */}
            <div className="divide-y divide-outline-variant/50 text-sm">
              
              <div className="grid grid-cols-4 p-3 items-center">
                <div className="col-span-1 font-semibold text-[11px] text-on-surface">Verified Leads</div>
                <div className="col-span-1 text-center text-on-surface-variant font-bold">20/mo</div>
                <div className="col-span-1 text-center text-primary font-bold">50/mo</div>
                <div className="col-span-1 text-center text-secondary-dark font-bold">Unlimited</div>
              </div>

              <div className="grid grid-cols-4 p-3 items-center">
                <div className="col-span-1 font-semibold text-[11px] text-on-surface">Catalogue Size</div>
                <div className="col-span-1 text-center text-on-surface-variant font-bold">50</div>
                <div className="col-span-1 text-center text-primary font-bold">500</div>
                <div className="col-span-1 text-center text-secondary-dark font-bold">Unlimited</div>
              </div>

              <div className="grid grid-cols-4 p-3 items-center">
                <div className="col-span-1 font-semibold text-[11px] text-on-surface">Search Ranking</div>
                <div className="col-span-1 text-center text-on-surface-variant font-bold">Standard</div>
                <div className="col-span-1 text-center text-primary font-bold flex justify-center"><Check className="w-4 h-4" /></div>
                <div className="col-span-1 text-center text-secondary-dark font-bold flex justify-center"><Check className="w-4 h-4" /></div>
              </div>

              <div className="grid grid-cols-4 p-3 items-center">
                <div className="col-span-1 font-semibold text-[11px] text-on-surface">Analytics</div>
                <div className="col-span-1 text-center text-outline font-bold flex justify-center"><X className="w-4 h-4" /></div>
                <div className="col-span-1 text-center text-primary font-bold flex justify-center"><Check className="w-4 h-4" /></div>
                <div className="col-span-1 text-center text-secondary-dark font-bold flex justify-center"><Check className="w-4 h-4" /></div>
              </div>

              <div className="grid grid-cols-4 p-3 items-center">
                <div className="col-span-1 font-semibold text-[11px] text-on-surface">Dedicated AM</div>
                <div className="col-span-1 text-center text-outline font-bold flex justify-center"><X className="w-4 h-4" /></div>
                <div className="col-span-1 text-center text-outline font-bold flex justify-center"><X className="w-4 h-4" /></div>
                <div className="col-span-1 text-center text-secondary-dark font-bold flex justify-center"><Check className="w-4 h-4" /></div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <Link 
          href={`/supplier/subscription/checkout?plan=${selectedPlan}`}
          className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
