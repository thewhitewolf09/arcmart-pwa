'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useConnect } from '../../context/ConnectContext';

export default function ComparePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { openConnect } = useConnect();
  
  const ids = searchParams.get('ids')?.split(',') || [];
  
  // Mock data for the professionals based on the IDs
  const mockData = {
    '1': {
      id: '1',
      name: 'Ramesh Kumar',
      category: 'Electrician',
      rating: 4.8,
      jobs: 124,
      experience: '8 years',
      priceRange: '₹300 - ₹800',
      responseTime: '2 hrs',
      distance: '1.2 km',
      verified: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9pT-7N0N92lVvQ5Q4Q83tYkO0fE_1q9qOqQ7qU-Xk3rP2q6uXnLdY5vX9w7g2w7gP3wW8XlR0vH2gXk9gM8qD5yX3oA4zM9xS7vD6lA5tC4vE3rP9qU2sW5hK8oR1lN6yV5xG6wN3lI2kM8pC5uT9fE4lQ2zM3vG0wW7jO8xU6vA3qM9lX6kP4lW5'
    },
    '2': {
      id: '2',
      name: 'Singh Electricals',
      category: 'Electrician',
      rating: 4.9,
      jobs: 340,
      experience: '12 years',
      priceRange: '₹500 - ₹1200',
      responseTime: '1 hr',
      distance: '2.5 km',
      verified: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxO4GpTg24zLdjwqAd4vEFjN8d7pgKNI-TmZsh8a32lh5MUil3eLPkeHwG49KrUOizFzqqDTqOQWep4Nhm_MNKqk4dB3yleqjfNWznXN0_8yzyW4Lsdj6qQFj9e9M074vGACSe3bq4553KOeh3KbRod_xjZQUX8HlszzKjqQScO1xxfz3f8wCy5aP3oWIKpQNUpIanKj7QlueoC5nmV5mHuHl0Yk8NEiww47Cas24oycXP2CgUoimqaJVqgecbpTkPwldQQWIWR8o'
    },
    '3': {
      id: '3',
      name: 'Ajay Painters',
      category: 'Painter',
      rating: 4.5,
      jobs: 89,
      experience: '5 years',
      priceRange: '₹800 - ₹2500',
      responseTime: '4 hrs',
      distance: '3.0 km',
      verified: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9pT-7N0N92lVvQ5Q4Q83tYkO0fE_1q9qOqQ7qU-Xk3rP2q6uXnLdY5vX9w7g2w7gP3wW8XlR0vH2gXk9gM8qD5yX3oA4zM9xS7vD6lA5tC4vE3rP9qU2sW5hK8oR1lN6yV5xG6wN3lI2kM8pC5uT9fE4lQ2zM3vG0wW7jO8xU6vA3qM9lX6kP4lW5'
    }
  };

  const professionalsToCompare = ids.map(id => (mockData as any)[id]).filter(Boolean);

  if (professionalsToCompare.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center">
        <h2 className="font-headline-md mb-2">No professionals selected</h2>
        <p className="font-body-md text-on-surface-variant mb-6">Go back and select at least 2 professionals to compare.</p>
        <button 
          onClick={() => router.back()}
          className="bg-primary text-on-primary px-6 py-3 rounded-full font-label-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background relative pb-safe">
      {/* Header */}
      <header className="pt-safe px-4 pt-4 pb-4 bg-surface border-b border-outline-variant/30 flex items-center gap-3 sticky top-0 z-20">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors -ml-2"
        >
          <span className="material-symbols-outlined text-on-surface">arrow_back</span>
        </button>
        <h1 className="font-headline-sm flex-1">Compare Professionals</h1>
      </header>

      <main className="flex-1 overflow-x-auto">
        <div className="min-w-max p-4 pb-20">
          <div className="flex gap-4">
            {/* Compare Table structure using Flex */}
            
            {/* Row Labels Column */}
            <div className="flex flex-col gap-4 w-[100px] flex-shrink-0 pt-[164px]">
              <div className="h-12 flex items-center font-label-md text-on-surface-variant">Rating</div>
              <div className="h-12 flex items-center font-label-md text-on-surface-variant">Jobs Done</div>
              <div className="h-12 flex items-center font-label-md text-on-surface-variant">Experience</div>
              <div className="h-12 flex items-center font-label-md text-on-surface-variant">Est. Price</div>
              <div className="h-12 flex items-center font-label-md text-on-surface-variant">Distance</div>
              <div className="h-12 flex items-center font-label-md text-on-surface-variant">Resp. Time</div>
              <div className="h-12 flex items-center font-label-md text-on-surface-variant">Verified</div>
            </div>

            {/* Professionals Columns */}
            {professionalsToCompare.map((pro, index) => (
              <motion.div 
                key={pro.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-[200px] flex-shrink-0 flex flex-col gap-4 bg-surface-container-lowest rounded-2xl border border-outline-variant p-4"
              >
                {/* Profile Header */}
                <div className="flex flex-col items-center text-center pb-4 border-b border-outline-variant/50 h-[148px]">
                  <img src={pro.image} alt={pro.name} className="w-16 h-16 rounded-full object-cover mb-3" />
                  <h3 className="font-headline-sm text-[16px] leading-tight mb-1">{pro.name}</h3>
                  <span className="font-label-sm text-on-surface-variant">{pro.category}</span>
                </div>

                {/* Data Rows */}
                <div className="h-12 flex items-center justify-center font-label-lg font-bold text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-primary mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {pro.rating}
                </div>
                <div className="h-12 flex items-center justify-center font-body-md text-on-surface">{pro.jobs}</div>
                <div className="h-12 flex items-center justify-center font-body-md text-on-surface">{pro.experience}</div>
                <div className="h-12 flex items-center justify-center font-body-md text-on-surface">{pro.priceRange}</div>
                <div className="h-12 flex items-center justify-center font-body-md text-on-surface">{pro.distance}</div>
                <div className="h-12 flex items-center justify-center font-body-md text-on-surface">{pro.responseTime}</div>
                <div className="h-12 flex items-center justify-center">
                  {pro.verified ? (
                    <span className="material-symbols-outlined text-primary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  ) : (
                    <span className="material-symbols-outlined text-outline-variant text-[24px]">cancel</span>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-4 mt-auto flex flex-col gap-2">
                  <button 
                    onClick={() => openConnect('professional', pro.id, pro.name)}
                    className="w-full bg-[#25D366] text-white py-3 rounded-xl font-label-md flex items-center justify-center gap-2 active:scale-95 transition-transform"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    WhatsApp
                  </button>
                  <button 
                    onClick={() => router.push(`/profile/professional/${pro.id}`)}
                    className="w-full bg-surface-container text-on-surface py-3 rounded-xl font-label-md active:scale-95 transition-transform"
                  >
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
