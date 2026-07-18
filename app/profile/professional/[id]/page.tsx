'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useConnect } from '../../../../context/ConnectContext';
import { motion } from 'framer-motion';
import DisputeReviewSheet from '../../../../components/rating/DisputeReviewSheet';
import { Footer } from '@/components/ui/Footer';

export default function ProfessionalProfilePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { openConnect } = useConnect();
  
  const [isDisputeOpen, setIsDisputeOpen] = useState(false);
  const [disputeReviewId, setDisputeReviewId] = useState<number | null>(null);
  
  // Mock data for the professional
  const profile = {
    name: 'Rajesh Sharma',
    profession: 'Master Plumber',
    location: 'Sector 18, Noida',
    distance: '1.2 km away',
    rating: 4.8,
    reviewsCount: 142,
    jobsDone: 124,
    responseTime: '3 hrs',
    verified: true,
    availableNow: true,
    avatar: 'https://ui-avatars.com/api/?name=Rajesh+Sharma&background=random&size=256',
    coverImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    about: 'With over 15 years of experience in residential and commercial plumbing, I specialize in complex pipe networking, leak detection, and high-quality sanitaryware installation.',
    services: [
      { id: 1, title: 'Pipe Leak Repair', desc: 'Advanced leak detection and immediate fixes.' },
      { id: 2, title: 'Sanitary Installation', desc: 'Expert fitting of modern washbasins and WCs.' },
      { id: 3, title: 'Water Tank Cleaning', desc: 'Thorough chemical-free tank sanitization.' },
    ],
    reviews: [
      { id: 1, name: 'Amit K.', date: '2 days ago', rating: 5, text: 'Rajesh was extremely professional. He fixed our persistent leak in under an hour.', reply: 'Thank you Amit! It was a pleasure working with you.' },
      { id: 2, name: 'Saira V.', date: '1 week ago', rating: 4, text: 'Punctual and knows his job well. Cleaned up after the work was done.', reply: null }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pb-24">
      {/* Floating Header Actions */}
      <div className="fixed top-0 left-0 right-0 pt-safe px-4 py-4 flex items-center justify-between z-30 pointer-events-none">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center border border-outline-variant/20 shadow-sm pointer-events-auto active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-on-surface">arrow_back</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center border border-outline-variant/20 shadow-sm pointer-events-auto active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-on-surface">favorite_border</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[250px] w-full bg-surface-container-high">
        <img src={profile.coverImage} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        
        {/* Avatar overlay */}
        <div className="absolute -bottom-12 left-5">
          <div className="w-24 h-24 rounded-[28px] overflow-hidden border-4 border-background bg-surface shadow-lg relative">
            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
          </div>
          {profile.verified && (
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full border-2 border-background flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-on-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
          )}
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-5 pt-16">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h1 className="font-headline-lg text-[24px] font-bold text-on-surface">{profile.name}</h1>
            <p className="font-body-md text-primary font-semibold">{profile.profession}</p>
          </div>
          {profile.availableNow && (
             <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#25D366]/10 text-[#128C7E] font-label-sm text-[10px] uppercase font-bold tracking-widest">
               <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
               Available
             </span>
          )}
        </div>
        
        <p className="font-body-sm text-on-surface-variant flex items-center gap-1 mb-5">
          <span className="material-symbols-outlined text-[14px]">location_on</span>
          {profile.location} • {profile.distance}
        </p>

        {/* Stats Row */}
        <div className="flex gap-4 p-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm mb-6">
          <div className="flex-1 flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="font-title-md font-bold text-on-surface">{profile.rating}</span>
            </div>
            <span className="font-label-sm text-on-surface-variant mt-1 text-[10px] uppercase">{profile.reviewsCount} Reviews</span>
          </div>
          <div className="w-[1px] bg-outline-variant/30"></div>
          <div className="flex-1 flex flex-col items-center">
            <span className="font-title-md font-bold text-on-surface">{profile.jobsDone}</span>
            <span className="font-label-sm text-on-surface-variant mt-1 text-[10px] uppercase">Jobs Done</span>
          </div>
          <div className="w-[1px] bg-outline-variant/30"></div>
          <div className="flex-1 flex flex-col items-center">
            <span className="font-title-md font-bold text-on-surface">{profile.responseTime}</span>
            <span className="font-label-sm text-on-surface-variant mt-1 text-[10px] uppercase">Resp. Time</span>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-8">
          <h2 className="font-title-md text-[18px] font-bold text-on-surface mb-3">About</h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            {profile.about}
          </p>
        </div>

        {/* Specialized Services */}
        <div className="mb-8">
          <h2 className="font-title-md text-[18px] font-bold text-on-surface mb-4">Specialized Services</h2>
          <div className="space-y-3">
            {profile.services.map(service => (
              <div key={service.id} className="flex gap-4 p-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                </div>
                <div>
                  <h3 className="font-label-lg font-bold text-on-surface mb-1">{service.title}</h3>
                  <p className="font-body-sm text-on-surface-variant leading-snug">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-title-md text-[18px] font-bold text-on-surface">Recent Feedback</h2>
            <button className="text-primary font-label-md">See all</button>
          </div>
          <div className="space-y-4">
            {profile.reviews.map(review => (
              <div key={review.id} className="p-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-md font-bold text-on-surface">{review.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-body-sm text-on-surface-variant text-[12px]">{review.date}</span>
                    <button onClick={() => { setDisputeReviewId(review.id); setIsDisputeOpen(true); }} className="text-outline-variant hover:text-[#BA1A1A] transition-colors" title="Dispute Review">
                      <span className="material-symbols-outlined text-[16px]">flag</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`material-symbols-outlined text-[14px] ${i < review.rating ? 'text-primary' : 'text-outline-variant'}`} style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-body-sm text-on-surface-variant italic mb-3">"{review.text}"</p>
                {review.reply ? (
                  <div className="mt-3 pl-3 border-l-2 border-primary bg-surface-container-highest/30 p-3 rounded-r-xl">
                    <p className="font-label-sm font-bold text-on-surface mb-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>reply</span>
                      Reply from {profile.name}
                    </p>
                    <p className="font-body-sm text-on-surface-variant">{review.reply}</p>
                  </div>
                ) : (
                  <button className="text-primary font-label-sm font-bold flex items-center gap-1 mt-2 hover:underline">
                    <span className="material-symbols-outlined text-[14px]">reply</span> Reply to review
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-8">
          <Footer />
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-md border-t border-outline-variant p-4 pb-safe z-30">
        <div className="flex gap-3 max-w-lg mx-auto">
          <button className="flex-1 bg-surface-container hover:bg-surface-container-high text-on-surface py-3 rounded-full font-label-lg font-bold flex items-center justify-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-[20px]">call</span>
            Call
          </button>
          <button 
            onClick={() => openConnect('professional', params.id, profile.name)}
            className="flex-[2] bg-[#25D366] text-white py-3 rounded-full font-label-lg font-bold shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            WhatsApp
          </button>
        </div>
      </div>

      <DisputeReviewSheet 
        isOpen={isDisputeOpen} 
        onClose={() => setIsDisputeOpen(false)} 
        reviewId={disputeReviewId || undefined} 
      />

    </div>
  );
}
