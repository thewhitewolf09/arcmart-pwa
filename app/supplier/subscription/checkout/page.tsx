'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, ShieldCheck, CreditCard, Building2, Smartphone, ChevronRight } from 'lucide-react';

export default function Checkout() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Read params (e.g. ?plan=pro or ?item=featured&price=₹999)
  const plan = searchParams.get('plan');
  const price = searchParams.get('price') || (plan === 'pro' ? '₹4,999' : plan === 'elite' ? '₹9,999' : '₹1,999');
  const itemName = searchParams.get('item') === 'featured' ? 'Featured Listing' : `${plan ? plan.charAt(0).toUpperCase() + plan.slice(1) : 'Pro'} Plan`;

  const [paymentMethod, setPaymentMethod] = useState('upi');

  const processPayment = (success: boolean) => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (success) {
        router.push('/supplier/subscription/success');
      } else {
        router.push('/supplier/subscription/failed');
      }
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} disabled={isProcessing} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition disabled:opacity-50">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Checkout</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        
        {/* Order Summary */}
        <div className="bg-surface-variant p-6 border-b border-outline-variant">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Order Summary</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-on-surface">{itemName}</span>
            <span className="text-sm font-bold text-on-surface">{price}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-on-surface-variant">GST (18%)</span>
            <span className="text-xs text-on-surface-variant">Included</span>
          </div>
          <hr className="border-outline-variant my-3" />
          <div className="flex justify-between items-center">
            <span className="text-base font-bold text-on-surface">Total Amount</span>
            <span className="text-xl font-black text-primary">{price}</span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center text-xs font-semibold text-success-dark bg-success-container px-3 py-2 rounded-lg mb-6 border border-success/20">
            <ShieldCheck className="w-4 h-4 mr-2" /> 100% Secure Payments via Razorpay
          </div>

          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Payment Method</h3>
          
          <div className="space-y-3">
            {/* UPI */}
            <button 
              onClick={() => setPaymentMethod('upi')}
              className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
                paymentMethod === 'upi' ? 'border-primary bg-primary/5' : 'border-outline-variant hover:bg-surface-variant'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${paymentMethod === 'upi' ? 'bg-primary/20 text-primary' : 'bg-surface-variant text-on-surface-variant'}`}>
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm text-on-surface">UPI</h4>
                  <p className="text-[10px] text-on-surface-variant font-semibold">GPay, PhonePe, Paytm</p>
                </div>
              </div>
              <ChevronRight className={`w-5 h-5 ${paymentMethod === 'upi' ? 'text-primary' : 'text-outline-variant'}`} />
            </button>

            {/* Credit Card */}
            <button 
              onClick={() => setPaymentMethod('card')}
              className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
                paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-outline-variant hover:bg-surface-variant'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${paymentMethod === 'card' ? 'bg-primary/20 text-primary' : 'bg-surface-variant text-on-surface-variant'}`}>
                  <CreditCard className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm text-on-surface">Credit / Debit Card</h4>
                  <p className="text-[10px] text-on-surface-variant font-semibold">Visa, Mastercard, RuPay</p>
                </div>
              </div>
              <ChevronRight className={`w-5 h-5 ${paymentMethod === 'card' ? 'text-primary' : 'text-outline-variant'}`} />
            </button>

            {/* Netbanking */}
            <button 
              onClick={() => setPaymentMethod('netbanking')}
              className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
                paymentMethod === 'netbanking' ? 'border-primary bg-primary/5' : 'border-outline-variant hover:bg-surface-variant'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${paymentMethod === 'netbanking' ? 'bg-primary/20 text-primary' : 'bg-surface-variant text-on-surface-variant'}`}>
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm text-on-surface">Netbanking</h4>
                  <p className="text-[10px] text-on-surface-variant font-semibold">All major Indian banks</p>
                </div>
              </div>
              <ChevronRight className={`w-5 h-5 ${paymentMethod === 'netbanking' ? 'text-primary' : 'text-outline-variant'}`} />
            </button>
          </div>
        </div>

      </div>

      {/* Processing Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 z-50 bg-surface/90 backdrop-blur-sm flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-outline-variant border-t-primary rounded-full animate-spin mb-4"></div>
          <h2 className="text-lg font-bold text-on-surface">Processing Payment...</h2>
          <p className="text-sm text-on-surface-variant mt-2">Please do not close this screen.</p>
        </div>
      )}

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30 flex space-x-3">
        {/* DEMO BUTTONS for Success/Failure flow */}
        <button 
          onClick={() => processPayment(false)}
          disabled={isProcessing}
          className="w-1/3 py-4 bg-error-container text-error font-bold rounded-xl flex items-center justify-center hover:bg-opacity-80 transition text-xs"
        >
          Simulate Fail
        </button>
        <button 
          onClick={() => processPayment(true)}
          disabled={isProcessing}
          className="flex-1 py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          Pay {price} Securely
        </button>
      </div>
    </div>
  );
}
