'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, Filter } from 'lucide-react';

export default function AllReviewsScreen({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [filter, setFilter] = useState<number | 'all'>('all');

  const reviews = [
    { id: 1, name: 'Rahul M.', rating: 5, date: '2 weeks ago', text: 'Excellent service! Very professional and delivered on time.' },
    { id: 2, name: 'Sneha P.', rating: 4, date: '1 month ago', text: 'Great work on the interior design. Just took a bit longer than expected.' },
    { id: 3, name: 'Amit K.', rating: 5, date: '2 months ago', text: 'Highly recommend them. Very responsive and talented.' },
    { id: 4, name: 'Pooja R.', rating: 3, date: '3 months ago', text: 'Work was okay, but communication could be better.' },
  ];

  const filteredReviews = filter === 'all' ? reviews : reviews.filter(r => r.rating === filter);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface">All Reviews</span>
        </div>
      </div>

      <div className="flex-1 p-4 pb-24 space-y-6">
        
        {/* Summary Card */}
        <div className="flex items-center justify-between bg-surface-dim border border-outline-variant rounded-2xl p-5">
          <div>
            <h2 className="text-4xl font-black text-on-surface flex items-center">
              4.8 <Star className="w-6 h-6 text-yellow-500 fill-yellow-500 ml-2" />
            </h2>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1">Based on 12 reviews</p>
          </div>
          
          <div className="space-y-1 w-32">
            {[5,4,3,2,1].map(star => (
              <div key={star} className="flex items-center text-[10px] text-on-surface-variant font-bold">
                <span className="w-2">{star}</span>
                <div className="flex-1 h-1.5 mx-2 bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: star >= 4 ? '80%' : star === 3 ? '20%' : '0%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto hide-scrollbar">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${filter === 'all' ? 'bg-primary text-white' : 'bg-surface-variant text-on-surface-variant'}`}
          >
            All Reviews
          </button>
          {[5,4,3,2,1].map(star => (
            <button 
              key={star}
              onClick={() => setFilter(star)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap flex items-center transition-colors ${filter === star ? 'bg-primary text-white' : 'bg-surface-variant text-on-surface-variant'}`}
            >
              {star} <Star className={`w-3 h-3 ml-1 ${filter === star ? 'text-white fill-white' : 'text-yellow-500 fill-yellow-500'}`} />
            </button>
          ))}
        </div>

        {/* Review List */}
        <div className="space-y-4">
          {filteredReviews.length === 0 ? (
            <p className="text-center text-sm font-bold text-on-surface-variant py-10">No reviews found for this rating.</p>
          ) : (
            filteredReviews.map((review) => (
              <div key={review.id} className="glass-card border border-outline-variant rounded-2xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-sm text-on-surface">{review.name}</h4>
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">{review.date}</p>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-outline-variant fill-outline-variant'}`} />
                  ))}
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">{review.text}</p>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
