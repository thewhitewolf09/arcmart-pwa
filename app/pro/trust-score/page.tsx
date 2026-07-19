'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck, Star, MessageSquare, TrendingUp, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustScorePage() {
  const router = useRouter();

  // Mock scores
  const score = 85;
  const rating = 4.8;
  const responseRate = 92;
  const verifications = 3;

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface pb-24">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md px-4 py-3 flex items-center pt-safe border-b border-outline-variant shadow-sm">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-container transition-colors flex-shrink-0 text-on-surface">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-lg text-on-surface">Trust Score</span>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6">
        
        {/* Main Score Gauge */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-3xl p-6 shadow-sm flex flex-col items-center text-center mb-6">
          <h2 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-6">Your ArcMart Score</h2>
          
          <div className="relative w-40 h-40 mb-6">
            <svg className="w-full h-full -rotate-90">
              <circle cx="50%" cy="50%" r="70" className="fill-none stroke-surface-variant stroke-[12]" />
              <motion.circle 
                cx="50%" cy="50%" r="70" 
                className="fill-none stroke-success stroke-[12] drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                strokeDasharray="440"
                initial={{ strokeDashoffset: 440 }}
                animate={{ strokeDashoffset: 440 - (440 * score) / 100 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-black text-on-surface">{score}</span>
              <span className="text-xs font-bold text-success">Excellent</span>
            </div>
          </div>
          
          <p className="text-sm font-medium text-on-surface-variant leading-relaxed px-4">
            A high trust score ranks you higher in search results and gets you cheaper leads.
          </p>
        </div>

        {/* Breakdown */}
        <h3 className="font-bold text-sm text-on-surface mb-3 uppercase tracking-wider pl-1">Score Breakdown</h3>
        
        <div className="space-y-4 mb-8">
          
          {/* Rating */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-yellow-600 fill-yellow-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-on-surface">Average Rating</h4>
                <p className="text-xs text-on-surface-variant font-medium mt-0.5">High impact on score</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-lg font-black text-on-surface">{rating}</span>
              <span className="text-xs text-on-surface-variant font-bold ml-1">/ 5.0</span>
            </div>
          </div>

          {/* Response Rate */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-on-surface">Response Rate</h4>
                <p className="text-xs text-on-surface-variant font-medium mt-0.5">Time to accept/reject leads</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-lg font-black text-on-surface">{responseRate}%</span>
            </div>
          </div>

          {/* Verifications */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-success" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-on-surface">Verifications</h4>
                <p className="text-xs text-on-surface-variant font-medium mt-0.5">Aadhaar, Trade, Bank</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-lg font-black text-on-surface">{verifications}</span>
              <span className="text-xs text-on-surface-variant font-bold ml-1">/ 3</span>
            </div>
          </div>

        </div>

        {/* Tips */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <TrendingUp className="w-16 h-16 text-primary" />
          </div>
          <h4 className="font-bold text-sm text-primary mb-2 relative z-10 flex items-center gap-2">
            <Info className="w-4 h-4" /> How to improve?
          </h4>
          <ul className="space-y-2 relative z-10">
            <li className="text-xs text-on-surface-variant font-medium leading-relaxed">• Always respond to leads within 30 minutes, even to pass.</li>
            <li className="text-xs text-on-surface-variant font-medium leading-relaxed">• Ask satisfied customers to leave a 5-star review.</li>
            <li className="text-xs text-on-surface-variant font-medium leading-relaxed">• Keep your service area and pricing accurate to avoid disputes.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
