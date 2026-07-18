'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useMockStore } from '../../store/mockStore';

export default function OnboardingPage() {
  const router = useRouter();
  const { setOnboardingComplete, user } = useMockStore();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      handleFinish();
    }
  };

  const handleSkip = () => {
    setStep(4); // Go to location confirmation immediately
  };

  const handleFinish = () => {
    setLoading(true);
    setTimeout(() => {
      setOnboardingComplete(true);
      if (user?.role) {
        router.push(`/${user.role}`);
      } else {
        router.push('/auth');
      }
    }, 1500);
  };

  // ---------------------------------------------------------
  // STEP 0: Find Trusted Pros (O-01)
  // ---------------------------------------------------------
  const renderStep0 = () => (
    <motion.main
      key="step0"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 flex flex-col min-h-screen w-full items-center px-5 md:px-10"
    >
      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-xl">
        <div className="relative mb-8 group">
          <div className="absolute -top-12 -left-12 w-24 h-24 border-l border-t border-outline pointer-events-none opacity-20"></div>
          <div className="absolute -bottom-12 -right-12 w-24 h-24 border-r border-b border-outline pointer-events-none opacity-20"></div>
          <div className="bg-surface-container-lowest border border-outline-variant w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center shadow-xl transition-transform duration-500 hover:scale-105">
            <div className="relative">
              <span className="material-symbols-outlined text-primary text-[48px] md:text-[64px]" style={{ fontVariationSettings: "'wght' 200" }}>engineering</span>
              <div className="absolute -top-1 -right-1 bg-primary text-on-primary rounded-full p-1.5 shadow-lg border-4 border-surface-container-lowest">
                <span className="material-symbols-outlined text-[20px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <h1 className="font-sans text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            Find Trusted Pros
          </h1>
          <p className="font-sans text-base text-on-surface-variant max-w-sm mx-auto leading-relaxed">
            Discover verified professionals and vendors within your project's radius.
          </p>
        </div>

        <div className="mt-8 w-full aspect-video rounded-xl overflow-hidden border border-outline-variant bg-surface shadow-sm opacity-90 relative">
          <img className="w-full h-full object-cover" alt="Architectural site plan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpHXPjvItDx3YA8TXN6sce9k1VigHIO-CLi7v2oZQQ4pU-H5X2DV74IhhPv0j7bPD7Yw_VW9LHqU6zv_DfHMZMhhf-SZU3_52df1_tGyZmebryzY0KOLxs3NmomkIXcu4csiaYROnoKn7H7aXXAu1D3WgL3dCOWLp1YJnvx205o6askpwH6wobMMtg5czplVtSvU9-Ncq3o9fG5kpmaRLmKmOnyHIqETQcgqJwwTazxqZE0b0M_T1xd_ODw3PAATkaH1-cay-PmRY" />
        </div>
      </div>

      <div className="w-full max-w-xl pb-8 mt-auto">
        <div className="flex flex-col gap-4 w-full items-center">
          <button onClick={handleNext} className="w-full h-14 bg-primary text-on-primary font-mono text-sm py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] hover:shadow-xl flex items-center justify-center gap-2 group">
            <span>Next</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button onClick={handleSkip} className="w-full h-12 bg-transparent text-on-surface-variant font-mono text-sm py-3 rounded-xl hover:bg-surface-container transition-colors uppercase tracking-widest">
            Skip
          </button>
          
          <div className="flex gap-2 mt-2">
            <div className="w-8 h-1.5 rounded-full bg-primary"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-outline-variant"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-outline-variant"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-outline-variant"></div>
          </div>
        </div>
      </div>
    </motion.main>
  );

  // ---------------------------------------------------------
  // STEP 1: Every Person Verified (O-02)
  // ---------------------------------------------------------
  const renderStep1 = () => (
    <motion.main
      key="step1"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 flex flex-col min-h-screen w-full items-center px-5 md:px-10"
    >
      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-xl">
        <div className="relative w-32 h-32 flex items-center justify-center mb-8 group">
          <div className="absolute inset-0 border border-outline-variant opacity-30"></div>
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-primary"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-primary"></div>
          <span className="material-symbols-outlined text-[48px] text-primary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>
              shield_with_heart
          </span>
        </div>

        <div className="text-center space-y-4">
          <h1 className="font-sans text-3xl md:text-4xl font-semibold text-primary tracking-tight">
              Every Person Verified
          </h1>
          <p className="font-sans text-base text-on-surface-variant max-w-sm mx-auto leading-relaxed">
              Real ratings and background-checked specialists for every trade.
          </p>
        </div>

        <div className="mt-8 w-full max-w-xs bg-surface-container-lowest rounded-xl p-4 border border-outline-variant shadow-sm flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-surface-container-high relative">
            <img className="w-full h-full object-cover" alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb_j5nxUPHvKSZiNSLkrKL2fa2YE4tAO9uEQn7GXHcpJbz2xA8iFQmUFaHLCLPrSGA--BFzI9dUcaAv8bT2ZK8s6KXULnVSX34XQPFRjI7IrZBWJLTJy5LpR0HDLq3DtLgIS5Ki5avNxdQc14iD_0eM8-LpvG-Iw0aFkoCszgJkc8byy331mHdX96hRFQCmYKiyS3ZxyEnlUH25xHxGKbFrMFi2GQCd25jG4G2V2chyd_o-yhC83DcorjUhEkOFPYtnU63x1C5XXw" />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary text-white rounded-full flex items-center justify-center border-2 border-white">
              <span className="material-symbols-outlined !text-[10px]" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
            </div>
          </div>
          <div className="flex-grow">
            <div className="h-3 w-24 bg-surface-container-highest rounded mb-2"></div>
            <div className="h-2 w-16 bg-surface-container-high rounded"></div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold text-primary px-2 py-0.5 border border-primary rounded-full uppercase tracking-widest">Verified</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-xl pb-8 mt-auto">
        <div className="flex flex-col gap-4 w-full items-center">
          <button onClick={handleNext} className="w-full h-14 bg-primary text-on-primary font-mono text-sm py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] hover:shadow-xl flex items-center justify-center gap-2 group">
            <span>Next</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button onClick={handleSkip} className="w-full h-12 bg-transparent text-on-surface-variant font-mono text-sm py-3 rounded-xl hover:bg-surface-container transition-colors uppercase tracking-widest">
            Skip
          </button>
          
          <div className="flex justify-center gap-2 mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-outline-variant"></div>
            <div className="w-8 h-1.5 rounded-full bg-primary transition-all duration-500"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-outline-variant"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-outline-variant"></div>
          </div>
        </div>
      </div>
    </motion.main>
  );

  // ---------------------------------------------------------
  // STEP 2: Instant Communication (O-03)
  // ---------------------------------------------------------
  const renderStep2 = () => (
    <motion.main
      key="step2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 flex flex-col min-h-screen w-full items-center px-5 md:px-10"
    >
      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-xl">
        <div className="relative w-24 h-24 flex items-center justify-center mb-8 group">
          <div className="absolute -inset-2 border-l border-t border-primary/20 w-8 h-8"></div>
          <div className="absolute -bottom-2 -right-2 border-r border-b border-primary/20 w-8 h-8"></div>
          <div className="w-20 h-20 bg-white border border-outline-variant flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[48px] text-primary" data-icon="chat">chat</span>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="font-sans text-3xl md:text-4xl font-semibold text-primary tracking-tight">
              Instant Communication
          </h1>
          <p className="font-sans text-base text-on-surface-variant max-w-[280px] mx-auto leading-relaxed">
              Connect instantly via WhatsApp to coordinate material deliveries and project updates.
          </p>
        </div>

        <div className="relative w-full mt-8">
          <div className="w-full aspect-[4/3] bg-white border border-outline-variant rounded-xl shadow-xl overflow-hidden relative">
            <div className="w-full h-full bg-cover bg-center opacity-90" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmQ4qMl6E1rC_s7Hhp3dW1dAxpiW1jb08zIhcOXbvuYZJVWIgw1bg4MidC4-edjoo1ah8SD-vI8JOJXeBtC8Frn-Itln20pOjeOwsI3QETHioDQkj_h9PMidQgikL8lLm-OYlgBVKYYfZqEtg6jLs8lMiGpJxZMlefT_KktzgreB_t7uVWIh4wZwk0Rbq371BidB2A1yEaj_l0hVfSK65iGDIDqXg2dR8ecIzvgQR7FvdBQJhR0NEMVtJQ8GdBhf5kAFq7IdrVn5U')" }}></div>
            <div className="absolute bottom-4 right-4 bg-white border border-outline-variant p-2 rounded-lg shadow-lg flex items-center space-x-3 max-w-[80%]">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-primary">person</span>
              </div>
              <div className="flex-1">
                <div className="h-2 w-16 bg-surface-container-highest rounded mb-1"></div>
                <div className="h-2 w-24 bg-surface-container rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-xl pb-8 mt-auto">
        <div className="flex flex-col gap-4 w-full items-center">
          <button onClick={handleNext} className="w-full h-14 bg-primary text-on-primary font-mono text-sm py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] hover:shadow-xl flex items-center justify-center gap-2 group">
            <span>Next</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button onClick={handleSkip} className="w-full h-12 bg-transparent text-on-surface-variant font-mono text-sm py-3 rounded-xl hover:bg-surface-container transition-colors uppercase tracking-widest">
            Skip
          </button>
          
          <div className="flex justify-center gap-2 mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-outline-variant"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-outline-variant"></div>
            <div className="w-8 h-1.5 rounded-full bg-primary transition-all duration-500"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-outline-variant"></div>
          </div>
        </div>
      </div>
    </motion.main>
  );

  // ---------------------------------------------------------
  // STEP 3: Location Setup (O-04)
  // ---------------------------------------------------------
  const renderStep3 = () => (
    <motion.main
      key="step3"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 flex items-center justify-center min-h-screen w-full px-5 md:px-10"
    >
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-md rounded-[24px] p-8 md:p-12 shadow-architectural border border-outline-variant flex flex-col items-center text-center">
        
        <div className="relative mb-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="w-16 h-16 rounded-full border border-primary/10 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.7s' }}></div>
            <div className="w-16 h-16 rounded-full border border-primary/5 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
          </div>
          
          <div className="relative w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl rotate-3 transition-transform hover:rotate-0 duration-500">
            <span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h1 className="font-sans text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            Set Your Location
          </h1>
          <p className="font-sans text-base text-on-surface-variant max-w-sm mx-auto leading-relaxed">
            We use your location to surface the best pros and materials in your area.
          </p>
        </div>

        <div className="w-full space-y-4">
          <button 
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                setStep(4);
              }, 1500);
            }}
            disabled={loading}
            className="w-full h-[56px] bg-primary text-white font-mono text-sm rounded-xl hover:bg-on-primary-fixed-variant transition-all active:scale-[0.98] duration-200 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                Finding location...
              </>
            ) : (
              'Allow Location Access'
            )}
          </button>
          <button 
            disabled={loading}
            onClick={() => setStep(4)}
            className="w-full h-[56px] bg-white border border-outline-variant text-primary font-mono text-sm rounded-xl hover:bg-surface-container-high transition-all active:scale-[0.98] duration-200"
          >
            Enter Manually
          </button>
        </div>

        <div className="mt-12 flex items-center gap-4 w-full">
          <div className="h-px flex-1 bg-outline-variant"></div>
          <span className="font-mono text-[10px] font-bold text-on-tertiary-container uppercase tracking-widest">Precision Verified</span>
          <div className="h-px flex-1 bg-outline-variant"></div>
        </div>
      </div>
    </motion.main>
  );

  // ---------------------------------------------------------
  // STEP 4: Location Confirmation (O-05)
  // ---------------------------------------------------------
  const renderStep4 = () => (
    <motion.main
      key="step4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-5 md:px-10"
    >
      <div className="w-full max-w-lg bg-surface-container-lowest border border-outline-variant p-8 rounded-xl shadow-xl relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <p className="font-mono text-[12px] text-on-tertiary-container uppercase tracking-widest font-semibold">
              Location Confirmation
          </p>
        </div>
        
        <h1 className="font-sans text-2xl md:text-3xl font-semibold text-on-surface mb-2">
            Confirm Location
        </h1>
        
        <div className="mt-8 border-l-2 border-primary pl-4 py-2">
          <p className="font-sans text-4xl md:text-5xl text-primary leading-tight font-bold tracking-tight">
              Sector 18, Noida
          </p>
          <div className="mt-2 flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span className="font-mono text-sm font-medium">Uttar Pradesh, India</span>
          </div>
        </div>

        <div className="mt-8 w-full h-40 rounded-lg overflow-hidden border border-outline-variant relative">
          <div className="absolute inset-0 bg-surface-container"></div>
          <img className="w-full h-full object-cover grayscale opacity-70" alt="Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFHXjPodCg8aMqWv1e9Szwgpi9Lp0nPQ4vRGuoQ9eYsB12lkTAriVSbD56TCEzLDYUoqHtb_me5Sp9NG3c1v-4xZ11U_6crvc7QOneQfg9Ct9enWdBNGFhq2cZYGfkGmSKrJsNssNAgKcKdLipjdVNaK493SqJpXb7Nzido592JzEOoCcBEWzHLTDInwoAx7PFtc4ERzU9xHIdt7GEcRXLMNLpaICgXCsUt6sgrTV3xhlrzFpDjsHBMkAuceopqDRs2IcvkslkmJQ" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 animate-pulse">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>my_location</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-outline-variant">
          <p className="font-sans text-lg text-on-surface-variant">
              Is this correct?
          </p>
        </div>
      </div>

      <div className="w-full max-w-lg pb-8 mt-8">
        <div className="flex flex-col gap-4">
          <button onClick={handleFinish} className="w-full h-12 bg-primary text-on-primary font-mono text-sm rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
            <span>Yes, Continue</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
          <button onClick={() => setStep(3)} className="w-full h-12 bg-surface-container-lowest border border-outline-variant text-on-surface font-mono text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-base">edit_location</span>
            <span>Change</span>
          </button>
        </div>
      </div>
    </motion.main>
  );

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Blueprint Grids (Exact replica of Stitch) */}
      <div className="fixed inset-0 z-0 blueprint-grid opacity-60"></div>
      <div className="fixed inset-0 z-0 blueprint-grid-sub opacity-40"></div>

      <AnimatePresence mode="wait">
        {step === 0 && renderStep0()}
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
      </AnimatePresence>
    </div>
  );
}
