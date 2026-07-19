'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Building, Receipt, FileText, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function BillingAddress() {
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">Billing Details</span>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-6">
        
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 flex items-start">
          <Receipt className="w-6 h-6 text-primary mr-3 shrink-0" />
          <div>
            <h2 className="text-sm font-bold text-on-surface mb-1">GST & Invoicing</h2>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Add your GST and billing details here to receive B2B tax invoices for all platform fees, lead charges, and subscriptions.
            </p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Business Name</label>
            <div className="relative">
              <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
              <input 
                type="text" 
                defaultValue="Sharma Building Materials"
                placeholder="Enter registered business name" 
                required
                className="w-full bg-surface-variant border border-outline-variant rounded-xl py-3 pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">GSTIN (Optional)</label>
            <div className="relative">
              <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
              <input 
                type="text" 
                defaultValue="07AAAAA0000A1Z5"
                placeholder="Enter 15-digit GST Number" 
                className="w-full bg-surface-variant border border-outline-variant rounded-xl py-3 pl-12 pr-4 text-sm font-medium uppercase focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Billing Address</label>
            <textarea 
              defaultValue="Shop No 14, Sector 18 Market, Noida, UP, 201301"
              placeholder="Enter complete billing address" 
              required
              rows={3}
              className="w-full bg-surface-variant border border-outline-variant rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 mt-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
          >
            {saved ? <><CheckCircle2 className="w-5 h-5 mr-2" /> Saved Successfully</> : 'Save Billing Details'}
          </button>
        </form>

        <div className="pt-6 border-t border-outline-variant/50 flex justify-center">
          <Link href="/account/invoices" className="text-sm font-bold text-primary hover:underline">
            View Past Invoices
          </Link>
        </div>

      </div>
    </div>
  );
}
