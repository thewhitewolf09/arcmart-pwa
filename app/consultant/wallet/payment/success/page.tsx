'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, ChevronRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function ConsultantPaymentSuccess() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
        
        <div className={`transition-all duration-1000 transform ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-success" />
          </div>
          
          <h1 className="text-3xl font-black text-on-surface mb-2">Payment Successful!</h1>
          <p className="text-on-surface-variant font-medium leading-relaxed max-w-[280px] mx-auto">
            Your wallet has been credited with ₹3,980 (20 Leads + 2 Bonus Leads).
          </p>
        </div>

        <div className={`w-full max-w-sm glass-card border border-outline-variant rounded-2xl p-5 text-left transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Transaction Details</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-on-surface-variant">Transaction ID</span>
              <span className="text-xs font-bold text-on-surface font-mono">TXN-98237492</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-on-surface-variant">Date & Time</span>
              <span className="text-xs font-bold text-on-surface">19 Oct 2026, 14:32</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-on-surface-variant">Total Amount</span>
              <span className="text-xs font-black text-on-surface">₹4,696</span>
            </div>
          </div>

          <button className="w-full mt-5 py-3 border border-outline-variant text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-surface-variant transition text-sm">
            <Download className="w-4 h-4 mr-2" /> Download Invoice
          </button>
        </div>

      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant z-30">
        <Link 
          href="/consultant/wallet"
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
        >
          Back to Wallet <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}
