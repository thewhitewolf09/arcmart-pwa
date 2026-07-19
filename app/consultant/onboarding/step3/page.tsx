'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ChevronRight, Camera, FileText, Upload, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ConsultantOnboardingStep3() {
  const router = useRouter();
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [reraUploaded, setReraUploaded] = useState(false);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg px-4 py-3 border-b border-outline-variant">
        <div className="flex items-center mb-4 mt-2">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant transition">
            <ArrowLeft className="w-5 h-5 text-on-surface" />
          </button>
          <div className="flex-1">
            <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
              <div className="h-full bg-primary w-full transition-all duration-500 rounded-full"></div>
            </div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-2">Step 3 of 3: Verification</p>
          </div>
        </div>
        <h1 className="text-2xl font-black text-on-surface">Verification Documents</h1>
        <p className="text-sm text-on-surface-variant mt-1">Upload your photo and RERA certificate to build trust.</p>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-8">
        
        {/* Profile Photo */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">
            Profile Photo <span className="text-primary">*</span>
          </h3>
          
          {!photoUploaded ? (
            <div 
              onClick={() => setPhotoUploaded(true)}
              className="border-2 border-dashed border-outline-variant rounded-3xl p-8 flex flex-col items-center justify-center bg-surface hover:bg-primary/5 hover:border-primary/50 transition cursor-pointer"
            >
              <div className="w-16 h-16 bg-surface-variant rounded-full flex items-center justify-center mb-4 text-on-surface-variant">
                <Camera className="w-8 h-8" />
              </div>
              <p className="text-sm font-bold text-on-surface mb-1">Take or Upload Photo</p>
              <p className="text-xs text-on-surface-variant">Make sure your face is clearly visible</p>
            </div>
          ) : (
            <div className="border-2 border-primary bg-primary/5 rounded-3xl p-6 flex flex-col items-center justify-center relative">
              <div className="absolute top-4 right-4 bg-surface p-2 rounded-full shadow-sm cursor-pointer" onClick={() => setPhotoUploaded(false)}>
                <Upload className="w-4 h-4 text-on-surface-variant" />
              </div>
              <div className="w-24 h-24 rounded-full bg-surface-dim overflow-hidden border-4 border-white shadow-md mb-4 relative">
                {/* Mock Image */}
                <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                  <User className="w-10 h-10 text-primary/50" />
                </div>
              </div>
              <p className="text-sm font-bold text-primary flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5" /> Photo Uploaded
              </p>
            </div>
          )}
        </section>

        {/* RERA Certificate */}
        <section>
          <div className="flex items-center justify-between mb-4 ml-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              RERA Certificate <span className="text-on-surface-variant/50 font-normal ml-1">(Optional)</span>
            </h3>
          </div>
          
          {!reraUploaded ? (
            <div 
              onClick={() => setReraUploaded(true)}
              className="border-2 border-dashed border-outline-variant rounded-3xl p-8 flex flex-col items-center justify-center bg-surface hover:bg-primary/5 hover:border-primary/50 transition cursor-pointer"
            >
              <div className="w-16 h-16 bg-surface-variant rounded-2xl flex items-center justify-center mb-4 text-on-surface-variant">
                <FileText className="w-8 h-8" />
              </div>
              <p className="text-sm font-bold text-on-surface mb-1">Upload Certificate</p>
              <p className="text-xs text-on-surface-variant">Get the "Verified Agent" badge</p>
            </div>
          ) : (
            <div className="glass-card border-2 border-success bg-success/5 rounded-3xl p-6 flex flex-col items-center justify-center relative">
              <div className="absolute top-4 right-4 bg-surface p-2 rounded-full shadow-sm cursor-pointer" onClick={() => setReraUploaded(false)}>
                <Upload className="w-4 h-4 text-on-surface-variant" />
              </div>
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 text-success">
                <FileText className="w-8 h-8" />
              </div>
              <p className="text-sm font-bold text-success flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5" /> Document Attached
              </p>
            </div>
          )}
        </section>

      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          disabled={!photoUploaded}
          onClick={() => router.push('/consultant/onboarding/pending')}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:shadow-none"
        >
          Submit Application <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}

const User = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)
