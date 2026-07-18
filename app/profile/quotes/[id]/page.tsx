'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useConnect } from '../../../../context/ConnectContext';

export default function QuoteDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { openConnect } = useConnect();
  const { id } = params;

  // Mock data for the specific quote request
  const quote = {
    id: id,
    date: 'Today, 10:30 AM',
    description: 'Need 50 bags of Ultratech Cement and 100 sq ft of Kajaria floor tiles.',
    status: 'active', // active, closed
    deliveryDate: '25 Jul 2026',
    suppliersContacted: 5,
    bids: [
      {
        id: 'b1',
        supplierName: 'Sharma Ceramics',
        supplierId: 's1',
        price: '₹22,500',
        deliveryTime: 'Same day (by 6 PM)',
        notes: 'Price includes delivery charges to Sector 18. Stock is available.',
        rating: 4.8,
        status: 'pending' // pending, accepted, rejected
      },
      {
        id: 'b2',
        supplierName: 'BuildMart',
        supplierId: 's2',
        price: '₹23,200',
        deliveryTime: 'Tomorrow morning',
        notes: 'Cement is fresh stock. Kajaria tiles model XZ200 included.',
        rating: 4.9,
        status: 'pending'
      }
    ]
  };

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
          <div className="flex-1">
            <h1 className="font-headline-sm font-bold text-on-surface leading-tight">
              Request {quote.id}
            </h1>
          </div>
          <span className={`px-2 py-1 rounded-md font-label-sm font-bold uppercase tracking-wider ${
            quote.status === 'active' 
              ? 'bg-primary/10 text-primary'
              : 'bg-surface-container-high text-on-surface-variant'
          }`}>
            {quote.status}
          </span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        {/* Request Summary */}
        <div className="bg-surface p-4 border-b border-outline-variant/30">
          <div className="flex items-center gap-2 mb-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            <span className="font-label-sm">{quote.date}</span>
          </div>
          
          <p className="font-body-md text-on-surface mb-4">
            "{quote.description}"
          </p>

          <div className="flex gap-4">
            <div className="flex-1 bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-3">
              <span className="font-label-sm text-on-surface-variant block mb-1">Pref. Delivery</span>
              <span className="font-label-md font-bold text-on-surface">{quote.deliveryDate}</span>
            </div>
            <div className="flex-1 bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-3">
              <span className="font-label-sm text-on-surface-variant block mb-1">Contacted</span>
              <span className="font-label-md font-bold text-on-surface">{quote.suppliersContacted} Suppliers</span>
            </div>
          </div>
        </div>

        {/* Bids Section */}
        <div className="p-4">
          <h2 className="font-headline-sm font-bold text-on-surface mb-4 flex items-center gap-2">
            Responses <span className="bg-primary text-on-primary rounded-full w-6 h-6 flex items-center justify-center text-[12px]">{quote.bids.length}</span>
          </h2>

          <div className="space-y-4">
            {quote.bids.map((bid, index) => (
              <motion.div 
                key={bid.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface-container-lowest border border-primary/20 rounded-2xl p-4 shadow-sm relative overflow-hidden"
              >
                {/* Supplier Info */}
                <div className="flex justify-between items-start mb-3 border-b border-outline-variant/50 pb-3">
                  <div>
                    <h3 className="font-label-lg font-bold text-on-surface mb-1">{bid.supplierName}</h3>
                    <div className="flex items-center font-label-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px] text-primary mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      {bid.rating} Rating
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-headline-sm font-bold text-primary block">{bid.price}</span>
                    <span className="font-label-sm text-on-surface-variant">Total Est.</span>
                  </div>
                </div>

                {/* Bid Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex gap-2 items-start">
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant mt-0.5">local_shipping</span>
                    <div>
                      <span className="font-label-sm font-bold text-on-surface block">Delivery Time</span>
                      <span className="font-body-sm text-on-surface-variant">{bid.deliveryTime}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant mt-0.5">info</span>
                    <div>
                      <span className="font-label-sm font-bold text-on-surface block">Notes</span>
                      <span className="font-body-sm text-on-surface-variant">{bid.notes}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4 pt-4 border-t border-outline-variant/30">
                  <button 
                    onClick={() => openConnect('supplier', bid.supplierId, bid.supplierName)}
                    className="flex-1 bg-[#25D366]/10 text-[#25D366] py-3 rounded-xl font-label-md font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    Chat
                  </button>
                  <button className="flex-1 bg-primary text-on-primary py-3 rounded-xl font-label-md font-bold active:scale-95 transition-transform shadow-sm">
                    Accept Bid
                  </button>
                </div>
              </motion.div>
            ))}

            {quote.bids.length === 0 && (
              <div className="text-center py-10 bg-surface-container-lowest rounded-2xl border border-outline-variant/50">
                <span className="material-symbols-outlined text-[32px] text-on-surface-variant mb-2">hourglass_empty</span>
                <h3 className="font-label-lg font-bold text-on-surface">Waiting for responses</h3>
                <p className="font-body-sm text-on-surface-variant max-w-[200px] mx-auto mt-1">
                  Suppliers are reviewing your requirement and will post their best prices soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
