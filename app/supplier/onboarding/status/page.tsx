'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Clock, CheckCircle2, XCircle, MessageCircle, AlertTriangle, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';

export default function OnboardingStatus() {
  const searchParams = useSearchParams();
  const state = searchParams.get('state') || 'pending'; // pending | approved | rejected

  if (state === 'approved') {
    return (
      <div className="flex-1 flex flex-col min-h-screen bg-surface">
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-success/20 rounded-full animate-ping"></div>
            <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center relative z-10 border border-success/30">
              <CheckCircle2 className="w-12 h-12 text-success" />
            </div>
          </div>
          <h1 className="text-3xl font-black text-on-surface mb-3 tracking-tight">You're Live!</h1>
          <p className="text-base text-on-surface-variant leading-relaxed mb-8 max-w-xs">
            Your profile has been approved. Homeowners can now see your business on ArcMart.
          </p>
        </div>
        <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant z-30">
          <Link href="/supplier" className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition">
            Go to Dashboard <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  if (state === 'rejected') {
    return (
      <div className="flex-1 flex flex-col min-h-screen bg-surface">
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center border border-error/30 mb-8">
            <XCircle className="w-12 h-12 text-error" />
          </div>
          <h1 className="text-3xl font-black text-on-surface mb-3 tracking-tight">Action Required</h1>
          <p className="text-base text-on-surface-variant leading-relaxed mb-8 max-w-xs">
            We couldn't verify some of the details you provided.
          </p>
          
          <div className="w-full max-w-sm bg-error-container p-5 rounded-2xl border border-error/30 text-left mb-10">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-error mt-0.5 mr-3 shrink-0" />
              <div>
                <h3 className="font-bold text-error text-sm mb-1">GST Name Mismatch</h3>
                <p className="text-xs text-error/80 leading-relaxed">
                  The business name you entered does not match the GST records. Please update the business name or provide a valid GSTIN.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant z-30">
          <Link href="/supplier/onboarding/step-1" className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition">
            Fix & Resubmit
          </Link>
        </div>
      </div>
    );
  }

  // Default: Pending
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent to-primary/20 animate-pulse"></div>
            <Clock className="w-12 h-12 text-primary relative z-10" />
          </div>
        </div>
        <h1 className="text-3xl font-black text-on-surface mb-3 tracking-tight">Under Review</h1>
        <p className="text-base text-on-surface-variant leading-relaxed mb-8 max-w-xs">
          Your profile is being verified by our team. This usually takes less than 24 hours.
        </p>
        
        <div className="w-full max-w-sm glass-card p-5 rounded-2xl border border-outline-variant text-left mb-10">
          <div className="flex items-center text-sm mb-3">
            <MessageCircle className="w-5 h-5 text-success mr-3" />
            <span className="font-bold text-on-surface">We'll notify you on WhatsApp</span>
          </div>
          <p className="text-xs text-on-surface-variant ml-8">
            You will receive a message on your registered number as soon as your profile is approved.
          </p>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant z-30">
        <Link href="/supplier" className="w-full py-4 rounded-xl border border-outline-variant text-on-surface font-bold text-sm flex items-center justify-center hover:bg-surface-variant transition">
          <Home className="w-4 h-4 mr-2" /> Go to Home
        </Link>
      </div>
    </div>
  );
}
