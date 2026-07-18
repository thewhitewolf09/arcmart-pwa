'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, AlertOctagon, Trash2 } from 'lucide-react';
import { useMockStore } from '../../../../store/mockStore';

export default function DeleteAccount() {
  const router = useRouter();
  const { logout } = useMockStore();
  const [confirmText, setConfirmText] = useState('');

  const handleDelete = () => {
    if (confirmText === 'DELETE') {
      logout();
      router.push('/');
    }
  };

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

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        <div className="flex flex-col items-center text-center mb-8 pt-4">
          <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mb-4 border border-error/20">
            <AlertOctagon className="w-8 h-8 text-error" />
          </div>
          <h1 className="text-xl font-black text-on-surface mb-2">Are you sure?</h1>
          <p className="text-sm text-on-surface-variant leading-relaxed px-4">
            Deleting your account is permanent and cannot be undone. You will lose access to all your leads, reviews, and profile data.
          </p>
        </div>

        <div className="bg-error-container/30 border border-error/20 rounded-2xl p-5 mb-8">
          <h3 className="text-sm font-bold text-error mb-3">What happens when you delete:</h3>
          <ul className="text-xs text-error-dark space-y-2 list-disc pl-4">
            <li>Your public profile will be immediately removed from ArcMart.</li>
            <li>All active subscription plans will be cancelled without refund.</li>
            <li>You will lose all earned reviews and Verification badges.</li>
            <li>Chat history with homeowners will be deleted.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">
            Type "DELETE" to confirm
          </label>
          <input 
            type="text" 
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder="DELETE"
            className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-error focus:ring-1 focus:ring-error transition"
          />
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={handleDelete}
          disabled={confirmText !== 'DELETE'}
          className="w-full py-4 bg-error text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-error/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Trash2 className="w-5 h-5 mr-2" /> Permanently Delete Account
        </button>
      </div>
    </div>
  );
}
