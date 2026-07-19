'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Image as ImageIcon, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

export default function OnboardingStep3() {
  const router = useRouter();
  const [photoSelected, setPhotoSelected] = useState(false);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4 rounded-full"></div>
          </div>
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-1 text-center">Step 3 of 4</p>
        </div>
        <div className="w-9"></div>
      </div>

      <div className="flex-1 p-5 pb-32">
        <h1 className="text-2xl font-black text-on-surface mb-2">Trust & Identity</h1>
        <p className="text-sm text-on-surface-variant mb-8">Customers are more likely to hire professionals with verified identities and clear photos.</p>
        
        <div className="space-y-8">
          
          {/* Photo Upload */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">
              Profile Photo <span className="text-error">*</span>
            </label>
            <div 
              onClick={() => setPhotoSelected(true)}
              className="w-32 h-32 mx-auto border-2 border-dashed border-outline-variant rounded-full bg-surface-variant flex flex-col items-center justify-center hover:bg-outline-variant/30 transition relative overflow-hidden group cursor-pointer"
            >
              {photoSelected ? (
                <div className="w-full h-full bg-primary/20 flex flex-col items-center justify-center text-primary">
                   <span className="text-5xl font-black mb-1">A</span>
                </div>
              ) : (
                <>
                  <ImageIcon className="w-8 h-8 text-primary mb-2" />
                  <p className="text-[10px] font-bold text-on-surface text-center px-2">Tap to Upload</p>
                </>
              )}
            </div>
            <p className="text-[10px] text-center text-on-surface-variant font-semibold mt-3">Upload a clear photo of your face.</p>
          </div>

          <div className="border-t border-outline-variant my-2"></div>

          {/* Aadhaar Verification */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                Aadhaar Number <span className="text-[10px] text-on-surface-variant/50 ml-1">(Optional)</span>
              </label>
            </div>
            
            <div className="glass-card border border-outline-variant rounded-xl p-4 bg-primary/5 mb-4 shadow-sm flex items-start">
              <ShieldCheck className="w-5 h-5 text-success mr-3 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold text-on-surface">Get the "Verified" Badge</p>
                <p className="text-[10px] text-on-surface-variant font-semibold mt-1">Pros with the verified badge receive 2x more lead conversions.</p>
              </div>
            </div>

            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="0000"
                maxLength={4}
                className="w-1/3 bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3 text-center font-mono font-bold text-on-surface focus:outline-none focus:border-primary transition"
              />
              <input 
                type="text" 
                placeholder="0000"
                maxLength={4}
                className="w-1/3 bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3 text-center font-mono font-bold text-on-surface focus:outline-none focus:border-primary transition"
              />
              <input 
                type="text" 
                placeholder="0000"
                maxLength={4}
                className="w-1/3 bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3 text-center font-mono font-bold text-on-surface focus:outline-none focus:border-primary transition"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => router.push('/pro/onboarding/step4')}
          disabled={!photoSelected}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next Step <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}
