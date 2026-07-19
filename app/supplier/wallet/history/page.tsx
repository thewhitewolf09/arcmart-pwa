'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, ArrowDownRight, RefreshCcw, Download, Wallet, CreditCard, Building2, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function SupplierBillingHistory() {
  const router = useRouter();
  const [filter, setFilter] = useState<'all' | 'subscription' | 'featured' | 'lead'>('all');

  const transactions = [
    { id: 'TXN-701923', type: 'subscription', amount: 4999, desc: 'Pro Plan Subscription (Oct)', date: 'Oct 01, 10:00 AM', status: 'Success', method: 'Card' },
    { id: 'TXN-701922', type: 'featured', amount: 12000, desc: 'Featured Listing (Sector 150)', date: 'Sep 15, 11:30 AM', status: 'Success', method: 'Netbanking' },
    { id: 'TXN-701921', type: 'lead', amount: 199, desc: 'Lead Fee Deduction', date: 'Sep 12, 4:15 PM', status: 'Success', method: 'Wallet' },
    { id: 'TXN-701920', type: 'subscription', amount: 4999, desc: 'Pro Plan Subscription (Sep)', date: 'Sep 01, 10:00 AM', status: 'Success', method: 'Card' },
    { id: 'TXN-701915', type: 'subscription', amount: 4999, desc: 'Pro Plan Subscription (Aug)', date: 'Aug 01, 10:05 AM', status: 'Failed', method: 'Card' },
  ];

  const filtered = filter === 'all' ? transactions : transactions.filter(t => t.type === filter);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface">Payment History</span>
        </div>
        <Link href="/account/invoices" className="p-2 rounded-full hover:bg-surface-variant transition text-primary">
          <Download className="w-5 h-5" />
        </Link>
      </div>

      <div className="flex-1 p-4 pb-32 space-y-6">
        
        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-2">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${filter === 'all' ? 'bg-[#0d1c32] text-white' : 'bg-surface-variant text-on-surface-variant'}`}
          >
            All Payments
          </button>
          <button 
            onClick={() => setFilter('subscription')}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${filter === 'subscription' ? 'bg-[#3399cc] text-white' : 'bg-surface-variant text-on-surface-variant'}`}
          >
            Subscriptions
          </button>
          <button 
            onClick={() => setFilter('featured')}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${filter === 'featured' ? 'bg-warning-dark text-white' : 'bg-surface-variant text-on-surface-variant'}`}
          >
            Featured Placements
          </button>
          <button 
            onClick={() => setFilter('lead')}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${filter === 'lead' ? 'bg-error text-white' : 'bg-surface-variant text-on-surface-variant'}`}
          >
            Lead Fees
          </button>
        </div>

        {/* Ledger */}
        <div className="space-y-3">
          {filtered.map((txn, idx) => (
            <div key={idx} className="glass-card border border-outline-variant rounded-2xl p-4 hover:bg-surface-variant transition cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 shrink-0 ${
                    txn.status === 'Failed' ? 'bg-surface-dim text-on-surface-variant' : 
                    txn.type === 'featured' ? 'bg-warning/20 text-warning-dark' : 
                    txn.type === 'subscription' ? 'bg-[#3399cc]/10 text-[#3399cc]' : 'bg-error/10 text-error'
                  }`}>
                    {txn.status === 'Failed' ? <RefreshCcw className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
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
                    txn.status === 'Failed' ? 'text-on-surface-variant' : 'text-on-surface'
                  }`}>
                    -₹{txn.amount.toLocaleString()}
                  </p>
                  {txn.status === 'Failed' && <p className="text-[10px] text-error font-bold mt-1">FAILED</p>}
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t border-outline-variant/50">
                <div className="flex items-center text-xs font-semibold text-on-surface-variant">
                  {txn.method === 'Card' && <CreditCard className="w-3 h-3 mr-1" />}
                  {txn.method === 'Netbanking' && <Building2 className="w-3 h-3 mr-1" />}
                  {txn.method === 'Wallet' && <Wallet className="w-3 h-3 mr-1" />}
                  {txn.method}
                </div>
                <span className="text-xs font-bold text-primary hover:underline">View Receipt</span>
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
