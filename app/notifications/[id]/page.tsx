'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function NotificationDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  // Mock data mapping
  const notificationDetails: Record<string, any> = {
    '1': {
      type: 'quote',
      title: 'New Quote Received',
      date: 'Today, 10:30 AM',
      sender: 'Ramesh Sharma',
      business: 'Ramesh Plumbing & Pipe Repair',
      message: 'Hello, based on the images you provided of the pipe leakage under the sink, I have generated a preliminary quote. The estimate includes replacement parts (PVC pipes and sealant) and labor charges.',
      amount: '₹ 1,250.00',
      actionText: 'View Full Quote',
      actionLink: '/profile/professional/1',
      icon: 'request_quote',
      iconColor: 'text-[#147A3B]',
      bgColor: 'bg-[#E5F7ED]',
    },
    '2': {
      type: 'review',
      title: 'Leave a Review',
      date: 'Yesterday, 04:15 PM',
      sender: 'ArcMart System',
      business: 'Ajay Painters',
      message: 'Your painting job was marked as completed 3 days ago. Leaving a review helps other homeowners find reliable professionals and helps Ajay build his reputation.',
      actionText: 'Rate Your Experience',
      actionLink: '/rate/valid',
      icon: 'star_rate',
      iconColor: 'text-[#F59E0B]',
      bgColor: 'bg-[#F59E0B]/10',
    }
  };

  const details = notificationDetails[params.id] || {
    title: 'System Alert',
    date: 'Oct 24, 2023',
    sender: 'ArcMart',
    message: 'This is a general system notification.',
    actionText: 'Back to Discover',
    actionLink: '/discover',
    icon: 'notifications',
    iconColor: 'text-primary',
    bgColor: 'bg-primary/10',
  };

  return (
    <div className="min-h-screen bg-background flex flex-col pb-safe">
      <header className="px-4 py-4 bg-surface border-b border-outline-variant/30 sticky top-0 z-20 flex items-center gap-3">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -ml-2"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-headline-sm font-bold text-on-surface">Details</h1>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container-lowest border border-outline-variant/50 rounded-3xl p-6 shadow-sm flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-surface-container to-transparent z-0 opacity-50"></div>
          
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 z-10 ${details.bgColor}`}>
            <span className={`material-symbols-outlined text-[32px] ${details.iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>
              {details.icon}
            </span>
          </div>
          
          <h2 className="font-headline-md font-bold text-on-surface mb-2 z-10">{details.title}</h2>
          <span className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-6 z-10">{details.date}</span>

          <div className="w-full text-left bg-surface-container-highest/20 rounded-2xl p-5 mb-6 z-10 border border-outline-variant/30">
            <h3 className="font-label-lg font-bold text-on-surface mb-1">From: {details.sender}</h3>
            {details.business && <p className="font-body-sm text-on-surface-variant mb-4">{details.business}</p>}
            
            <p className="font-body-lg text-on-surface leading-relaxed whitespace-pre-wrap">
              {details.message}
            </p>

            {details.amount && (
              <div className="mt-4 pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-md text-on-surface-variant">Estimated Total</span>
                <span className="font-headline-sm font-bold text-on-surface">{details.amount}</span>
              </div>
            )}
          </div>

          <button 
            onClick={() => router.push(details.actionLink)}
            className="w-full py-4 rounded-full bg-primary text-on-primary font-label-lg font-bold shadow-sm hover:opacity-90 active:scale-95 transition-all z-10"
          >
            {details.actionText}
          </button>
        </motion.div>
      </main>
    </div>
  );
}
