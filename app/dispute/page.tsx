'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, Frown, IndianRupee, UploadCloud, FileText, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DisputePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [issue, setIssue] = useState('');
  const [details, setDetails] = useState('');
  const [files, setFiles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const issues = [
    { id: 'no-show', label: 'Professional Did Not Show Up', icon: Clock, description: 'They missed the scheduled time without notice.' },
    { id: 'poor-work', label: 'Poor Quality Work', icon: Frown, description: 'The job was incomplete or done poorly.' },
    { id: 'overcharge', label: 'Overcharged or Price Change', icon: IndianRupee, description: 'They demanded more money than the agreed quote.' },
  ];

  const handleUploadMock = () => {
    if (files.length < 3) {
      setFiles([...files, `evidence-${files.length + 1}.jpg`]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4); // Success step
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md px-4 py-3 flex items-center pt-safe border-b border-outline-variant shadow-sm">
        {step < 4 ? (
          <button onClick={() => { if(step > 1) setStep(step - 1); else router.back(); }} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-container transition-colors flex-shrink-0 text-on-surface">
            <ArrowLeft className="w-5 h-5" />
          </button>
        ) : (
          <div className="w-9 h-9 mr-2" />
        )}
        <span className="font-bold text-lg text-on-surface">
          {step === 1 && 'Start a Dispute'}
          {step === 2 && 'Describe Issue'}
          {step === 3 && 'Upload Evidence'}
          {step === 4 && 'Dispute Submitted'}
        </span>
      </div>

      {/* Target Job (Mock) */}
      {step < 4 && (
        <div className="p-5 border-b border-outline-variant/30 bg-surface-container-lowest">
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Disputing Job</p>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-on-surface">Bathroom Pipe Repair</h3>
              <p className="text-xs text-on-surface-variant font-medium mt-0.5">By Arun Sharma (Plumber)</p>
            </div>
            <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-1 rounded-md">ID: JOB-9921</span>
          </div>
        </div>
      )}

      {/* Stepper Progress */}
      {step < 4 && (
        <div className="px-5 pt-4 pb-2">
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`h-1.5 rounded-full flex-1 ${step >= s ? 'bg-warning' : 'bg-surface-variant'}`} />
            ))}
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-5 pb-32 relative">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Select Issue (TS-07, TS-08) */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-lg font-black text-on-surface mb-2">What went wrong?</h2>
              <p className="text-sm text-on-surface-variant font-medium mb-6">Select the primary reason for your dispute.</p>

              {issues.map((i) => (
                <button
                  key={i.id}
                  onClick={() => { setIssue(i.id); setStep(2); }}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 flex items-start gap-4 hover:border-warning transition text-left group active:scale-95 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center shrink-0 group-hover:bg-warning group-hover:text-white transition text-warning-dark">
                    <i.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">{i.label}</h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{i.description}</p>
                  </div>
                </button>
              ))}
            </motion.div>
          )}

          {/* STEP 2: Details */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col h-full"
            >
              <h2 className="text-lg font-black text-on-surface mb-2">Provide Details</h2>
              <p className="text-sm text-on-surface-variant font-medium mb-6">
                Tell us exactly what happened regarding: <strong className="text-on-surface">{issues.find(i => i.id === issue)?.label}</strong>
              </p>

              <div className="relative mb-6">
                <textarea 
                  className="w-full h-48 bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 text-sm text-on-surface focus:outline-none focus:border-warning focus:ring-1 focus:ring-warning resize-none shadow-inner"
                  placeholder="Include timeline, conversations, and exact amounts if applicable."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </div>

              <button
                onClick={() => setStep(3)}
                disabled={details.length < 10}
                className="mt-auto w-full h-14 bg-on-surface text-surface font-bold rounded-xl disabled:opacity-50 hover:bg-on-surface-variant transition flex items-center justify-center gap-2 active:scale-95"
              >
                Next Step <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* STEP 3: Evidence (TS-09) */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col h-full"
            >
              <h2 className="text-lg font-black text-on-surface mb-2">Upload Evidence</h2>
              <p className="text-sm text-on-surface-variant font-medium mb-6">
                Add photos of poor work, chat screenshots, or payment receipts. (Max 3)
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {files.map((file, idx) => (
                  <div key={idx} className="relative aspect-video bg-surface-container rounded-xl border border-outline-variant flex items-center justify-center">
                    <FileText className="w-8 h-8 text-on-surface-variant opacity-50" />
                    <button 
                      onClick={() => removeFile(idx)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-error text-white rounded-full flex items-center justify-center shadow-md hover:bg-error-dark"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    <span className="absolute bottom-2 left-2 text-[10px] font-bold text-on-surface-variant truncate w-3/4">{file}</span>
                  </div>
                ))}

                {files.length < 3 && (
                  <button 
                    onClick={handleUploadMock}
                    className="aspect-video bg-warning/5 border-2 border-dashed border-warning/40 rounded-xl flex flex-col items-center justify-center text-warning-dark hover:bg-warning/10 transition active:scale-95"
                  >
                    <UploadCloud className="w-6 h-6 mb-2" />
                    <span className="text-xs font-bold">Tap to Upload</span>
                  </button>
                )}
              </div>

              <div className="bg-surface-container p-4 rounded-2xl mb-8">
                <p className="text-xs text-on-surface-variant leading-relaxed font-medium">
                  ArcMart Support will review your details and evidence, then contact the professional for their side before making a resolution.
                </p>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="mt-auto w-full h-14 bg-warning-dark text-white font-bold rounded-xl disabled:opacity-50 hover:bg-warning transition flex items-center justify-center shadow-[0_4px_14px_rgba(217,119,6,0.3)] active:scale-95"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  'Submit Dispute'
                )}
              </button>
            </motion.div>
          )}

          {/* STEP 4: Success (TS-10) */}
          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center pt-10 text-center"
            >
              <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-12 h-12 text-success" />
              </div>
              <h2 className="text-2xl font-black text-on-surface mb-3">Dispute Filed</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed max-w-[280px] mb-8 font-medium">
                Your dispute has been logged. An ArcMart agent will be assigned to your case and will contact you within 24 hours.
              </p>

              <button
                onClick={() => router.push('/dispute/123')}
                className="w-full max-w-[280px] h-14 bg-primary text-on-primary shadow-[0_4px_14px_rgba(var(--primary-rgb),0.3)] font-bold rounded-xl hover:bg-primary/90 transition active:scale-95"
              >
                Track Dispute Status
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
