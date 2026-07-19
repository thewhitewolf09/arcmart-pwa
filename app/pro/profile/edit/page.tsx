'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, MapPin, Wrench, Languages, DollarSign, User, Check } from 'lucide-react';

export default function EditProProfile() {
  const router = useRouter();

  // Mock state for chips
  const [selectedAreas, setSelectedAreas] = useState(['Sector 50', 'Indirapuram']);
  const [selectedServices, setSelectedServices] = useState(['Plumbing Repair', 'Pipe Installation']);
  const [languages, setLanguages] = useState(['Hindi', 'English']);

  const allAreas = ['Sector 18', 'Sector 50', 'Indirapuram', 'Greater Noida West', 'Kaushambi'];
  const allServices = ['Plumbing Repair', 'Pipe Installation', 'Water Tank Cleaning', 'Bathroom Fitting', 'Geyser Repair'];
  const allLangs = ['Hindi', 'English', 'Punjabi'];

  const toggleArrayItem = (item: string, array: string[], setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (array.includes(item)) {
      setter(array.filter(i => i !== item));
    } else {
      setter([...array, item]);
    }
  };

  const handleSave = () => {
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
          <span className="font-bold text-on-surface truncate">Edit Profile</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32 space-y-8">
        
        {/* Basic Info (PRO-13) */}
        <section>
          <div className="flex items-center mb-4">
            <User className="w-5 h-5 text-primary mr-2" />
            <h2 className="text-sm font-bold text-on-surface uppercase tracking-widest">Basic Info</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-on-surface-variant mb-1">Full Name</label>
              <input type="text" defaultValue="Arun Sharma" className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3 text-sm font-bold text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Trade/Profession</label>
                <select className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition appearance-none">
                  <option>Plumbing Expert</option>
                  <option>Electrician</option>
                  <option>Carpenter</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Experience (Years)</label>
                <input type="number" defaultValue="8" className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition" />
              </div>
            </div>
          </div>
        </section>

        {/* Visit Charge (PRO-16) */}
        <section>
          <div className="flex items-center mb-4">
            <DollarSign className="w-5 h-5 text-success mr-2" />
            <h2 className="text-sm font-bold text-on-surface uppercase tracking-widest">Visit Charge</h2>
          </div>
          <div>
            <label className="block text-xs font-semibold text-on-surface-variant mb-1">Inspection / Minimum Visit Fee</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant font-bold">₹</span>
              <input type="number" defaultValue="250" className="w-full bg-surface glass-card border border-outline-variant rounded-xl pl-8 pr-4 py-3 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition" />
            </div>
            <p className="text-[10px] text-on-surface-variant mt-2 font-semibold">Market average for your trade is ₹200 - ₹350.</p>
          </div>
        </section>

        {/* Areas Covered (PRO-14) */}
        <section>
          <div className="flex items-center mb-4">
            <MapPin className="w-5 h-5 text-secondary mr-2" />
            <h2 className="text-sm font-bold text-on-surface uppercase tracking-widest">Areas Covered</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {allAreas.map(area => {
              const isSelected = selectedAreas.includes(area);
              return (
                <button
                  key={area}
                  onClick={() => toggleArrayItem(area, selectedAreas, setSelectedAreas)}
                  className={`px-4 py-2 rounded-full text-xs font-bold border transition-all flex items-center ${
                    isSelected ? 'bg-primary text-on-primary border-primary' : 'bg-surface border-outline-variant text-on-surface-variant'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 mr-1" />}
                  {area}
                </button>
              );
            })}
          </div>
        </section>

        {/* Services Offered (PRO-15) */}
        <section>
          <div className="flex items-center mb-4">
            <Wrench className="w-5 h-5 text-on-surface mr-2" />
            <h2 className="text-sm font-bold text-on-surface uppercase tracking-widest">Services Offered</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {allServices.map(service => {
              const isSelected = selectedServices.includes(service);
              return (
                <button
                  key={service}
                  onClick={() => toggleArrayItem(service, selectedServices, setSelectedServices)}
                  className={`px-4 py-2 rounded-full text-xs font-bold border transition-all flex items-center ${
                    isSelected ? 'bg-secondary text-on-secondary border-secondary' : 'bg-surface border-outline-variant text-on-surface-variant'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 mr-1" />}
                  {service}
                </button>
              );
            })}
          </div>
        </section>

        {/* Languages (PRO-17) */}
        <section>
          <div className="flex items-center mb-4">
            <Languages className="w-5 h-5 text-primary mr-2" />
            <h2 className="text-sm font-bold text-on-surface uppercase tracking-widest">Languages Spoken</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {allLangs.map(lang => {
              const isSelected = languages.includes(lang);
              return (
                <button
                  key={lang}
                  onClick={() => toggleArrayItem(lang, languages, setLanguages)}
                  className={`px-4 py-2 rounded-full text-xs font-bold border transition-all flex items-center ${
                    isSelected ? 'bg-primary text-on-primary border-primary' : 'bg-surface border-outline-variant text-on-surface-variant'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 mr-1" />}
                  {lang}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      {/* Save Button */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={handleSave}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
        >
          <Save className="w-5 h-5 mr-2" /> Save Changes
        </button>
      </div>
    </div>
  );
}
