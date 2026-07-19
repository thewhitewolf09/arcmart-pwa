'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, ArrowDownRight, RefreshCcw, Download, Wallet } from 'lucide-react';

export default function ConsultantBillingHistory() {
  const router = useRouter();
  const [filter, setFilter] = useState<'all' | 'topup' | 'deduction'>('all');

  const transactions = [
    { id: 'TXN-902111', type: 'deduction', amount: 199, desc: 'Lead Fee: Property Inquiry', date: 'Today, 4:15 PM', status: 'Success' },
    { id: 'TXN-902110', type: 'deduction', amount: 199, desc: 'Lead Fee: Buyer Match', date: 'Yesterday, 2:30 PM', status: 'Success' },
    { id: 'TXN-902105', type: 'topup', amount: 995, desc: 'Wallet Top-up (5 Leads)', date: 'Oct 14, 09:00 AM', status: 'Success' },
  ];

  const filtered = filter === 'all' ? transactions : transactions.filter(t => t.type === filter);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface">Billing History</span>
        </div>
        <button className="p-2 rounded-full hover:bg-surface-variant transition">
          <Download className="w-5 h-5 text-on-surface" />
        </button>
      </div>

      <div className="flex-1 p-4 pb-32 space-y-6">
        
        {/* Summary */}
        <div className="bg-warning/10 border border-warning/30 rounded-3xl p-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-warning-dark uppercase tracking-widest mb-1">Available Balance</p>
            <h2 className="text-3xl font-black text-on-surface">₹597</h2>
          </div>
          <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center">
            <Wallet className="w-6 h-6 text-warning-dark" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex space-x-2">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${filter === 'all' ? 'bg-warning-dark text-white' : 'bg-surface-variant text-on-surface-variant'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('topup')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${filter === 'topup' ? 'bg-success text-white' : 'bg-surface-variant text-on-surface-variant'}`}
          >
            Top-ups
          </button>
          <button 
            onClick={() => setFilter('deduction')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${filter === 'deduction' ? 'bg-error text-white' : 'bg-surface-variant text-on-surface-variant'}`}
          >
            Deductions
          </button>
        </div>

        {/* Ledger */}
        <div className="space-y-3">
          {filtered.map((txn, idx) => (
            <div key={idx} className="glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between hover:bg-surface-variant transition cursor-pointer">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 shrink-0 ${
                  txn.status === 'Failed' ? 'bg-surface-dim' : 
                  txn.type === 'topup' ? 'bg-success/10' : 'bg-error/10'
                }`}>
                  {txn.status === 'Failed' ? <RefreshCcw className="w-4 h-4 text-on-surface-variant" /> :
                   txn.type === 'topup' ? <ArrowDownRight className="w-5 h-5 text-success" /> : <ArrowUpRight className="w-5 h-5 text-error" />}
                </div>
                <div>
                  <p className={`text-sm font-bold ${txn.status === 'Failed' ? 'text-on-surface-variant line-through' : 'text-on-surface'}`}>
                    {txn.desc}
                  </p>
                  <p className="text-[10px] text-on-surface-variant font-medium mt-0.5">{txn.date} • {txn.id}</p>
                </div>
              </div>
              <div className="text-right shrink-0 ml-2">
                <p className={`text-sm font-black ${
                  txn.status === 'Failed' ? 'text-on-surface-variant' :
                  txn.type === 'topup' ? 'text-success' : 'text-on-surface'
                }`}>
                  {txn.type === 'topup' ? '+' : '-'}₹{txn.amount}
                </p>
                {txn.status === 'Failed' && <p className="text-[10px] text-error font-bold mt-1">FAILED</p>}
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-10 text-on-surface-variant">
              <p className="text-sm font-bold">No transactions found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
