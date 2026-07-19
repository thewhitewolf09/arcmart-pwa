'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CancelSubscription() {
  const router = useRouter();
  const [reason, setReason] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const reasons = [
    "It's too expensive",
    "I'm not getting enough leads",
    "I'm temporarily closing my business",
    "I found a better alternative",
    "Other"
  ];

  if (step === 2) {
    return (
      <div className="flex-1 flex flex-col min-h-screen bg-surface">
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6 pb-24">
          <div className="w-20 h-20 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-warning/20">
            <AlertTriangle className="w-10 h-10 text-warning-dark" />
          </div>
          
          <h1 className="text-2xl font-black text-on-surface mb-2">Are you sure?</h1>
          <p className="text-sm text-on-surface-variant mb-6 leading-relaxed max-w-[280px]">
            If you cancel, your listing will be paused on <span className="font-bold text-on-surface">12 Nov 2026</span>. You will lose access to all Pro features and incoming leads.
          </p>

          <div className="w-full space-y-3 mt-4">
            <button 
              onClick={() => {
                // Simulate API call
                router.push('/supplier/subscription/manage');
              }}
              className="w-full py-4 bg-error text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-error/90 transition"
            >
              Confirm Cancellation
            </button>
            <button 
              onClick={() => router.back()}
              className="w-full py-4 bg-surface border border-outline-variant text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-surface-variant transition"
            >
              Keep My Subscription
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">Cancel Subscription</span>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-6">
        <h2 className="text-xl font-black text-on-surface mb-2">We're sorry to see you go.</h2>
        <p className="text-sm text-on-surface-variant mb-6">
          Please let us know why you are cancelling your subscription.
        </p>

        <div className="space-y-3">
          {reasons.map((r, idx) => (
            <label 
              key={idx}
              className={`flex items-center p-4 rounded-xl border cursor-pointer transition-colors ${
                reason === r ? 'border-primary bg-primary/5' : 'border-outline-variant bg-surface hover:bg-surface-variant'
              }`}
            >
              <input 
                type="radio" 
                name="cancelReason" 
                value={r}
                checked={reason === r}
                onChange={() => setReason(r)}
                className="w-5 h-5 text-primary border-outline-variant focus:ring-primary mr-3"
              />
              <span className="text-sm font-bold text-on-surface">{r}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          disabled={!reason}
          onClick={() => setStep(2)}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:shadow-none"
        >
          Continue to Cancel <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}
