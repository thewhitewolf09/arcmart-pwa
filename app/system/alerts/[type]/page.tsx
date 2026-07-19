'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShieldCheck, ShieldAlert, Star, CreditCard, AlertCircle, Zap, ArrowRight, X } from 'lucide-react';

export default function DynamicAlertPage({ params }: { params: { type: string } }) {
  const router = useRouter();
  const { type } = params;

  // Configurations for different alert types
  const alerts: Record<string, any> = {
    'approved': {
      icon: ShieldCheck,
      color: 'text-success',
      bg: 'bg-success/10',
      border: 'border-success',
      title: 'Profile Approved!',
      message: 'Your documents have been verified. You are now live on ArcMart. Go online to start receiving leads immediately.',
      actionText: 'Go to Dashboard',
      actionRoute: '/pro'
    },
    'rejected': {
      icon: ShieldAlert,
      color: 'text-error',
      bg: 'bg-error-container',
      border: 'border-error',
      title: 'Profile Update Required',
      message: 'We could not verify your Aadhaar card image because it was too blurry. Please re-upload a clear picture to get approved.',
      actionText: 'Update Documents',
      actionRoute: '/pro/profile'
    },
    'review': {
      icon: Star,
      color: 'text-[#F57F17]',
      bg: 'bg-[#FFF9C4]',
      border: 'border-[#F57F17]',
      title: 'New 5-Star Review!',
      message: 'Priya S. just left you a glowing review for your recent plumbing job. Keep up the great work!',
      actionText: 'View Review',
      actionRoute: '/pro/profile'
    },
    'expiry': {
      icon: AlertCircle,
      color: 'text-[#F59E0B]',
      bg: 'bg-[#FEF3C7]',
      border: 'border-[#F59E0B]',
      title: 'Subscription Expiring',
      message: 'Your Featured Listing in Sector 18 expires in 3 days. Renew now to maintain your top position.',
      actionText: 'Renew Now',
      actionRoute: '/supplier/subscription'
    },
    'payment-failed': {
      icon: CreditCard,
      color: 'text-error',
      bg: 'bg-error-container',
      border: 'border-error',
      title: 'Payment Failed',
      message: 'We could not process the renewal for your ArcMart Pro subscription. Please update your payment method.',
      actionText: 'Update Payment',
      actionRoute: '/account/billing'
    },
    'new-pro': {
      icon: Zap,
      color: 'text-primary',
      bg: 'bg-primary/10',
      border: 'border-primary',
      title: 'New Pro in Your Area',
      message: 'A highly rated, verified Electrician just joined ArcMart in Sector 50. Tap to see their profile and book instantly.',
      actionText: 'View Profile',
      actionRoute: '/discover'
    }
  };

  const alertConfig = alerts[type] || alerts['approved']; // Default to approved if type not found
  const Icon = alertConfig.icon;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-sm bg-surface rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="relative">
          {/* Close button */}
          <button 
            onClick={() => router.back()}
            className="absolute top-4 right-4 w-8 h-8 bg-surface-container rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface z-10"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Decorative Header */}
          <div className={`h-32 w-full ${alertConfig.bg} flex items-center justify-center relative overflow-hidden`}>
            {/* Background elements */}
            <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-20 ${alertConfig.bg} filter blur-xl`} />
            <div className={`absolute -left-8 -bottom-8 w-24 h-24 rounded-full opacity-20 ${alertConfig.bg} filter blur-lg`} />
            
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className={`w-16 h-16 rounded-full bg-surface shadow-lg flex items-center justify-center border-4 ${alertConfig.border} relative z-10`}
            >
              <Icon className={`w-8 h-8 ${alertConfig.color}`} strokeWidth={2.5} />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h2 className="text-xl font-black text-on-surface mb-3">{alertConfig.title}</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
            {alertConfig.message}
          </p>

          <button 
            onClick={() => router.push(alertConfig.actionRoute)}
            className="w-full h-12 bg-primary text-on-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-md active:scale-95"
          >
            {alertConfig.actionText} <ArrowRight className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => router.back()}
            className="w-full h-12 mt-3 font-bold text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Dismiss
          </button>
        </div>
      </motion.div>
    </div>
  );
}
