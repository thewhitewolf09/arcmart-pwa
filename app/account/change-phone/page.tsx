'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Phone, ChevronRight } from 'lucide-react';

export default function ChangePhoneFlow() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [newPhone, setNewPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const currentPhone = '+91 98765 43210';

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-black text-on-surface">Verify Current Number</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              We've sent a verification code to your current registered number <span className="font-bold text-on-surface">{currentPhone}</span> to ensure it's you.
            </p>
            
            <div className="flex justify-between space-x-2 my-6">
              {otp.map((digit, idx) => (
                <input 
                  key={idx}
                  type="text"
                  maxLength={1}
                  className="w-12 h-14 bg-surface-dim border border-outline-variant rounded-xl text-center text-xl font-black text-on-surface focus:border-primary focus:outline-none transition"
                  placeholder="0"
                />
              ))}
            </div>
            
            <button 
              onClick={() => setStep(2)}
              className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg"
            >
              Verify OTP <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-black text-on-surface">Enter New Number</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Enter the new mobile number you want to associate with this account.
            </p>
            
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
              <input 
                type="tel"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                placeholder="+91 Enter 10-digit number"
                className="w-full bg-surface-dim border border-outline-variant rounded-xl pl-12 pr-4 py-4 text-sm font-bold text-on-surface focus:border-primary focus:outline-none transition"
              />
            </div>
            
            <button 
              onClick={() => setStep(3)}
              className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg"
            >
              Send OTP <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-black text-on-surface">Verify New Number</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Enter the verification code sent to your new number <span className="font-bold text-on-surface">{newPhone || '+91 99999 88888'}</span>.
            </p>
            
            <div className="flex justify-between space-x-2 my-6">
              {otp.map((digit, idx) => (
                <input 
                  key={idx}
                  type="text"
                  maxLength={1}
                  className="w-12 h-14 bg-surface-dim border border-outline-variant rounded-xl text-center text-xl font-black text-on-surface focus:border-primary focus:outline-none transition"
                  placeholder="0"
                />
              ))}
            </div>
            
            <button 
              onClick={() => router.push('/profile')}
              className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg"
            >
              Update Phone Number
            </button>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 px-4 py-3 flex items-center">
        <button 
          onClick={() => step > 1 ? setStep(step - 1) : router.back()} 
          className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">Change Phone Number</span>
      </div>

      <div className="flex-1 p-5">
        
        {/* Progress Bar */}
        <div className="flex items-center mb-8 mt-2 space-x-2">
          <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-surface-variant'}`}></div>
          <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-surface-variant'}`}></div>
          <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-surface-variant'}`}></div>
        </div>

        {renderStep()}

      </div>
    </div>
  );
}
