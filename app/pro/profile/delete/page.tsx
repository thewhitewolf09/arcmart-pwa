'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Trash2, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function DeleteAccount() {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);
  const [deleted, setDeleted] = useState(false);

  if (deleted) {
    return (
      <div className="flex-1 flex flex-col min-h-screen bg-surface justify-center p-5">
        <div className="bg-surface border border-outline-variant rounded-3xl p-8 text-center shadow-xl">
          <div className="w-20 h-20 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-error" />
          </div>
          <h1 className="text-2xl font-black text-on-surface mb-2">Account Deleted</h1>
          <p className="text-sm text-on-surface-variant mb-8">
            Your ArcMart Pro account and all associated data have been permanently deleted.
          </p>
          <button 
            onClick={() => router.push('/')}
            className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Delete Account</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32">
        <div className="flex flex-col items-center justify-center mb-8 pt-4 text-center">
          <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mb-4">
            <Trash2 className="w-8 h-8 text-error" />
          </div>
          <h2 className="text-xl font-black text-on-surface mb-2">Are you sure?</h2>
          <p className="text-sm text-on-surface-variant px-4">
            Deleting your account is permanent. This action cannot be undone.
          </p>
        </div>

        <div className="bg-surface-variant/50 border border-outline-variant rounded-2xl p-5 mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-error flex items-center mb-3">
            <AlertTriangle className="w-4 h-4 mr-2" /> What you will lose
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start text-sm font-bold text-on-surface">
              <span className="text-error mr-2">•</span> 
              <span>All your profile data, reviews, and portfolio images.</span>
            </li>
            <li className="flex items-start text-sm font-bold text-on-surface">
              <span className="text-error mr-2">•</span> 
              <span>Your remaining wallet balance (₹147) will be forfeited.</span>
            </li>
            <li className="flex items-start text-sm font-bold text-on-surface">
              <span className="text-error mr-2">•</span> 
              <span>Your verified Aadhaar badge and achievements.</span>
            </li>
          </ul>
        </div>

        <label className="flex items-start p-4 border border-outline-variant rounded-xl cursor-pointer hover:bg-surface-variant transition">
          <input 
            type="checkbox" 
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="w-5 h-5 text-error focus:ring-error border-outline-variant mr-3 mt-0.5 rounded" 
          />
          <span className="text-sm font-bold text-on-surface leading-relaxed">
            I understand that my account and all data will be permanently deleted.
          </span>
        </label>

      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          disabled={!confirmed}
          onClick={() => setDeleted(true)}
          className="w-full py-4 bg-error text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-error/30 hover:bg-error/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Trash2 className="w-5 h-5 mr-2" /> Delete My Account
        </button>
      </div>
    </div>
  );
}
