'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CreditCard, ShieldCheck, CheckCircle2, Lock, Smartphone, Building } from 'lucide-react';

export default function DetailedRazorpayCheckout() {
  const router = useRouter();
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string | null>('upi');

  const handlePayment = (success: boolean) => {
    setProcessing(true);
    setTimeout(() => {
      if (success) {
        router.push('/pro/wallet/success');
      } else {
        router.push('/pro/wallet/failed');
      }
    }, 2500);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[#f1f3f6]">
      {/* App Bar (Razorpay style) */}
      <div className="bg-[#0b1c30] text-white px-5 py-4 flex flex-col justify-center shadow-md h-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => router.back()} className="mr-3 p-1">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-wide">ArcMart Pro Wallet</span>
              <span className="text-[10px] text-white/70 font-semibold uppercase">Wallet Top-up</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-white/70">Amount</span>
            <h2 className="text-xl font-black text-white">₹980.00</h2>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 pb-32">
        {processing ? (
          <div className="h-full flex flex-col items-center justify-center mt-20 animate-in fade-in">
            <div className="w-16 h-16 border-4 border-[#3399cc]/30 border-t-[#3399cc] rounded-full animate-spin mb-4"></div>
            <h3 className="text-lg font-bold text-[#0b1c30]">Processing Payment</h3>
            <p className="text-sm font-medium text-on-surface-variant mt-2 text-center max-w-[250px]">
              Please do not press back or close the app while we process your transaction.
            </p>
          </div>
        ) : (
          <div className="space-y-4 animate-in slide-in-from-bottom-4">
            
            <div className="flex items-center justify-between text-xs font-bold text-on-surface-variant uppercase tracking-widest px-2 pt-2">
              <span>Select Payment Method</span>
              <span className="flex items-center text-[#3399cc]"><ShieldCheck className="w-3 h-3 mr-1" /> Test Mode</span>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-outline-variant overflow-hidden">
              
              {/* UPI Section */}
              <div 
                className={`p-4 border-b border-outline-variant cursor-pointer transition-colors ${paymentMethod === 'upi' ? 'bg-[#3399cc]/5' : 'hover:bg-surface-variant/50'}`}
                onClick={() => setPaymentMethod('upi')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Smartphone className="w-6 h-6 text-[#0b1c30] mr-3" />
                    <span className="font-bold text-on-surface">UPI / QR</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'upi' ? 'border-[#3399cc] bg-[#3399cc]' : 'border-outline-variant'}`}>
                    {paymentMethod === 'upi' && <CheckCircle2 className="w-3 h-3 text-white" />}
                  </div>
                </div>
                
                {paymentMethod === 'upi' && (
                  <div className="mt-4 pt-4 border-t border-outline-variant/50 animate-in slide-in-from-top-2">
                    <p className="text-xs text-on-surface-variant mb-2">Enter your UPI ID</p>
                    <input type="text" placeholder="e.g. 9876543210@ybl" className="w-full bg-surface-variant border border-outline-variant rounded-xl p-3 text-sm focus:outline-none focus:border-[#3399cc]" />
                    <div className="flex space-x-2 mt-4">
                      <button onClick={() => handlePayment(true)} className="flex-1 py-3 bg-[#3399cc] text-white font-bold rounded-xl shadow-md text-sm">Pay ₹980.00</button>
                      <button onClick={() => handlePayment(false)} className="px-4 py-3 bg-error/10 text-error font-bold rounded-xl text-sm border border-error/20">Fail</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Cards Section */}
              <div 
                className={`p-4 border-b border-outline-variant cursor-pointer transition-colors ${paymentMethod === 'card' ? 'bg-[#3399cc]/5' : 'hover:bg-surface-variant/50'}`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CreditCard className="w-6 h-6 text-[#0b1c30] mr-3" />
                    <span className="font-bold text-on-surface">Card</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-[#3399cc] bg-[#3399cc]' : 'border-outline-variant'}`}>
                    {paymentMethod === 'card' && <CheckCircle2 className="w-3 h-3 text-white" />}
                  </div>
                </div>
                
                {paymentMethod === 'card' && (
                  <div className="mt-4 pt-4 border-t border-outline-variant/50 animate-in slide-in-from-top-2 space-y-3">
                    <input type="text" placeholder="Card Number" className="w-full bg-surface-variant border border-outline-variant rounded-xl p-3 text-sm focus:outline-none focus:border-[#3399cc]" />
                    <div className="flex space-x-3">
                      <input type="text" placeholder="MM/YY" className="w-1/2 bg-surface-variant border border-outline-variant rounded-xl p-3 text-sm focus:outline-none focus:border-[#3399cc]" />
                      <input type="text" placeholder="CVV" className="w-1/2 bg-surface-variant border border-outline-variant rounded-xl p-3 text-sm focus:outline-none focus:border-[#3399cc]" />
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <button onClick={() => handlePayment(true)} className="flex-1 py-3 bg-[#3399cc] text-white font-bold rounded-xl shadow-md text-sm">Pay ₹980.00</button>
                      <button onClick={() => handlePayment(false)} className="px-4 py-3 bg-error/10 text-error font-bold rounded-xl text-sm border border-error/20">Fail</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Netbanking Section */}
              <div 
                className={`p-4 cursor-pointer transition-colors ${paymentMethod === 'netbanking' ? 'bg-[#3399cc]/5' : 'hover:bg-surface-variant/50'}`}
                onClick={() => setPaymentMethod('netbanking')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Building className="w-6 h-6 text-[#0b1c30] mr-3" />
                    <span className="font-bold text-on-surface">Netbanking</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'netbanking' ? 'border-[#3399cc] bg-[#3399cc]' : 'border-outline-variant'}`}>
                    {paymentMethod === 'netbanking' && <CheckCircle2 className="w-3 h-3 text-white" />}
                  </div>
                </div>
                
                {paymentMethod === 'netbanking' && (
                  <div className="mt-4 pt-4 border-t border-outline-variant/50 animate-in slide-in-from-top-2">
                    <select className="w-full bg-surface-variant border border-outline-variant rounded-xl p-3 text-sm focus:outline-none focus:border-[#3399cc] appearance-none">
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>State Bank of India</option>
                      <option>Axis Bank</option>
                    </select>
                    <div className="flex space-x-2 mt-4">
                      <button onClick={() => handlePayment(true)} className="flex-1 py-3 bg-[#3399cc] text-white font-bold rounded-xl shadow-md text-sm">Pay ₹980.00</button>
                      <button onClick={() => handlePayment(false)} className="px-4 py-3 bg-error/10 text-error font-bold rounded-xl text-sm border border-error/20">Fail</button>
                    </div>
                  </div>
                )}
              </div>

            </div>

            <div className="flex items-center justify-center mt-6 text-on-surface-variant opacity-70">
              <Lock className="w-3 h-3 mr-1" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Secured by Razorpay</span>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
