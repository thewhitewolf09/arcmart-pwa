'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Wallet, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export default function TopUpWallet() {
  const router = useRouter();
  const [selectedPack, setSelectedPack] = useState<number | null>(1);
  const [customAmount, setCustomAmount] = useState('');

  const packages = [
    { id: 1, leads: 10, amount: 1990, popular: false },
    { id: 2, leads: 20, amount: 3980, popular: true, bonus: '2 Free Leads' },
    { id: 3, leads: 50, amount: 9950, popular: false, bonus: '5 Free Leads' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Top-up Wallet</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-6">
        
        {/* Current Balance */}
        <div className="flex items-center justify-between bg-surface-variant/50 border border-outline-variant rounded-2xl p-4">
          <div className="flex items-center">
            <Wallet className="w-6 h-6 text-primary mr-3" />
            <div>
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Current Balance</p>
              <p className="font-black text-on-surface text-lg">₹398</p>
            </div>
          </div>
        </div>

        {/* Top-up Packages */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Select a Package</h3>
          <div className="space-y-4">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                onClick={() => { setSelectedPack(pkg.id); setCustomAmount(''); }}
                className={`relative border-2 rounded-2xl p-5 cursor-pointer transition-all ${
                  selectedPack === pkg.id 
                    ? 'border-primary bg-primary/5 shadow-md scale-[1.02]' 
                    : 'border-outline-variant bg-surface hover:border-primary/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-success text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-xl text-on-surface">{pkg.leads} Leads</h4>
                    <p className="text-sm font-bold text-primary mt-1">₹{pkg.amount}</p>
                    {pkg.bonus && (
                      <p className="text-[10px] text-success font-bold flex items-center mt-2">
                        <Zap className="w-3 h-3 mr-1 fill-success text-success" /> + {pkg.bonus}
                      </p>
                    )}
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selectedPack === pkg.id ? 'border-primary bg-primary text-white' : 'border-outline-variant'
                  }`}>
                    {selectedPack === pkg.id && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                </div>
              </div>
            ))}

            {/* Custom Amount */}
            <div 
              onClick={() => setSelectedPack(null)}
              className={`border-2 rounded-2xl p-5 transition-all ${
                selectedPack === null 
                  ? 'border-primary bg-primary/5 shadow-md' 
                  : 'border-outline-variant bg-surface'
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-bold text-sm text-on-surface">Custom Amount</h4>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selectedPack === null ? 'border-primary bg-primary text-white' : 'border-outline-variant'
                  }`}>
                    {selectedPack === null && <CheckCircle2 className="w-4 h-4" />}
                </div>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant font-bold">₹</span>
                <input 
                  type="number" 
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedPack(null);
                  }}
                  placeholder="Enter amount (Min ₹100)"
                  className="w-full bg-surface border border-outline-variant rounded-xl pl-8 pr-4 py-3 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition"
                />
              </div>
            </div>
          </div>
        </section>

      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <Link 
          href="/consultant/wallet/payment"
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
        >
          Proceed to Pay <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}
