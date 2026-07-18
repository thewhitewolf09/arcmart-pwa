'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, MessageSquare, Phone, Mail, ChevronDown, Headset } from 'lucide-react';

export default function Support() {
  const router = useRouter();

  const faqs = [
    {
      q: "How do I increase my response rate?",
      a: "Reply to new leads as quickly as possible. Even a quick message acknowledging the requirement counts towards your response rate. Aim to reply within 1 hour."
    },
    {
      q: "When do I get charged for a lead?",
      a: "ArcMart charges ZERO commission on leads. You only pay your fixed monthly subscription fee."
    },
    {
      q: "How can I upgrade my subscription?",
      a: "Go to Profile > Account & Billing > Subscription Plan to view and upgrade your current plan."
    },
    {
      q: "My GST Verification failed. What do I do?",
      a: "Ensure the Business Name in your profile exactly matches the name registered with your GSTIN. You can re-upload your document from the Certificates page."
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
          <span className="font-bold text-on-surface truncate">Help & Support</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Contact Manager Header */}
        <div className="bg-primary/5 p-6 border-b border-primary/10">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4 border border-primary/30">
              <Headset className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-on-surface">Your Account Manager</h2>
              <p className="text-xs text-on-surface-variant">Available Mon-Sat, 9 AM - 6 PM</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 py-3 bg-surface border border-outline-variant rounded-xl flex items-center justify-center text-on-surface text-xs font-bold hover:bg-surface-variant shadow-sm transition">
              <Phone className="w-4 h-4 mr-2 text-primary" /> Call Support
            </button>
            <button className="flex-1 py-3 bg-surface border border-outline-variant rounded-xl flex items-center justify-center text-on-surface text-xs font-bold hover:bg-surface-variant shadow-sm transition">
              <MessageSquare className="w-4 h-4 mr-2 text-primary" /> Chat
            </button>
          </div>
        </div>

        {/* FAQs */}
        <div className="p-5">
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Frequently Asked Questions</h3>
          
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-card border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
                <button className="w-full p-4 flex items-center justify-between text-left hover:bg-surface-variant transition">
                  <span className="text-sm font-bold text-on-surface pr-4">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-on-surface-variant shrink-0" />
                </button>
                {/* In a real app, this would be an accordion. Keeping it simple for demo. */}
                <div className="px-4 pb-4 pt-1 text-xs text-on-surface-variant leading-relaxed border-t border-outline-variant/30">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-outline-variant/50 text-center">
            <p className="text-xs text-on-surface-variant mb-3">Still need help?</p>
            <button className="text-xs font-bold text-primary flex items-center justify-center mx-auto hover:underline">
              <Mail className="w-4 h-4 mr-2" /> Email support@arcmart.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
