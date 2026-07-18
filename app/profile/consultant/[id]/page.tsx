'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useConnect } from '../../../../context/ConnectContext';
import { motion } from 'framer-motion';

export default function ConsultantProfilePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { openConnect } = useConnect();

  const profile = {
    name: 'Ar. Ananya Singh',
    title: 'Principal Architect',
    firm: 'Design Matrix Studio',
    experience: '12 Years Exp.',
    location: 'Sector 62, Noida',
    rating: 4.9,
    projectsCount: 45,
    verified: true,
    certifications: 'COA Registered • LEED AP',
    avatar: 'https://ui-avatars.com/api/?name=Ananya+Singh&background=random&size=256',
    about: 'Award-winning architect specializing in sustainable residential design and modern commercial spaces. Focused on integrating natural light, ventilation, and local materials to create spaces that breathe.',
    specializations: ['Residential Architecture', 'Sustainable Design', 'Interior Space Planning', 'Vastu Consultation'],
    portfolio: [
      { id: 1, name: 'The Courtyard House', location: 'Noida Extension', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400&auto=format&fit=crop' },
      { id: 2, name: 'Lumina Tech Office', location: 'Cyber City', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop' },
      { id: 3, name: 'Eco Villa', location: 'Greater Noida', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop' },
      { id: 4, name: 'Minimalist Apartment', location: 'Delhi', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=400&auto=format&fit=crop' }
    ],
    reviews: [
      { id: 1, name: 'Vikram Mehta', rating: 5, text: 'Ananya transformed our vague ideas into a stunning reality. Her attention to detail in the floor plans ensured no space was wasted.' },
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pb-24">
      {/* Blueprint background for subtle texture */}
      <div className="fixed inset-0 blueprint-grid pointer-events-none z-0 opacity-[0.03]"></div>

      {/* Header Actions */}
      <div className="sticky top-0 left-0 right-0 pt-safe px-4 py-4 flex items-center justify-between z-30 bg-background/80 backdrop-blur-md border-b border-outline-variant/30">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined text-on-surface">arrow_back</span>
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors active:scale-95">
          <span className="material-symbols-outlined text-on-surface">bookmark_border</span>
        </button>
      </div>

      <div className="px-5 pt-6 relative z-10">
        {/* Profile Header */}
        <div className="flex gap-5 mb-6">
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-surface-container border border-outline-variant/30 shadow-md">
              <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
            </div>
            {profile.verified && (
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full border-2 border-background flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-on-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-col justify-center">
            <h1 className="font-headline-md text-[22px] font-bold text-on-surface mb-1">{profile.name}</h1>
            <p className="font-label-lg text-primary font-semibold">{profile.title}</p>
            <p className="font-body-sm text-on-surface-variant mt-1">{profile.firm}</p>
          </div>
        </div>

        {/* Badges / Stats */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="px-3 py-1.5 bg-surface-container rounded-lg border border-outline-variant/30 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-on-surface-variant">school</span>
            <span className="font-label-sm text-on-surface">{profile.experience}</span>
          </div>
          <div className="px-3 py-1.5 bg-surface-container rounded-lg border border-outline-variant/30 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-on-surface-variant">location_on</span>
            <span className="font-label-sm text-on-surface">{profile.location}</span>
          </div>
          <div className="px-3 py-1.5 bg-primary/10 rounded-lg border border-primary/20 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-primary">gavel</span>
            <span className="font-label-sm text-primary font-semibold">{profile.certifications}</span>
          </div>
        </div>

        {/* Rating Block */}
        <div className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm mb-8">
           <div className="flex flex-col items-center justify-center pr-4 border-r border-outline-variant/30">
             <div className="flex items-center gap-1">
               <span className="font-headline-lg font-bold text-on-surface">{profile.rating}</span>
             </div>
             <div className="flex text-primary">
               {[...Array(5)].map((_, i) => (
                 <span key={i} className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
               ))}
             </div>
           </div>
           <div>
             <p className="font-label-md font-bold text-on-surface mb-0.5">{profile.projectsCount} Projects Completed</p>
             <p className="font-body-sm text-on-surface-variant text-[12px]">Consistently rated excellent by clients on ArcMart.</p>
           </div>
        </div>

        {/* About */}
        <div className="mb-8">
          <h2 className="font-title-md text-[18px] font-bold text-on-surface mb-3">Professional Bio</h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            {profile.about}
          </p>
        </div>

        {/* Specializations */}
        <div className="mb-8">
          <h2 className="font-title-md text-[18px] font-bold text-on-surface mb-3">Specializations</h2>
          <div className="flex flex-wrap gap-2">
            {profile.specializations.map((spec, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/50 rounded-full font-label-md text-on-surface">
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-title-md text-[18px] font-bold text-on-surface">Featured Projects</h2>
            <button className="text-primary font-label-md">View all</button>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-5 px-5">
            {profile.portfolio.map(project => (
              <div key={project.id} className="w-[200px] flex-shrink-0 cursor-pointer group">
                <div className="h-[150px] rounded-2xl overflow-hidden mb-2 bg-surface-container border border-outline-variant/20">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-label-md font-bold text-on-surface truncate">{project.name}</h3>
                <p className="font-body-sm text-on-surface-variant text-[11px] truncate">{project.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-md border-t border-outline-variant p-4 pb-safe flex gap-3 z-30">
        <div className="flex gap-3 max-w-lg mx-auto w-full">
          <button className="flex-1 bg-surface-container hover:bg-surface-container-high text-on-surface py-3 rounded-full font-label-lg font-bold flex items-center justify-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-[20px]">call</span>
            Call
          </button>
          <button 
            onClick={() => openConnect('consultant', params.id, profile.name)}
            className="flex-[2] bg-[#25D366] text-white py-3 rounded-full font-label-lg font-bold shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            WhatsApp
          </button>
        </div>
      </div>

    </div>
  );
}
