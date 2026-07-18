'use client';

import React, { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShieldAlert, LogIn, AlertCircle, RefreshCw, Home } from 'lucide-react';
import { useMockStore } from '../../../store/mockStore';

function SystemErrorContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { logout } = useMockStore();

  const type = searchParams.get('type') || 'general-error';

  const handleAction = () => {
    if (type === 'session-expired') {
      logout();
      router.push('/auth');
    } else {
      router.push('/');
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-6 min-h-screen bg-white">
      {/* Top Header */}
      <div className="flex items-center space-x-2 pt-4">
        <span className="text-sm font-semibold tracking-wider text-red-500 uppercase">
          System Alert
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center my-auto">
        <div className="relative mb-6">
          <div className={`absolute inset-0 rounded-full blur-xl scale-125 animate-pulse ${
            type === 'session-expired' ? 'bg-accent-gold/10' : 'bg-red-500/10'
          }`} />
          <div className={`w-20 h-20 rounded-full flex items-center justify-center z-10 relative border ${
            type === 'session-expired' ? 'bg-amber-50 border-accent-gold/35' : 'bg-red-50 border-red-500/35'
          }`}>
            {type === 'session-expired' ? (
              <ShieldAlert className="w-10 h-10 text-accent-gold" />
            ) : (
              <AlertCircle className="w-10 h-10 text-red-500" />
            )}
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2 text-brand-navy">
          {type === 'session-expired' ? 'Session Expired' : 'An Error Occurred'}
        </h1>
        
        <p className="text-gray-600 text-sm max-w-xs mb-8">
          {type === 'session-expired' 
            ? 'Your current security session has expired. For your account safety, please re-authenticate using your phone number.'
            : 'Something went wrong on our end. Our construction OS team has been notified, and we are working to resolve the issue.'
          }
        </p>

        {/* Info card */}
        <div className="w-full max-w-sm glass-card rounded-card p-4 text-left border border-gray-200 mb-8">
          <span className="text-xs text-gray-500 font-bold block mb-1">Error Diagnostics</span>
          <span className="text-[11px] text-gray-600 font-mono block">
            {type === 'session-expired' 
              ? 'CODE: AUTH_SESSION_EXPIRED_JWT_TIMEOUT' 
              : 'CODE: CORE_DATABASE_SOCKET_EXCEPTION_502'
            }
          </span>
        </div>
      </div>

      {/* Bottom CTA bar */}
      <div className="pb-6 space-y-3">
        <button
          onClick={handleAction}
          className={`w-full font-bold py-4 px-6 rounded-card flex items-center justify-center space-x-2 transition-all active:scale-95 text-white ${
            type === 'session-expired' 
              ? 'bg-accent-gold hover:bg-accent-gold/90' 
              : 'bg-accent-cyan hover:bg-accent-cyan/90'
          }`}
        >
          {type === 'session-expired' ? (
            <>
              <LogIn className="w-5 h-5" />
              <span>Log In Again</span>
            </>
          ) : (
            <>
              <RefreshCw className="w-5 h-5" />
              <span>Reload Workspace</span>
            </>
          )}
        </button>

        <button
          onClick={() => router.push('/')}
          className="w-full bg-transparent border-2 border-gray-200 hover:border-gray-300 text-gray-700 rounded-card py-4 px-6 text-sm font-semibold transition flex items-center justify-center space-x-2"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </button>
      </div>
    </div>
  );
}

export default function SystemErrorPage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="text-xs text-gray-500 uppercase tracking-widest animate-pulse">Loading Diagnostic Shell...</div>
      </div>
    }>
      <SystemErrorContent />
    </Suspense>
  );
}
