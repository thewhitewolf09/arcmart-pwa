'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Home, Package, Compass, Briefcase, HelpCircle, Loader2 } from 'lucide-react';
import { useMockStore } from '../../store/mockStore';

export default function AuthPage() {
  const router = useRouter();
  const { setTempPhone, sendOtp, setTempRole, verifyOtp, isOnboarded } = useMockStore();
  
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  // OTP Refs
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 2 && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, timeLeft]);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 10) {
      setLoading(true);
      setTempPhone(phone);
      sendOtp();
      setTimeout(() => {
        setLoading(false);
        setStep(2);
        setTimeLeft(30);
      }, 1000);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-advance
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').replace(/\D/g, '').slice(0, 6).split('');
    const newOtp = [...otp];
    pastedData.forEach((char, i) => {
      if (i < 6) newOtp[i] = char;
    });
    setOtp(newOtp);
    if (pastedData.length > 0) {
      inputRefs.current[Math.min(pastedData.length - 1, 5)]?.focus();
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.join('').length === 6) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(3);
      }, 1500);
    }
  };

  const handleRoleSelect = (role: 'homeowner' | 'supplier' | 'professional') => {
    setTempRole(role);
    verifyOtp('123456'); // Hardcoded demo OTP to ensure user is created
    
    if (!isOnboarded) {
      router.push('/onboarding');
    } else {
      router.push(`/${role}`);
    }
  };

  const renderPhoneEntry = () => (
    <motion.div
      key="step1"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md px-5 flex flex-col items-center justify-center relative z-10"
    >
      <div className="w-full bg-surface p-8 rounded-[24px] border border-outline-variant shadow-architectural">
        <button 
          onClick={() => router.push('/')}
          className="mb-8 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group active:scale-95 duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-mono text-sm font-medium">Back</span>
        </button>

        <section className="space-y-2 mb-8">
          <h1 className="font-sans text-2xl font-semibold text-primary tracking-tight">
              Enter your number
          </h1>
          <p className="font-sans text-base text-on-surface-variant max-w-[280px]">
              We'll send a code to verify your identity
          </p>
        </section>

        <form className="space-y-8" onSubmit={handlePhoneSubmit}>
          <div className="space-y-2">
            <label className="font-mono text-xs font-medium text-on-surface-variant block ml-1 uppercase tracking-widest" htmlFor="phone">
                Mobile Number
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 font-sans text-lg text-primary border-r border-outline-variant pr-3 h-6 flex items-center">
                  +91
              </span>
              <input 
                id="phone" 
                type="tel" 
                maxLength={10} 
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                className="w-full pl-20 pr-4 py-4 rounded-[16px] border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans text-lg tracking-widest placeholder:text-outline/50 placeholder:tracking-normal outline-none" 
                placeholder="00000 00000" 
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={phone.length !== 10 || loading}
            className={`w-full h-14 bg-primary text-on-primary rounded-full font-sans font-semibold text-[18px] hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-3 group overflow-hidden relative ${phone.length !== 10 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className="relative z-10">{loading ? 'Processing...' : 'Send OTP'}</span>
            {!loading && <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="font-mono text-xs text-on-surface-variant/80">
              By continuing, you agree to our <br/>
              <a className="underline hover:text-primary transition-colors" href="#">Terms of Service</a> and <a className="underline hover:text-primary transition-colors" href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>

      <div className="mt-12 flex items-center gap-4 w-full px-4">
        <div className="h-[1px] flex-1 bg-outline-variant opacity-50"></div>
        <div className="font-mono text-xs font-medium text-outline tracking-tighter opacity-50">A-02 // OTP_FLOW</div>
        <div className="h-[1px] flex-1 bg-outline-variant opacity-50"></div>
      </div>
    </motion.div>
  );

  const renderOtpVerification = () => (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md mx-auto px-5 flex flex-col justify-center relative z-10"
    >
      <div className="bg-surface p-8 border border-outline-variant rounded-[24px] shadow-architectural">
        <header className="mb-8">
          <h1 className="font-sans text-2xl font-semibold text-primary mb-2">Verify Phone</h1>
          <p className="font-sans text-base text-on-surface-variant">Enter the 6-digit code sent to your number</p>
        </header>

        <form className="space-y-8" onSubmit={handleOtpSubmit}>
          <div className="flex justify-between gap-2 md:gap-3">
            {otp.map((digit, index) => (
              <input 
                key={index}
                ref={(el) => { inputRefs.current[index] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleOtpKeyDown(index, e)}
                onPaste={handleOtpPaste}
                required
                className="w-full aspect-square text-center font-sans text-2xl font-semibold border border-outline-variant rounded-[12px] bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
              />
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <button 
              type="submit"
              disabled={otp.join('').length !== 6 || loading}
              className={`w-full h-14 bg-primary text-on-primary font-mono text-sm font-medium rounded-full shadow-md active:scale-[0.98] transition-transform flex items-center justify-center uppercase tracking-wider ${otp.join('').length !== 6 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}`}
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : 'Verify Code'}
            </button>

            <div className="text-center h-6">
              {timeLeft > 0 ? (
                <p className="font-mono text-xs text-on-surface-variant">
                  Resend in <span className="font-bold text-primary">00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span>
                </p>
              ) : (
                <button 
                  type="button" 
                  onClick={() => setTimeLeft(30)}
                  className="font-mono text-xs text-primary font-bold hover:underline"
                >
                  Resend OTP
                </button>
              )}
            </div>
          </div>
        </form>

        <div className="mt-8 border-t border-outline-variant/50 w-1/4 mx-auto"></div>
      </div>
      
      <div className="mt-8 text-center">
        <a className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors" href="#">
          <HelpCircle className="w-4 h-4" />
          <span className="font-mono text-xs font-medium">Need help? Contact Support</span>
        </a>
      </div>
    </motion.div>
  );

  const renderRoleSelection = () => (
    <motion.div
      key="step3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md px-5 flex flex-col items-center z-10 py-12"
    >
      <header className="text-center space-y-2 mb-10 animate-in fade-in duration-700">
        <h1 className="font-sans text-4xl font-bold text-primary tracking-tight mb-2">Welcome</h1>
        <p className="font-mono text-sm text-on-surface-variant uppercase tracking-[0.3em] opacity-80">Role Selection</p>
      </header>

      <div className="w-full grid grid-cols-1 gap-4">
        {[
          { id: 'homeowner', title: 'Homeowner', desc: 'Building a dream', icon: Home },
          { id: 'supplier', title: 'Supplier', desc: 'Material expertise', icon: Package },
          { id: 'professional', title: 'Professional', desc: 'Architect / Engineer', icon: Compass },
          { id: 'consultant', title: 'Consultant', desc: 'Strategic advisory', icon: Briefcase }
        ].map((role, idx) => (
          <motion.button 
            key={role.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            onClick={() => handleRoleSelect(role.id as any)}
            className="w-full p-6 bg-surface-container-lowest border border-outline-variant/50 rounded-[16px] text-left flex items-center justify-between group hover:border-primary hover:shadow-architectural transition-all duration-300"
          >
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 flex items-center justify-center bg-surface-container border border-outline-variant/20 rounded-[12px] text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <role.icon className="w-8 h-8 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-primary mb-1">{role.title}</h3>
                <p className="font-sans text-sm text-on-surface-variant/70">{role.desc}</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
          </motion.button>
        ))}
      </div>

      <div className="mt-12 w-full flex flex-col items-center space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1 w-8 bg-primary rounded-full"></div>
          <div className="h-1 w-8 bg-surface-container-highest rounded-full"></div>
          <div className="h-1 w-8 bg-surface-container-highest rounded-full"></div>
          <div className="h-1 w-8 bg-surface-container-highest rounded-full"></div>
        </div>
        <p className="font-mono text-xs font-medium text-on-surface-variant uppercase tracking-[0.25em]">
          Step 01 <span className="text-outline-variant mx-2">/</span> 04
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Universal Background Layer */}
      <div className="absolute inset-0 blueprint-bg pointer-events-none opacity-[0.1]"></div>
      
      {/* Decorative Orbs for Role Selection */}
      {step === 3 && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed-dim/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-fixed/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>
        </>
      )}

      <AnimatePresence mode="wait">
        {step === 1 && renderPhoneEntry()}
        {step === 2 && renderOtpVerification()}
        {step === 3 && renderRoleSelection()}
      </AnimatePresence>
    </div>
  );
}
