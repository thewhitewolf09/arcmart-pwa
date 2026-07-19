'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Phone, MessageSquare, MapPin, Calendar, Wallet, CheckCircle2, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProLeadDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  
  // Mock data based on ID
  const isNew = params.id === 'L-1005';

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-bold text-on-surface leading-tight text-sm">Lead {params.id}</h1>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold">{isNew ? 'New Lead' : 'Contacted'}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Client Header */}
        <div className="bg-primary/5 p-6 border-b border-primary/10 flex items-center">
          <div className="w-16 h-16 rounded-full bg-surface border-2 border-primary-container overflow-hidden mr-4">
            <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold">
              {isNew ? 'R' : 'P'}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-black text-on-surface">{isNew ? 'Rahul S.' : 'Priya K.'}</h2>
            <div className="flex items-center text-sm font-semibold text-on-surface-variant mt-1">
              <MapPin className="w-4 h-4 mr-1" /> {isNew ? 'Sector 50, Noida' : 'Indirapuram'}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex p-4 space-x-3">
          <button className="flex-1 h-12 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center shadow-md shadow-primary/20 hover:bg-primary/90 transition">
            <Phone className="w-5 h-5 mr-2" /> Call
          </button>
          <button className="flex-1 h-12 bg-surface border border-outline-variant text-primary rounded-xl font-bold flex items-center justify-center shadow-sm hover:bg-primary/5 transition">
            <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp
          </button>
        </div>

        <div className="px-5 py-4 space-y-6">
          
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Requirement</h3>
            <div className="glass-card border border-outline-variant rounded-2xl p-4 shadow-sm">
              <h4 className="font-bold text-base text-on-surface mb-2">{isNew ? 'Bathroom Renovation' : 'Modular Kitchen Install'}</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {isNew 
                  ? 'Need a complete overhaul of the master bathroom. Replacing tiles, installing new fixtures (shower, commode), and checking plumbing lines. Size is roughly 8x8 ft.'
                  : 'Looking to install a modern modular kitchen with acrylic finish. Need built-in space for microwave and chimney.'}
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Details</h3>
            <div className="glass-card border border-outline-variant rounded-2xl p-4 shadow-sm space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 shrink-0">
                  <Wallet className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-semibold">Estimated Budget</p>
                  <p className="text-sm font-bold text-on-surface">{isNew ? '₹85,000 - ₹1,20,000' : '₹1,50,000 - ₹2,00,000'}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-semibold">Expected Start</p>
                  <p className="text-sm font-bold text-on-surface">{isNew ? 'Within 1 Week' : 'Flexible (Next Month)'}</p>
                </div>
              </div>
            </div>
          </section>

          <div className="pt-4 flex justify-center">
            <Link 
              href={`/pro/leads/${params.id}/dispute`}
              className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-error transition flex items-center"
            >
              <AlertCircle className="w-3 h-3 mr-1" /> Report Invalid / Fake Lead
            </Link>
          </div>

        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30 flex justify-between items-center">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Status</p>
          <p className={`text-sm font-bold flex items-center ${isNew ? 'text-warning-dark' : 'text-primary'}`}>
            {isNew ? <><AlertCircle className="w-4 h-4 mr-1" /> Requires Follow-up</> : <><CheckCircle2 className="w-4 h-4 mr-1" /> Contacted</>}
          </p>
        </div>
        <button className="px-5 py-3 bg-surface-variant text-on-surface font-bold text-xs rounded-xl hover:bg-outline-variant transition border border-outline">
          Mark as Done
        </button>
      </div>
    </div>
  );
}
