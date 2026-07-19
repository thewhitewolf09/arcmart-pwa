'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

export default function DeleteOTPVerify() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
  const [loading, setLoading] = useState(false);

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const isOtpComplete = otp.every(digit => digit !== '');

  const handleVerify = () => {
    setLoading(true);
    // Simulate backend verification
    setTimeout(() => {
      setLoading(false);
      router.push('/profile/delete-account/success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col pb-safe">
      <header className="px-4 py-4 bg-surface border-b border-outline-variant/30 sticky top-0 z-20 flex items-center gap-3">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -ml-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-headline-sm font-bold text-on-surface">Final Verification</h1>
      </header>

      <main className="flex-1 p-6 pb-32 flex flex-col items-center">
        
        <div className="w-16 h-16 bg-[#BA1A1A]/10 rounded-full flex items-center justify-center mb-6">
          <ShieldAlert className="w-8 h-8 text-[#BA1A1A]" />
        </div>

        <h2 className="text-xl font-black text-on-surface mb-2 text-center">Verify Identity</h2>
        <p className="text-sm text-on-surface-variant font-medium text-center leading-relaxed mb-8">
          To ensure it's you, please enter the 4-digit OTP sent to your registered mobile number <span className="font-bold text-on-surface">******3210</span>.
        </p>

        {/* OTP Input */}
        <div className="flex gap-4 justify-center mb-8">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={inputRefs[idx]}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              className="w-14 h-14 bg-surface-container-lowest border border-outline-variant rounded-xl text-center text-xl font-black text-on-surface focus:outline-none focus:border-[#BA1A1A] focus:ring-1 focus:ring-[#BA1A1A] transition-all"
            />
          ))}
        </div>

        <div className="flex-1 w-full flex flex-col justify-end">
          <button 
            disabled={!isOtpComplete || loading}
            onClick={handleVerify}
            className={`w-full py-4 rounded-full font-label-lg font-bold shadow-sm transition-all flex items-center justify-center ${
              isOtpComplete && !loading
                ? 'bg-[#BA1A1A] text-white hover:bg-[#93000A] active:scale-95' 
                : 'bg-surface-container-highest text-on-surface-variant opacity-50 cursor-not-allowed'
            }`}
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              'Confirm Deletion'
            )}
          </button>
        </div>

      </main>
    </div>
  );
}
