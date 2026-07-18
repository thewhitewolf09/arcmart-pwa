'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

function NewQuoteRequestPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supplierIds = searchParams.get('supplierIds')?.split(',') || [];
  
  const [description, setDescription] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock data for the suppliers based on the IDs
  const mockSuppliers = {
    '1': { id: '1', name: 'Sharma Ceramics', category: 'Tiles & Sanitaryware' },
    '2': { id: '2', name: 'BuildMart', category: 'Hardware & Cement' },
    '3': { id: '3', name: 'City Paints', category: 'Paints & Primers' },
  };

  const selectedSuppliers = supplierIds.map(id => (mockSuppliers as any)[id]).filter(Boolean);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Redirect after success
      setTimeout(() => {
        router.push('/profile/quotes');
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6"
        >
          <span className="material-symbols-outlined text-[48px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </motion.div>
        <h2 className="font-headline-md mb-2">Quote Request Sent!</h2>
        <p className="font-body-md text-on-surface-variant max-w-[280px]">
          Your requirement has been sent to {selectedSuppliers.length} suppliers. You'll receive their bids shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col relative pb-safe">
      {/* Header */}
      <header className="pt-safe px-4 pt-4 pb-4 bg-surface border-b border-outline-variant/30 flex items-center gap-3 sticky top-0 z-20">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors -ml-2"
        >
          <span className="material-symbols-outlined text-on-surface">arrow_back</span>
        </button>
        <h1 className="font-headline-sm flex-1">Request Quote</h1>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="font-label-lg font-bold text-on-surface mb-2">Selected Suppliers ({selectedSuppliers.length})</h2>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {selectedSuppliers.map((supplier) => (
              <div key={supplier.id} className="bg-surface-container-low border border-outline-variant/50 rounded-xl p-3 flex-shrink-0 w-[160px]">
                <h3 className="font-label-md font-bold truncate">{supplier.name}</h3>
                <p className="font-label-sm text-on-surface-variant truncate">{supplier.category}</p>
              </div>
            ))}
            {selectedSuppliers.length === 0 && (
              <div className="p-4 bg-error/10 text-error rounded-xl font-body-sm w-full">
                No suppliers selected. Please go back and select suppliers.
              </div>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-label-md text-on-surface mb-2">Requirement Details <span className="text-error">*</span></label>
            <textarea 
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="E.g. Need 50 bags of Ultratech Cement and 100 sq ft of Kajaria floor tiles. Please provide best price including delivery to Sector 18."
              className="w-full h-32 bg-surface-container-lowest border border-outline-variant rounded-xl p-4 font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
            />
          </div>

          <div>
            <label className="block font-label-md text-on-surface mb-2">Expected Delivery Date</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">calendar_today</span>
              <input 
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-3 pl-12 pr-4 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block font-label-md text-on-surface mb-2">Attach Images or List (Optional)</label>
            <div className="w-full h-24 border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center text-on-surface-variant bg-surface-container-lowest cursor-pointer hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined mb-1">upload_file</span>
              <span className="font-label-sm">Tap to upload files</span>
            </div>
          </div>
        </form>
      </main>

      <div className="p-4 bg-surface border-t border-outline-variant/30 sticky bottom-0 z-20">
        <button 
          onClick={handleSubmit}
          disabled={isSubmitting || selectedSuppliers.length === 0 || !description}
          className={`w-full py-4 rounded-full font-label-lg shadow-sm flex items-center justify-center gap-2 transition-all ${
            isSubmitting || selectedSuppliers.length === 0 || !description
              ? 'bg-surface-container text-on-surface-variant opacity-80 cursor-not-allowed'
              : 'bg-primary text-on-primary active:scale-95'
          }`}
        >
          {isSubmitting ? (
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full"
            />
          ) : (
            <>
              <span className="material-symbols-outlined">send</span>
              Send Request to {selectedSuppliers.length} Suppliers
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function NewQuoteRequestPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <NewQuoteRequestPageContent />
    </Suspense>
  );
}
