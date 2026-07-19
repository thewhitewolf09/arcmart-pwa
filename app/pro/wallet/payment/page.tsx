'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CreditCard, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

export default function MockRazorpayCheckout() {
  const router = useRouter();
  const [processing, setProcessing] = useState(false);

  const handlePayment = (success: boolean) => {
    setProcessing(true);
    setTimeout(() => {
      if (success) {
        router.push('/pro/wallet/success');
      } else {
        router.push('/pro/wallet/failed');
      }
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[#f1f3f6]">
      {/* App Bar (Razorpay style) */}
      <div className="bg-[#0b1c30] text-white px-5 py-4 flex flex-col justify-center shadow-md h-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => router.back()} className="mr-3 p-1">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-wide">ArcMart Pro Wallet</span>
              <span className="text-[10px] text-white/70 font-semibold uppercase">Wallet Top-up</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-white/70">Amount</span>
            <h2 className="text-xl font-black text-white">₹980.00</h2>
          </div>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32">
        {processing ? (
          <div className="h-full flex flex-col items-center justify-center mt-20 animate-in fade-in">
            <div className="w-16 h-16 border-4 border-[#3399cc]/30 border-t-[#3399cc] rounded-full animate-spin mb-4"></div>
            <h3 className="text-lg font-bold text-[#0b1c30]">Processing Payment</h3>
            <p className="text-xs text-on-surface-variant mt-2 font-semibold">Please do not press back or close the app</p>
          </div>
        ) : (
          <div className="space-y-4 animate-in slide-in-from-bottom-4">
            
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1 mt-4">Developer Simulation</h3>
            <div className="bg-white border border-outline-variant/30 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-center space-x-2 text-on-surface-variant bg-surface-variant/50 p-2 rounded-lg">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Test Mode</span>
              </div>
              
              <button 
                onClick={() => handlePayment(true)}
                className="w-full py-4 bg-[#3399cc] text-white font-bold rounded-xl flex items-center justify-center hover:bg-[#2b85b5] transition shadow-md"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" /> Simulate Success
              </button>
              
              <button 
                onClick={() => handlePayment(false)}
                className="w-full py-4 bg-white border border-[#3399cc] text-[#3399cc] font-bold rounded-xl flex items-center justify-center hover:bg-[#3399cc]/5 transition"
              >
                Simulate Failure
              </button>
            </div>

            <div className="flex items-center justify-center mt-6 text-on-surface-variant opacity-50">
              <Lock className="w-3 h-3 mr-1" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Secured by Razorpay</span>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
