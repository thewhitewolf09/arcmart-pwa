'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Verification() {
  const router = useRouter();
  const [aadhaar, setAadhaar] = useState('');
  const [status, setStatus] = useState<'idle' | 'verifying' | 'success'>('idle');

  const handleVerify = () => {
    if (aadhaar.length === 12) {
      setStatus('verifying');
      setTimeout(() => setStatus('success'), 2000);
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
          <span className="font-bold text-on-surface truncate">Identity Verification</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32">
        
        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center text-center mt-12 space-y-4 animate-in zoom-in">
            <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center border-4 border-success/30">
              <ShieldCheck className="w-10 h-10 text-success" />
            </div>
            <h2 className="text-2xl font-black text-on-surface">Verified Identity</h2>
            <p className="text-sm text-on-surface-variant max-w-[250px]">
              Your Aadhaar has been verified. You now have the verified badge on your public profile!
            </p>
          </div>
        ) : (
          <>
            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-6 text-center mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="font-bold text-primary mb-2">Build Trust with Homeowners</h2>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Pros with a verified identity badge receive up to 40% more direct leads. Your Aadhaar details are encrypted and never shared publicly.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
                  Aadhaar Number
                </label>
                <div className="relative">
                  <FileText className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
                  <input 
                    type="text" 
                    maxLength={12}
                    value={aadhaar}
                    onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter 12-digit Aadhaar"
                    disabled={status === 'verifying'}
                    className="w-full bg-surface glass-card border border-outline-variant rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition disabled:opacity-50"
                  />
                </div>
                {aadhaar.length > 0 && aadhaar.length < 12 && (
                  <p className="text-[10px] text-error font-semibold mt-1 ml-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" /> Must be exactly 12 digits
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        {status === 'success' ? (
          <button 
            onClick={() => router.back()}
            className="w-full py-4 bg-surface border border-outline-variant text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-surface-variant transition shadow-sm"
          >
            Back to Profile
          </button>
        ) : (
          <button 
            onClick={handleVerify}
            disabled={aadhaar.length !== 12 || status === 'verifying'}
            className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'verifying' ? (
              <span className="flex items-center">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Verifying...
              </span>
            ) : (
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2" /> Verify Aadhaar</span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
