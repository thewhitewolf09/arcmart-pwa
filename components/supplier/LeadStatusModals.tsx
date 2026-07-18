'use client';

import React, { useState } from 'react';
import { X, MessageSquare, CheckCircle2, ThumbsDown, ArrowRight, UploadCloud } from 'lucide-react';

interface LeadStatusModalsProps {
  isOpen: boolean;
  type: 'contacted' | 'converted' | 'not-relevant' | null;
  onClose: () => void;
}

export default function LeadStatusModals({ isOpen, type, onClose }: LeadStatusModalsProps) {
  const [orderValue, setOrderValue] = useState('');
  const [reason, setReason] = useState('price');

  if (!isOpen || !type) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="fixed bottom-0 left-0 w-full bg-surface rounded-t-[32px] z-[101] shadow-2xl p-6 pb-safe border-t border-outline-variant">
        
        {/* Handle */}
        <div className="w-12 h-1.5 bg-outline-variant rounded-full mx-auto mb-6" />

        {/* SUP-07 Mark Contacted */}
        {type === 'contacted' && (
          <div>
            <div className="w-14 h-14 rounded-full bg-secondary-container text-secondary flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-bold text-on-surface text-center mb-2">Mark as Contacted</h2>
            <p className="text-sm text-on-surface-variant text-center mb-6 px-4">
              Have you successfully established communication with this homeowner?
            </p>
            
            <div className="flex space-x-3">
              <button onClick={onClose} className="flex-1 py-4 bg-surface-variant text-on-surface font-bold rounded-xl border border-outline-variant hover:bg-outline-variant transition">
                Cancel
              </button>
              <button onClick={onClose} className="flex-1 py-4 bg-secondary text-white font-bold rounded-xl shadow-lg hover:bg-secondary/90 transition">
                Confirm
              </button>
            </div>
          </div>
        )}

        {/* SUP-08 Mark Converted */}
        {type === 'converted' && (
          <div>
            <div className="w-14 h-14 rounded-full bg-success-container text-success flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-bold text-on-surface text-center mb-2">Deal Won!</h2>
            <p className="text-sm text-on-surface-variant text-center mb-6 px-4">
              Congratulations! This helps us improve our matchmaking. Optional: What was the final order value?
            </p>
            
            <div className="mb-6 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold text-lg">₹</span>
              <input 
                type="number" 
                placeholder="e.g. 150000"
                value={orderValue}
                onChange={(e) => setOrderValue(e.target.value)}
                className="w-full pl-10 pr-4 py-4 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold text-lg focus:outline-none focus:ring-2 focus:ring-success/50 transition"
              />
            </div>
            
            <div className="mb-6">
              <button className="w-full flex items-center justify-center py-3 border-2 border-dashed border-outline-variant rounded-xl text-on-surface-variant hover:bg-surface-variant transition">
                <UploadCloud className="w-5 h-5 mr-2" />
                <span className="text-sm font-bold">Attach Invoice (Optional)</span>
              </button>
            </div>

            <div className="flex space-x-3">
              <button onClick={onClose} className="flex-1 py-4 bg-surface-variant text-on-surface font-bold rounded-xl border border-outline-variant hover:bg-outline-variant transition">
                Skip
              </button>
              <button onClick={onClose} className="flex-[2] py-4 bg-success text-white font-bold rounded-xl shadow-lg hover:bg-success/90 transition">
                Save Details
              </button>
            </div>
          </div>
        )}

        {/* SUP-09 Mark Not Relevant */}
        {type === 'not-relevant' && (
          <div>
            <div className="w-14 h-14 rounded-full bg-error-container text-error flex items-center justify-center mx-auto mb-4">
              <ThumbsDown className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-bold text-on-surface text-center mb-2">Not Relevant</h2>
            <p className="text-sm text-on-surface-variant text-center mb-6 px-4">
              Help us understand why this lead didn't work out.
            </p>
            
            <div className="space-y-3 mb-6">
              {[
                { id: 'price', label: 'Budget too low' },
                { id: 'distance', label: 'Too far away' },
                { id: 'unreachable', label: 'Could not contact' },
                { id: 'other', label: 'Other reason' }
              ].map((opt) => (
                <label key={opt.id} className={`flex items-center p-4 border rounded-xl cursor-pointer transition ${reason === opt.id ? 'border-error bg-error-container/30' : 'border-outline-variant bg-surface'}`}>
                  <input 
                    type="radio" 
                    name="reason" 
                    value={opt.id} 
                    checked={reason === opt.id}
                    onChange={() => setReason(opt.id)}
                    className="w-5 h-5 text-error focus:ring-error border-outline-variant accent-error" 
                  />
                  <span className="ml-3 font-semibold text-sm text-on-surface">{opt.label}</span>
                </label>
              ))}
            </div>

            <button onClick={onClose} className="w-full py-4 bg-error text-white font-bold rounded-xl shadow-lg hover:bg-error/90 transition">
              Submit Feedback
            </button>
          </div>
        )}

      </div>
    </>
  );
}
