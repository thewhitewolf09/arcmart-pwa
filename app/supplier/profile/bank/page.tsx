'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Building2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function BankDetails() {
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(true); // Mock saved state

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Bank Details</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        <div className="flex items-start mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-on-surface mb-1">Payout Account</h2>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Add your bank details to receive payments for high-value orders and referrals directly to your account.
            </p>
          </div>
        </div>

        {isSaved && (
          <div className="bg-success-container/50 border border-success/30 rounded-xl p-3 mb-6 flex items-center">
            <CheckCircle2 className="w-4 h-4 text-success mr-2 shrink-0" />
            <p className="text-xs font-bold text-success-dark">Your bank details are verified.</p>
          </div>
        )}

        <form className="space-y-5">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              Account Holder Name
            </label>
            <input 
              type="text" 
              defaultValue="JAI DURGA TILES"
              className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
            />
            <p className="text-[10px] text-on-surface-variant mt-1.5 ml-1 flex items-center">
              <AlertCircle className="w-3 h-3 mr-1" /> Must match GST Business Name
            </p>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              Account Number
            </label>
            <input 
              type="text" 
              defaultValue="50100412399876"
              className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition tracking-widest"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              IFSC Code
            </label>
            <input 
              type="text" 
              defaultValue="HDFC0000123"
              className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition uppercase"
            />
          </div>
        </form>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition disabled:opacity-50">
          Save Bank Details
        </button>
      </div>
    </div>
  );
}
