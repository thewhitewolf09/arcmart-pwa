'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useConnect } from '../../context/ConnectContext';

export default function ProfessionalCard({ 
  id, 
  name, 
  distance, 
  rating, 
  jobs, 
  verified, 
  image,
  compareMode = false,
  isSelectedForCompare = false,
  onToggleCompare
}: any) {
  const router = useRouter();
  const { openConnect } = useConnect();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-surface-container-lowest border rounded-[24px] p-5 shadow-sm relative overflow-hidden transition-colors ${
        isSelectedForCompare ? 'border-primary ring-1 ring-primary' : 'border-outline-variant'
      }`}
    >
      {/* Compare Checkbox */}
      {compareMode && (
        <div 
          onClick={onToggleCompare}
          className="absolute top-4 right-4 z-10 w-6 h-6 rounded border border-outline-variant flex items-center justify-center cursor-pointer transition-colors"
          style={{ backgroundColor: isSelectedForCompare ? 'var(--primary)' : 'transparent', borderColor: isSelectedForCompare ? 'var(--primary)' : 'var(--outline-variant)' }}
        >
          {isSelectedForCompare && <span className="material-symbols-outlined text-white text-[16px]">check</span>}
        </div>
      )}

      <div className="flex gap-4 mb-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-surface-container">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="material-symbols-outlined text-outline">person</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-start justify-between">
            <div className="pr-8">
              <h3 className="font-headline-md text-[18px] text-on-surface flex items-center gap-2">
                {name}
                {verified && (
                  <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                )}
              </h3>
              <p className="font-body-sm text-on-surface-variant mt-0.5">{distance}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4 px-2">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 text-on-surface">
            <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="font-label-md font-semibold">{rating}</span>
          </div>
          <span className="font-label-sm text-on-surface-variant text-[10px] uppercase">Rating</span>
        </div>
        <div className="w-[1px] h-8 bg-outline-variant/30"></div>
        <div className="flex flex-col items-center">
          <span className="font-label-md font-semibold text-on-surface">{jobs}</span>
          <span className="font-label-sm text-on-surface-variant text-[10px] uppercase">Jobs Done</span>
        </div>
        <div className="w-[1px] h-8 bg-outline-variant/30"></div>
        <div className="flex flex-col items-center">
          <span className="font-label-md font-semibold text-on-surface">3 hrs</span>
          <span className="font-label-sm text-on-surface-variant text-[10px] uppercase">Resp. Time</span>
        </div>
      </div>

      {/* Action Buttons */}
      {!compareMode && (
        <div className="flex gap-2">
          <button onClick={() => router.push(`/profile/professional/${id || '1'}`)} className="flex-1 bg-surface-container hover:bg-surface-container-high text-on-surface py-3 rounded-xl font-label-md flex items-center justify-center gap-2 transition-colors active:scale-95">
            <span className="material-symbols-outlined text-[18px]">person</span>
            Profile
          </button>
          <button 
            onClick={() => openConnect('professional', id || '1', name)}
            className="flex-1 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] py-3 rounded-xl font-label-md flex items-center justify-center gap-2 transition-colors active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            WhatsApp
          </button>
        </div>
      )}
    </motion.div>
  );
}
