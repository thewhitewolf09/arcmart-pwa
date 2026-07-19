'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, MessageSquare } from 'lucide-react';

export default function ReviewsReceived() {
  const router = useRouter();
  
  const reviews = [
    {
      id: 1,
      client: 'Amit V.',
      job: 'Full House Painting',
      date: '12 Oct 2026',
      rating: 5,
      text: 'Excellent work by Arun and his team. They finished the painting two days ahead of schedule and left the house completely spotless. Highly recommended!'
    },
    {
      id: 2,
      client: 'Neha M.',
      job: 'Plumbing Repair',
      date: '10 Oct 2026',
      rating: 4,
      text: 'Good service, fixed the leak under the sink quickly. Arrived about 15 minutes late but the work was solid.'
    },
    {
      id: 3,
      client: 'Suresh D.',
      job: 'Electrical Wiring',
      date: '05 Oct 2026',
      rating: 5,
      text: 'Very professional. Explained what was wrong with the main board and replaced the faulty switch without overcharging.'
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

      <div className="flex-1 p-5 pb-10">
        
        {/* Summary Card */}
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6 flex items-center justify-between mb-8 shadow-sm">
          <div>
            <h2 className="text-3xl font-black text-yellow-600 flex items-center">
              4.8 <Star className="w-6 h-6 ml-2 fill-yellow-500 text-yellow-500" />
            </h2>
            <p className="text-xs text-yellow-700 font-bold uppercase tracking-widest mt-1">Average Rating</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-black text-on-surface">24</p>
            <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mt-1">Total Reviews</p>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="glass-card border border-outline-variant rounded-2xl p-5 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-sm text-on-surface">{review.client}</h4>
                  <p className="text-[10px] text-on-surface-variant font-semibold">{review.job} • {review.date}</p>
                </div>
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-yellow-500 text-yellow-500' : 'fill-surface-variant text-outline-variant'}`} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-on-surface leading-relaxed mt-3 mb-4">
                "{review.text}"
              </p>
              
              <button className="w-full py-2.5 bg-surface-variant text-on-surface font-bold text-xs rounded-xl flex items-center justify-center hover:bg-outline-variant transition border border-outline-variant/50">
                <MessageSquare className="w-4 h-4 mr-2" /> Reply
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
