'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, FileText, Download, PlusCircle, Receipt } from 'lucide-react';

export default function Invoices() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">GST Invoices</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 mb-8 text-center flex flex-col items-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
            <Receipt className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-primary mb-1">B2B Invoice Generator</h3>
          <p className="text-xs text-on-surface-variant mb-4">
            Generate compliant GST invoices for large orders directly from ArcMart.
          </p>
          <button className="px-5 py-2.5 bg-primary text-on-primary rounded-xl text-xs font-bold shadow-sm shadow-primary/30 flex items-center hover:bg-primary/90 transition">
            <PlusCircle className="w-4 h-4 mr-2" /> Generate New Invoice
          </button>
        </div>

        <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Recent Invoices</h3>

        <div className="space-y-4">
          
          <div className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-surface-variant rounded-xl flex items-center justify-center mr-3 shrink-0">
                <FileText className="w-5 h-5 text-on-surface-variant" />
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">INV-2026-042</p>
                <p className="text-[10px] text-on-surface-variant font-semibold mb-1">To: Anil Builders Pvt Ltd</p>
                <p className="text-xs font-bold text-success-dark">₹45,000</p>
              </div>
            </div>
            <button className="p-2 rounded-full hover:bg-outline-variant text-primary transition">
              <Download className="w-5 h-5" />
            </button>
          </div>

          <div className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-surface-variant rounded-xl flex items-center justify-center mr-3 shrink-0">
                <FileText className="w-5 h-5 text-on-surface-variant" />
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">INV-2026-041</p>
                <p className="text-[10px] text-on-surface-variant font-semibold mb-1">To: RK Constructions</p>
                <p className="text-xs font-bold text-success-dark">₹1,12,500</p>
              </div>
            </div>
            <button className="p-2 rounded-full hover:bg-outline-variant text-primary transition">
              <Download className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
