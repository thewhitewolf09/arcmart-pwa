'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function Feedback() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex-1 flex flex-col min-h-screen bg-success/5 justify-center p-5">
        <div className="bg-surface border border-outline-variant rounded-3xl p-8 text-center shadow-xl">
          <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>
          <h1 className="text-2xl font-black text-on-surface mb-2">Thank You!</h1>
          <p className="text-sm text-on-surface-variant mb-8">
            Your feedback has been sent to the ArcMart team. We appreciate your help in making the app better.
          </p>
          <button 
            onClick={() => router.back()}
            className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg"
          >
            Done
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
          <span className="font-bold text-on-surface truncate">App Feedback</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32">
        <div className="flex items-center mb-6">
          <MessageSquare className="w-8 h-8 text-primary mr-3" />
          <div>
            <h2 className="text-xl font-black text-on-surface">Help Us Improve</h2>
            <p className="text-xs text-on-surface-variant">Found a bug or have a suggestion?</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              Feedback Type
            </label>
            <select className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition appearance-none">
              <option>Report a Bug</option>
              <option>Suggest a Feature</option>
              <option>General Feedback</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              Description
            </label>
            <textarea 
              rows={6}
              placeholder="Please describe in detail..."
              className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => setSubmitted(true)}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
        >
          Submit Feedback <Send className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}
