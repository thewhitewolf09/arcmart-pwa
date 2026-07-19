'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, UploadCloud, FileType, X } from 'lucide-react';

export default function SubmitTicket() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/support/ticket/success');
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface">Submit a Ticket</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        <div className="mb-6">
          <h1 className="text-2xl font-black text-on-surface mb-2">How can we help?</h1>
          <p className="text-sm text-on-surface-variant">Please describe your issue in detail so our support team can assist you efficiently.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Category</label>
            <select className="w-full h-12 px-4 bg-surface-container rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm font-medium text-on-surface appearance-none">
              <option value="" disabled selected>Select issue category</option>
              <option>Account & Profile Verification</option>
              <option>Payments & Billing</option>
              <option>Lead Quality / Disputes</option>
              <option>Technical Issue / Bug</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Subject</label>
            <input 
              type="text" 
              placeholder="Brief summary of the issue"
              required
              className="w-full h-12 px-4 bg-surface-container rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm font-medium text-on-surface"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Description</label>
            <textarea 
              placeholder="Please provide all relevant details, booking IDs, or error messages..."
              required
              rows={5}
              className="w-full p-4 bg-surface-container rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm font-medium text-on-surface resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Attachment (Optional)</label>
            
            {!file ? (
              <div className="border-2 border-dashed border-outline-variant rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-surface-container/30 hover:bg-surface-container/50 transition cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <UploadCloud className="w-6 h-6 text-primary" />
                </div>
                <p className="font-bold text-sm text-on-surface">Upload Screenshot</p>
                <p className="text-xs text-on-surface-variant mt-1">PNG, JPG, PDF up to 5MB</p>
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={(e) => e.target.files && setFile(e.target.files[0])} 
                  id="file-upload" 
                />
                <label htmlFor="file-upload" className="absolute inset-0 cursor-pointer" />
              </div>
            ) : (
              <div className="flex items-center justify-between p-3 border border-outline-variant rounded-xl bg-surface-container-highest">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileType className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface line-clamp-1">{file.name}</p>
                    <p className="text-[10px] font-medium text-on-surface-variant">{(file.size / 1024).toFixed(1)} KB</p>
                  </div>
                </div>
                <button type="button" onClick={() => setFile(null)} className="p-2 text-on-surface-variant hover:text-error transition">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full h-14 bg-primary text-white rounded-full font-bold shadow-md shadow-primary/20 flex items-center justify-center disabled:opacity-70 transition-all active:scale-95"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Submit Ticket'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
