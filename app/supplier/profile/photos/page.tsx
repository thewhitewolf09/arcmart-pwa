'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, GripVertical, Trash2, Camera, Plus } from 'lucide-react';
import { Reorder, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type Photo = {
  id: string;
  url: string;
  type: 'shop' | 'product';
};

const INITIAL_PHOTOS: Photo[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80', type: 'shop' },
  { id: '2', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80', type: 'product' },
  { id: '3', url: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400&q=80', type: 'product' },
];

export default function PhotoManager() {
  const router = useRouter();
  const [photos, setPhotos] = useState<Photo[]>(INITIAL_PHOTOS);

  const handleDelete = (id: string) => {
    setPhotos(photos.filter(p => p.id !== id));
  };

  const handleSave = () => {
    // Save logic
    router.back();
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Manage Photos</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-on-surface-variant leading-relaxed pr-4">
            Drag to reorder how photos appear on your profile. The first photo is your cover image.
          </p>
          <Link 
            href="/supplier/profile/photos/add" 
            className="shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-primary/20 transition"
          >
            <Plus className="w-5 h-5" />
          </Link>
        </div>

        {photos.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-surface-variant rounded-full flex items-center justify-center mx-auto mb-4 border border-outline-variant">
              <Camera className="w-8 h-8 text-on-surface-variant" />
            </div>
            <h3 className="text-lg font-bold text-on-surface mb-2">No photos yet</h3>
            <p className="text-sm text-on-surface-variant mb-6">Upload photos of your shop and products.</p>
            <Link 
              href="/supplier/profile/photos/add"
              className="inline-flex items-center px-4 py-2 bg-primary text-on-primary font-bold rounded-lg shadow-sm hover:bg-primary/90 transition"
            >
              <Plus className="w-4 h-4 mr-2" /> Add Photos
            </Link>
          </div>
        ) : (
          <Reorder.Group axis="y" values={photos} onReorder={setPhotos} className="space-y-3">
            <AnimatePresence>
              {photos.map((photo, index) => (
                <Reorder.Item 
                  key={photo.id} 
                  value={photo} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-surface glass-card rounded-xl border border-outline-variant p-3 flex items-center shadow-sm relative overflow-hidden"
                >
                  {index === 0 && (
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  )}
                  
                  {/* Drag Handle */}
                  <div className="px-2 text-outline hover:text-on-surface cursor-grab active:cursor-grabbing">
                    <GripVertical className="w-5 h-5" />
                  </div>
                  
                  {/* Photo Thumbnail */}
                  <div 
                    className="w-16 h-16 rounded-lg bg-surface-variant border border-outline-variant mx-3 overflow-hidden bg-cover bg-center shrink-0"
                    style={{ backgroundImage: `url(${photo.url})` }}
                  />
                  
                  {/* Info */}
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center mb-1">
                      <span className={`text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded border ${
                        photo.type === 'shop' 
                          ? 'bg-secondary-container text-secondary-dark border-secondary/20' 
                          : 'bg-primary/10 text-primary border-primary/20'
                      }`}>
                        {photo.type}
                      </span>
                      {index === 0 && (
                        <span className="text-[9px] uppercase tracking-widest font-bold text-primary ml-2">
                          Cover Photo
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Delete Button */}
                  <button 
                    onClick={() => handleDelete(photo.id)}
                    className="p-2 text-error/70 hover:text-error hover:bg-error/10 rounded-lg transition ml-2"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </Reorder.Item>
              ))}
            </AnimatePresence>
          </Reorder.Group>
        )}
      </div>

      {/* Fixed Bottom Action Bar */}
      {photos.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
          <button 
            onClick={handleSave}
            className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
          >
            <Check className="w-5 h-5 mr-2" /> Save Order
          </button>
        </div>
      )}
    </div>
  );
}
