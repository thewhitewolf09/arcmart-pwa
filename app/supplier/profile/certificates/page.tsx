'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, FileText, Upload, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function Certificates() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Certificates & Documents</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
          Upload certificates to earn trust badges on your profile. Homeowners prefer verified suppliers.
        </p>

        {/* Existing Docs */}
        <div className="space-y-4 mb-8">
          
          {/* GST Cert - Verified */}
          <div className="glass-card rounded-2xl border border-outline-variant p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mr-3">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-on-surface">GST Certificate</h4>
                <p className="text-[10px] text-on-surface-variant">Uploaded on Oct 1, 2026</p>
              </div>
            </div>
            <div className="flex items-center text-[10px] font-bold text-success-dark bg-success-container px-2 py-1 rounded border border-success/20 uppercase tracking-wider">
              <CheckCircle2 className="w-3 h-3 mr-1" /> Verified
            </div>
          </div>

          {/* Trade Membership - Pending */}
          <div className="glass-card rounded-2xl border border-outline-variant p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-secondary-container rounded-xl flex items-center justify-center mr-3">
                <FileText className="w-5 h-5 text-secondary-dark" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-on-surface">Builders Association Cert</h4>
                <p className="text-[10px] text-on-surface-variant">Uploaded today</p>
              </div>
            </div>
            <div className="flex items-center text-[10px] font-bold text-warning-dark bg-warning-container px-2 py-1 rounded border border-warning/20 uppercase tracking-wider">
              <ShieldAlert className="w-3 h-3 mr-1" /> Under Review
            </div>
          </div>

        </div>

        {/* Upload Button */}
        <button className="w-full py-4 border-2 border-dashed border-outline-variant rounded-2xl flex flex-col items-center justify-center text-on-surface hover:bg-surface-variant transition active:scale-[0.98]">
          <div className="w-12 h-12 bg-surface-variant rounded-full flex items-center justify-center mb-2 shadow-sm">
            <Upload className="w-5 h-5 text-on-surface-variant" />
          </div>
          <span className="font-bold text-sm">Upload New Document</span>
          <span className="text-[10px] text-on-surface-variant mt-1">PDF, JPG, PNG (Max 5MB)</span>
        </button>

      </div>
    </div>
  );
}
