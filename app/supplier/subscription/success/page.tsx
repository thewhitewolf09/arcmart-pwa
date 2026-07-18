'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PaymentSuccess() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        
        {/* Success Animation Container */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-success/20 rounded-full animate-ping"></div>
          <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center relative z-10 border border-success/30">
            <CheckCircle2 className="w-12 h-12 text-success" />
          </div>
        </div>

        <h1 className="text-3xl font-black text-on-surface mb-3 tracking-tight">Payment Successful!</h1>
        <p className="text-base text-on-surface-variant leading-relaxed mb-8 max-w-xs">
          Your transaction was completed successfully. Your account has been upgraded.
        </p>

        {/* Receipt Mock */}
        <div className="w-full max-w-sm glass-card rounded-2xl border border-outline-variant p-5 shadow-sm text-left mb-10">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 border-b border-outline-variant/50 pb-2">Transaction Details</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-xs text-on-surface-variant">Order ID</span>
              <span className="text-xs font-bold text-on-surface">ORD_9823412</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-on-surface-variant">Date</span>
              <span className="text-xs font-bold text-on-surface">Oct 2, 2026, 11:45 AM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-on-surface-variant">Payment Method</span>
              <span className="text-xs font-bold text-on-surface">UPI</span>
            </div>
          </div>
        </div>

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant z-30 space-y-3">
        <button className="w-full py-4 rounded-xl border border-outline-variant text-on-surface font-bold text-sm flex items-center justify-center hover:bg-surface-variant transition">
          <FileText className="w-4 h-4 mr-2" /> Download Invoice
        </button>
        <Link 
          href="/supplier/subscription"
          className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          Return to Dashboard <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}
