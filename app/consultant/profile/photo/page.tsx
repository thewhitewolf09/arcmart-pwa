'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Camera, Upload, Trash2, CheckCircle2 } from 'lucide-react';

export default function EditConsultantPhoto() {
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [photoUrl, setPhotoUrl] = useState('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300');

  if (saved) {
    return (
      <div className="flex-1 flex flex-col min-h-screen bg-success/5 justify-center p-5">
        <div className="bg-surface border border-outline-variant rounded-3xl p-8 text-center shadow-xl">
          <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>
          <h1 className="text-2xl font-black text-on-surface mb-2">Photo Updated</h1>
          <p className="text-sm text-on-surface-variant mb-8">
            Your profile photo has been successfully changed.
          </p>
          <button 
            onClick={() => router.back()}
            className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

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

      <div className="flex-1 p-5 pb-32 flex flex-col items-center">
        
        <p className="text-sm text-on-surface-variant text-center mb-8">
          Upload a clear, professional photo. This builds trust with buyers and sellers.
        </p>

        {/* Current Photo Preview */}
        <div className="relative mb-10">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-surface shadow-xl bg-surface-variant flex items-center justify-center">
            {photoUrl ? (
              <img src={photoUrl} alt="Profile Preview" className="w-full h-full object-cover" />
            ) : (
              <Camera className="w-12 h-12 text-outline" />
            )}
          </div>
          <button className="absolute bottom-2 right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/40 border-4 border-surface hover:scale-105 transition">
            <Camera className="w-5 h-5" />
          </button>
        </div>

        {/* Upload Actions */}
        <div className="w-full space-y-4">
          <button className="w-full py-4 bg-primary/10 text-primary border border-primary/20 font-bold rounded-2xl flex items-center justify-center hover:bg-primary/20 transition">
            <Upload className="w-5 h-5 mr-2" /> Upload from Gallery
          </button>

          {photoUrl && (
            <button 
              onClick={() => setPhotoUrl('')}
              className="w-full py-4 bg-surface border border-outline-variant text-error font-bold rounded-2xl flex items-center justify-center hover:bg-error/5 transition"
            >
              <Trash2 className="w-5 h-5 mr-2" /> Remove Photo
            </button>
          )}
        </div>

      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => setSaved(true)}
          disabled={!photoUrl}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition disabled:opacity-50 disabled:shadow-none"
        >
          Save Photo
        </button>
      </div>
    </div>
  );
}
