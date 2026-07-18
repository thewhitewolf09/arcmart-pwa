'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck, FileText, MapPin, Camera } from 'lucide-react';
import Link from 'next/link';

export default function VerificationDetail() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg px-4 py-3 flex items-center justify-between border-b border-outline-variant">
        <button onClick={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        
        {/* Header Badge */}
        <div className="bg-success-container p-8 text-center border-b border-success/20">
          <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-success-container shadow-lg relative">
            <ShieldCheck className="w-10 h-10 text-success" />
            <div className="absolute -bottom-2 bg-success text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
              Verified
            </div>
          </div>
          <h1 className="text-xl font-black text-success-dark mb-2">ArcMart Verified Supplier</h1>
          <p className="text-xs text-success-dark/80 max-w-[250px] mx-auto">
            This business has passed our strict verification process and is recognized as a trusted supplier.
          </p>
        </div>

        {/* Verification Breakdown */}
        <div className="p-5">
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">What was verified?</h3>
          
          <div className="glass-card rounded-2xl border border-outline-variant shadow-sm divide-y divide-outline-variant/50">
            
            {/* GST */}
            <div className="p-4 flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-on-surface mb-1">Business Identity</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  The GST Registration (GSTIN) has been cross-checked with government records and matches the business name.
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="p-4 flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-on-surface mb-1">Store Address</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  The physical store address has been verified against submitted utility bills or GST records.
                </p>
              </div>
            </div>

            {/* Photos */}
            <div className="p-4 flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                <Camera className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-on-surface mb-1">Authentic Media</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Shop and product photos have been reviewed to ensure they are authentic and not misleading.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-6 text-center">
             <Link href="/supplier/profile/certificates" className="text-xs font-bold text-primary hover:underline">
               View Uploaded Certificates
             </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
