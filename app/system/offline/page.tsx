'use client';

import React, { useState, useEffect } from 'react';
import { WifiOff, RotateCw, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OfflinePage() {
  const router = useRouter();
  const [checking, setChecking] = useState(false);

  const handleRetry = () => {
    setChecking(true);
    setTimeout(() => {
      if (typeof window !== 'undefined' && navigator.onLine) {
        router.push('/');
      } else {
        setChecking(false);
      }
    }, 1200);
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-6 min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center space-x-3 pt-4">
        <div className="text-gray-500 font-semibold text-xs tracking-wider uppercase">ArcMart PWA</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center my-auto">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-accent-amber/10 rounded-full blur-xl scale-125 animate-pulse" />
          <div className="w-20 h-20 rounded-full bg-amber-50 border border-accent-amber/35 flex items-center justify-center z-10 relative">
            <WifiOff className="w-10 h-10 text-accent-amber" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2 text-brand-navy">No Internet Connection</h1>
        <p className="text-gray-600 text-sm max-w-xs mb-8">
          You are currently offline. However, your saved quote requests and booked professionals are still fully accessible.
        </p>

        {/* Cached status card */}
        <div className="w-full max-w-sm glass-card rounded-card p-4 text-left border border-gray-200 mb-8">
          <h3 className="font-semibold text-sm text-accent-cyan mb-2">Offline Storage Mode</h3>
          <div className="space-y-2 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Homeowner Account</span>
              <span className="text-brand-navy font-bold">Active (Offline Mode)</span>
            </div>
            <div className="flex justify-between">
              <span>Locality Cached</span>
              <span className="text-brand-navy font-bold">Sector 18, Noida</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Bar */}
      <div className="pb-6">
        <button
          onClick={handleRetry}
          disabled={checking}
          className="w-full bg-accent-cyan hover:bg-accent-cyan/90 text-white font-bold py-4 px-6 rounded-card flex items-center justify-center space-x-2 transition-all active:scale-95 disabled:opacity-50"
        >
          <RotateCw className={`w-5 h-5 ${checking ? 'animate-spin' : ''}`} />
          <span>{checking ? 'Checking Connection...' : 'Retry Connection'}</span>
        </button>
      </div>
    </div>
  );
}
