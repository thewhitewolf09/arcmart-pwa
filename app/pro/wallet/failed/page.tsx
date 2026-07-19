'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AlertCircle, RotateCcw, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PaymentFailed() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-error/5 justify-center p-5">
      <div className="bg-surface border border-outline-variant rounded-3xl p-8 text-center shadow-xl animate-in zoom-in-95 duration-500 relative overflow-hidden">
        
        {/* Background Decoration */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-error/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>

        <div className="w-20 h-20 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-error/20 relative z-10 animate-pulse">
          <AlertCircle className="w-10 h-10 text-error" />
        </div>
        
        <h1 className="text-2xl font-black text-on-surface mb-2 relative z-10">Payment Failed</h1>
        <p className="text-sm text-on-surface-variant mb-8 relative z-10 leading-relaxed">
          We couldn't process your payment of ₹980. Your bank account has not been charged.
        </p>

        <div className="space-y-3 relative z-10">
          <Link 
            href="/pro/wallet/payment"
            className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center hover:bg-primary/90 transition shadow-lg"
          >
            <RotateCcw className="w-5 h-5 mr-2" /> Try Again
          </Link>
          
          <Link 
            href="/pro/wallet"
            className="w-full py-4 bg-surface border border-outline-variant text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-surface-variant transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Wallet
          </Link>
        </div>
      </div>
    </div>
  );
}
