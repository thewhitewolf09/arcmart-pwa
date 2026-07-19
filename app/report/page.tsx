'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, UserX, AlertTriangle, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReportUserPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [reason, setReason] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reasons = [
    { id: 'fake', label: 'Fake Profile or Scam', icon: UserX, description: 'Profile seems fraudulent, asks for money off-app.' },
    { id: 'inappropriate', label: 'Inappropriate Behavior', icon: AlertTriangle, description: 'Rude, aggressive, or unprofessional conduct.' },
    { id: 'wrong-info', label: 'Wrong Information', icon: AlertCircle, description: 'Service areas, prices, or skills are highly inaccurate.' },
  ];

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3); // Success step
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md px-4 py-3 flex items-center pt-safe border-b border-outline-variant">
        {step < 3 ? (
          <button onClick={() => { if(step===2) setStep(1); else router.back(); }} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-container transition-colors flex-shrink-0 text-on-surface">
            <ArrowLeft className="w-5 h-5" />
          </button>
        ) : (
          <div className="w-9 h-9 mr-2" /> // spacer
        )}
        <span className="font-bold text-lg text-on-surface">
          {step === 1 && 'Report User'}
          {step === 2 && 'Report Details'}
          {step === 3 && 'Report Submitted'}
        </span>
      </div>

      {/* Target User (Mock) */}
      {step < 3 && (
        <div className="p-5 border-b border-outline-variant/30 bg-surface-container-lowest">
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Reporting</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-container text-primary rounded-full flex items-center justify-center font-bold">
              AK
            </div>
            <div>
              <h3 className="font-bold text-sm text-on-surface">Amit Kumar</h3>
              <p className="text-xs text-on-surface-variant font-medium">Plumber • ID: PRO-4912</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-5 pb-32 relative">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Select Reason (TS-02) */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-lg font-black text-on-surface mb-2">Why are you reporting this user?</h2>
              <p className="text-sm text-on-surface-variant font-medium mb-6">Your report is anonymous. The user will not know you reported them.</p>

              {reasons.map((r) => (
                <button
                  key={r.id}
                  onClick={() => { setReason(r.id); setStep(2); }}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 flex items-start gap-4 hover:bg-surface-container hover:border-primary/50 transition text-left group active:scale-95 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center shrink-0 group-hover:bg-error group-hover:text-white transition text-error">
                    <r.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">{r.label}</h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{r.description}</p>
                  </div>
                </button>
              ))}
            </motion.div>
          )}

          {/* STEP 2: Details (TS-03, 04, 05) */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col h-full"
            >
              <h2 className="text-lg font-black text-on-surface mb-2">Provide Details</h2>
              <p className="text-sm text-on-surface-variant font-medium mb-4">
                You selected: <strong className="text-on-surface">{reasons.find(r => r.id === reason)?.label}</strong>
              </p>

              <div className="relative mb-6">
                <textarea 
                  className="w-full h-40 bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none shadow-inner"
                  placeholder="Please describe exactly what happened. Include dates, times, and specific details to help us investigate."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
                <FileText className="absolute top-4 right-4 w-5 h-5 text-on-surface-variant opacity-50" />
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 mb-6">
                <p className="text-xs text-primary-dark font-medium leading-relaxed">
                  ArcMart takes these reports very seriously. Providing false reports may result in account suspension.
                </p>
              </div>

              <button
                onClick={handleSubmit}
                disabled={details.length < 10 || isSubmitting}
                className="mt-auto w-full h-14 bg-error text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-error-dark transition flex items-center justify-center shadow-[0_4px_14px_rgba(220,38,38,0.3)] active:scale-95"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  'Submit Report'
                )}
              </button>
            </motion.div>
          )}

          {/* STEP 3: Success (TS-06) */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center pt-10 text-center"
            >
              <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-12 h-12 text-success" />
              </div>
              <h2 className="text-2xl font-black text-on-surface mb-3">Report Submitted</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed max-w-[280px] mb-8 font-medium">
                Thank you for keeping ArcMart safe. Our Trust & Safety team will review this report within 48 hours.
              </p>

              <button
                onClick={() => router.push('/safety')}
                className="w-full max-w-[280px] h-14 bg-surface-container-high text-on-surface font-bold rounded-xl hover:bg-surface-variant transition active:scale-95"
              >
                Return to Safety Center
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
