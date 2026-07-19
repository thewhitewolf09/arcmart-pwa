'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bell, Wallet, ChevronRight, TrendingUp, Key, MessageSquare, AlertCircle } from 'lucide-react';
import { Footer } from '../../components/ui/Footer';

export default function ConsultantDashboard() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface pb-24">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg px-5 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-on-surface">Hi, Rohan</h1>
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Real Estate Consultant</p>
        </div>
        <div className="flex items-center space-x-3">
          <Link href="/consultant/wallet" className="flex items-center bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
            <Wallet className="w-4 h-4 text-primary mr-1.5" />
            <span className="text-sm font-bold text-primary">₹398</span>
          </Link>
          <Link href="/consultant/notifications" className="relative p-2 rounded-full hover:bg-surface-variant transition">
            <Bell className="w-6 h-6 text-on-surface" />
            <div className="absolute top-1.5 right-2 w-2.5 h-2.5 bg-error rounded-full border-2 border-surface"></div>
          </Link>
        </div>
      </div>

      <div className="px-5 mt-2 space-y-6">
        {/* Profile Completeness (CON-01) */}
        <div className="bg-primary/5 rounded-3xl p-5 border border-primary/10">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h2 className="text-sm font-black text-on-surface mb-1">Profile Completeness</h2>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Missing RERA ID</p>
            </div>
            <span className="text-lg font-black text-primary">85%</span>
          </div>
          <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
          </div>
          <Link href="/consultant/profile/rera" className="w-full py-2.5 bg-surface border border-outline-variant text-primary text-xs font-bold rounded-xl flex items-center justify-center hover:bg-primary/5 transition">
            Add RERA Certificate <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Online Status Toggle */}
        <div className="glass-card border border-outline-variant rounded-3xl p-5 flex items-center justify-between shadow-sm">
          <div>
            <h2 className="text-base font-black text-on-surface mb-1">Available for Leads</h2>
            <p className="text-xs text-on-surface-variant font-semibold">You are currently visible to buyers</p>
          </div>
          <button 
            onClick={() => setIsOnline(!isOnline)}
            className={`w-14 h-8 rounded-full relative transition-colors ${
              isOnline ? 'bg-success' : 'bg-outline-variant'
            }`}
          >
            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform shadow-sm ${
              isOnline ? 'left-7' : 'left-1'
            }`}></div>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card border border-outline-variant rounded-3xl p-4 shadow-sm">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <Key className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl font-black text-on-surface mb-1">12</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Active Listings</p>
          </div>
          
          <div className="glass-card border border-outline-variant rounded-3xl p-4 shadow-sm">
            <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <p className="text-3xl font-black text-on-surface mb-1">28</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Leads This Month</p>
          </div>
        </div>

        {/* Recent Leads */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-black text-on-surface uppercase tracking-widest">Recent Leads</h3>
            <Link href="/consultant/leads" className="text-xs font-bold text-primary flex items-center">
              View All <ChevronRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {[1, 2].map((i) => (
              <Link key={i} href={`/consultant/leads/L-900${i}`} className="glass-card border border-outline-variant rounded-2xl p-4 flex flex-col hover:bg-surface-variant/50 transition">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-sm text-on-surface">Amit Kumar</h4>
                    <p className="text-xs text-on-surface-variant font-semibold">Looking for 3BHK in Noida Ext.</p>
                  </div>
                  {i === 1 && (
                    <span className="bg-error text-white text-[10px] font-black uppercase px-2 py-1 rounded-md">New</span>
                  )}
                </div>
                <div className="flex items-center justify-between mt-2 pt-3 border-t border-outline-variant/30">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Budget: ₹80L - 1Cr</span>
                  <span className="text-xs font-semibold text-on-surface-variant flex items-center">
                    <MessageSquare className="w-3 h-3 mr-1" /> WhatsApp
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
