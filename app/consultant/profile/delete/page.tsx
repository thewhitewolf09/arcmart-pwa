'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, AlertTriangle, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function ConsultantDeleteAccount() {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">Delete Account</span>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-6">
        
        <div className="bg-error/10 border border-error/20 rounded-2xl p-5 text-center">
          <div className="w-16 h-16 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-error" />
          </div>
          <h2 className="text-xl font-black text-error mb-2">Warning: Permanent Action</h2>
          <p className="text-sm text-error/80 leading-relaxed max-w-[260px] mx-auto">
            Deleting your account will permanently erase all your data. This action cannot be undone.
          </p>
        </div>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">What happens when you delete?</h3>
          <ul className="space-y-3">
            {[
              'All your active property listings will be permanently removed.',
              'Your wallet balance (₹398) and remaining leads will be forfeited.',
              'Your verified consultant badge and RERA details will be deleted.',
              'You will lose access to all past leads and chat history.'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start bg-surface border border-outline-variant rounded-xl p-3">
                <div className="w-2 h-2 rounded-full bg-error mt-1.5 mr-3 shrink-0"></div>
                <p className="text-xs text-on-surface font-medium leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <label className="flex items-start glass-card border border-outline-variant rounded-xl p-4 cursor-pointer hover:border-error/50 transition">
          <input 
            type="checkbox" 
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="mt-1 w-5 h-5 text-error border-outline-variant rounded focus:ring-error"
          />
          <div className="ml-3">
            <p className="text-sm font-bold text-on-surface">I understand the consequences</p>
            <p className="text-xs text-on-surface-variant mt-1">I want to permanently delete my ArcMart consultant account and forfeit my wallet balance.</p>
          </div>
        </label>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30 space-y-3">
        <button 
          disabled={!confirmed}
          className="w-full py-4 bg-error text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-error/90 transition disabled:opacity-50 disabled:shadow-none"
        >
          <Trash2 className="w-5 h-5 mr-2" /> Delete Account Permanently
        </button>
        <button 
          onClick={() => router.back()}
          className="w-full py-4 bg-surface border-2 border-outline-variant text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-surface-variant transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
