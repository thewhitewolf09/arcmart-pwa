'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-outline-variant/30 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-label-lg font-bold text-on-surface pr-4">{question}</span>
        <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="font-body-md text-on-surface-variant pb-4 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SupportPage() {
  const router = useRouter();

    const faqs = [
    {
      question: "How do quote requests work?",
      answer: "When you submit a quote request for suppliers, it is sent to all selected suppliers in your area. They review your requirements and post their best bids. You can compare the bids and accept the best one."
    },
    {
      question: "How do I contact a professional?",
      answer: "You can contact any professional directly by visiting their profile and clicking the 'WhatsApp' or 'Call' button at the bottom of the screen."
    },
    {
      question: "Are the professionals verified?",
      answer: "Yes! Professionals with the blue tick badge have undergone our ArcMart Assured verification process, ensuring their identity and business details are authentic."
    },
    {
      question: "How do I dispute a fake review?",
      answer: "If you are a professional, you can click the 'Flag' icon on any review on your profile to open a dispute. Our moderation team will investigate it within 48 hours."
    },
    {
      question: "Can I change my registered phone number?",
      answer: "Currently, your phone number is tied to your account identity. To change it, please contact our support team using the chat button below."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pb-safe">
      <header className="px-4 py-4 bg-surface border-b border-outline-variant/30 sticky top-0 z-20 flex items-center gap-3">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -ml-2"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-headline-sm font-bold text-on-surface">Help & Support</h1>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6">
        
        {/* Contact Actions */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <button className="flex flex-col items-center justify-center p-4 bg-primary/10 rounded-2xl hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-primary text-[32px] mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            <span className="font-label-md font-bold text-primary">Chat with Us</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 bg-surface-container-highest rounded-2xl hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant text-[32px] mb-2">mail</span>
            <span className="font-label-md font-bold text-on-surface">Email Support</span>
          </button>
        </div>

        {/* FAQs */}
        <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-4 shadow-sm mb-6">
          <h2 className="font-label-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Frequently Asked Questions</h2>
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
