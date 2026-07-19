'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';
import Link from 'next/link';

export default function GeneralErrorScreen() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
        
        <div className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-2">
          <AlertTriangle className="w-12 h-12 text-error" />
        </div>
        
        <h1 className="text-3xl font-black text-on-surface mb-2">Oops! Something went wrong.</h1>
        <p className="text-on-surface-variant font-medium leading-relaxed max-w-[280px] mx-auto">
          We encountered an unexpected error while trying to process your request. Our engineering team has been notified.
        </p>

        <div className="w-full max-w-sm glass-card border border-outline-variant rounded-2xl p-4 text-left bg-surface-dim">
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Error Code</p>
          <p className="font-mono text-sm font-bold text-on-surface">ERR_500_UNEXPECTED</p>
        </div>

      </div>

      <div className="p-4 pb-safe bg-surface space-y-3">
        <button 
          onClick={() => window.location.reload()}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
        >
          <RefreshCcw className="w-5 h-5 mr-2" /> Try Again
        </button>
        <Link 
          href="/"
          className="w-full py-4 bg-surface border-2 border-outline-variant text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-surface-variant transition"
        >
          <Home className="w-5 h-5 mr-2" /> Go to Homepage
        </Link>
      </div>
    </div>
  );
}
