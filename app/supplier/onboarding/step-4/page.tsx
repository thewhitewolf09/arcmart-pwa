'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function OnboardingStep4() {
  const router = useRouter();

  const [gst, setGst] = useState('');

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar & Progress */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg px-4 py-3 flex flex-col justify-center">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Step 4 of 4</span>
          <div className="w-9"></div> {/* Spacer */}
        </div>
        
        <div className="w-full bg-surface-variant rounded-full h-1.5 overflow-hidden">
          <div className="bg-primary h-1.5 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-6 pb-32">
        <h1 className="text-2xl font-black text-on-surface mb-2 tracking-tight">Final Details</h1>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
          Verify your business identity and review your profile before submitting.
        </p>

        <div className="space-y-8">
          
          {/* GST Verification */}
          <div>
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1 flex items-center">
              GST Number <span className="ml-2 bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[8px]">Required</span>
            </label>
            <div className="relative mb-2">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FileText className="h-5 w-5 text-on-surface-variant" />
              </div>
              <input 
                type="text"
                value={gst}
                onChange={(e) => setGst(e.target.value.toUpperCase())}
                className="w-full pl-12 pr-12 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition uppercase tracking-wider"
                placeholder="22AAAAA0000A1Z5"
                maxLength={15}
              />
              {gst.length === 15 && (
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                </div>
              )}
            </div>
            <div className="flex items-start bg-success-container/50 p-3 rounded-xl border border-success/20">
              <ShieldCheck className="w-4 h-4 text-success-dark mr-2 shrink-0 mt-0.5" />
              <p className="text-[10px] text-success-dark font-semibold leading-relaxed">
                GST verification adds a "Verified" badge to your profile, increasing homeowner trust by up to 80%.
              </p>
            </div>
          </div>

          <hr className="border-outline-variant/50" />

          {/* Profile Preview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Profile Summary</h3>
            
            <div className="glass-card rounded-2xl border border-outline-variant shadow-sm p-5 space-y-4">
              <div>
                <p className="text-[10px] text-on-surface-variant font-semibold">Business Name</p>
                <p className="text-sm font-bold text-on-surface">Jai Durga Tiles</p>
              </div>
              
              <div>
                <p className="text-[10px] text-on-surface-variant font-semibold">Categories</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  <span className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded text-[10px] font-bold">Tiles & Flooring</span>
                </div>
              </div>

              <div>
                <p className="text-[10px] text-on-surface-variant font-semibold">Service Areas</p>
                <p className="text-xs font-semibold text-on-surface">Noida Sector 18, Indirapuram</p>
              </div>
            </div>
          </div>

          {/* DEMO TRIGGERS */}
          <div className="pt-8 pb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-error mb-3 text-center">Demo Triggers (Test Outcomes)</h3>
            <div className="flex justify-center space-x-2">
              <Link href="/supplier/onboarding/status?state=pending" className="px-3 py-2 bg-surface-variant border border-outline-variant rounded-lg text-xs font-bold">Show Pending</Link>
              <Link href="/supplier/onboarding/status?state=approved" className="px-3 py-2 bg-success-container border border-success/30 text-success-dark rounded-lg text-xs font-bold">Show Approved</Link>
              <Link href="/supplier/onboarding/status?state=rejected" className="px-3 py-2 bg-error-container border border-error/30 text-error rounded-lg text-xs font-bold">Show Rejected</Link>
            </div>
          </div>

        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30 flex space-x-3">
        <button 
          onClick={() => router.back()}
          className="w-1/3 py-4 rounded-xl border border-outline-variant text-on-surface font-bold text-sm flex items-center justify-center hover:bg-surface-variant transition"
        >
          Back
        </button>
        <Link 
          href="/supplier/onboarding/status?state=pending"
          className={`flex-1 py-4 font-bold rounded-xl flex items-center justify-center shadow-lg transition ${
            gst.length === 15 ? 'bg-[#0d1c32] text-white hover:bg-opacity-90' : 'bg-surface-variant text-on-surface-variant border border-outline-variant'
          }`}
        >
          Submit Profile
        </Link>
      </div>
    </div>
  );
}
