'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Image as ImageIcon, Camera, UploadCloud, X, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function AddPhotos() {
  const router = useRouter();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [photoType, setPhotoType] = useState<'shop' | 'product'>('shop');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const simulateSelection = () => {
    setSelectedPhoto('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80');
  };

  const handleUpload = () => {
    setIsUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          router.back();
        }, 500);
      }
    }, 200);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Upload Photos</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        
        {/* Photo Type Selector */}
        <div className="mb-6">
          <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-3 block">
            What are you uploading?
          </label>
          <div className="flex p-1 bg-surface-variant rounded-xl">
            <button 
              onClick={() => setPhotoType('shop')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${photoType === 'shop' ? 'bg-surface text-on-surface shadow-sm' : 'text-on-surface-variant'}`}
            >
              Shop Photo
            </button>
            <button 
              onClick={() => setPhotoType('product')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${photoType === 'product' ? 'bg-surface text-on-surface shadow-sm' : 'text-on-surface-variant'}`}
            >
              Product Photo
            </button>
          </div>
        </div>

        {/* Upload Area */}
        {!selectedPhoto ? (
          <div className="space-y-4">
            <button 
              onClick={simulateSelection}
              className="w-full glass-card rounded-2xl border-2 border-dashed border-outline-variant p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-variant transition active:scale-[0.98]"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ImageIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-on-surface text-base mb-1">Choose from Gallery</h3>
              <p className="text-xs text-on-surface-variant">JPG, PNG, up to 5MB</p>
            </button>

            <button 
              onClick={simulateSelection}
              className="w-full glass-card rounded-2xl border-2 border-dashed border-outline-variant p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-variant transition active:scale-[0.98]"
            >
              <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center mb-4">
                <Camera className="w-7 h-7 text-secondary-dark" />
              </div>
              <h3 className="font-bold text-on-surface text-base mb-1">Take a Photo</h3>
              <p className="text-xs text-on-surface-variant">Use your camera</p>
            </button>
          </div>
        ) : (
          <div className="relative rounded-2xl overflow-hidden border border-outline-variant shadow-sm bg-surface-variant aspect-[4/3]">
            <img src={selectedPhoto} alt="Selected" className="w-full h-full object-cover" />
            
            {!isUploading && (
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-surface/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm text-on-surface"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {isUploading && (
              <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm flex flex-col items-center justify-center p-6">
                {uploadProgress < 100 ? (
                  <>
                    <div className="w-full bg-outline-variant rounded-full h-2 mb-4 overflow-hidden">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <p className="font-bold text-sm text-on-surface">Uploading... {uploadProgress}%</p>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-12 h-12 text-success mb-2 animate-in zoom-in" />
                    <p className="font-bold text-sm text-success">Upload Complete!</p>
                  </>
                )}
              </div>
            )}
          </div>
        )}

      </div>

      {/* Fixed Bottom Action Bar */}
      {selectedPhoto && !isUploading && (
        <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30 animate-in slide-in-from-bottom-full duration-300">
          <button 
            onClick={handleUpload}
            className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
          >
            <UploadCloud className="w-5 h-5 mr-2" /> Upload Photo
          </button>
        </div>
      )}
    </div>
  );
}
