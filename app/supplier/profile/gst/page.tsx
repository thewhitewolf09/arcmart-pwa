'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, ShieldCheck, UploadCloud, File, X, Info } from 'lucide-react';

export default function GSTVerification() {
  const router = useRouter();
  
  const [gstNumber, setGstNumber] = useState('09AAACJ1234E1Z5');
  const [file, setFile] = useState<string | null>('GST_Certificate.pdf');
  const [isVerified] = useState(true);

  const handleSave = () => {
    // Save logic
    router.back();
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">GST Verification</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        
        {/* Verification Status Banner */}
        {isVerified ? (
          <div className="bg-success-container border border-success/20 rounded-xl p-4 mb-6 flex items-start">
            <ShieldCheck className="w-5 h-5 text-success shrink-0 mt-0.5 mr-3" />
            <div>
              <h3 className="font-bold text-success-dark text-sm mb-1">Your business is verified</h3>
              <p className="text-xs text-success-dark/80">You can update your GST details, but it will require re-verification by our team.</p>
            </div>
          </div>
        ) : (
          <div className="bg-secondary-container border border-secondary/20 rounded-xl p-4 mb-6 flex items-start">
            <Info className="w-5 h-5 text-secondary shrink-0 mt-0.5 mr-3" />
            <div>
              <h3 className="font-bold text-secondary-dark text-sm mb-1">Verification Required</h3>
              <p className="text-xs text-secondary-dark/80">Submit your GST details to get the "Verified" badge on your profile and build trust with homeowners.</p>
            </div>
          </div>
        )}

        {/* GST Input */}
        <div className="mb-6">
          <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
            GSTIN (15 Digits)
          </label>
          <div className="relative">
            <input 
              type="text"
              value={gstNumber}
              onChange={(e) => setGstNumber(e.target.value.toUpperCase())}
              maxLength={15}
              placeholder="e.g. 09AAACJ1234E1Z5"
              className="w-full px-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary focus:bg-surface transition uppercase tracking-widest"
            />
            {gstNumber.length === 15 && (
              <Check className="absolute right-4 top-4 w-5 h-5 text-success pointer-events-none" />
            )}
          </div>
          <p className="text-[10px] text-on-surface-variant mt-2 ml-1">
            Ensure the GST number matches your uploaded certificate.
          </p>
        </div>

        {/* Document Upload */}
        <div>
          <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
            GST Certificate (PDF/JPG)
          </label>
          
          {file ? (
            <div className="glass-card rounded-xl border border-outline-variant p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-error/10 text-error rounded-lg flex items-center justify-center mr-3 shrink-0">
                  <File className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-bold text-on-surface truncate">{file}</p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">1.2 MB</p>
                </div>
              </div>
              <button 
                onClick={() => setFile(null)}
                className="p-2 rounded-full hover:bg-surface-variant transition text-on-surface-variant ml-2"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="glass-card rounded-xl border-2 border-dashed border-outline-variant p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-variant transition">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <UploadCloud className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-on-surface text-sm mb-1">Upload Certificate</h3>
              <p className="text-xs text-on-surface-variant mb-4">Click to browse or drag and drop</p>
              <button className="px-4 py-2 bg-primary text-on-primary text-xs font-bold rounded-lg hover:bg-primary/90 transition shadow-sm">
                Select File
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={handleSave}
          className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          <Check className="w-5 h-5 mr-2" /> Submit for Verification
        </button>
      </div>
    </div>
  );
}
