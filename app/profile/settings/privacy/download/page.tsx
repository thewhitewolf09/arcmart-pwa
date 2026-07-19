'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Download, Database, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DataDownloadPage() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'processing' | 'ready'>('idle');

  const handleRequest = () => {
    setStatus('processing');
    // Simulate backend processing
    setTimeout(() => {
      setStatus('ready');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col pb-safe">
      <header className="px-4 py-4 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 sticky top-0 z-20 flex items-center gap-3">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -ml-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-bold text-on-surface">Download Your Data</h1>
      </header>

      <main className="flex-1 p-6 flex flex-col items-center justify-center text-center max-w-md mx-auto w-full">
        
        {status === 'idle' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Database className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-xl font-black text-on-surface mb-3">Request Account Data</h2>
            <p className="text-sm text-on-surface-variant font-medium leading-relaxed mb-6">
              Get a complete copy of your personal data, including connection history, saved items, and reviews. This is in compliance with the DPDP Act 2023.
            </p>
            <div className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-4 mb-8 text-left shadow-sm">
              <div className="flex gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-success shrink-0" />
                <p className="text-xs font-medium text-on-surface-variant">Your data will be securely packaged into a ZIP file.</p>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <p className="text-xs font-medium text-on-surface-variant">We will notify you via email when it's ready to download.</p>
              </div>
            </div>
            <button 
              onClick={handleRequest}
              className="w-full h-14 bg-primary text-white rounded-full font-bold shadow-md shadow-primary/20 flex items-center justify-center hover:bg-primary-dark transition active:scale-95"
            >
              Request Data Export
            </button>
          </motion.div>
        )}

        {status === 'processing' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
            <div className="w-20 h-20 relative mb-6">
              <div className="absolute inset-0 border-4 border-surface-container rounded-full" />
              <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Database className="w-8 h-8 text-primary animate-pulse" />
              </div>
            </div>
            <h2 className="text-xl font-black text-on-surface mb-2">Gathering Data...</h2>
            <p className="text-sm text-on-surface-variant font-medium">Please wait while we package your information.</p>
          </motion.div>
        )}

        {status === 'ready' && (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-success" />
            </div>
            <h2 className="text-xl font-black text-on-surface mb-2">Export Ready</h2>
            <p className="text-sm text-on-surface-variant font-medium mb-8">
              Your personal data archive is ready for download. This link will expire in 7 days for security.
            </p>
            
            <div className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-4 mb-8 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-on-surface">arcmart-data.zip</p>
                  <p className="text-xs font-medium text-on-surface-variant">2.4 MB</p>
                </div>
              </div>
              <button 
                onClick={() => alert('Downloading ZIP...')}
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition shadow-md"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>

            <button 
              onClick={() => setStatus('idle')}
              className="text-sm font-bold text-primary hover:underline"
            >
              Request a new export
            </button>
          </motion.div>
        )}

      </main>
    </div>
  );
}
