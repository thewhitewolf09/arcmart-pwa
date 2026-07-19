'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Wallet, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ConsultantPayment() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (success: boolean) => {
    setIsProcessing(true);
    setTimeout(() => {
      router.push(success ? '/consultant/wallet/payment/success' : '/consultant/wallet/payment/failed');
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Complete Payment</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-6">
        
        {/* Order Summary */}
        <div className="glass-card border border-outline-variant rounded-3xl p-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Wallet className="w-24 h-24 transform rotate-12 translate-x-4 -translate-y-4" />
          </div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Order Summary</h2>
          
          <div className="flex justify-between items-center mb-2 relative z-10">
            <span className="text-sm font-bold text-on-surface">20 Leads Package</span>
            <span className="text-sm font-black text-on-surface">₹3,980</span>
          </div>
          <div className="flex justify-between items-center mb-4 relative z-10">
            <span className="text-sm font-semibold text-on-surface-variant flex items-center">
              <Zap className="w-3 h-3 text-success mr-1 fill-success" /> Bonus Leads
            </span>
            <span className="text-sm font-black text-success">2 Free</span>
          </div>
          
          <div className="flex justify-between items-center mb-4 relative z-10">
            <span className="text-sm font-semibold text-on-surface-variant">GST (18%)</span>
            <span className="text-sm font-black text-on-surface">₹716</span>
          </div>

          <div className="h-px bg-outline-variant/50 w-full my-4 relative z-10"></div>
          
          <div className="flex justify-between items-center relative z-10">
            <span className="text-sm font-black text-on-surface">Total Amount</span>
            <span className="text-2xl font-black text-primary">₹4,696</span>
          </div>
        </div>

        {/* Secure Badge */}
        <div className="flex items-center justify-center p-3 bg-success/10 rounded-xl border border-success/20 text-success">
          <ShieldCheck className="w-5 h-5 mr-2" />
          <span className="text-xs font-bold">100% Secure & Encrypted Payments</span>
        </div>

        {/* Payment Methods (Mock) */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1 mt-4">Select Payment Method</h3>
          <div className="space-y-3">
            {['UPI (GPay, PhonePe, Paytm)', 'Credit / Debit Card', 'Netbanking'].map((method, idx) => (
              <label key={idx} className="flex items-center justify-between glass-card border border-outline-variant rounded-2xl p-4 cursor-pointer hover:border-primary/50 transition">
                <span className="text-sm font-bold text-on-surface">{method}</span>
                <input type="radio" name="payment" className="w-5 h-5 text-primary border-outline-variant focus:ring-primary" defaultChecked={idx === 0} />
              </label>
            ))}
          </div>
        </div>

      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => handlePayment(true)}
          disabled={isProcessing}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition disabled:opacity-70"
        >
          {isProcessing ? 'Processing...' : 'Pay ₹4,696'}
        </button>
        
        {/* Developer Tool: Force Failure */}
        <div className="mt-4 flex justify-center space-x-4 opacity-30 hover:opacity-100 transition-opacity">
          <button onClick={() => handlePayment(false)} className="text-[10px] font-mono border rounded px-2 py-1 text-on-surface-variant">Dev: Force Fail</button>
        </div>
      </div>
    </div>
  );
}
