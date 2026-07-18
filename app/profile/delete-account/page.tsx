'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function DeleteAccountPage() {
  const router = useRouter();
  const [confirmationText, setConfirmationText] = useState('');

  const isConfirmed = confirmationText === 'DELETE';

  return (
    <div className="min-h-screen bg-background flex flex-col pb-safe">
      <header className="px-4 py-4 bg-surface border-b border-outline-variant/30 sticky top-0 z-20 flex items-center gap-3">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -ml-2"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-headline-sm font-bold text-on-surface">Delete Account</h1>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6 flex flex-col">
        
        <div className="w-16 h-16 bg-[#BA1A1A]/10 rounded-full flex items-center justify-center mb-6 self-center">
          <span className="material-symbols-outlined text-[#BA1A1A] text-[32px]">warning</span>
        </div>

        <h2 className="font-headline-sm font-bold text-on-surface mb-4 text-center">Are you sure?</h2>
        
        <p className="font-body-lg text-on-surface-variant mb-6 text-center leading-relaxed">
          Deleting your account is a permanent action. All your data will be immediately and irrevocably erased.
        </p>

        <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-4 shadow-sm mb-8">
          <h3 className="font-label-md font-bold text-on-surface mb-3 uppercase tracking-wider">What you'll lose</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">close</span>
              <span className="font-body-md text-on-surface-variant leading-tight">Your entire connection history and active leads.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">close</span>
              <span className="font-body-md text-on-surface-variant leading-tight">All saved professionals and suppliers.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">close</span>
              <span className="font-body-md text-on-surface-variant leading-tight">Any reviews or ratings you have submitted.</span>
            </li>
          </ul>
        </div>

        <div className="flex-1"></div>

        <div className="mt-auto">
          <label className="block font-label-md font-bold text-on-surface mb-2">
            Type <span className="text-error font-black">DELETE</span> to confirm
          </label>
          <input 
            type="text" 
            value={confirmationText}
            onChange={(e) => setConfirmationText(e.target.value)}
            placeholder="DELETE"
            className="w-full bg-surface-container-lowest border border-error/50 rounded-xl p-4 font-body-lg text-on-surface focus:outline-none focus:border-error focus:ring-1 focus:ring-error transition-all mb-4 text-center tracking-widest font-mono"
          />

          <button 
            disabled={!isConfirmed}
            className={`w-full py-4 rounded-full font-label-lg font-bold shadow-sm transition-all ${
              isConfirmed 
                ? 'bg-[#BA1A1A] text-white hover:bg-[#93000A] active:scale-95' 
                : 'bg-surface-container-highest text-on-surface-variant opacity-50 cursor-not-allowed'
            }`}
          >
            Permanently Delete Account
          </button>
        </div>
      </main>
    </div>
  );
}
