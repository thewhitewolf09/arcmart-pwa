'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, MessageSquare } from 'lucide-react';

export default function ConsultantReviews() {
  const router = useRouter();

  const reviews = [
    {
      id: 1,
      name: 'Amit Sharma',
      rating: 5,
      date: '12 Oct 2026',
      comment: 'Rohan was very helpful in finding us the right property. He understood our budget and showed us relevant options. Highly recommended!',
      property: 'Luxury 3BHK in Cleo County',
      reply: null
    },
    {
      id: 2,
      name: 'Pooja Verma',
      rating: 4,
      date: '05 Oct 2026',
      comment: 'Good experience overall. The paperwork was handled smoothly, though negotiations took a bit long.',
      property: 'Commercial Office Space',
      reply: 'Thank you Pooja! We always strive for transparency in negotiations.'
    }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">My Reviews</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32">
        {/* Stats Header */}
        <div className="bg-primary pt-6 pb-8 px-6 rounded-[2rem] text-center text-white mb-6 shadow-lg">
          <div className="flex items-center justify-center mb-2">
            <span className="text-5xl font-black mr-2">4.8</span>
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          </div>
          <p className="text-sm font-semibold text-white/80 uppercase tracking-widest">Based on 12 reviews</p>
        </div>

        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="glass-card border border-outline-variant rounded-2xl p-5 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-black flex items-center justify-center mr-3">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-on-surface">{review.name}</h4>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center bg-yellow-400/10 px-2 py-1 rounded-md">
                  <span className="text-xs font-black text-yellow-600 mr-1">{review.rating}.0</span>
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                </div>
              </div>

              <div className="bg-surface-variant/30 rounded-lg p-2.5 mb-3 inline-block">
                <p className="text-[10px] text-on-surface-variant font-semibold">Related to: <span className="text-on-surface font-bold">{review.property}</span></p>
              </div>

              <p className="text-sm text-on-surface leading-relaxed mb-4">
                "{review.comment}"
              </p>

              {review.reply ? (
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mt-2">
                  <p className="text-xs font-bold text-primary mb-1">Your Reply:</p>
                  <p className="text-sm text-on-surface-variant italic">"{review.reply}"</p>
                </div>
              ) : (
                <button className="flex items-center text-xs font-bold text-primary hover:underline">
                  <MessageSquare className="w-4 h-4 mr-1.5" /> Reply to Review
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
