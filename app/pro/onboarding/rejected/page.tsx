'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AlertCircle, FileEdit, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function OnboardingRejected() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-error/5 justify-center p-5">
      <div className="bg-surface border border-outline-variant rounded-3xl p-8 text-center shadow-xl animate-in zoom-in-95 duration-500 relative overflow-hidden">
        
        {/* Background Decoration */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-error/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="w-24 h-24 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-error/30 relative z-10 animate-pulse">
          <AlertCircle className="w-12 h-12 text-error" />
        </div>
        
        <h1 className="text-3xl font-black text-on-surface mb-2 relative z-10">Action Required</h1>
        <p className="text-sm text-on-surface-variant mb-6 relative z-10">
          We couldn't approve your profile at this time because some details need correction.
        </p>

        <div className="bg-surface-variant/50 border border-outline-variant rounded-2xl p-5 mb-8 text-left relative z-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Reason for Rejection</h3>
          <ul className="space-y-2">
            <li className="flex items-start text-sm font-bold text-on-surface">
              <span className="text-error mr-2">•</span> 
              <span>Profile photo is blurry and face is not clearly visible.</span>
            </li>
            <li className="flex items-start text-sm font-bold text-on-surface">
              <span className="text-error mr-2">•</span> 
              <span>Aadhaar number format is incorrect.</span>
            </li>
          </ul>
        </div>

        <div className="space-y-3 relative z-10">
          <Link 
            href="/pro/onboarding/step3"
            className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center hover:bg-primary/90 transition shadow-lg"
          >
            <FileEdit className="w-5 h-5 mr-2" /> Edit Details & Resubmit
          </Link>
          
          <button 
            className="w-full py-4 bg-surface border border-outline-variant text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-surface-variant transition"
          >
            <HelpCircle className="w-5 h-5 mr-2" /> Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
