'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Wallet, Plus, AlertCircle, RefreshCw } from 'lucide-react';

export default function ConsultantWallet() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-primary px-4 py-3 flex items-center text-white shadow-md">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-white/10 transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-sm truncate">My Wallet</span>
      </div>

      <div className="flex-1 pb-32">
        {/* Header / Balance Card */}
        <div className="bg-primary pt-6 pb-12 px-6 rounded-b-[40px] text-center text-white relative shadow-lg">
          <p className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-1">Available Balance</p>
          <div className="flex items-center justify-center">
            <span className="text-2xl font-bold mr-1">₹</span>
            <span className="text-6xl font-black tracking-tight">398</span>
          </div>
          <div className="mt-4 inline-flex items-center bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold border border-white/30">
            <Wallet className="w-4 h-4 mr-2" /> 2 Leads Remaining
          </div>
        </div>

        <div className="px-5 -mt-6 relative z-10">
          <Link 
            href="/consultant/wallet/topup"
            className="w-full py-4 bg-surface border-2 border-primary text-primary font-bold rounded-2xl flex items-center justify-center shadow-lg hover:bg-primary/5 transition mb-6"
          >
            <Plus className="w-5 h-5 mr-2" /> Top-up Wallet
          </Link>
        </div>

        <div className="px-5 space-y-6">
          {/* Free Leads Tracker */}
          <div className="glass-card border border-outline-variant rounded-2xl p-5 shadow-sm flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-on-surface">Welcome Offer</h3>
              <p className="text-[10px] text-on-surface-variant font-semibold mt-1">First 5 leads are free</p>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-black text-success">2</span>
              <span className="text-sm font-bold text-on-surface-variant ml-1">/ 5 Left</span>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 flex items-start">
            <AlertCircle className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-on-surface mb-1">Pay Per Lead (₹199)</p>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                You get <strong>5 free leads</strong> upon joining. After that, ₹199 is deducted only when you accept a verified buyer or tenant lead.
              </p>
            </div>
          </div>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Recent Transactions</h3>
            </div>
            
            <div className="space-y-3">
              <div className="glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center mr-3">
                    <ArrowLeft className="w-5 h-5 text-error transform rotate-45" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Lead Accepted</p>
                    <p className="text-[10px] text-on-surface-variant font-semibold">Amit Kumar • Today, 10:30 AM</p>
                  </div>
                </div>
                <span className="font-bold text-error">-₹199</span>
              </div>

              <div className="glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center mr-3">
                    <RefreshCw className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Lead Refund (Dispute)</p>
                    <p className="text-[10px] text-on-surface-variant font-semibold">Fake Lead • Yesterday</p>
                  </div>
                </div>
                <span className="font-bold text-success">+₹199</span>
              </div>

              <div className="glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center mr-3">
                    <Wallet className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Wallet Top-up</p>
                    <p className="text-[10px] text-on-surface-variant font-semibold">UPI Payment • 12 Oct 2026</p>
                  </div>
                </div>
                <span className="font-bold text-success">+₹500</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
