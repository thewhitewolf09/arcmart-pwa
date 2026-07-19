'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Wallet, ArrowDownLeft, ArrowUpRight, Zap, AlertCircle } from 'lucide-react';
import { Footer } from '../../../components/ui/Footer';

export default function ProWallet() {
  const router = useRouter();

  const transactions = [
    { id: 1, type: 'credit', title: 'Wallet Top-up', date: '19 Oct 2026', amount: '+₹490', leads: '+10 Leads' },
    { id: 2, type: 'debit', title: 'Accepted Lead: Rahul S.', date: '18 Oct 2026', amount: '-₹49' },
    { id: 3, type: 'debit', title: 'Accepted Lead: Neha M.', date: '15 Oct 2026', amount: '-₹49' },
    { id: 4, type: 'free', title: 'Free Lead Used', date: '10 Oct 2026', amount: 'Free' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">My Wallet</span>
        </div>
        <Link href="/system/lead-fee-info" className="p-2 rounded-full hover:bg-surface-variant text-on-surface-variant transition">
          <AlertCircle className="w-5 h-5" />
        </Link>
      </div>

      <div className="flex-1 p-5 pb-24 space-y-6">
        
        {/* Balance Card */}
        <div className="bg-primary pt-8 pb-6 px-6 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Wallet className="w-32 h-32 text-white transform rotate-12 translate-x-4 -translate-y-4" />
          </div>
          
          <div className="relative z-10">
            <p className="text-[10px] text-white/70 uppercase tracking-widest font-bold mb-1">Available Balance</p>
            <h2 className="text-4xl font-black text-white mb-2">₹147</h2>
            <div className="flex items-center text-white/90 text-sm font-semibold">
              <Zap className="w-4 h-4 mr-1 text-yellow-400" /> Equals 3 Leads
            </div>

            <Link href="/pro/wallet/topup" className="mt-6 w-full bg-white text-primary font-bold py-3.5 rounded-xl flex items-center justify-center shadow-md hover:bg-surface transition">
              <Wallet className="w-5 h-5 mr-2" /> Top-up Wallet
            </Link>
          </div>
        </div>

        {/* Free Leads Tracker */}
        <div className="glass-card border border-outline-variant rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="font-bold text-sm text-on-surface">Welcome Offer</h3>
            <p className="text-[10px] text-on-surface-variant font-semibold mt-1">First 5 leads are free</p>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-black text-success">0</span>
            <span className="text-sm font-bold text-on-surface-variant ml-1">/ 5 Left</span>
          </div>
        </div>

        {/* Transaction History */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Recent Transactions</h3>
            <Link href="/pro/wallet/history" className="text-xs font-bold text-primary hover:underline">View All</Link>
          </div>
          <div className="space-y-3">
            {transactions.map((tx) => (
              <div key={tx.id} className="glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    tx.type === 'credit' ? 'bg-success/10 text-success' : tx.type === 'free' ? 'bg-secondary/10 text-secondary' : 'bg-error/10 text-error'
                  }`}>
                    {tx.type === 'credit' ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{tx.title}</p>
                    <p className="text-[10px] text-on-surface-variant font-semibold">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`font-black ${
                    tx.type === 'credit' ? 'text-success' : tx.type === 'free' ? 'text-secondary' : 'text-on-surface'
                  }`}>
                    {tx.amount}
                  </span>
                  {tx.leads && <p className="text-[10px] text-success font-bold">{tx.leads}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      
      <Footer />
    </div>
  );
}
