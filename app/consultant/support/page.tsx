'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, MessageCircle, Phone, Mail, ChevronRight, HelpCircle } from 'lucide-react';

export default function ConsultantSupport() {
  const router = useRouter();

  const faqs = [
    {
      q: 'How are leads verified?',
      a: 'We use OTP verification and AI-based spam filtering to ensure only serious buyers and tenants reach you. We also check their requirements against your specializations.'
    },
    {
      q: 'What happens if I get a fake lead?',
      a: 'You can dispute any fake lead within 24 hours. Once our team verifies it, we will immediately refund the ₹199 to your wallet.'
    },
    {
      q: 'Why was my profile rejected?',
      a: 'Usually, profiles are rejected if the RERA document is illegible, the RERA number does not match, or the profile photo is not a clear headshot.'
    },
    {
      q: 'How many free leads do I get?',
      a: 'As a new consultant, you get 5 free leads. If you refer a friend who successfully joins, you get 10 more free leads!'
    }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">Help & Support</span>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-8">
        
        <section>
          <h2 className="text-xl font-black text-on-surface mb-2">Contact Us</h2>
          <p className="text-sm text-on-surface-variant mb-4">Our consultant success team is here to help you grow your business.</p>
          
          <div className="grid grid-cols-2 gap-3">
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="glass-card border border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:border-primary/50 transition">
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center mb-3">
                <MessageCircle className="w-5 h-5 text-success" />
              </div>
              <span className="text-sm font-bold text-on-surface">WhatsApp Chat</span>
              <span className="text-[10px] text-on-surface-variant mt-1">24/7 Fast Support</span>
            </a>
            
            <a href="tel:+919876543210" className="glass-card border border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:border-primary/50 transition">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-bold text-on-surface">Call Helpline</span>
              <span className="text-[10px] text-on-surface-variant mt-1">10 AM - 6 PM</span>
            </a>
          </div>
          
          <a href="mailto:support@arcmart.com" className="mt-3 glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between hover:border-primary/50 transition">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">Email Support</p>
                <p className="text-xs text-on-surface-variant">consultant@arcmart.com</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-on-surface-variant" />
          </a>

          <div className="grid grid-cols-2 gap-3 mt-3">
            <button onClick={() => router.push('/support/ticket/new')} className="glass-card border border-primary/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-primary/5 transition">
              <span className="material-symbols-outlined text-[24px] text-primary mb-2">assignment_add</span>
              <p className="font-bold text-sm text-primary">Submit Ticket</p>
            </button>
            <button onClick={() => router.push('/support/tickets')} className="glass-card border border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-surface-variant transition">
              <span className="material-symbols-outlined text-[24px] text-on-surface-variant mb-2">confirmation_number</span>
              <p className="font-bold text-sm text-on-surface">My Tickets</p>
            </button>
          </div>
        </section>

        <section>
          <div className="flex items-center mb-4">
            <HelpCircle className="w-5 h-5 text-primary mr-2" />
            <h2 className="text-lg font-black text-on-surface">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-surface border border-outline-variant rounded-2xl p-4">
                <h4 className="font-bold text-sm text-on-surface mb-2">{faq.q}</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
