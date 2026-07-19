'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Camera, Upload, CheckCircle2, User } from 'lucide-react';

export default function ProfilePhoto() {
  const router = useRouter();
  const [photoSelected, setPhotoSelected] = useState(false);

  const handleSelect = () => {
    // Mock selection
    setPhotoSelected(true);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Profile Photo</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-5 pb-32">
        <div className="text-center mb-8">
          <h2 className="text-xl font-black text-on-surface mb-2">Put a face to your name</h2>
          <p className="text-xs text-on-surface-variant max-w-[250px] mx-auto">
            Homeowners are 3x more likely to contact pros who have a clear profile picture.
          </p>
        </div>

        {/* Photo Preview Area */}
        <div className="w-48 h-48 rounded-full bg-surface-variant border-4 border-outline-variant flex items-center justify-center mb-8 relative overflow-hidden shadow-lg">
          {photoSelected ? (
            <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary text-6xl font-black">
              AS
            </div>
          ) : (
            <User className="w-20 h-20 text-on-surface-variant/50" />
          )}
          
          {photoSelected && (
            <div className="absolute inset-0 bg-success/20 flex items-center justify-center opacity-0 hover:opacity-100 transition">
              <CheckCircle2 className="w-10 h-10 text-success" />
            </div>
          )}
        </div>

        <div className="w-full max-w-sm space-y-3">
          <button 
            onClick={handleSelect}
            className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-md hover:bg-primary/90 transition"
          >
            <Camera className="w-5 h-5 mr-2" /> Take Photo
          </button>
          
          <button 
            onClick={handleSelect}
            className="w-full py-4 bg-surface border border-outline-variant text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-surface-variant transition"
          >
            <Upload className="w-5 h-5 mr-2" /> Choose from Gallery
          </button>
        </div>
      </div>
      
      {photoSelected && (
        <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30 animate-in slide-in-from-bottom">
          <button 
            onClick={() => router.back()}
            className="w-full py-4 bg-success text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-success-dark transition"
          >
            <CheckCircle2 className="w-5 h-5 mr-2" /> Upload Photo
          </button>
        </div>
      )}
    </div>
  );
}
