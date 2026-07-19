'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Wallet, CheckCircle2, AlertCircle, Info, Zap } from 'lucide-react';
import Link from 'next/link';

export default function LeadFeeInfo() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface">How Lead Fees Work</span>
        </div>
      </div>

      <div className="flex-1 pb-32">
        
        {/* Hero Section */}
        <div className="bg-primary pt-10 pb-16 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Wallet className="w-32 h-32 text-white transform rotate-12 translate-x-4 -translate-y-4" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-white/30">
              <Zap className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            </div>
            
            <h1 className="text-3xl font-black mb-3 tracking-tight">Pay Only For Success</h1>
            <p className="text-sm text-white/90 max-w-[280px] mx-auto leading-relaxed">
              No hidden subscriptions. You only pay a flat fee when you choose to connect with a verified customer.
            </p>
          </div>
        </div>

        <div className="px-5 -mt-8 relative z-10 space-y-4">
          
          {/* Rules Card */}
          <div className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-lg">
            <h3 className="font-bold text-sm text-on-surface mb-4 flex items-center">
              <Info className="w-4 h-4 text-primary mr-2" /> The Rules
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-success mr-3 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-on-surface">Flat Rate of ₹199</p>
                  <p className="text-[10px] text-on-surface-variant font-medium mt-0.5">Every lead costs exactly ₹199. No bidding wars or fluctuating prices.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-success mr-3 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-on-surface">You Decide</p>
                  <p className="text-[10px] text-on-surface-variant font-medium mt-0.5">Preview the customer's requirements and budget before deciding to pay for their contact details.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-success mr-3 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-on-surface">100% Refund Policy</p>
                  <p className="text-[10px] text-on-surface-variant font-medium mt-0.5">If the number is unreachable or invalid, report it within 24 hours for an automatic wallet refund.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-warning/10 border border-warning/20 rounded-2xl p-4 flex items-start">
            <AlertCircle className="w-6 h-6 text-warning-dark mr-3 shrink-0 mt-0.5" />
            <p className="text-xs font-semibold text-on-surface-variant leading-relaxed">
              <strong className="text-on-surface">Keep your wallet topped up!</strong> If your balance falls below ₹199, your profile will be temporarily hidden from new homeowners in your area.
            </p>
          </div>

        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <Link 
          href="/pro/wallet/topup"
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
        >
          Top-up Wallet Now
        </Link>
      </div>
    </div>
  );
}
