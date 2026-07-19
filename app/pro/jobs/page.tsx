'use client';

import React from 'react';
import Link from 'next/link';
import { Search, CheckCircle2, ChevronRight, Star } from 'lucide-react';
import { Footer } from '../../../components/ui/Footer';

export default function JobsHistory() {
  const jobs = [
    { id: 'J-1042', name: 'Full House Painting', client: 'Amit V.', date: '12 Oct 2026', amount: '₹45,000', rating: 5 },
    { id: 'J-1038', name: 'Plumbing Repair', client: 'Neha M.', date: '10 Oct 2026', amount: '₹2,500', rating: 4 },
    { id: 'J-1025', name: 'Electrical Wiring', client: 'Suresh D.', date: '05 Oct 2026', amount: '₹12,000', rating: 5 },
    { id: 'J-1011', name: 'False Ceiling', client: 'Kiran P.', date: '28 Sep 2026', amount: '₹28,000', rating: 0 }, // no rating yet
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-5 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-on-surface">Job History</h1>
      </div>

      <div className="px-5 pt-4 pb-24">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search completed jobs..."
            className="w-full bg-surface-variant/50 border border-outline-variant rounded-2xl pl-12 pr-4 py-3.5 text-sm font-semibold text-on-surface focus:outline-none focus:border-primary transition"
          />
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-success-container/30 border border-success/20 rounded-2xl p-4 flex flex-col justify-center">
            <span className="text-2xl font-black text-success-dark">24</span>
            <span className="text-[10px] text-success-dark uppercase tracking-wider font-bold">Jobs Done</span>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4 flex flex-col justify-center">
            <span className="text-2xl font-black text-yellow-600 flex items-center">
              4.8 <Star className="w-4 h-4 ml-1 fill-yellow-500 text-yellow-500" />
            </span>
            <span className="text-[10px] text-yellow-700 uppercase tracking-wider font-bold">Avg Rating</span>
          </div>
        </div>

        <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Completed Jobs</h3>

        {/* List */}
        <div className="space-y-3">
          {jobs.map((job) => (
            <Link key={job.id} href={`/pro/jobs/${job.id}`} className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-sm text-on-surface">{job.name}</h4>
                  <span className="font-black text-primary text-sm">{job.amount}</span>
                </div>
                <div className="flex items-center text-xs text-on-surface-variant font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-success" />
                  {job.date} • {job.client}
                </div>
                
                {job.rating > 0 && (
                  <div className="flex items-center mt-2 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < job.rating ? 'fill-yellow-500 text-yellow-500' : 'text-outline-variant fill-outline-variant'}`} />
                    ))}
                  </div>
                )}
              </div>
              <ChevronRight className="w-5 h-5 text-outline shrink-0 ml-3" />
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
