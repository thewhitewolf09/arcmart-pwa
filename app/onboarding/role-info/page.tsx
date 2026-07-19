'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle2, ChevronRight, User, Briefcase, Building2 } from 'lucide-react';

export default function RoleInfoScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'homeowner' | 'pro' | 'consultant'>('homeowner');

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">How ArcMart Works</span>
      </div>

      <div className="flex-1 pb-32">
        {/* Custom Tabs */}
        <div className="bg-surface border-b border-outline-variant px-4 py-3 flex space-x-2 overflow-x-auto hide-scrollbar sticky top-[60px] z-30">
          {[
            { id: 'homeowner', label: 'Homeowners', icon: User },
            { id: 'pro', label: 'Professionals', icon: Briefcase },
            { id: 'consultant', label: 'Consultants', icon: Building2 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === tab.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-surface-variant text-on-surface-variant'
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'homeowner' && (
            <div className="animate-fade-in space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-2">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-on-surface mb-2">For Homeowners</h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  ArcMart is your one-stop destination for everything related to home building, renovation, and real estate.
                </p>
              </div>
              <ul className="space-y-4 mt-6">
                {[
                  'Discover top-rated architects and contractors near you.',
                  'Find verified properties and real estate consultants.',
                  'Chat directly with professionals on WhatsApp.',
                  'Save inspiration photos to your idea boards.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-on-surface leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'pro' && (
            <div className="animate-fade-in space-y-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-2">
                <Briefcase className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-on-surface mb-2">For Professionals</h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Grow your business by connecting with homeowners actively looking for your services.
                </p>
              </div>
              <ul className="space-y-4 mt-6">
                {[
                  'Get verified leads directly to your dashboard.',
                  'Showcase your portfolio with stunning image galleries.',
                  'Collect reviews to build trust and rank higher.',
                  'Only pay for the leads you accept (Prepaid model).'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-on-surface leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'consultant' && (
            <div className="animate-fade-in space-y-6">
              <div className="w-16 h-16 bg-warning/10 rounded-2xl flex items-center justify-center mb-2">
                <Building2 className="w-8 h-8 text-warning-dark" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-on-surface mb-2">For Consultants</h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  List properties, find buyers, and close deals faster with our dedicated consultant tools.
                </p>
              </div>
              <ul className="space-y-4 mt-6">
                {[
                  'List unlimited properties for sale or rent.',
                  'Get matched with high-intent buyers and tenants.',
                  'Earn the "RERA Verified" badge to stand out.',
                  'Access exclusive local market insights.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-warning-dark mr-3 shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-on-surface leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => router.push('/auth')}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
        >
          Create Free Account <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}
