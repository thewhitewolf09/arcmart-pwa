'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Star, MapPin, Receipt, Quote, MessageSquare } from 'lucide-react';

export default function JobDetail({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-bold text-on-surface leading-tight text-sm">Job {params.id}</h1>
            <p className="text-[10px] text-success font-bold uppercase tracking-widest flex items-center">
              <CheckCircle2 className="w-3 h-3 mr-1" /> Completed
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        {/* Earnings Card */}
        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-6 text-center mb-6">
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Total Earnings</p>
          <h2 className="text-4xl font-black text-primary mb-3">₹45,000</h2>
          <button className="px-4 py-2 bg-surface border border-outline-variant text-on-surface text-xs font-bold rounded-xl shadow-sm flex items-center justify-center mx-auto hover:bg-surface-variant transition">
            <Receipt className="w-4 h-4 mr-2" /> Download Receipt
          </button>
        </div>

        {/* Client & Requirement Info */}
        <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Job Details</h3>
        <div className="glass-card border border-outline-variant rounded-2xl p-4 shadow-sm mb-6 space-y-4">
          <div>
            <h4 className="font-bold text-sm text-on-surface mb-1">Full House Painting</h4>
            <div className="flex items-center text-xs font-semibold text-on-surface-variant">
              <MapPin className="w-3.5 h-3.5 mr-1" /> Sector 50, Noida • Amit V.
            </div>
          </div>
          <div className="border-t border-outline-variant pt-3">
            <p className="text-xs text-on-surface-variant font-semibold mb-1">Completed On</p>
            <p className="text-sm font-bold text-on-surface">12 October 2026</p>
          </div>
        </div>

        {/* Rating & Review */}
        <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Client Feedback</h3>
        <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            ))}
          </div>
          <p className="text-sm text-on-surface italic leading-relaxed relative z-10 pl-2 border-l-2 border-yellow-500/50">
            "Excellent work by Arun and his team. They finished the painting two days ahead of schedule and left the house completely spotless. Highly recommended!"
          </p>
          
          <button className="mt-4 w-full py-3 bg-surface border border-outline-variant rounded-xl flex items-center justify-center text-on-surface text-xs font-bold hover:bg-surface-variant transition">
            <MessageSquare className="w-4 h-4 mr-2" /> Reply to Review
          </button>
        </div>
      </div>

    </div>
  );
}
