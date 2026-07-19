'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Crown, Calendar, CreditCard, AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ManageSubscription() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">Manage Subscription</span>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-6">
        
        {/* Active Plan Card */}
        <div className="bg-primary pt-6 pb-6 px-6 rounded-3xl shadow-lg relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Crown className="w-32 h-32 text-white transform rotate-12 translate-x-4 -translate-y-4" />
          </div>
          
          <div className="relative z-10">
            <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Active Plan
            </div>
            <h2 className="text-3xl font-black mb-1">Pro Plan</h2>
            <p className="text-white/80 font-medium">₹4,999 / month</p>
          </div>
        </div>

        {/* Subscription Details */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Subscription Details</h3>
          
          <div className="glass-card border border-outline-variant rounded-2xl p-4 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-on-surface-variant mr-3" />
                <span className="text-sm font-bold text-on-surface">Next Billing Date</span>
              </div>
              <span className="text-sm font-bold text-primary">12 Nov 2026</span>
            </div>
            
            <hr className="border-outline-variant" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CreditCard className="w-5 h-5 text-on-surface-variant mr-3" />
                <span className="text-sm font-bold text-on-surface">Payment Method</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-on-surface-variant">•••• 4242</span>
                <button className="ml-3 text-xs font-bold text-primary hover:underline">Edit</button>
              </div>
            </div>
          </div>
        </section>

        {/* Action Cards */}
        <section className="space-y-3">
          <Link href="/supplier/subscription/upgrade" className="glass-card border border-primary/30 bg-primary/5 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:bg-primary/10 transition">
            <div>
              <h4 className="font-bold text-sm text-primary">Upgrade to Elite</h4>
              <p className="text-xs text-on-surface-variant mt-0.5">Get 5x more visibility and priority support</p>
            </div>
            <ArrowRight className="w-5 h-5 text-primary" />
          </Link>

          <Link href="/supplier/subscription/cancel" className="glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between shadow-sm hover:bg-surface-variant transition">
            <div>
              <h4 className="font-bold text-sm text-on-surface">Cancel Subscription</h4>
              <p className="text-xs text-on-surface-variant mt-0.5">Pause your listing at the end of billing cycle</p>
            </div>
            <ArrowRight className="w-5 h-5 text-on-surface-variant" />
          </Link>
        </section>

      </div>
    </div>
  );
}
