'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Crown, Zap, TrendingUp, CreditCard, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function SubscriptionDashboard() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Subscription & Billing</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-12">
        
        {/* Active Plan Card */}
        <div className="glass-card rounded-3xl p-6 border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent shadow-sm mb-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center mb-1">
                <Crown className="w-5 h-5 text-primary mr-2" />
                <h2 className="text-xl font-black text-on-surface">Pro Plan</h2>
              </div>
              <p className="text-sm text-on-surface-variant font-semibold">₹4,999 / month</p>
            </div>
            <div className="bg-success-container text-success-dark px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-success/20 flex items-center shadow-sm">
              <CheckCircle2 className="w-3 h-3 mr-1" /> Active
            </div>
          </div>

          <div className="bg-surface/50 rounded-xl p-4 border border-outline-variant/50 backdrop-blur-sm">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-on-surface-variant font-semibold">Renews on</span>
              <span className="font-bold text-on-surface">Oct 31, 2026</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-on-surface-variant font-semibold">Payment Method</span>
              <span className="font-bold text-on-surface">UPI (ends in @okicici)</span>
            </div>
          </div>
        </div>

        {/* Usage Stats */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Current Usage</h3>
          
          <div className="glass-card rounded-2xl border border-outline-variant p-5 shadow-sm space-y-5">
            {/* Leads Usage */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h4 className="font-bold text-sm text-on-surface">Verified Leads</h4>
                  <p className="text-[10px] text-on-surface-variant">Consumed this month</p>
                </div>
                <span className="text-sm font-black text-on-surface">45 <span className="text-on-surface-variant font-semibold">/ 50</span></span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-2.5 overflow-hidden border border-outline-variant/50">
                <div className="bg-warning h-2.5 rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
              </div>
              <p className="text-[10px] text-warning-dark mt-2 font-semibold">Almost reached limit. Upgrade to get unlimited leads.</p>
            </div>

            <hr className="border-outline-variant/50" />

            {/* Catalogue Size */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h4 className="font-bold text-sm text-on-surface">Catalogue Size</h4>
                  <p className="text-[10px] text-on-surface-variant">Products listed</p>
                </div>
                <span className="text-sm font-black text-on-surface">150 <span className="text-on-surface-variant font-semibold">/ 500</span></span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-2.5 overflow-hidden border border-outline-variant/50">
                <div className="bg-primary h-2.5 rounded-full transition-all duration-500" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Upgrades & Add-ons */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Boost Your Business</h3>
          
          <div className="space-y-3">
            <Link href="/supplier/subscription/upgrade" className="glass-card rounded-xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition group">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Upgrade Plan</p>
                  <p className="text-xs text-on-surface-variant">Get unlimited leads & analytics</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-outline" />
            </Link>

            <Link href="/supplier/subscription/featured" className="glass-card rounded-xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition group">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5 text-secondary-dark" />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Featured Listing</p>
                  <p className="text-xs text-on-surface-variant">Rank #1 in your category</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-outline" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
