'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Flag, CheckCircle2 } from 'lucide-react';

export default function ReportProfileScreen({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [reason, setReason] = useState<string | null>(null);
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const reasons = [
    'Spam or fake profile',
    'Inappropriate content or photos',
    'Abusive or harassing behavior',
    'Pretending to be someone else',
    'Scam or fraudulent activity'
  ];

  if (submitted) {
    return (
      <div className="flex-1 flex flex-col min-h-screen bg-surface items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12 text-success" />
        </div>
        <h1 className="text-2xl font-black text-on-surface mb-2">Report Submitted</h1>
        <p className="text-on-surface-variant font-medium leading-relaxed max-w-[280px] mx-auto mb-8">
          Thank you for keeping ArcMart safe. Our Trust & Safety team will review this profile shortly.
        </p>
        <button 
          onClick={() => router.push(`/profile/${params.id}`)}
          className="w-full max-w-xs py-4 bg-surface border-2 border-outline-variant text-on-surface font-bold rounded-xl"
        >
          Back to Profile
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">Report Profile</span>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-6">
        
        <div className="bg-error/10 border border-error/20 rounded-2xl p-4 flex items-start">
          <Flag className="w-5 h-5 text-error mr-3 mt-0.5 shrink-0" />
          <div>
            <h3 className="text-sm font-bold text-error">Why are you reporting?</h3>
            <p className="text-xs text-error/80 mt-1 leading-relaxed">
              Your report is anonymous. If you're in immediate danger, please contact local authorities.
            </p>
          </div>
        </div>

        <section>
          <div className="space-y-3">
            {reasons.map((r, idx) => (
              <label 
                key={idx}
                className={`flex items-center p-4 rounded-xl border cursor-pointer transition-colors ${
                  reason === r ? 'border-error bg-error/5' : 'border-outline-variant bg-surface hover:bg-surface-variant'
                }`}
              >
                <input 
                  type="radio" 
                  name="reportReason" 
                  value={r}
                  checked={reason === r}
                  onChange={() => setReason(r)}
                  className="w-5 h-5 text-error border-outline-variant focus:ring-error mr-3"
                />
                <span className="text-sm font-bold text-on-surface">{r}</span>
              </label>
            ))}
          </div>
        </section>

        {reason && (
          <section className="animate-fade-in">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Additional Details (Optional)</h3>
            <textarea 
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Please provide any additional context to help us investigate..."
              className="w-full h-32 bg-surface border border-outline-variant rounded-2xl p-4 text-sm text-on-surface focus:outline-none focus:border-error transition resize-none"
            ></textarea>
          </section>
        )}

      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          disabled={!reason}
          onClick={() => setSubmitted(true)}
          className="w-full py-4 bg-error text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-error/90 transition disabled:opacity-50 disabled:shadow-none"
        >
          Submit Report
        </button>
      </div>
    </div>
  );
}
