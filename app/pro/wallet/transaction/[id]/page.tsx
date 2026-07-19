'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Copy, MessageSquare, Download, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function TransactionDetail({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface">Transaction Details</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-6">
        
        {/* Main Receipt Card */}
        <div className="bg-surface border border-outline-variant rounded-3xl p-6 text-center shadow-lg relative overflow-hidden">
          
          <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <ArrowUpRight className="w-8 h-8 text-error" />
          </div>
          
          <h2 className="text-3xl font-black text-on-surface mb-1">-₹199</h2>
          <p className="text-sm font-bold text-success mb-6">Payment Successful</p>
          
          <div className="space-y-4 text-left">
            <div className="flex justify-between items-center pb-4 border-b border-outline-variant/50">
              <span className="text-xs font-semibold text-on-surface-variant">Transaction ID</span>
              <div className="flex items-center">
                <span className="text-sm font-bold text-on-surface mr-2">{params.id || 'TXN-849201'}</span>
                <Copy className="w-4 h-4 text-primary cursor-pointer" />
              </div>
            </div>
            
            <div className="flex justify-between items-center pb-4 border-b border-outline-variant/50">
              <span className="text-xs font-semibold text-on-surface-variant">Date & Time</span>
              <span className="text-sm font-bold text-on-surface">Oct 19, 2026, 2:30 PM</span>
            </div>

            <div className="flex justify-between items-center pb-4 border-b border-outline-variant/50">
              <span className="text-xs font-semibold text-on-surface-variant">Type</span>
              <span className="text-sm font-bold text-on-surface">Lead Fee Deduction</span>
            </div>

            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-on-surface-variant">Paid For</span>
              <div className="text-right">
                <p className="text-sm font-bold text-on-surface mb-1">Rahul Sharma</p>
                <Link href="/pro/leads/L-992" className="text-xs font-bold text-primary hover:underline flex items-center justify-end">
                  View Lead <ArrowUpRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button className="w-full py-4 bg-surface-variant text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-outline-variant transition">
            <Download className="w-5 h-5 mr-2" /> Download Receipt
          </button>
          
          <button className="w-full py-4 border border-outline-variant text-on-surface-variant font-bold rounded-xl flex items-center justify-center hover:bg-surface-variant transition">
            <AlertTriangle className="w-5 h-5 mr-2" /> Report Issue / Request Refund
          </button>
        </div>

      </div>
    </div>
  );
}
