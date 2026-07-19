'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck, Upload, Send, CheckCircle2 } from 'lucide-react';

export default function UploadRERA() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex-1 flex flex-col min-h-screen bg-success/5 justify-center p-5">
        <div className="bg-surface border border-outline-variant rounded-3xl p-8 text-center shadow-xl">
          <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>
          <h1 className="text-2xl font-black text-on-surface mb-2">Submitted for Review</h1>
          <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
            Your RERA certificate has been submitted. Verification usually takes 24-48 hours. You will receive a Verified Badge upon approval.
          </p>
          <button 
            onClick={() => router.back()}
            className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
          >
            Back to Profile
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
          <span className="font-bold text-on-surface truncate">RERA Verification</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32">
        <div className="glass-card border border-primary/20 bg-primary/5 rounded-3xl p-5 mb-8 flex items-start">
          <ShieldCheck className="w-6 h-6 text-primary mr-3 shrink-0 mt-0.5" />
          <div>
            <h2 className="text-sm font-black text-on-surface mb-1">Get Verified</h2>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Consultants with a verified RERA badge receive up to 3x more leads and are highly trusted by buyers.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              RERA Registration Number
            </label>
            <input 
              type="text" 
              placeholder="e.g. UPRERAAGT12345"
              className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition uppercase"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              Upload Certificate
            </label>
            <div className="w-full aspect-video bg-surface-variant/30 border-2 border-dashed border-outline-variant rounded-2xl flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 transition cursor-pointer">
              <Upload className="w-8 h-8 mb-2 opacity-50" />
              <p className="font-bold text-sm">Tap to Upload Document</p>
              <p className="text-[10px] uppercase tracking-widest mt-1 opacity-70">PDF, JPG or PNG (Max 5MB)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => setSubmitted(true)}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
        >
          Submit Verification <Send className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}
