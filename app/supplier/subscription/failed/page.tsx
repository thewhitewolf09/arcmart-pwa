'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { XCircle, RefreshCw, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function PaymentFailed() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        
        {/* Error Animation Container */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center border border-error/30">
            <XCircle className="w-12 h-12 text-error" />
          </div>
        </div>

        <h1 className="text-3xl font-black text-on-surface mb-3 tracking-tight">Payment Failed</h1>
        <p className="text-base text-on-surface-variant leading-relaxed mb-8 max-w-xs">
          We couldn't process your payment. No charges were made to your account.
        </p>

        {/* Error Details */}
        <div className="w-full max-w-sm glass-card rounded-2xl border border-error/30 bg-error-container p-5 text-left mb-10">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-error mt-0.5 mr-3 shrink-0" />
            <div>
              <h3 className="font-bold text-error text-sm mb-1">Bank Server Timeout</h3>
              <p className="text-xs text-error/80 leading-relaxed">
                Your bank did not respond in time. Please try again or use a different payment method.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant z-30 space-y-3">
        <button 
          onClick={() => router.back()}
          className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          <RefreshCw className="w-5 h-5 mr-2" /> Retry Payment
        </button>
        <Link 
          href="/supplier/subscription"
          className="w-full py-4 rounded-xl border border-outline-variant text-on-surface font-bold text-sm flex items-center justify-center hover:bg-surface-variant transition"
        >
          Cancel and return to Dashboard
        </Link>
      </div>
    </div>
  );
}
