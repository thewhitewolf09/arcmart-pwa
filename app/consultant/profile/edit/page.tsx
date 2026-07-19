'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Building2, MapPin, CheckCircle2 } from 'lucide-react';

export default function EditConsultantProfile() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex-1 flex flex-col min-h-screen bg-success/5 justify-center p-5">
        <div className="bg-surface border border-outline-variant rounded-3xl p-8 text-center shadow-xl">
          <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>
          <h1 className="text-2xl font-black text-on-surface mb-2">Profile Updated</h1>
          <p className="text-sm text-on-surface-variant mb-8">
            Your professional details and specializations have been successfully updated.
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
          <span className="font-bold text-on-surface truncate">Edit Details</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-8">
        
        {/* Basic Info (CON-04) */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Basic Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-on-surface-variant mb-1.5 ml-1">Full Name</label>
              <input 
                type="text" 
                defaultValue="Rohan Gupta"
                className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-on-surface-variant mb-1.5 ml-1">Years of Experience</label>
              <input 
                type="number" 
                defaultValue="8"
                className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-on-surface-variant mb-1.5 ml-1">Professional Bio</label>
              <textarea 
                rows={4}
                defaultValue="Specializing in luxury apartments and commercial spaces across Noida and Greater Noida. Helping families find their dream homes since 2018."
                className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition resize-none"
              ></textarea>
            </div>
          </div>
        </section>

        {/* Areas Covered (CON-05) */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Areas Covered</h3>
          <div className="flex flex-wrap gap-2">
            {['Sector 150', 'Sector 50', 'Sector 121', 'Indirapuram', 'Greater Noida West'].map((area, idx) => (
              <label key={idx} className="cursor-pointer">
                <input type="checkbox" className="peer sr-only" defaultChecked={idx < 3} />
                <div className="px-4 py-2 rounded-full border border-outline-variant text-xs font-bold text-on-surface-variant peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:border-primary/30 transition flex items-center">
                  <MapPin className="w-3 h-3 mr-1" /> {area}
                </div>
              </label>
            ))}
            <button className="px-4 py-2 rounded-full border border-dashed border-outline-variant text-xs font-bold text-on-surface-variant hover:bg-surface-variant transition">
              + Add Area
            </button>
          </div>
        </section>

        {/* Specializations (CON-06) */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Property Specializations</h3>
          <div className="flex flex-wrap gap-2">
            {['Apartments', 'Villas', 'Plots', 'Commercial Shops', 'Office Spaces', 'Agricultural'].map((spec, idx) => (
              <label key={idx} className="cursor-pointer">
                <input type="checkbox" className="peer sr-only" defaultChecked={idx === 0 || idx === 1 || idx === 4} />
                <div className="px-4 py-2 rounded-full border border-outline-variant text-xs font-bold text-on-surface-variant peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:border-primary/30 transition flex items-center">
                  <Building2 className="w-3 h-3 mr-1" /> {spec}
                </div>
              </label>
            ))}
          </div>
        </section>

      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => setSubmitted(true)}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
        >
          Save Profile <Save className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}
