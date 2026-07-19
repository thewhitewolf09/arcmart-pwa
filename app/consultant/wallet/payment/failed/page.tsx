'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { XCircle, RefreshCcw, Headset } from 'lucide-react';
import Link from 'next/link';

export default function ConsultantPaymentFailed() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
        
        <div className={`transition-all duration-1000 transform ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-12 h-12 text-error" />
          </div>
          
          <h1 className="text-3xl font-black text-on-surface mb-2">Payment Failed</h1>
          <p className="text-on-surface-variant font-medium leading-relaxed max-w-[280px] mx-auto">
            We couldn't process your payment. Any deducted amount will be refunded within 3-5 business days.
          </p>
        </div>

        <div className={`w-full max-w-sm glass-card border border-error/20 bg-error/5 rounded-2xl p-5 text-left transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-error mb-4">Error Details</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-on-surface-variant">Reason</span>
              <span className="text-xs font-bold text-on-surface text-right w-1/2">Bank Server Timeout</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-on-surface-variant">Transaction ID</span>
              <span className="text-xs font-bold text-on-surface font-mono">TXN-98237493</span>
            </div>
          </div>
        </div>

      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant z-30 space-y-3">
        <Link 
          href="/consultant/wallet/payment"
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
        >
          <RefreshCcw className="w-5 h-5 mr-2" /> Try Again
        </Link>
        <Link 
          href="/consultant/support"
          className="w-full py-4 bg-surface border-2 border-outline-variant text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-surface-variant transition"
        >
          <Headset className="w-5 h-5 mr-2" /> Contact Support
        </Link>
      </div>
    </div>
  );
}
