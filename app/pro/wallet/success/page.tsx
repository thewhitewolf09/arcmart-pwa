'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Wallet, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PaymentSuccess() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-success/5 justify-center p-5">
      <div className="bg-surface border border-outline-variant rounded-3xl p-8 text-center shadow-xl animate-in zoom-in-95 duration-500 relative overflow-hidden">
        
        {/* Background Decoration */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-success/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>

        <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-success/30 relative z-10 animate-bounce">
          <CheckCircle2 className="w-10 h-10 text-success" />
        </div>
        
        <h1 className="text-2xl font-black text-on-surface mb-2 relative z-10">Payment Successful</h1>
        <p className="text-sm text-on-surface-variant mb-6 relative z-10">
          Your wallet has been topped up with ₹980.
        </p>

        <div className="bg-surface-variant/50 rounded-2xl p-4 mb-8 text-left flex items-center justify-between relative z-10">
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">New Balance</p>
            <p className="text-2xl font-black text-primary">₹1,127</p>
          </div>
          <Wallet className="w-8 h-8 text-primary/20" />
        </div>

        <Link 
          href="/pro/wallet"
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center hover:bg-primary/90 transition shadow-lg relative z-10"
        >
          Return to Wallet <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}
