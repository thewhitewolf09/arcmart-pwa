'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

export default function DeleteAccountSuccess() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="flex-1 p-6 flex flex-col items-center justify-center text-center pb-safe">
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-6 relative"
        >
          <CheckCircle2 className="w-12 h-12 text-on-surface-variant" />
        </motion.div>

        <h1 className="text-2xl font-black text-on-surface mb-2">Account Deleted</h1>
        <p className="text-sm text-on-surface-variant font-medium max-w-[280px] leading-relaxed mb-8">
          Your account deletion request has been processed successfully.
        </p>

        <div className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-5 mb-8 shadow-sm flex gap-3 text-left">
          <ShieldAlert className="w-6 h-6 text-warning-dark shrink-0" />
          <div className="flex-1">
            <h3 className="font-bold text-sm text-on-surface mb-1">What happens next?</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              In compliance with the DPDP Act 2023, your personal data will be completely erased from our active servers within 30 days. You will not be able to log in to this account again.
            </p>
          </div>
        </div>

        <button 
          onClick={() => router.push('/')}
          className="w-full h-14 bg-primary text-white rounded-full font-bold shadow-md shadow-primary/20 flex items-center justify-center mb-4 transition active:scale-95"
        >
          Return to Home
        </button>

      </div>
    </div>
  );
}
