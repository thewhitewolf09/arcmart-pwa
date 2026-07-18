'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, Reply, CheckCircle2, MoreVertical } from 'lucide-react';

type Review = {
  id: string;
  customerName: string;
  rating: number;
  date: string;
  comment: string;
  reply?: string;
};

const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    customerName: 'Rahul K.',
    rating: 5,
    date: '2 days ago',
    comment: 'Excellent quality tiles and very prompt delivery. The owner helped us choose the right design for our living room.',
    reply: 'Thank you Rahul! It was a pleasure serving you. Hope to see you again.'
  },
  {
    id: 'rev-2',
    customerName: 'Priya M.',
    rating: 4,
    date: '1 week ago',
    comment: 'Good collection of sanitaryware, but prices are slightly on the higher side. Overall good experience.',
  },
  {
    id: 'rev-3',
    customerName: 'Amit Singh',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Best shop in Sector 18 for granite and marble. Highly recommended!',
  }
];

export default function SupplierReviews() {
  const router = useRouter();
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  const submitReply = (id: string) => {
    if (!replyText.trim()) return;
    
    setReviews(reviews.map(rev => 
      rev.id === id ? { ...rev, reply: replyText } : rev
    ));
    setReplyingTo(null);
    setReplyText('');
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Customer Reviews</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-12">
        {/* Summary Card */}
        <div className="glass-card rounded-2xl border border-outline-variant shadow-sm p-6 mb-6 flex flex-col items-center text-center">
          <div className="text-4xl font-black text-on-surface mb-2">4.8</div>
          <div className="flex items-center mb-2">
            {[1,2,3,4,5].map(star => (
              <Star key={star} className={`w-5 h-5 ${star <= 5 ? 'text-yellow-500 fill-yellow-500' : 'text-outline-variant'}`} />
            ))}
          </div>
          <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Based on 24 Reviews</p>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="glass-card rounded-2xl border border-outline-variant shadow-sm p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold text-sm text-on-surface">{review.customerName}</h4>
                  <div className="flex items-center mt-1">
                    {[1,2,3,4,5].map(star => (
                      <Star key={star} className={`w-3 h-3 ${star <= review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-outline-variant'}`} />
                    ))}
                    <span className="text-[10px] text-on-surface-variant ml-2">{review.date}</span>
                  </div>
                </div>
                <button className="text-on-surface-variant p-1 rounded-full hover:bg-surface-variant transition">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                {review.comment}
              </p>

              {/* Reply Section */}
              {review.reply ? (
                <div className="bg-surface-variant rounded-xl p-4 border border-outline-variant/50 relative">
                  <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary">
                    <span className="text-[10px] font-bold">JD</span>
                  </div>
                  <div className="pl-9">
                    <p className="text-[10px] uppercase font-bold text-primary tracking-widest mb-1">Your Reply</p>
                    <p className="text-sm text-on-surface-variant">{review.reply}</p>
                  </div>
                </div>
              ) : replyingTo === review.id ? (
                <div className="bg-surface-variant rounded-xl p-3 border border-primary/30 mt-4 animate-in fade-in zoom-in-95">
                  <textarea 
                    autoFocus
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write your reply..."
                    className="w-full bg-transparent border-none focus:outline-none text-sm text-on-surface resize-none h-20 placeholder:text-on-surface-variant/50"
                  />
                  <div className="flex justify-end space-x-2 mt-2">
                    <button 
                      onClick={() => setReplyingTo(null)}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-on-surface-variant hover:bg-surface transition"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => submitReply(review.id)}
                      disabled={!replyText.trim()}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-primary text-on-primary hover:bg-primary/90 transition disabled:opacity-50"
                    >
                      Post Reply
                    </button>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => { setReplyingTo(review.id); setReplyText(''); }}
                  className="flex items-center text-xs font-bold text-primary hover:underline transition"
                >
                  <Reply className="w-4 h-4 mr-1.5" /> Reply to Review
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
