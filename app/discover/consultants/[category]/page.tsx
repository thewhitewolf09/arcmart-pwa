'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import FilterSortSheet from '../../../../components/discovery/FilterSortSheet';
import { useConnect } from '../../../../context/ConnectContext';

export default function ConsultantListPage() {
  const params = useParams();
  const router = useRouter();
  const category = (params.category as string) || 'Consultants';
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Capitalize category name
  const title = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');

  // Mock empty state
  const isEmpty = category === 'legal-advisors';

  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <div className="fixed inset-0 blueprint-grid pointer-events-none z-0 opacity-10"></div>

      {/* Header */}
      <header className="pt-safe px-4 pt-4 pb-4 bg-surface/90 backdrop-blur-md border-b border-outline-variant shadow-sm flex items-center gap-3 sticky top-0 z-20">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-highest transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined text-on-surface">arrow_back</span>
        </button>
        <div className="flex-1">
          <h1 className="font-headline-md text-[20px]">{title}</h1>
          <p className="font-label-sm text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">location_on</span>
            Sector 18, Noida
          </p>
        </div>
      </header>

      {/* Filter & Sort Bar */}
      <div className="px-4 py-3 bg-surface/95 backdrop-blur-md sticky top-[calc(env(safe-area-inset-top)+72px)] z-20 flex gap-2 overflow-x-auto no-scrollbar border-b border-outline-variant/30">
        <button 
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/50 flex-shrink-0 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[18px]">tune</span>
          <span className="font-label-md">Filters</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/50 flex-shrink-0 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
          <span className="font-label-md text-primary">Verified</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/50 flex-shrink-0 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[18px]">sort</span>
          <span className="font-label-md">Top Rated</span>
        </button>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-4 py-4 relative z-10 space-y-4">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center pt-20 pb-10 text-center animate-in fade-in duration-300">
            <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[40px] text-outline">search_off</span>
            </div>
            <h2 className="font-headline-md text-[20px] mb-2">No {title} found</h2>
            <p className="font-body-md text-on-surface-variant max-w-[280px]">
              We couldn't find any {title} near you. Try expanding your search area.
            </p>
          </div>
        ) : (
          <>
            <ConsultantCard 
              id="1"
              name="Ar. Ananya Singh"
              distance="1.2 km away"
              rating={4.9}
              projects={45}
              verified={true}
              title="Principal Architect"
              image="https://ui-avatars.com/api/?name=Ananya+Singh&background=random&size=128"
            />
            <ConsultantCard 
              id="2"
              name="Design Matrix Studio"
              distance="3.5 km away"
              rating={4.8}
              projects={112}
              verified={true}
              title="Architecture Firm"
              image="https://ui-avatars.com/api/?name=Design+Matrix&background=random&size=128"
            />
          </>
        )}
      </main>

      <FilterSortSheet 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        type="services" 
      />
    </div>
  );
}

function ConsultantCard({ id, name, distance, rating, projects, verified, title, image }: any) {
  const router = useRouter();
  const { openConnect } = useConnect();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-surface-container-lowest border border-outline-variant rounded-[24px] p-5 shadow-sm relative overflow-hidden"
    >
      <div className="flex gap-4 mb-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="material-symbols-outlined text-outline">engineering</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-headline-md text-[18px] text-on-surface flex items-center gap-2">
                {name}
                {verified && (
                  <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                )}
              </h3>
              <p className="font-body-sm text-primary font-medium mt-0.5">{title}</p>
              <p className="font-body-sm text-on-surface-variant">{distance}</p>
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
          <span className="font-label-md font-semibold text-on-surface">{projects}</span>
          <span className="font-label-sm text-on-surface-variant text-[10px] uppercase">Projects</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button onClick={() => router.push(`/profile/consultant/${id || '1'}`)} className="flex-1 bg-surface-container hover:bg-surface-container-high text-on-surface py-3 rounded-xl font-label-md flex items-center justify-center gap-2 transition-colors active:scale-95">
          <span className="material-symbols-outlined text-[18px]">assignment_ind</span>
          Profile
        </button>
        <button 
          onClick={() => openConnect('consultant', id || '1', name)}
          className="flex-1 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] py-3 rounded-xl font-label-md flex items-center justify-center gap-2 transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]">chat</span>
          WhatsApp
        </button>
      </div>
    </motion.div>
  );
}
