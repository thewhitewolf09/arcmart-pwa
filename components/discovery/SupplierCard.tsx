'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useConnect } from '../../context/ConnectContext';

export default function SupplierCard({ 
  id, 
  name, 
  distance, 
  rating, 
  reviews, 
  priceRange, 
  tags, 
  image,
  selectionMode = false,
  isSelected = false,
  onToggleSelection
}: any) {
  const router = useRouter();
  const { openConnect } = useConnect();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-surface-container-lowest border rounded-[24px] p-5 shadow-sm relative overflow-hidden transition-colors ${
        isSelected ? 'border-primary ring-1 ring-primary' : 'border-outline-variant'
      }`}
    >
      {/* Selection Checkbox */}
      {selectionMode && (
        <div 
          onClick={onToggleSelection}
          className="absolute top-4 right-4 z-10 w-6 h-6 rounded border border-outline-variant flex items-center justify-center cursor-pointer transition-colors"
          style={{ backgroundColor: isSelected ? 'var(--primary)' : 'transparent', borderColor: isSelected ? 'var(--primary)' : 'var(--outline-variant)' }}
        >
          {isSelected && <span className="material-symbols-outlined text-white text-[16px]">check</span>}
        </div>
      )}

      <div className="flex gap-4 mb-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-surface-container">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="material-symbols-outlined text-outline">storefront</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center pr-8">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-headline-md text-[18px] text-on-surface">{name}</h3>
              <p className="font-body-sm text-on-surface-variant mt-0.5">{distance} {priceRange ? `• ${priceRange}` : ''}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-1 mt-2">
            <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="font-label-md font-semibold">{rating}</span>
            <span className="font-label-sm text-on-surface-variant">({reviews} reviews)</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags && tags.map((tag: string, index: number) => (
          <span key={index} className="px-2 py-1 bg-surface-container rounded-md font-label-sm text-on-surface-variant">
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      {!selectionMode && (
        <div className="flex gap-2">
          <button onClick={() => router.push(`/profile/supplier/${id || '1'}`)} className="flex-1 bg-surface-container hover:bg-surface-container-high text-on-surface py-3 rounded-xl font-label-md flex items-center justify-center gap-2 transition-colors active:scale-95">
            <span className="material-symbols-outlined text-[18px]">storefront</span>
            View Shop
          </button>
          <button 
            onClick={() => openConnect('supplier', id || '1', name)}
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
