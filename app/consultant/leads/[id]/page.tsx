'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Phone, MessageSquare, MapPin, Calendar, Wallet, CheckCircle2, AlertCircle, Building2, Home } from 'lucide-react';

export default function ConsultantLeadDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  
  // Mock data based on ID
  const isNew = params.id === 'L-9001';

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
              {isNew ? 'A' : 'S'}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-black text-on-surface">{isNew ? 'Amit Kumar' : 'Sneha Reddy'}</h2>
            <div className="flex items-center text-sm font-semibold text-on-surface-variant mt-1">
              <MapPin className="w-4 h-4 mr-1" /> {isNew ? 'Noida Extension' : 'Sector 50, Noida'}
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
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Property Requirement</h3>
            <div className="glass-card border border-outline-variant rounded-2xl p-4 shadow-sm space-y-4">
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-semibold">Type</p>
                  <p className="text-sm font-bold text-on-surface">{isNew ? '3BHK Apartment' : 'Villa / Independent House'}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 shrink-0">
                  <Wallet className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-semibold">Budget</p>
                  <p className="text-sm font-bold text-on-surface">{isNew ? '₹80L - 1Cr' : '₹2Cr - 3Cr'}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 shrink-0">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-semibold">Purpose</p>
                  <p className="text-sm font-bold text-on-surface">{isNew ? 'Investment' : 'Self Use'}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Additional Notes</h3>
            <div className="bg-surface glass-card border border-outline-variant rounded-2xl p-4 shadow-sm">
              <p className="text-sm font-bold text-on-surface mb-2">{isNew ? 'Specific Requirements' : 'Customer Preference'}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {isNew 
                  ? 'Looking for a corner flat with good sunlight. Prefer upper floors. Need possession within 6 months.'
                  : 'Interested in gated societies with good security. Needs at least 2 parking spots.'}
              </p>
            </div>
          </section>

          <div className="pt-4 flex justify-center">
            <button 
              className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-error transition flex items-center"
            >
              <AlertCircle className="w-3 h-3 mr-1" /> Report Invalid Lead
            </button>
          </div>

        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30 flex justify-between items-center">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Status</p>
          <p className={`text-sm font-bold flex items-center ${isNew ? 'text-warning-dark' : 'text-primary'}`}>
            {isNew ? <><AlertCircle className="w-4 h-4 mr-1" /> Needs Follow-up</> : <><CheckCircle2 className="w-4 h-4 mr-1" /> Contacted</>}
          </p>
        </div>
        <button className="px-5 py-3 bg-surface-variant text-on-surface font-bold text-xs rounded-xl hover:bg-outline-variant transition border border-outline">
          {isNew ? 'Mark Contacted' : 'Schedule Visit'}
        </button>
      </div>
    </div>
  );
}
