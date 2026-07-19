'use client';

import React, { useState } from 'react';
import { Wallet, TrendingUp, TrendingDown, ArrowRight, Activity, Calendar } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '../../../components/ui/Footer';

export default function EarningsDashboard() {
  const [viewMode, setViewMode] = useState<'weekly' | 'monthly'>('weekly');

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-primary px-5 pt-8 pb-6 shadow-lg rounded-b-3xl">
        <h1 className="text-xl font-bold text-white mb-6">Earnings Dashboard</h1>
        
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] text-white/70 uppercase tracking-widest font-bold mb-1">Total Earnings (Oct)</p>
            <h2 className="text-4xl font-black text-white leading-none">₹45,200</h2>
          </div>
          <div className="flex items-center text-white bg-white/20 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border border-white/30">
            <TrendingUp className="w-4 h-4 mr-1" /> +12%
          </div>
        </div>
      </div>

      <div className="px-5 pt-6 pb-24">
        
        {/* Toggle (PRO-08, PRO-09) */}
        <div className="bg-surface-variant p-1 rounded-xl flex mb-8">
          <button 
            onClick={() => setViewMode('weekly')}
            className={`flex-1 py-2 text-xs font-bold tracking-wider uppercase rounded-lg transition-all ${
              viewMode === 'weekly' ? 'bg-surface text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Weekly
          </button>
          <button 
            onClick={() => setViewMode('monthly')}
            className={`flex-1 py-2 text-xs font-bold tracking-wider uppercase rounded-lg transition-all ${
              viewMode === 'monthly' ? 'bg-surface text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Monthly
          </button>
        </div>

        {/* View Content */}
        {viewMode === 'weekly' ? (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            {/* Mock Chart Area */}
            <div className="glass-card rounded-3xl p-5 border border-outline-variant shadow-sm h-48 flex items-end justify-between relative overflow-hidden">
              <div className="absolute top-4 left-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest flex items-center">
                <Activity className="w-4 h-4 mr-2" /> This Week
              </div>
              {/* Bars */}
              {[40, 70, 30, 90, 50, 20, 80].map((h, i) => (
                <div key={i} className="w-8 bg-primary/20 rounded-t-md relative group hover:bg-primary/40 transition-colors" style={{ height: `${h}%` }}>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    ₹{h * 100}
                  </div>
                </div>
              ))}
            </div>

            {/* Breakdown */}
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Daily Breakdown</h3>
            <div className="space-y-3">
              {[
                { day: 'Today', date: '14 Oct', amount: '₹4,500', jobs: 2 },
                { day: 'Yesterday', date: '13 Oct', amount: '₹12,000', jobs: 4 },
                { day: 'Wed', date: '12 Oct', amount: '₹2,500', jobs: 1 },
              ].map((row, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-4 border border-outline-variant flex items-center justify-between">
                  <div>
                    <p className="font-bold text-on-surface text-sm">{row.day}</p>
                    <p className="text-[10px] text-on-surface-variant font-semibold">{row.date} • {row.jobs} Jobs</p>
                  </div>
                  <span className="font-black text-primary">{row.amount}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
             {/* Mock Chart Area */}
             <div className="glass-card rounded-3xl p-5 border border-outline-variant shadow-sm h-48 flex items-end justify-between relative overflow-hidden">
              <div className="absolute top-4 left-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest flex items-center">
                <Calendar className="w-4 h-4 mr-2" /> 2026 Overview
              </div>
              {/* Bars */}
              {[30, 45, 60, 55, 80, 95].map((h, i) => (
                <div key={i} className="w-10 bg-secondary/20 rounded-t-md relative group hover:bg-secondary/40 transition-colors" style={{ height: `${h}%` }}>
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    ₹{h * 1000}
                  </div>
                </div>
              ))}
            </div>

            {/* Breakdown */}
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Monthly History</h3>
            <div className="space-y-3">
              {[
                { month: 'October', amount: '₹45,200', jobs: 18, trend: 'up' },
                { month: 'September', amount: '₹38,500', jobs: 15, trend: 'up' },
                { month: 'August', amount: '₹42,000', jobs: 20, trend: 'down' },
              ].map((row, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-4 border border-outline-variant flex items-center justify-between">
                  <div>
                    <p className="font-bold text-on-surface text-sm">{row.month}</p>
                    <p className="text-[10px] text-on-surface-variant font-semibold">{row.jobs} Jobs Completed</p>
                  </div>
                  <div className="text-right">
                    <span className="font-black text-secondary block">{row.amount}</span>
                    {row.trend === 'up' ? (
                      <span className="text-[10px] font-bold text-success flex items-center justify-end mt-0.5"><TrendingUp className="w-3 h-3 mr-1" /> Up</span>
                    ) : (
                      <span className="text-[10px] font-bold text-error flex items-center justify-end mt-0.5"><TrendingDown className="w-3 h-3 mr-1" /> Down</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
}
