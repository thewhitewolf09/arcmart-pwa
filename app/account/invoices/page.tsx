'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Download, FileText, Search } from 'lucide-react';

export default function Invoices() {
  const router = useRouter();

  const invoices = [
    { id: 'INV-2026-1049', date: 'Oct 01, 2026', amount: '₹4,999', desc: 'Pro Plan Subscription (Oct)' },
    { id: 'INV-2026-0982', date: 'Sep 01, 2026', amount: '₹4,999', desc: 'Pro Plan Subscription (Sep)' },
    { id: 'INV-2026-0915', date: 'Aug 15, 2026', amount: '₹12,000', desc: 'Featured Listing: Sector 150' },
    { id: 'INV-2026-0890', date: 'Aug 01, 2026', amount: '₹4,999', desc: 'Pro Plan Subscription (Aug)' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">Tax Invoices</span>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-6">
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search by Invoice ID or Month..." 
            className="w-full bg-surface-variant border border-outline-variant rounded-xl py-3 pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">2026 Invoices</h3>
          
          <div className="space-y-3">
            {invoices.map((inv) => (
              <div key={inv.id} className="glass-card border border-outline-variant rounded-2xl p-4 flex flex-col shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-on-surface">{inv.desc}</h4>
                      <p className="text-[10px] text-on-surface-variant font-semibold mt-0.5">{inv.id} • {inv.date}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-outline-variant/50">
                  <span className="font-black text-on-surface">{inv.amount}</span>
                  <button className="flex items-center text-xs font-bold text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg transition">
                    <Download className="w-4 h-4 mr-1.5" /> Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
