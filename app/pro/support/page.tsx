'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, HelpCircle, ChevronDown, MessageCircle, PhoneCall } from 'lucide-react';

export default function SupportFAQ() {
  const router = useRouter();
  const [openQ, setOpenQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      q: 'How do I get more leads?',
      a: 'Make sure you are marked as "Online" on your dashboard. Also, professionals with a verified Aadhaar badge and a clear profile photo get prioritized in our matching algorithm.',
    },
    {
      id: 2,
      q: 'Why was my profile rejected?',
      a: 'Common reasons for rejection include: blurry profile photos, incomplete service lists, or incorrect Aadhaar details. Check the rejection notification for specific details and resubmit.',
    },
    {
      id: 3,
      q: 'What if a lead is fake or spam?',
      a: 'You can dispute a lead directly from the Lead Details page. If our team verifies it is spam, the ₹49 charge will be refunded to your wallet.',
    },
    {
      id: 4,
      q: 'How do I withdraw money from my wallet?',
      a: 'The wallet is prepaid specifically for accepting leads. Balances cannot be withdrawn to your bank account at this time.',
    },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Help & Support</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32">
        
        <div className="flex flex-col items-center justify-center mb-8 pt-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-xl font-black text-on-surface">How can we help?</h2>
        </div>

        <section className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Frequently Asked Questions</h3>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-outline-variant rounded-2xl overflow-hidden bg-surface transition-all">
                <button 
                  onClick={() => setOpenQ(openQ === faq.id ? null : faq.id)}
                  className="w-full p-4 flex items-center justify-between font-bold text-left text-sm text-on-surface hover:bg-surface-variant/50 transition"
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 text-on-surface-variant transition-transform ${openQ === faq.id ? 'rotate-180' : ''}`} />
                </button>
                {openQ === faq.id && (
                  <div className="p-4 pt-0 text-sm text-on-surface-variant leading-relaxed bg-surface-variant/20 border-t border-outline-variant/30">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Contact ArcMart</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <button className="glass-card border border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-surface-variant transition shadow-sm">
              <MessageCircle className="w-6 h-6 text-success mb-2" />
              <p className="font-bold text-sm text-on-surface">WhatsApp</p>
              <p className="text-[10px] text-on-surface-variant font-semibold">Fastest reply</p>
            </button>
            <button className="glass-card border border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-surface-variant transition shadow-sm">
              <PhoneCall className="w-6 h-6 text-primary mb-2" />
              <p className="font-bold text-sm text-on-surface">Call Us</p>
              <p className="text-[10px] text-on-surface-variant font-semibold">9AM - 6PM</p>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => router.push('/support/ticket/new')} className="glass-card bg-primary/5 border border-primary/20 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-primary/10 transition shadow-sm">
              <span className="material-symbols-outlined text-[24px] text-primary mb-2">assignment_add</span>
              <p className="font-bold text-sm text-primary">Submit Ticket</p>
              <p className="text-[10px] text-primary/70 font-semibold">For complex issues</p>
            </button>
            <button onClick={() => router.push('/support/tickets')} className="glass-card border border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-surface-variant transition shadow-sm">
              <span className="material-symbols-outlined text-[24px] text-on-surface-variant mb-2">confirmation_number</span>
              <p className="font-bold text-sm text-on-surface">My Tickets</p>
              <p className="text-[10px] text-on-surface-variant font-semibold">Track resolutions</p>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
