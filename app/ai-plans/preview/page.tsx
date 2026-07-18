'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AIPlansPreviewPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-on-surface flex flex-col pb-safe font-sans">
      
      <header className="px-4 py-4 bg-white/80 backdrop-blur-md border-b border-outline-variant/30 sticky top-0 z-30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -ml-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-headline-sm font-bold text-on-surface">Sample Plan</h1>
        </div>
        <div className="px-3 py-1 bg-primary/10 rounded-full">
          <span className="font-label-sm font-bold text-primary">Preview</span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto relative">
        {/* Mock Blueprint Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        ></div>

        <div className="p-6 relative z-10">
          <div className="text-center mb-6">
            <h2 className="font-headline-md font-bold text-on-surface mb-2">3BHK East Facing</h2>
            <p className="font-body-sm text-on-surface-variant uppercase tracking-widest">Generated in 12 seconds</p>
          </div>

          {/* SVG Mock Floor Plan Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border-2 border-outline-variant/50 rounded-2xl shadow-xl p-4 mb-8 relative aspect-[3/4]"
          >
            {/* Minimalist SVG representing a floor plan */}
            <svg viewBox="0 0 300 400" className="w-full h-full text-outline drop-shadow-sm">
              <rect x="10" y="10" width="280" height="380" fill="none" stroke="currentColor" strokeWidth="4" />
              
              {/* Rooms */}
              {/* Living */}
              <rect x="10" y="200" width="160" height="190" fill="#f8f9fa" stroke="currentColor" strokeWidth="2" />
              <text x="90" y="300" textAnchor="middle" fill="#5f6368" fontSize="12" fontWeight="bold">LIVING ROOM</text>
              <text x="90" y="315" textAnchor="middle" fill="#9aa0a6" fontSize="10">16' x 19'</text>
              
              {/* Master Bed */}
              <rect x="10" y="10" width="160" height="190" fill="#f8f9fa" stroke="currentColor" strokeWidth="2" />
              <text x="90" y="105" textAnchor="middle" fill="#5f6368" fontSize="12" fontWeight="bold">MASTER BEDROOM</text>
              <text x="90" y="120" textAnchor="middle" fill="#9aa0a6" fontSize="10">16' x 19'</text>

              {/* Kitchen */}
              <rect x="170" y="200" width="120" height="190" fill="#f8f9fa" stroke="currentColor" strokeWidth="2" />
              <text x="230" y="300" textAnchor="middle" fill="#5f6368" fontSize="12" fontWeight="bold">KITCHEN</text>
              <text x="230" y="315" textAnchor="middle" fill="#9aa0a6" fontSize="10">12' x 19'</text>

              {/* Bath/Stairs */}
              <rect x="170" y="10" width="120" height="190" fill="#f8f9fa" stroke="currentColor" strokeWidth="2" />
              <line x1="170" y1="105" x2="290" y2="105" stroke="currentColor" strokeWidth="2" />
              <text x="230" y="60" textAnchor="middle" fill="#5f6368" fontSize="12" fontWeight="bold">BATH</text>
              <text x="230" y="155" textAnchor="middle" fill="#5f6368" fontSize="12" fontWeight="bold">STAIRS</text>

              {/* Doors/Openings (White rectangles covering strokes) */}
              <rect x="150" y="100" width="40" height="10" fill="white" />
              <rect x="150" y="250" width="40" height="10" fill="white" />
              <rect x="90" y="190" width="40" height="20" fill="white" />
            </svg>

            {/* Floating Annotations */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-[25%] left-[25%] bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="font-bold text-[14px]">1</span>
            </motion.div>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-[35%] right-[20%] bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="font-bold text-[14px]">2</span>
            </motion.div>
          </motion.div>

          {/* Legend/Features */}
          <div className="space-y-4">
            <h3 className="font-label-lg font-bold text-on-surface">AI Highlights</h3>
            
            <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-outline-variant/30 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-bold text-primary">1</span>
              </div>
              <div>
                <h4 className="font-label-md font-bold text-on-surface mb-1">Vastu Compliant Placement</h4>
                <p className="font-body-sm text-on-surface-variant">Master bedroom located in the South-West corner as per Vastu guidelines.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-outline-variant/30 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-bold text-primary">2</span>
              </div>
              <div>
                <h4 className="font-label-md font-bold text-on-surface mb-1">Open Plan Kitchen</h4>
                <p className="font-body-sm text-on-surface-variant">Seamless flow from the living area to a modern modular kitchen space.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Action */}
      <div className="p-4 bg-white border-t border-outline-variant/30 sticky bottom-0 z-30 pb-24">
        <button 
          onClick={() => router.push('/ai-plans/joined')}
          className="w-full bg-black text-white py-4 rounded-full font-label-lg font-bold shadow-md flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          Get Early Access
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
