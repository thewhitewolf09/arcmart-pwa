'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, FileCheck, UploadCloud, Plus, FileText, CheckCircle2 } from 'lucide-react';

export default function CertificateUpload() {
  const router = useRouter();
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Certifications</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32">
        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-6 text-center mb-8">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
            <FileCheck className="w-6 h-6" />
          </div>
          <h2 className="font-bold text-primary mb-2">Stand Out to Customers</h2>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Upload trade licenses, quality certificates, or association memberships. Certified pros win 60% more large jobs.
          </p>
        </div>

        <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Upload Document</h3>
        
        <button 
          onClick={() => setUploaded(true)}
          className="w-full bg-surface-variant border-2 border-dashed border-outline-variant rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-outline-variant/30 transition group"
        >
          <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
            <UploadCloud className="w-6 h-6 text-primary" />
          </div>
          <p className="font-bold text-sm text-on-surface">Tap to upload PDF or Image</p>
          <p className="text-[10px] text-on-surface-variant font-semibold mt-1">Max file size 5MB</p>
        </button>

        {uploaded && (
          <div className="mt-6 animate-in slide-in-from-bottom-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Uploaded Certificates</h3>
            
            <div className="glass-card border border-outline-variant rounded-2xl p-4 shadow-sm flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center text-success mr-3">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Trade_License_2026.pdf</p>
                  <p className="text-[10px] text-success font-bold flex items-center mt-0.5">
                    <CheckCircle2 className="w-3 h-3 mr-1" /> Under Review
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => router.back()}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
        >
          Save & Return
        </button>
      </div>
    </div>
  );
}
