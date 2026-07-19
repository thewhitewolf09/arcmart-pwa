'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, X, Maximize2 } from 'lucide-react';

export default function AllPhotosScreen({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&q=80',
    'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=500&q=80',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&q=80',
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface">Gallery ({photos.length})</span>
        </div>
      </div>

      <div className="flex-1 p-4 pb-24">
        <div className="grid grid-cols-2 gap-3">
          {photos.map((src, idx) => (
            <div 
              key={idx} 
              onClick={() => setLightboxIndex(idx)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img src={src} alt={`Portfolio ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col animate-fade-in">
          <div className="p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
            <p className="text-white font-bold text-sm">{lightboxIndex + 1} / {photos.length}</p>
            <button onClick={() => setLightboxIndex(null)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          
          <div className="flex-1 flex items-center justify-center p-4">
            <img 
              src={photos[lightboxIndex]} 
              alt="Lightbox view" 
              className="max-w-full max-h-[80vh] object-contain rounded-lg animate-scale-in"
            />
          </div>

          <div className="p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-center space-x-4">
            <button 
              onClick={() => setLightboxIndex(prev => prev! > 0 ? prev! - 1 : photos.length - 1)}
              className="px-6 py-3 bg-white/10 text-white font-bold rounded-full backdrop-blur-md hover:bg-white/20 transition"
            >
              Previous
            </button>
            <button 
              onClick={() => setLightboxIndex(prev => prev! < photos.length - 1 ? prev! + 1 : 0)}
              className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-white/90 transition"
            >
              Next
            </button>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .animate-scale-in { animation: scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}} />
    </div>
  );
}
