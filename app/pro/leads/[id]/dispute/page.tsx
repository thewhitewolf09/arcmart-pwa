'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, AlertTriangle, Send, CheckCircle2 } from 'lucide-react';

export default function DisputeLead() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex-1 flex flex-col min-h-screen bg-success/5 justify-center p-5">
        <div className="bg-surface border border-outline-variant rounded-3xl p-8 text-center shadow-xl">
          <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>
          <h1 className="text-2xl font-black text-on-surface mb-2">Dispute Submitted</h1>
          <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
            We are reviewing this lead. If we confirm it is invalid or spam, ₹49 will be credited back to your wallet within 48 hours.
          </p>
          <button 
            onClick={() => router.push('/pro/leads')}
            className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg"
          >
            Back to Leads
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Dispute Lead</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32">
        <div className="glass-card border border-error/30 bg-error/5 rounded-3xl p-5 mb-8 flex items-start">
          <AlertTriangle className="w-6 h-6 text-error mr-3 shrink-0 mt-0.5" />
          <div>
            <h2 className="text-sm font-black text-on-surface mb-1">Report Invalid Lead</h2>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              If the customer number is wrong, or this is a spam request, report it here. False disputes may result in account suspension.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">
              Reason for Dispute
            </label>
            <div className="space-y-3">
              {['Customer number does not exist', 'Customer denied making request', 'It is a spam / marketing call', 'Other'].map((reason, idx) => (
                <label key={idx} className="flex items-center p-4 border border-outline-variant rounded-xl cursor-pointer hover:bg-surface-variant transition">
                  <input type="radio" name="reason" className="w-4 h-4 text-primary focus:ring-primary border-outline-variant mr-3" />
                  <span className="text-sm font-bold text-on-surface">{reason}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              Additional Details
            </label>
            <textarea 
              rows={4}
              placeholder="Provide more context..."
              className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => setSubmitted(true)}
          className="w-full py-4 bg-error text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-error/30 hover:bg-error/90 transition"
        >
          Submit Dispute
        </button>
      </div>
    </div>
  );
}
