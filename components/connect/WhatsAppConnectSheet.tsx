'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useConnect } from '../../context/ConnectContext';

export default function WhatsAppConnectSheet() {
  const { isOpen, closeConnect, entityType, entityName, entityId, isLoggedIn } = useConnect();

  // State machine for the flow
  type ConnectStep = 'PHONE_ENTRY' | 'OTP_VERIFY' | 'INQUIRY_FORM' | 'SUCCESS' | 'PROFESSIONAL_OFFLINE' | 'SUPPLIER_CLOSED' | 'NOTIFY_SETUP' | 'WHATSAPP_NOT_FOUND' | 'ALREADY_CONNECTED';
  const [step, setStep] = useState<ConnectStep>('PHONE_ENTRY');
  
  // Form states
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [inquiryText, setInquiryText] = useState('');

  // Reset state when sheet opens
  useEffect(() => {
    if (isOpen) {
      if (entityId === 'offline') {
        setStep('PROFESSIONAL_OFFLINE');
      } else if (entityId === 'closed') {
        setStep('SUPPLIER_CLOSED');
      } else if (entityId === 'not-found') {
        setStep('SUCCESS'); // we will let it fail after 2s
      } else if (entityId === 'connected') {
        setStep('ALREADY_CONNECTED');
      } else if (isLoggedIn) {
        // If logged in, skip auth steps
        setStep(entityType === 'supplier' ? 'INQUIRY_FORM' : 'SUCCESS');
      } else {
        setStep('PHONE_ENTRY');
      }
      setPhone('');
      setOtp(['', '', '', '']);
      setInquiryText('');
    }
  }, [isOpen, isLoggedIn, entityType, entityId]);

  // Handle success redirect simulation
  useEffect(() => {
    if (step === 'SUCCESS') {
      const timer = setTimeout(() => {
        if (entityId === 'not-found') {
          setStep('WHATSAPP_NOT_FOUND');
        } else {
          closeConnect();
          // In a real app, this would be a window.location.href = 'https://wa.me/...'
        }
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [step, closeConnect, entityId]);

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (step === 'PHONE_ENTRY') setStep('OTP_VERIFY');
    else if (step === 'OTP_VERIFY') setStep(entityType === 'supplier' ? 'INQUIRY_FORM' : 'SUCCESS');
    else if (step === 'INQUIRY_FORM') setStep('SUCCESS');
    else if (step === 'PROFESSIONAL_OFFLINE') setStep('NOTIFY_SETUP');
    else if (step === 'NOTIFY_SETUP') closeConnect();
    else if (step === 'SUPPLIER_CLOSED') setStep('INQUIRY_FORM');
    else if (step === 'ALREADY_CONNECTED') setStep('SUCCESS');
    else if (step === 'WHATSAPP_NOT_FOUND') closeConnect();
  };

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-advance logic could go here
    if (index === 3 && value !== '') {
      // Small delay for UX
      setTimeout(() => handleNextStep(), 300);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
        onClick={closeConnect}
      />

      {/* Sheet Content */}
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="w-full max-w-md bg-surface rounded-t-[32px] pointer-events-auto overflow-hidden relative shadow-2xl flex flex-col max-h-[90vh]"
      >
        {/* Handle Bar */}
        <div className="w-full flex justify-center pt-3 pb-2 bg-surface">
          <div className="w-12 h-1.5 bg-outline-variant/50 rounded-full" />
        </div>

        <div className="px-6 pb-safe pt-2 overflow-y-auto">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: PHONE ENTRY */}
            {step === 'PHONE_ENTRY' && (
              <motion.div
                key="phone"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6 py-4"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 text-[#128C7E] flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  </div>
                  <h2 className="font-headline-sm font-bold text-on-surface mb-2">Connect via WhatsApp</h2>
                  <p className="font-body-md text-on-surface-variant">Enter your phone number to continue. We will send a secure one-time password to verify your account.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-on-surface font-semibold">Mobile Number</label>
                  <div className="flex items-center p-4 rounded-xl border border-outline-variant focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                    <span className="font-body-lg text-on-surface mr-2">+91</span>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98765 43210" 
                      className="w-full bg-transparent font-body-lg text-on-surface outline-none"
                    />
                  </div>
                </div>

                <button 
                  onClick={handleNextStep}
                  disabled={phone.length < 10}
                  className="w-full bg-primary text-on-primary py-4 rounded-full font-label-lg font-bold shadow-sm active:scale-95 transition-transform disabled:opacity-50 disabled:active:scale-100"
                >
                  Send OTP
                </button>
              </motion.div>
            )}

            {/* STEP 2: OTP VERIFY */}
            {step === 'OTP_VERIFY' && (
              <motion.div
                key="otp"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6 py-4"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[28px]">lock</span>
                  </div>
                  <h2 className="font-headline-sm font-bold text-on-surface mb-2">Verify OTP</h2>
                  <p className="font-body-md text-on-surface-variant">Sent to <span className="font-bold text-on-surface">+91 {phone}</span></p>
                </div>

                <div className="flex justify-between gap-3 my-2">
                  {[0, 1, 2, 3].map((i) => (
                    <input 
                      key={i}
                      type="text"
                      maxLength={1}
                      value={otp[i]}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      className="w-14 h-14 rounded-2xl border border-outline-variant text-center font-headline-md focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    />
                  ))}
                </div>
                
                <p className="font-label-md text-primary text-center">Resend Code</p>

                <button 
                  onClick={handleNextStep}
                  disabled={otp.join('').length < 4}
                  className="w-full bg-primary text-on-primary py-4 rounded-full font-label-lg font-bold shadow-sm active:scale-95 transition-transform disabled:opacity-50 disabled:active:scale-100"
                >
                  Verify & Continue
                </button>
              </motion.div>
            )}

            {/* STEP 3: INQUIRY FORM (Suppliers only) */}
            {step === 'INQUIRY_FORM' && (
              <motion.div
                key="inquiry"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6 py-4"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[28px]">receipt_long</span>
                  </div>
                  <h2 className="font-headline-sm font-bold text-on-surface mb-2">What do you need?</h2>
                  <p className="font-body-md text-on-surface-variant">Providing specific details helps {entityName} prepare a faster and more accurate quote.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <textarea 
                    rows={4}
                    value={inquiryText}
                    onChange={(e) => setInquiryText(e.target.value)}
                    placeholder="e.g., I need 500 sq.ft of Italian Marble for flooring..." 
                    className="w-full bg-surface-container-lowest p-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none font-body-md text-on-surface resize-none"
                  />
                  <div className="flex items-start gap-2 mt-2 bg-surface-container p-3 rounded-lg">
                    <span className="material-symbols-outlined text-primary text-[18px]">lightbulb</span>
                    <p className="font-body-sm text-on-surface-variant">
                      <strong className="text-on-surface">Pro Tip:</strong> Mention specific brands, quantities, and site locations to minimize back-and-forth.
                    </p>
                  </div>
                </div>

                <button 
                  onClick={handleNextStep}
                  disabled={inquiryText.length < 5}
                  className="w-full bg-[#25D366] text-white py-4 rounded-full font-label-lg font-bold shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:active:scale-100 mt-2"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                  Send to WhatsApp
                </button>
              </motion.div>
            )}

            {/* STEP 4: SUCCESS */}
            {step === 'SUCCESS' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center text-center gap-4 py-8 pb-12"
              >
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center animate-bounce">
                      <span className="material-symbols-outlined text-white text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                    </div>
                  </div>
                  {/* Small spinning indicator */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#128C7E] animate-spin opacity-50"></div>
                </div>
                
                <h2 className="font-headline-md font-bold text-on-surface">Redirecting to WhatsApp</h2>
                <p className="font-body-md text-on-surface-variant max-w-[260px]">
                  Your pre-filled message is ready for <span className="font-bold text-on-surface">{entityName}</span>.
                </p>
                <p className="font-label-sm text-outline mt-2 uppercase tracking-widest animate-pulse">
                  Connecting...
                </p>
              </motion.div>
            )}

            {/* EDGE CASE: PROFESSIONAL_OFFLINE */}
            {step === 'PROFESSIONAL_OFFLINE' && (
              <motion.div
                key="offline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col gap-6 py-4 text-center items-center"
              >
                <div className="w-20 h-20 rounded-full bg-error/10 text-error flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[40px]">cloud_off</span>
                </div>
                <div>
                  <h2 className="font-headline-sm font-bold text-on-surface mb-2">{entityName} is Offline</h2>
                  <p className="font-body-md text-on-surface-variant">This professional is currently unavailable.</p>
                </div>
                <div className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 mt-2">
                  <p className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Average Response Time</p>
                  <p className="font-body-lg font-bold text-on-surface">4 business hours</p>
                </div>
                <button 
                  onClick={handleNextStep}
                  className="w-full bg-primary text-on-primary py-4 rounded-full font-label-lg font-bold shadow-sm active:scale-95 transition-transform"
                >
                  Request a Call-back
                </button>
              </motion.div>
            )}

            {/* EDGE CASE: SUPPLIER_CLOSED */}
            {step === 'SUPPLIER_CLOSED' && (
              <motion.div
                key="closed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col gap-6 py-4 text-center items-center"
              >
                <div className="w-20 h-20 rounded-full bg-warning/10 text-warning flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[40px]">store_closed</span>
                </div>
                <div>
                  <h2 className="font-headline-sm font-bold text-on-surface mb-2">{entityName} is Closed</h2>
                  <p className="font-body-md text-on-surface-variant">Opens at 9:00 AM tomorrow.</p>
                </div>
                <p className="font-body-md text-on-surface">
                  Send message anyway? They will reply during business hours.
                </p>
                <button 
                  onClick={handleNextStep}
                  className="w-full bg-primary text-on-primary py-4 rounded-full font-label-lg font-bold shadow-sm active:scale-95 transition-transform"
                >
                  Send Message Anyway
                </button>
              </motion.div>
            )}

            {/* EDGE CASE: NOTIFY_SETUP */}
            {step === 'NOTIFY_SETUP' && (
              <motion.div
                key="notify"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col gap-6 py-4 text-center items-center"
              >
                <div className="w-20 h-20 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>notifications_active</span>
                </div>
                <div>
                  <h2 className="font-headline-sm font-bold text-on-surface mb-2">Get Notified</h2>
                  <p className="font-body-md text-on-surface-variant mb-4">We'll send a push notification when {entityName} comes back online.</p>
                  <p className="font-body-sm text-outline">Standard carrier rates may apply for text messages. You can manage your notification preferences anytime in Settings.</p>
                </div>
                <button 
                  onClick={handleNextStep}
                  className="w-full bg-tertiary text-on-tertiary py-4 rounded-full font-label-lg font-bold shadow-sm active:scale-95 transition-transform mt-4"
                >
                  Turn on Notifications
                </button>
              </motion.div>
            )}

            {/* EDGE CASE: WHATSAPP_NOT_FOUND */}
            {step === 'WHATSAPP_NOT_FOUND' && (
              <motion.div
                key="not_found"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col gap-6 py-4 text-center items-center"
              >
                <div className="w-20 h-20 rounded-full bg-error/10 text-error flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[40px]">error</span>
                </div>
                <div>
                  <h2 className="font-headline-sm font-bold text-on-surface mb-2">WhatsApp Not Found</h2>
                  <p className="font-body-md text-on-surface-variant">It looks like WhatsApp isn't installed on this device.</p>
                </div>
                <button 
                  onClick={handleNextStep}
                  className="w-full bg-[#25D366] text-white py-4 rounded-full font-label-lg font-bold shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-2 mt-4"
                >
                  <span className="material-symbols-outlined">download</span>
                  Download WhatsApp
                </button>
              </motion.div>
            )}

            {/* EDGE CASE: ALREADY_CONNECTED */}
            {step === 'ALREADY_CONNECTED' && (
              <motion.div
                key="connected"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col gap-6 py-4"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-[32px]">history</span>
                  </div>
                  <h2 className="font-headline-sm font-bold text-on-surface mb-2">You connected with {entityName} on 15 May.</h2>
                </div>

                <div className="bg-surface-container rounded-2xl p-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center pb-2 border-b border-outline-variant/50">
                    <span className="font-label-sm text-on-surface-variant">Status</span>
                    <span className="font-label-md text-primary font-bold">Active</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-label-sm text-on-surface-variant">Last message</span>
                    <span className="font-label-md text-on-surface">15 May 2024</span>
                  </div>
                </div>

                <div className="mt-2 text-center">
                  <h3 className="font-headline-sm font-bold text-on-surface mb-2">Connect again?</h3>
                  <p className="font-body-sm text-on-surface-variant mb-6">Interaction archived on 16 May 2024</p>
                  
                  <button 
                    onClick={handleNextStep}
                    className="w-full bg-primary text-on-primary py-4 rounded-full font-label-lg font-bold shadow-sm active:scale-95 transition-transform"
                  >
                    Continue to WhatsApp
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
