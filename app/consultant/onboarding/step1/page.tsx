'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ChevronRight, User, Phone, MapPin, Briefcase } from 'lucide-react';

export default function ConsultantOnboardingStep1() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    experience: ''
  });

  const isValid = formData.fullName && formData.phone && formData.city && formData.experience;

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar & Progress */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg px-4 py-3 border-b border-outline-variant">
        <div className="flex items-center mb-4 mt-2">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant transition">
            <ArrowLeft className="w-5 h-5 text-on-surface" />
          </button>
          <div className="flex-1">
            <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/3 transition-all duration-500 rounded-full"></div>
            </div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-2">Step 1 of 3: Basic Info</p>
          </div>
        </div>
        <h1 className="text-2xl font-black text-on-surface">Consultant Details</h1>
        <p className="text-sm text-on-surface-variant mt-1">Let's set up your professional real estate profile.</p>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-6">
        
        {/* Form Fields */}
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
              <input 
                type="text" 
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                placeholder="e.g. Ramesh Kumar" 
                className="w-full bg-surface border-2 border-outline-variant rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold focus:border-primary focus:outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 ml-1">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
              <input 
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+91 98765 43210" 
                className="w-full bg-surface border-2 border-outline-variant rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold focus:border-primary focus:outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 ml-1">City</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
              <select 
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className="w-full bg-surface border-2 border-outline-variant rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold focus:border-primary focus:outline-none transition appearance-none"
              >
                <option value="" disabled>Select your city</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Pune">Pune</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 ml-1">Years of Experience</label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
              <select 
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                className="w-full bg-surface border-2 border-outline-variant rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold focus:border-primary focus:outline-none transition appearance-none"
              >
                <option value="" disabled>Select experience</option>
                <option value="0-2">0 - 2 Years</option>
                <option value="3-5">3 - 5 Years</option>
                <option value="6-10">6 - 10 Years</option>
                <option value="10+">10+ Years</option>
              </select>
            </div>
          </div>
        </div>

      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          disabled={!isValid}
          onClick={() => router.push('/consultant/onboarding/step2')}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:shadow-none"
        >
          Continue <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}
