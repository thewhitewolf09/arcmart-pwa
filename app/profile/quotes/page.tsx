'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function MyQuotesPage() {
  const router = useRouter();

  // Mock data for quotes
  const quotes = [
    {
      id: 'REQ-001',
      date: 'Today, 10:30 AM',
      description: 'Need 50 bags of Ultratech Cement and 100 sq ft of Kajaria floor tiles.',
      status: 'active', // active, closed
      bidsReceived: 3,
      suppliersContacted: 5,
    },
    {
      id: 'REQ-002',
      date: '12 Jul 2026, 02:15 PM',
      description: 'Looking for 20 liters of Asian Paints Royal (White) with primer.',
      status: 'closed',
      bidsReceived: 2,
      suppliersContacted: 2,
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pb-safe">
      <header className="px-4 py-4 bg-surface border-b border-outline-variant/30 sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -ml-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="font-headline-sm font-bold text-on-surface leading-tight">
              My Quote Requests
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="space-y-4">
          {quotes.map((quote, index) => (
            <motion.div 
              key={quote.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 shadow-sm relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="font-label-sm text-on-surface-variant block mb-1">{quote.date}</span>
                  <span className="font-label-md font-bold text-on-surface">{quote.id}</span>
                </div>
                <span className={`px-2 py-1 rounded-md font-label-sm font-bold uppercase tracking-wider ${
                  quote.status === 'active' 
                    ? 'bg-primary/10 text-primary'
                    : 'bg-surface-container-high text-on-surface-variant'
                }`}>
                  {quote.status}
                </span>
              </div>
              
              <p className="font-body-md text-on-surface mb-4 line-clamp-2">
                "{quote.description}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/50">
                <div className="flex flex-col">
                  <span className="font-label-sm text-on-surface-variant">Suppliers Contacted</span>
                  <span className="font-label-lg font-bold text-on-surface">{quote.suppliersContacted}</span>
                </div>
                <div className="w-[1px] h-8 bg-outline-variant/50"></div>
                <div className="flex flex-col text-right">
                  <span className="font-label-sm text-on-surface-variant">Bids Received</span>
                  <span className={`font-label-lg font-bold ${quote.bidsReceived > 0 ? 'text-primary' : 'text-on-surface'}`}>
                    {quote.bidsReceived}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 flex gap-2">
                <button 
                  onClick={() => router.push(`/profile/quotes/${quote.id}`)}
                  className="flex-1 bg-surface-container text-on-surface py-3 rounded-xl font-label-md active:scale-95 transition-transform"
                >
                  View Details
                </button>
                {quote.status === 'active' && quote.bidsReceived > 0 && (
                  <button 
                    onClick={() => router.push(`/profile/quotes/${quote.id}`)}
                    className="flex-1 bg-primary text-on-primary py-3 rounded-xl font-label-md flex items-center justify-center gap-1 active:scale-95 transition-transform shadow-sm"
                  >
                    Review Bids
                  </button>
                )}
              </div>
            </motion.div>
          ))}
          
          {quotes.length === 0 && (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-[32px] text-on-surface-variant">request_quote</span>
              </div>
              <h3 className="font-headline-sm text-on-surface mb-2">No quotes requested yet</h3>
              <p className="font-body-md text-on-surface-variant max-w-[250px] mx-auto">
                Select multiple suppliers to request quotes simultaneously for your building materials.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
