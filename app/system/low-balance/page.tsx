'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AlertTriangle, Wallet, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LowBalanceWarning() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6 pb-24">
        
        {/* Warning Icon */}
        <div className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-error/20 relative">
          <Wallet className="w-10 h-10 text-error" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-surface rounded-full flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-error fill-error/20" />
          </div>
        </div>
        
        <div>
          <h1 className="text-3xl font-black text-on-surface mb-2">Low Wallet Balance</h1>
          <p className="text-sm font-bold text-on-surface-variant">Current Balance: <span className="text-error">₹45</span></p>
        </div>

        <p className="text-sm text-on-surface-variant max-w-[280px] leading-relaxed">
          Your balance is too low to accept new leads. You need at least <strong>₹199</strong> (1 Lead) to stay visible to homeowners in your area.
        </p>

        <div className="w-full bg-surface-variant/50 border border-outline-variant rounded-2xl p-4 mt-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center text-sm font-bold text-on-surface">
              <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-2" /> Quick Add: 5 Leads
            </div>
            <span className="font-black text-primary">₹995</span>
          </div>
          <Link 
            href="/pro/wallet/payment"
            className="w-full py-3 mt-2 bg-primary text-white font-bold rounded-xl flex items-center justify-center hover:bg-primary/90 transition shadow-sm"
          >
            Top-up ₹995 Now
          </Link>
        </div>

        <button 
          onClick={() => router.back()}
          className="w-full py-4 mt-2 bg-surface text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-surface-variant transition border border-outline-variant"
        >
          Remind Me Later
        </button>

      </div>
    </div>
  );
}
